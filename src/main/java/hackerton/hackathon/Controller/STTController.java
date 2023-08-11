package hackerton.hackathon.Controller;

import hackerton.hackathon.Service.STTService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.IOException;

@RequiredArgsConstructor
@Controller
public class STTController{
    private final STTService sttService;

    @GetMapping("/speech/{current}")
    public String SpeechToText(@PathVariable String current, Model model) throws IOException, InterruptedException {
        String result = sttService.SpeechToText();
        if (result == null) {
            model.addAttribute("url","/speech");
            model.addAttribute("message","다시 검색해주세요!");
        }
        model.addAttribute("current", current);
        model.addAttribute("stt",result);
        return "SearchDestination.html";
    }
}

