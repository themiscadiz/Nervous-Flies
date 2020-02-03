  class walker {

    constructor() {
      this.xOff1 = 0;
      this.xOff2 = random(10000);
      this.brightness = 0;
      this.r = 12;
      this.size = 24;

      this.posV = createVector(width / 2, height / 2);
    }

    move() {
      this.posV.x = map(noise(this.xOff1), 0, 1, 0, width);
      this.posV.y = map(noise(this.xOff2), 0, 1, 0, height);

      this.xOff1 += 0.01;
      this.xOff2 += 0.01;
    }

    closeTo(other) {
      let d = dist(this.posV.x, this.posV.y, other.posV.x, other.posV.y);

      return (d < this.r + other.r);
    }

    changeColor(bright) {
      this.brightness = bright;
    }

    circleDescrip() {
      noStroke();
      fill(this.brightness, 45, 100);
      ellipse(this.posV.x, this.posV.y, this.size, this.size);
    }
  }