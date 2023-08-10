package com.example.speechtotext.Controller;

import com.example.speechtotext.dto.LocationDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequiredArgsConstructor
public class LocationController {
    @GetMapping("/location")
    public String SearchLocation(){
        return "SearchLocation.html";
    }

    @GetMapping("/position/{detailAddr}")
    public String currentLocation(@PathVariable String detailAddr, Model model){
        model.addAttribute("current",detailAddr);
        return "main.html";
    }

//    @GetMapping("/position/{current}&{destination}")
//    public String destination(@PathVariable String destination, String current, Model model){
//        model.addAttribute("current", current);
//        model.addAttribute("destination",destination);
//        return "CallTaxi.html";
//    }

    @GetMapping("/position")
    public String BothPosition(@RequestParam String current, @RequestParam String destination, Model model){
        model.addAttribute("current", current);
        model.addAttribute("destination", destination);
        return "CallTaxi.html";
    }

    @PostMapping("/position")
    public String Position(@ModelAttribute LocationDTO locationDTO, Model model){
        if (!locationDTO.getCurrent().isEmpty()){
            model.addAttribute("current",locationDTO.getCurrent());
        } else if(!locationDTO.getCurrent().isEmpty() && !locationDTO.getDestination().isEmpty()){
            model.addAttribute("current",locationDTO.getCurrent());
            model.addAttribute("destination",locationDTO.getDestination());
        }
        return "main.html";
    }
}
