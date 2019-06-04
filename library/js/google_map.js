
function google_map() {
    var Y_point = 37.631668;		// Y 좌표
    var X_point = 127.077449;		// X 좌표
    var zoomLevel = 16;						// 지도의 확대 레벨 : 숫자가 클수록 확대됨
    var markerTitle = "과기대";			 // 현재 위치 마커에 마우스를 올렸을때 나타나는 정보
    var markerMaxWidth = 300;				// 마커를 클릭했을때 나타나는 말풍선의 최대 크기

    // 말풍선 내용

    var contentString = '<div>' +
        '<h2>과기대</h2>' +
        '<p>과기대는 WEB Agency & SI 분야에서 10년 이상의 풍부한 경험을 보유한<br />' +
        '전문 인력으로 구성된 E-Business 전문 기업입니다.</p>' +
        //'<a href="http://www.daegu.go.kr" target="_blank">http://www.daegu.go.kr</a>'+ //링크도 넣을 수 있음
        '</div>';

    var myLatlng = new google.maps.LatLng(Y_point, X_point);
    var mapOptions = {
        zoom: zoomLevel,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map(document.getElementById('map_view'), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: markerTitle
    });

    var infowindow = new google.maps.InfoWindow(
        {
            content: contentString,
            maxWidth: markerMaxWidth
        }
    );

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });

}