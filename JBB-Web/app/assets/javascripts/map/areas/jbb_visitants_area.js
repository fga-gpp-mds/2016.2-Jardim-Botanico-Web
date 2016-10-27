function addJbbVisitantsAreaPolygon(){
    var jbbVisitantsAreaPolygonCoords = [
        //area do df
        // {lat: -15.504777, lng: -48.193033},
        // {lat: -15.504011, lng: -47.417881},
        // {lat: -16.049211, lng: -47.417881},
        // {lat: -16.049211, lng: -48.193033},

        //JBB visitants area
        {lat: -15.859791, lng: -47.830873},
        {lat: -15.859818, lng: -47.831145},
        {lat: -15.859982, lng: -47.830593},
        {lat: -15.860619, lng: -47.829125},
        {lat: -15.860968, lng: -47.829055},
        {lat: -15.860984, lng: -47.828670},
        {lat: -15.872754, lng: -47.824736},
        {lat: -15.873073, lng: -47.823763},
        {lat: -15.874894, lng: -47.823962},
        {lat: -15.875748, lng: -47.824011},
        {lat: -15.876222, lng: -47.824008},
        {lat: -15.878480, lng: -47.824008},
        {lat: -15.880079, lng: -47.823891},
        {lat: -15.882552, lng: -47.823529},
        {lat: -15.885512, lng: -47.822828},
        {lat: -15.890021, lng: -47.842255},
        {lat: -15.888076, lng: -47.843378},
        {lat: -15.887644, lng: -47.842828},
        {lat: -15.884598, lng: -47.843204},
        {lat: -15.882758, lng: -47.843512},
        {lat: -15.881932, lng: -47.843789},
        {lat: -15.881498, lng: -47.844141},
        {lat: -15.881005, lng: -47.844501},
        {lat: -15.879823, lng: -47.845663},
        {lat: -15.878414, lng: -47.846561},
        {lat: -15.875822, lng: -47.846626},
        {lat: -15.875096, lng: -47.847071},
        {lat: -15.873092, lng: -47.847382},
        {lat: -15.871827, lng: -47.848329},
        {lat: -15.870647, lng: -47.850109},
        {lat: -15.866386, lng: -47.842951}
    ];

    // Construct the polygon.
    var jbbVisitantsAreaPolygon = new google.maps.Polygon({
        paths: jbbVisitantsAreaPolygonCoords,
        strokeColor: '#03a678',
        strokeOpacity: 0.1,
        strokeWeight: 3,
        fillColor: '#03a678',
        fillOpacity: 0.3
    });
    // Add a listener for the click event.
    jbbVisitantsAreaPolygon.addListener('click', showPosition);

    infoWindow = new google.maps.InfoWindow;

    jbbVisitantsAreaPolygon.setMap(map);
}

var coordenadasLat = [];
var coordenadasLng = [];
var i=0;
var k=0;
var l=0;
var j=0;

function showPosition(event) {
    coordenadasLat[i++] = event.latLng.lat();
    coordenadasLng[j++] = event.latLng.lng();
    if (i > 150 || (coordenadasLng[i-1] == coordenadasLng[i-2] && coordenadasLat[i-1] == coordenadasLat[i-2])){
        for (j = 0; j < i; j++) {
            window.document.write("{lat: ",coordenadasLat[j], ",");
            window.document.write(" lng: ",coordenadasLng[j], "},<br>");
        }
    }
}