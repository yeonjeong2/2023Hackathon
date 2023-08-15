package com.example.TaxiDriver.controller;

import com.example.TaxiDriver.dto.TaxiDriverDto;
import com.example.TaxiDriver.repository.TaxiDriverRepository;
import com.example.TaxiDriver.service.ApiService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.TaxiDriver.dto.User; // User 클래스의 패키지 경로를 정확하게 수정해야 합니다.

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class ServerApiController {

    private final TaxiDriverRepository taxiDriverRepository;
    //손님 앱에서 현위치랑, 목적지를 받아옴
    @PostMapping("/taxi/current/{current}/destination/{destination}")
    public ResponseEntity post(@RequestBody User user, @PathVariable String current, @PathVariable String destination){
        log.info("current: {}", current);
        log.info("destination: {}", destination);
        log.info("client request: {}", user);

        return ResponseEntity.ok(user);
    }

    private final ApiService apiService;

    //손님에게 보내는 기사님 정보
    @PostMapping("/client")
    public TaxiDriverDto getTaxiDriver(@ModelAttribute TaxiDriverDto taxiDriverDto){
        TaxiDriverDto taxi = TaxiDriverDto.toDTO(taxiDriverRepository.findByPhone(taxiDriverDto.getPhone()));
        return apiService.post(taxi);
    }

}
