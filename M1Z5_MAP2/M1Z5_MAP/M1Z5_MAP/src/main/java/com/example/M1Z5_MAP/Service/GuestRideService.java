package com.example.M1Z5_MAP.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GuestRideService {

    private final GuestSseService guestSseService;

    @Autowired
    public GuestRideService(GuestSseService guestSseService) {
        this.guestSseService = guestSseService;
    }

    public void updateRideAvailability(boolean available) {
        // 승차 가능성을 업데이트하는 로직 (예: available 값에 따라 업데이트)
        // ...

        // 연결된 손님들에게 변경 사항 알림
        String message = available ? "승차 변경 사항이 발생했어요." : "승차 변경 사항이 종료됐습니다.";
        guestSseService.sendUpdateToGuests(message);
    }
}
