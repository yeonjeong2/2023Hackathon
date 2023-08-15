package com.example.speechtotext.Service;

import com.example.speechtotext.dto.User;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;

@Service
public class RestTemplateService {

    //기사님에게 현위치, 목적지 정보를 넘겨준다.
    public User getPhone(User user){
        URI uri = UriComponentsBuilder.
                fromHttpUrl("http://localhost:8888")
                .path("/api/taxi/current/{current}/destination/{destination}")
                .encode()
                .build()
                .expand(user.getCurrent(),user.getDestination())
                .toUri();

        System.out.println(uri);

        User req = new User();
        req.setCurrent(user.getCurrent());
        req.setDestination(user.getDestination());

        RestTemplate restTemplate = new RestTemplate();

        ResponseEntity<User> response = restTemplate.postForEntity(uri,req, User.class);

        System.out.println(response.getStatusCode());
        System.out.println(response.getHeaders());
        System.out.println(response.getBody());

        return response.getBody();
    }
}
