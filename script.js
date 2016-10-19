// Camera position / rotation / perspective
camera_x = camera_y = -5000;
camera_z = 0;

camera_front.onclick = function(){
  camera_y += 100;
  update_camera();
}

camera_back.onclick = function(){
  camera_y -= 100;
  update_camera();
}

camera_right.onclick = function(){
  camera_x += 100;
  update_camera();
}

camera_left.onclick = function(){
  camera_x -= 100;
  update_camera();
}

camera_up.onclick = function(){
  camera_z += 100;
  update_camera();
}

camera_down.onclick = function(){
  camera_z -= 100;
  update_camera();
}

update_camera = function(){
  scene.style.transform = "translateX(" + 
}

perspective.onchange = perspective.oninput = function(){
  main.style.perspective = perspective.value + "px";
}