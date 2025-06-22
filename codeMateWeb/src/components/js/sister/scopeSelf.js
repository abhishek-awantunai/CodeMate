var kkk = "sdfs";

var mycar = {
  color: "blue",
  logColor() {
    console.log(this); // mycar
    console.log(self); // window
    var sweety = this;
    console.log(sweety); // mycar
    console.log(sweety.color); // blue
    console.log(this.color); // blue
    console.log(self.color); // undefined

    (function () {
      console.log("IFFE : ", this); // undefined
      console.log("IFFE : ", sweety); // mycar
      console.log("IFFE : ", sweety.color); // blue
      console.log("IFFE : ", self); // window
      console.log("IFFE : ", self.color); // undefined
      console.log("IFFE : ", this.color); // error
    })();
  },
};

mycar.logColor();
// self always denotes to window