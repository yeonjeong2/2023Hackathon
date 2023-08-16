package hackerton.hackathon.Controller;


import hackerton.hackathon.Domain.DriverDB;
import hackerton.hackathon.Domain.LocationDB;
import hackerton.hackathon.Service.RestTemplateService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.xml.stream.Location;
import java.util.HashMap;

@Slf4j
@RestController
@RequiredArgsConstructor
@CrossOrigin(origins="*", allowedHeaders = "*")
public class ApiController {


//    @GetMapping("/api/hello")
//    public String test() {
//        return "Hello, world!";
//    }
//
    private final RestTemplateService restTemplateService;

    //손님 앱에서 기사님 앱으로 손님 정보 전달
    @PostMapping("/taxi/call")
    public LocationDB getPhone(@RequestBody LocationDB userResponse){
        System.out.println(userResponse);
        return restTemplateService.getPhone(userResponse);
    }

    //기사님 앱에서 현위치랑, 목적지를 받아옴
    @PostMapping("/api/taxi/client/name/{name}/phone/{phone}/carnumber/{CarNumber}/cartype/{CarType}")
    public ResponseEntity<HashMap<String,Object>> post(@RequestBody DriverDB driver, @PathVariable String name, @PathVariable String phone,
                                                       @PathVariable String CarNumber, @PathVariable String CarType){
        HashMap<String,Object> response = new HashMap<>();
        response.put("name", name);
        response.put("phone",phone);
        response.put("CarNumber",CarNumber);
        response.put("CarType",CarType);
        log.info("client request: {}", driver);

        return ResponseEntity.ok(response);
    }


}

//손닙 앱