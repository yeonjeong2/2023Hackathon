package com.example.M1Z5_MAP.Controller;

import com.example.M1Z5_MAP.Service.GuestRideService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/guest")
public class GuestController {

    private final GuestRideService guestRideService;

    @Autowired
    public GuestController(GuestRideService guestRideService) {
        this.guestRideService = guestRideService;
    }

    @PostMapping("/update-ride-availability")
    public String updateRideAvailability(boolean available) {
        guestRideService.updateRideAvailability(available);
        return "Ride availability updated.";
    }
}
