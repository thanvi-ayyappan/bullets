function isTouching(opj1,obj2){
    if(obj2.x-opj1.x<obj2.width/2+opj1.width/2&&
      opj1.x-obj2.x<obj2.width/2+opj1.width/2&&
      obj2.y<opj1.y<obj2.width/2+opj1.width/2&&
      opj1.y-obj2.y<obj2.width/2+opj1.width/2){
  
     // fixedRect.shapeColor="red";
      //movingRect.shapeColor="red";
      return true;
    }
    else{
      //fixedRect.shapeColor="green";
      //movingRect.shapeColor="green";
      return false;
    }
  }
  
  function bounceOff(opj1,obj2){
    if(obj2.x-opj1.x<obj2.width/2+opj1.width/2&&
      opj1.x-obj2.x<obj2.width/2+opj1.width/2){
   opj1.velocityX=opj1.velocityX*(-1);
   obj2.velocityX=obj2.velocityX*(-1);
      }
      if(obj2.y-opj1.y<obj2.width/2+opj1/2&&
        opj1.y-obj2.y<obj2.width/2+opj1.width/2){
  obj2.velocityY=obj2.velocityY*(-1);
  opj1.velocityY=opj1.velocityY*(-1);
        }
    }
  