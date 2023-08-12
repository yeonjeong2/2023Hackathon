package com.example.M1Z5_MAP.Controller;

import com.example.M1Z5_MAP.Service.DriverSseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.MediaType;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

@RestController
@RequestMapping("/driver")
public class DriverSseController {

    private final DriverSseService driverSseService;

    @Autowired
    public DriverSseController(DriverSseService driverSseService) {
        this.driverSseService = driverSseService;
    }

    @GetMapping(value = "/updates", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public SseEmitter sendUpdates() {
        return driverSseService.createEmitter();
    }

}