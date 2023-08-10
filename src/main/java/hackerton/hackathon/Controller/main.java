package hackerton.hackathon.Controller;

import hackerton.hackathon.Domain.UserDB;
import hackerton.hackathon.Repository.UserRepository;
import hackerton.hackathon.Service.TestCoolsms;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang.ObjectUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Random;

@Controller
@RequiredArgsConstructor
public class main {

    private final UserRepository userRepository;

    @RequestMapping("/")
    public String Main() {
        return "main";
    }

    @RequestMapping("/login")
    public String login() {
        return "login";
    }

    @PostMapping("/message")
    @Transactional
    public String testMessage(UserDB user, String phoneNumber, HttpServletRequest request) {
        Random rand = new Random();
        String numStr = "";
        for(int i = 0; i< 6; i++) {
            String ran = Integer.toString(rand.nextInt(10));
            numStr += ran;
        }

        TestCoolsms.certifiedPhoneNumber(phoneNumber, numStr);

        if(userRepository.findByUserName(phoneNumber) != null) {
            userRepository.deleteByUserName(phoneNumber);
        }

        user.setUserName(phoneNumber);
        user.setToken(numStr);

        userRepository.save(user);

        String referer = request.getHeader("Referer");
        return "redirect:" + referer;
    }

    @PostMapping("/messageCertificated")
    public String messageAuth(String messageNumber) {
        if(userRepository.findByToken(messageNumber) != null) {
            return "index";
        }
        else {
            return "main";
        }
    }
}
