package hackerton.hackathon.Controller;

import hackerton.hackathon.Domain.LocationDB;
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
        return "index.html";
    }

    @PostMapping("/position")
    public String Position(@ModelAttribute LocationDB locationDB, Model model){
        if (!locationDB.getCurrent().isEmpty()){
            model.addAttribute("current",locationDB.getCurrent());
        } else if(!locationDB.getCurrent().isEmpty() && !locationDB.getDestination().isEmpty()){
            model.addAttribute("current",locationDB.getCurrent());
            model.addAttribute("destination",locationDB.getDestination());
        }
        return "index.html";
    }

    @GetMapping("/position")
    public String BothPosition(@RequestParam String current, @RequestParam String destination, Model model){
        model.addAttribute("current", current);
        model.addAttribute("destination", destination);
        return "CallTaxi.html";
    }
}
