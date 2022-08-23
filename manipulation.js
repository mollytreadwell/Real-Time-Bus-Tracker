const busStops = [
  [-71.078778729, 42.337969],
  [-71.07652, 42.33624],
  [-71.10691621, 42.36744915],
  [-71.07678, 42.3364],
  [-71.09254712, 42.35725885],
  [-71.07551507, 42.33537061]
];



let counter = 0;

function move() {
 setTimeout(() => {
    if (counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++
    move();
 }, 1000)
};


  
move();


