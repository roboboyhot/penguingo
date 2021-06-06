function tell(){
alert("Penguin Go Has Successfully Opened! Opening Recent File When You Left")
}
function newPage() {
  var temp = document.getElementsByTagName("template")[0];
  var clon = temp.content.cloneNode(true);
  document.body.appendChild(clon);
  window.scrollTo(0,document.body.scrollHeight);
}
function toTop() {
  window.scrollTo(0,0);
}
function align() {
  document.getElementById("title").style.textAlign = "left";
}
area.value = localStorage.getItem('area');
area.oninput = () => {
  localStorage.setItem('area', area.value)
};

var content = area.value
export { content };

