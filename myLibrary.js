function isTouching(object1,object2) {
if (object1.x-object2.x<(object2.width+object1.width)/2) {
    
    var deformation=0.5*bulletWeight*bulletSpeed*bulletSpeed/(thickness*thickness*thickness);
    if (deformation>180){
      object2.shapeColor=color(255,0,0);
    }
    if (deformation<180&&deformation>100){
      object2.shapeColor=color(230,230,0);
    }
    if (deformation<100){
      object2.shapeColor=color(0,255,0);
    }
  }
}