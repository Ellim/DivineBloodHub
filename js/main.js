function init(){
  document.getElementById("modaltest").onclick = function() {
	var modtit = document.getElementById("mtitle")
	modtit.innerHTML = ""
	modtit.innerHTML = "Abyss"
    var divid = document.getElementById("speedwalkdiv")
    divid.innerHTML = ""
    divid.innerHTML = "3w;open west;11ws2w2sws7w3swd<br /><span class='text-primary'>ue3n7ene2n2en10e;open east;4e</span>"
  }
  $('.selectpicker').on('change', function(){
    var selected = $(this).find("option:selected").val();
    var swdiv = document.getElementById("swalk")
    swdiv.innerHTML = ""
    swdiv.innerHTML = selected
  });
}
window.onload=init;
