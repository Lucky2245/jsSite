function search(){
  var s = document.getElementById("search").value;
  window.location.assign("search?s=" + s);
}
