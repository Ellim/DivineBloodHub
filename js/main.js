function init(){
  document.getElementById("modaltest").onclick = function() {
    var divid = document.getElementById("speedwalkdiv");
    divid.innerHTML = ""
    divid.innerHTML = "7e4s2es2eds"
  }
  document.getElementById("abysswellbutton").onclick = function() {
    if ($('#abysswell').hasClass('hidden')) {
		$('#abysswell').removeClass('hidden');
	  }
	  if (!$('#abysswell').hasClass('hidden')) {
		$('#abysswell').addClass('hidden');
	  }
  }
}
window.onload=init;
