// face.js
var img = document.querySelector('.content img');

new BreathingHalftone( img, 
  {
  dotSize: 1/250,
  dotSizeThreshold: 0.01,
  initVelocity: 0.7,
  oscPeriod: 2,
  channels: [ 'lum' ],
  friction: 0.25,
  hoverDiameter: 0.4,
  hoverForce: 0.004,
  activeDiameter: -0.4,
  activeForce: 0.004}
);
