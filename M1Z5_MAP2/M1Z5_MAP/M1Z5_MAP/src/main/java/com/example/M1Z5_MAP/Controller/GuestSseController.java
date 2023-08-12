package com.example.M1Z5_MAP.Controller;
import com.example.M1Z5_MAP.Service.GuestSseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

@RestController
@RequestMapping("/guest")
public class GuestSseController {

    private final GuestSseService guestSseService;

    @Autowired
    public GuestSseController(GuestSseService guestSseService) {
        this.guestSseService = guestSseService;
    }

    @GetMapping(value = "/updates", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public SseEmitter sendUpdates() {
        return guestSseService.createEmitter();
    }
}