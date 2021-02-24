var images1 = ["51KNpAKei-L.jpg",
"PAPA.jpg",
"BON.jpg"
];
var i = 0;
function change1() {
 if(i==3)
 {
   i=0;}
  document.getElementById("i1").src = images1[i];
  i++;
}
