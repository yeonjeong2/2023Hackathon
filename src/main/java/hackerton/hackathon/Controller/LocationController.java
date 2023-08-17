package hackerton.hackathon.Controller;

import hackerton.hackathon.Domain.LocationDB;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/location")
@RequiredArgsConstructor
public class LocationController {

    @GetMapping("/search")
    public String searchLocation() {
        return "SearchLocation.html";
    }

    @GetMapping("/current/{detailAddr}")
    public ResponseEntity<Map<String, String>> currentLocation(@PathVariable String detailAddr) {
        Map<String, String> response = new HashMap<>();
        response.put("current", detailAddr);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/current")
    public ResponseEntity<Map<String, String>> updateCurrentLocation(@ModelAttribute LocationDB locationDB) {
        Map<String, String> response = new HashMap<>();
        if (!locationDB.getCurrent().isEmpty()) {
            response.put("current", locationDB.getCurrent());
        }
        return ResponseEntity.ok(response);
    }

    @GetMapping("/position")
    public ResponseEntity<Map<String, String>> showBothPositions(
            @RequestParam String current,
            @RequestParam String destination) {
        Map<String, String> response = new HashMap<>();
        response.put("current", current);
        response.put("destination", destination);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/write/{current}")
    public String writeSearchLocation(@PathVariable String current) {
        System.out.println("write");
        // Return a response suitable for your use case
        return "write.html";
    }
}
