function addAmphitheaterMarker(infowindow){
    //set tea house info, will be used at infowindow
    var amphitheaterInfowindowContentString =
        '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Anfiteatro</h1>'+
        '<div id="bodyContent">'+
        '<p>O <b>Anfiteatro</b>, localizado junto à Alameda das Nações ' +
        'e dos Estados, foi criado para '+
        'a realização de grandes eventos.'+
        '<p>Leia mais em: <a href="/jbb_spaces/amphitheater">'+
        'Anfiteatro</a> '+
        '</div>'+
        '</div>';


    //set the position in latitude and longitude of the marker
    var amphitheaterLatLng = {lat: -15.868693, lng: -47.840186};

    //add the marker at the map in the position previously defined
    var amphitheaterMarker = new google.maps.Marker({
        position: amphitheaterLatLng,
        map: map,
        title: 'Anfiteatro'
    });

    //add a listener to verify if the marker is clicked
    amphitheaterMarker.addListener('click', function() {
        infowindow.open(map, amphitheaterMarker);
    });

    //set the marker on map
    amphitheaterMarker.setMap(map);

    //set the infowindow with japanese garden info
    infowindow.setContent(amphitheaterInfowindowContentString);
    infowindow.setPosition(amphitheaterLatLng);
}
