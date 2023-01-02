function getRandom(n) {
  return parseInt(Math.random() * n);
}

function getRandomRange(min, max) {
  return min + parseInt(Math.random() * (max - min + 1));
}

function collisionCheck(me, you) {
  let result1 = (me.x + me.width >= you.x) && (me.y + me.height >= you.y);  //북서쪽
  let result2 = (me.x + me.width >= you.x) && (me.y <= you.height + you.y); //남서쪽
  let result3 = (me.x <= you.width + you.x) && (me.y + me.height >= you.y); //북동쪽
  let result4 = (me.x <= you.width + you.x) && (me.y <= you.height + you.y); //남동쪽

  return result1 && result2 && result3 && result4;
}

function getRadiansX(r, degrees, x) {
  let radians1 = degrees * (Math.PI / 180);
  let radians2 = radians1.toFixed(2);

  let positionX = r * Math.cos(radians2) + x;
  return positionX;
}

function getRadiansY(r, degrees, y) {
  let radians = degrees * (Math.PI / 180);

  let positionY = r * Math.sin(radians) + y;
  return positionY;
}
