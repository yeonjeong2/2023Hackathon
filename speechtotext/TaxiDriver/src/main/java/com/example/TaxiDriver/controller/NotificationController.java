package com.example.TaxiDriver.controller;


import com.example.TaxiDriver.service.NotificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

@RestController
@RequiredArgsConstructor
public class NotificationController {
    private final NotificationService notificationService;

    @GetMapping(value="/Client/subscribe/{id}")
    public SseEmitter subscribe(@PathVariable String id){
        return notificationService.subscribe(id);
    }

    //임시로 서버에서 클라이언트로 알림을 주기 위한 메서드
    @PostMapping("/Taxi/send-data/{id}")
    public void sendData(@PathVariable String id){
        notificationService.notify(id);
    }

}
