package com.example.TaxiDriver.service;

import com.example.TaxiDriver.dto.TaxiDriverDto;
import com.example.TaxiDriver.entity.TaxiDriverEntity;
import com.example.TaxiDriver.repository.EmitterRepository;
import com.example.TaxiDriver.repository.TaxiDriverRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;

@Service
@RequiredArgsConstructor
public class NotificationService {
    //기본 타임아웃 설정
    private static final Long DEFAULT_TIMEOUT = 60L*1000*60;

    private final EmitterRepository emitterRepository;
    private final TaxiDriverRepository taxiDriverRepository;

    //클라이언트가 구독을 위해 호출하는 메서드
    //@param userId - 구독하는 클라이언트의 사용자 아이디
    //@return SseEmitter - 서버에서 보낸 이벤트 Emitter
    public SseEmitter subscribe(String userId){
        SseEmitter emitter = createEmitter(userId);

        subscribeToClient(userId,"subscribe!");
        return emitter;
    }

    private void subscribeToClient(String id,Object data) {
        SseEmitter emitter = emitterRepository.get(id);
        if (emitter!=null){
            try {
                emitter.send(SseEmitter.event().id(String.valueOf(id)).name("name").data(data));
            } catch (IOException exception) {
                emitterRepository.deleteById(id);
                emitter.completeWithError(exception);
            }
        }
    }

    //서버의 이벤트를 클라이언틓에게 보내는 메서드
    //다른 서비스 로직에서 이 메서드를 사용해 데이터를 Object event에 넣고 전송하면 된다.
    //@param userId - 메세지를 전송할 사용자의 아이디
    //@param event - 전송할 이벤트 객체
    public void notify(String phone){
        TaxiDriverEntity taxiDriverEntity =  taxiDriverRepository.findByPhone(phone);
        TaxiDriverDto taxiDriverDto = TaxiDriverDto.toDTO(taxiDriverEntity);
        sendToClient(phone,taxiDriverDto);
    }

    //클라이언트에게 데이터를 전송
    //@param id - 데이터를 받을 사용자의 아이디
    //@param data - 전송할 데이터
    private void sendToClient(String id, TaxiDriverDto data){
        SseEmitter emitter = emitterRepository.get(id);
        if (emitter!=null){
            try {
                emitter.send(SseEmitter.event().id(String.valueOf(id)).name("name").data(data.getName()));
                emitter.send(SseEmitter.event().id(String.valueOf(id)).name("phone").data(data.getPhone()));
                emitter.send(SseEmitter.event().id(String.valueOf(id)).name("CarNumber").data(data.getCarNumber()));
                emitter.send(SseEmitter.event().id(String.valueOf(id)).name("CarType").data(data.getCarType()));
            } catch (IOException exception) {
                emitterRepository.deleteById(id);
                emitter.completeWithError(exception);
            }
        }
    }

    //사용자 아이디를 기반으로 이벤트 Emitter 생성
    //@param id - 사용자 아이디
    //@return SseEmitter - 생성된 이벤트 Emitter
    private SseEmitter createEmitter(String id){
        SseEmitter emitter = new SseEmitter(DEFAULT_TIMEOUT);
        emitterRepository.save(id,emitter);

        emitter.onCompletion(()-> emitterRepository.deleteById(id));
        emitter.onTimeout(()-> emitterRepository.deleteById(id));

        return emitter;
    }
}
