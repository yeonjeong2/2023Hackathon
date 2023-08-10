import React, {useEffect, useState} from 'react';
 
const { naver } = window;
const NaverMapEx1 = () => {
    useEffect(() => {
        const container = document.getElementById("map"); // 지도를 표시할 div
 
        // let markerList = [];
        // const HOME_PATH = window.HOME_PATH || '.';
        const position = new naver.maps.LatLng(37.3749504, 126.632220);
        const mapOptions = {
            center: position,
            zoom: 17,
            minZoom: 6,
            zoomControl: true,
            zoomControlOptions: {
                position: naver.maps.Position.TOP_RIGHT,
            },
        };
 
        const map = new naver.maps.Map(container, mapOptions);
 
        const markerOptions = {
            position: position.destinationPoint(90, 15),
            map: map,
            icon: {
                url:'https://navermaps.github.io/maps.js/docs/img/example/ico_pin.jpg',
                //size: new naver.maps.Size(50, 52),
                origin: new naver.maps.Point(0, 0),
                anchor: new naver.maps.Point(25, 26)
            }
        };
 
        const marker = new naver.maps.Marker(markerOptions);
 
        console.log("loading navermap");
    },[]);
 
    return (
        <div>
            <div id="map" style={{width:'400px', height:'500px' }}>map</div>
        </div>
    );
};
 
export default NaverMapEx1;