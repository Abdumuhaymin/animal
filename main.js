///////////////////student///////////////////
// let a = prompt("First name");
// let b = prompt("Second name");
// let c = prompt("Your age");
// let d = prompt("Your height");
// let e = prompt("Your weight");
// function Oquvchi(ism, sur, yosh, boy, vazin) {
//   this.name = ism;
//   this.surname = sur;
//   this.age = yosh;
//   this.height = boy;
//   this.weight = vazin;
//   this.show = function () {
//     console.log(this.name, this.surname, this.age, this.height, this.weight);
//   };
// }
// let student = new Oquvchi(a, b, c, d, e);
// console.log(student);
//
//
//
//
//
//
//
///////////////////ANIMAL///////////////////
let a = prompt("animal's name");
let b = prompt("nik name");
let c = prompt("animal's color");
let d = prompt(" height");
let e = prompt(" weight");
function Animal(ism, nik, color, boy, vazin) {
  this.name = ism;
  this.surname = nik;
  this.age = color;
  this.height = boy;
  this.weight = vazin;
  this.show = function () {
    console.log(this.name, this.surname, this.age, this.height, this.weight);
  };
}
let hayvon = new Animal(a, b, c, d, e);
console.log(hayvon);
