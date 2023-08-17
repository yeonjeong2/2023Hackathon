package hackerton.hackathon.Controller;

import hackerton.hackathon.Domain.UserDB;
import hackerton.hackathon.Repository.UserRepository;
import hackerton.hackathon.Service.TestCoolsms;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

@Controller
@RequiredArgsConstructor
public class main {

    private final UserRepository userRepository;

    @RequestMapping("/")
    public String main() {
        return "main";
    }

    @RequestMapping("/login")
    public String login() {
        return "login";
    }

    @PostMapping("/message")
    @Transactional
    @ResponseBody
    public Map<String, Object> testMessage(UserDB user, String phoneNumber, HttpServletRequest request) {
        Map<String, Object> response = new HashMap<>();

        Random rand = new Random();
        StringBuilder numStr = new StringBuilder();
        for (int i = 0; i < 6; i++) {
            String ran = Integer.toString(rand.nextInt(10));
            numStr.append(ran);
        }

        TestCoolsms.certifiedPhoneNumber(phoneNumber, numStr.toString());

        if (userRepository.findByUserName(phoneNumber) != null) {
            userRepository.deleteByUserName(phoneNumber);
        }

        user.setUserName(phoneNumber);
        user.setToken(numStr.toString());

        userRepository.save(user);

        response.put("message", "Message sent successfully.");
        response.put("token", numStr.toString());
        return response;
    }

    @PostMapping("/messageCertificated")
    @ResponseBody
    public Map<String, Object> messageAuth(String messageNumber) {
        Map<String, Object> response = new HashMap<>();

        if (userRepository.findByToken(messageNumber) != null) {
            response.put("result", "success");
        } else {
            response.put("result", "failure");
        }

        return response;
    }
}
