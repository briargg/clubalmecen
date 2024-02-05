var request = {
    location: map.getCenter(),
    radius: '500', // Radio en metros para buscar lugares cercanos
    type: ['store'] // Puedes cambiar 'store' por 'supermarket' u otros tipos de lugares que desees buscar
};

var service = new google.maps.places.PlacesService(map);
service.nearbySearch(request, function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
        }
    }
});

function createMarker(place) {
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });

    var infowindow = new google.maps.InfoWindow({
        content: place.name // Puedes personalizar la información que se muestra en el marcador
    });

    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}
