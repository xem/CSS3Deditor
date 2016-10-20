// Camera position / rotation / perspective
camera_x = camera_y = 0;
camera_z = 0;
camera_angle_z = 0;

camera_front.onclick = function(){
  camera_y -= 100;
  update_camera();
}

camera_back.onclick = function(){
  camera_y += 100;
  update_camera();
}

camera_right.onclick = function(){
  camera_x -= 100;
  update_camera();
}

camera_left.onclick = function(){
  camera_x += 100;
  update_camera();
}

camera_up.onclick = function(){
  camera_z -= 100;
  update_camera();
}

camera_down.onclick = function(){
  camera_z += 100;
  update_camera();
}

camera_cw.onclick = function(){
  camera_angle_z -= Math.PI / 4;
  update_camera();
}

camera_ccw.onclick = function(){
  camera_angle_z += Math.PI / 4;
  update_camera();
}

update_camera = function(){
  scene.style.transform = "translateX(" + camera_x + "px) translateY(" + camera_y + "px) translateZ(" + camera_z + "px) rotateZ(" + camera_angle_z + "rad)";
}

onload = perspective.onchange = perspective.oninput = function(){
  if(perspective.value < 150) {
    main.style.perspective = "100000px";
  }
  else {
    main.style.perspective = (5400 - perspective.value) + "px";
  }
}