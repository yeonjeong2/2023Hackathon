import React, { useEffect, useState } from "react";
import DepartureLocation from "./DepartureLocation";
const { kakao } = window;

export default function Map({ onDetailAddrChange }) {
    var markers = [];
    let presentPosition;

    useEffect(() => {
        var container = document.getElementById('map');
        var options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 2
        };

        var geocoder = new kakao.maps.services.Geocoder();

        // HTML5의 geolocation으로 사용할 수 있는지 확인합니다
        if (navigator.geolocation) {

            // GeoLocation을 이용해서 접속 위치를 얻어옵니다
            navigator.geolocation.getCurrentPosition(function (position) {

                var lat = position.coords.latitude, // 위도
                    lon = position.coords.longitude; // 경도

                var locPosition = new kakao.maps.LatLng(lat, lon) // geolocation으로 얻어온 좌표
                //presentPosition = locPosition;

                //현위치의 위도와 경도를 통해 주소를 가져옵니다.
                searchDetailAddrFromCoords(locPosition, function (result, status) {
                    if (status === kakao.maps.services.Status.OK) {
                        //만약 도로명 주소가 있으면 도로명 주소, 없으면 지번 주소
                        var detailAddr = !!result[0].road_address ? result[0].road_address.address_name :
                            result[0].address.address_name;

                        //바로 주소를 가지고 다른 주소로 옮겨간다.
                        onDetailAddrChange(detailAddr);
                    }
                });


                map.setCenter(locPosition);

                // 마커가 표시될 위치입니다 
                var markerPosition = locPosition;

                // 마커를 생성합니다
                var marker = new kakao.maps.Marker({
                    position: markerPosition
                });

                // 마커가 지도 위에 표시되도록 설정합니다
                marker.setMap(map);

                // 클릭으로 마커 위치 이동시키기 -> 현재 안됨
                kakao.maps.event.addListener(map, 'click', function (mouseEvent) {

                    // 클릭한 위도, 경도 정보를 가져옵니다 
                    var latlng = mouseEvent.latLng;

                    // 마커 위치를 클릭한 위치로 옮깁니다
                    marker.setPosition(latlng);
                })
            })
        } else { // HTML5의 GeoLocation을 사용할 수 없을때
            var locPosition = new kakao.maps.LatLng(37.566826, 126.9786567)
            alert('현재 위치를 찾을 수 없습니다!');
        }

        function searchDetailAddrFromCoords(coords, callback) {
            // 좌표로 법정동 상세 주소 정보를 요청합니다
            geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
        }

        var map = new kakao.maps.Map(container, options); // 지도를 생성합니다    
    }, [])

    return (
        <>
            <div id="map" style={{ width: '400px', height: '500px' }}></div>
        </>
    )
}
