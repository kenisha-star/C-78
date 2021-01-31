var images1 = [
  "KENI.jpg,BON.jpg,PAPA.jpg"
];
var i = 0;
function change() {
 if(i==9)
 {
   i=0;}
  document.getElementById("i1").src = images1[i];
  i++;
}
