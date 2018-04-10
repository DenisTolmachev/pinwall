function initMap() {
    var uluru = {lat: 47.864079, lng: 35.014873};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: {lat: 47.864079, lng: 35.011595},
        map: map,
        title: "Тестовое окно пица сайта",
    });
    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Тестовое окно пица сайта</h1>'+
        '<div id="bodyContent">'+
        '<p>Покупайте нашу пицу. Покупайте нашу пицу. Покупайте нашу пицу. Покупайте нашу пицу. Покупайте нашу пицу. Покупайте нашу пицу. Покупайте нашу пицу. </p>'+
        '<p><b>Веб-сайт:</b> <a href="http://pinwall/" target="_blank">Pinwall</a>'+
        '</p>'+
        '</div>'+
        '</div>';

    // Создаем информационное окно
    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 400
    });

    // Создаем прослушивание, по клику на маркер - открыть инфо-окно infowindow
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}