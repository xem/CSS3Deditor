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

// New plane
plane_auto_id = 0;
current_plane = null
current_plane_width = 0;
current_plane_height = 0;
current_plane_posX = 0;
current_plane_posY = 0;
current_plane_posZ = 0;
current_plane_rotX = 0;
current_plane_rotY = 0;
current_plane_rotZ = 0;

plane.onclick = function(){
  scene.innerHTML += "<div id=plane" + plane_auto_id + " class='plane selected'>";
  id.value = "plane" + plane_auto_id;
  current_plane = top["plane" + plane_auto_id];
  current_plane_width = 100;
  w.value = current_plane_width;
  current_plane.style.width = current_plane_width + "px";
  current_plane_height = 100;
  h.value = current_plane_height;
  current_plane.style.height = current_plane_height + "px";
  current_plane.style.background = "url(tileset.png) no-repeat";
  current_plane.style.backgroundSize = "auto 100px";
}


// New sprite
sprite_auto_id = 0;
current_sprite = null
current_sprite_width = 0;
current_sprite_height = 0;
current_sprite_posX = 0;
current_sprite_posY = 0;
current_sprite_posZ = 0;
current_sprite_rotX = 0;
current_sprite_rotY = 0;
current_sprite_rotZ = 0;

sprite.onclick = function(){
  scene.innerHTML += "<div id=sprite" + sprite_auto_id + " class='sprite selected'>";
  id.value = "sprite" + sprite_auto_id;
  current_sprite = top["sprite" + sprite_auto_id];
  sprites.push(current_sprite);
  current_sprite_width = 100;
  w.value = current_sprite_width;
  current_sprite.style.width = current_sprite_width + "px";
  current_sprite_height = 100;
  h.value = current_sprite_height;
  current_sprite.style.height = current_sprite_height + "px";
  current_sprite.style.background = "url(tileset.png) no-repeat";
  current_sprite.style.backgroundSize = "auto 100px";
  rotX.style.display = "none";
  rotY.style.display = "none";
  rotX.disabled = true;
  rotY.disabled = true;
  edited_object = "sprite";
}


// Edit object
edited_object = null;

// Edit width
w.oninput = w.onchange = function(){
  
  // Edit a plane
  if(edited_object == "plane"){
    current_plane_width = w.value;
    current_plane.style.width = current_plane_width + "px";
    current_plane.style.backgroundSize = "auto " + Math.max(w.value, h.value) + "px";
  }
  
  // Edit a sprite
  if(edited_object == "sprite"){
    current_sprite_width = w.value;
    current_sprite.style.width = current_sprite_width + "px";
    current_sprite.style.backgroundSize = "auto " + Math.max(w.value, h.value) + "px";
  }
}

// Edit height
h.oninput = h.onchange = function(){
  
  // Edit a plane
  if(edited_object == "plane"){
    current_plane_height = h.value;
    current_plane.style.height = current_plane_height + "px";
    current_plane.style.backgroundSize = "auto " + Math.max(w.value, h.value) + "px";
  }
  
  // Edit a sprite
  if(edited_object == "sprite"){
    current_sprite_height = h.value;
    current_sprite.style.height = current_sprite_height + "px";
    current_sprite.style.backgroundSize = "auto " + Math.max(w.value, h.value) + "px";
  }
}

// Edit position and rotation
posX.onchange = posX.oninput =
posY.onchange = posY.oninput =
posZ.onchange = posZ.oninput =
rotX.onchange = rotX.oninput =
rotY.onchange = rotY.oninput =
rotZ.onchange = rotZ.oninput = function(){
  if(edited_object == "plane"){
    current_plane.style.transform = "translateX(" + posX.value + "px) translateY(" + posY.value + "px)translateZ(" + posZ.value + "px) rotateX(" + rotX.value + "rad) rotateY(" + rotY.value + "rad) rotateZ(" + rotZ.value + "rad)";
  }
}

// Rotate sprites at each frame
sprites = [];
setInterval(function(){
  for(i in sprites){
    sprites[i].style.transform = "translateX(" + posX.value + "px) translateY(" + posY.value + "px)translateZ(" + posZ.value + "px) rotateX(" + (Math.PI / 2) + "rad) rotateY(" + (-camera_angle_z) + "rad) rotateZ(" + rotZ.value + "rad)";
  }
},33);