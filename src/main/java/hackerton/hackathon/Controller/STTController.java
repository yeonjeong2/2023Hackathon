package hackerton.hackathon.Controller;

import hackerton.hackathon.Service.STTService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.IOException;

@RequiredArgsConstructor
@Controller
public class STTController{
    private final STTService sttService;

    @RequestMapping("/")
    public String Home(){
        return "home.html";
    }

    @RequestMapping("/speech")
    public String SpeechToText(Model model) throws IOException, InterruptedException {
        String result = sttService.SpeechToText();
        if (result == null) {
            model.addAttribute("url","/speech");
            model.addAttribute("message","다시 검색해주세요!");
        }
        model.addAttribute("stt",result);
        return "index.html";
    }
}

