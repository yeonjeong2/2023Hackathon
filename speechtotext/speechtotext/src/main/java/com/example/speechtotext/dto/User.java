package com.example.speechtotext.dto;

import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class User {
    //손님의 정보
//    String phone;
    //전화번호의 경우 로그인 제가 아직 로그인 구현을 하지 않아서 주석으로 설정,,
    String current;
    String destination;

}
