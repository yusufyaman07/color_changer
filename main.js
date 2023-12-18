// Controle
//console.log(`Hi Js,I am Yusuf YAMAN`)
var index = 0;

function changeColor() {
  var colors = [
    "red",
    "yellow",
    "green",
    "black",
    "white",
    "orange",
    "blue",
    "gray",
    "purple",
    "pink",
  ];

  document.getElementsByTagName("body")[0].style.background = colors[index++];
  if(index >colors.length -1)
  index=0
}
