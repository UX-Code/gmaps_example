var map = new GMaps({
   el: '#map',
  lat: 6.255806,
  lng: -75.574377
});

map.addMarker({
    lat:  6.257043,
    lng:  -75.583562,
    title: 'La Colmena Express',
    click: function(e){
      alert('Tel: 4488123');
    }
});

map.addMarker({
    lat:  6.254227,
    lng:   -75.580215,
    title: 'Exito de Colombia',
    infoWindow: {
      content: '<img src="https://goo.gl/GQrWWt" width="100" /> <p>Este es el exito de colombia</p>'
    }
});

map.drawRoute({
  origin: [6.254227, -75.580215],
  destination: [6.257043, -75.583562],
  travelMode: 'driving',
  strokeColor:'#ff0000',
  strokeOpacity: 0.6,
  strokeWeight: 5
});

GMaps.geolocate({
  success:function(position){
    map.setCenter(position.coords.latitude, position.coords.longitude);
    map.addMarker({
        lat:  position.coords.latitude,
        lng:   position.coords.longitude,
        title: 'Exito de Colombia',
        infoWindow: {
          content: '<img src="https://goo.gl/GQrWWt" width="100" /> <p>Este es el exito de colombia</p>'
        }
    });
    map.drawRoute({
      origin: [position.coords.latitude, position.coords.longitude],
      destination: [6.257043, -75.583562],
      travelMode: 'driving',
      strokeColor:'#ff0000',
      strokeOpacity: 0.6,
      strokeWeight: 5
    });
  },
  error: function(error){
    alert("Fuck!: "+ error.message);
  },
  not_supported: function(){
    alert("En serio esta usando ese navegador? Enserio Fredy?");
  },
  always: function(){
    alert("arranque!");
  }
})
