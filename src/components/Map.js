import React, { useEffect } from "react";
import SetArrivalLocation from "./SetArrivalLocation";
const { kakao } = window;

export default function Map() {
    var markers = [];
    let presentPosition;

    useEffect(() => {
        var container = document.getElementById('map');
        var options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 1
        };

        // HTML5의 geolocation으로 사용할 수 있는지 확인합니다
        if (navigator.geolocation) {

            // GeoLocation을 이용해서 접속 위치를 얻어옵니다
            navigator.geolocation.getCurrentPosition(function (position) {

                var lat = position.coords.latitude, // 위도
                    lon = position.coords.longitude; // 경도

                var locPosition = new kakao.maps.LatLng(lat, lon) // geolocation으로 얻어온 좌표
                presentPosition = locPosition;

                map.setCenter(locPosition);
                
                // 마커가 표시될 위치입니다 
                var markerPosition  = locPosition; 

                // 마커를 생성합니다
                var marker = new kakao.maps.Marker({
                    position: markerPosition
                });

                // 마커가 지도 위에 표시되도록 설정합니다
                marker.setMap(map);

                // 클릭으로 마커 위치 이동시키기 -> 현재 안됨
                kakao.maps.event.addListener(map, 'click', function(mouseEvent) {        
    
                    // 클릭한 위도, 경도 정보를 가져옵니다 
                    var latlng = mouseEvent.latLng; 
                    
                    // 마커 위치를 클릭한 위치로 옮깁니다
                    marker.setPosition(latlng);     
                })
            })
        }

        else { // HTML5의 GeoLocation을 사용할 수 없을때

            var locPosition = new kakao.maps.LatLng(37.566826, 126.9786567)
            alert('현재 위치를 찾을 수 없습니다!');
        }

        var map = new kakao.maps.Map(container, options); // 지도를 생성합니다    
    }, [])
    
    return (
        <>
        <div id="map" style={{width:'400px', height:'500px' }}></div>
        {/* <SetArrivalLocation locPosition={presentPosition} /> */}
        </>
    )
}

