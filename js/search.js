function search(){
  var search document.getElementById("search").value;
  window.location.assign("search?s=" + search);
}
