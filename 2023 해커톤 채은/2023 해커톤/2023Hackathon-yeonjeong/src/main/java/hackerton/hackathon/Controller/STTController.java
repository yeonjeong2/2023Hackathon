package hackerton.hackathon.Controller;

import hackerton.hackathon.Service.STTService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@RequiredArgsConstructor
@Controller
public class STTController {
    private final STTService sttService;

    @GetMapping("/speech/{current}")
    @ResponseBody
    public ResponseEntity<Map<String, String>> speechToText(@PathVariable String current) throws IOException, InterruptedException {
        Map<String, String> response = new HashMap<>();
        String result = sttService.speechToText();

        if (result == null) {
            response.put("url", "/speech");
            response.put("message", "Please search again!");
        } else {
            response.put("stt", result);
            response.put("current", current);
        }

        return ResponseEntity.ok(response);
    }
}


