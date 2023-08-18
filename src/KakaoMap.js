// KakaoMapHelpers.js

const { kakao } = window;

export async function getDetailAddressFromCoords(x, y) {
    return new Promise((resolve, reject) => {
        const geocoder = new kakao.maps.services.Geocoder();
        geocoder.coord2Address(y, x, (result, status) => {
            if (status === kakao.maps.services.Status.OK) {
                const detailAddr = result[0].road_address?.address_name || result[0].address?.address_name || "주소를 찾을 수 없습니다.";
                resolve(detailAddr);
            } else {
                reject(new Error("Failed to fetch detail address."));
            }
        });
    });
}