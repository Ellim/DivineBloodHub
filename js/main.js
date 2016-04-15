function init(){
  document.getElementById("modaltest").onclick = function() {
	var modtit = document.getElementById("mtitle")
	modtit.innerHTML = ""
	modtit.innerHTML = "Abyss"
    var divid2 = document.getElementById("speedwalkdiv")
    divid2.innerHTML = ""
    divid2.innerHTML = "3w;open west;11ws2w2sws7w3swd<br /><span class='text-primary'>ue3n7ene2n2en10e;open east;4e</span>"
  }
  $('.selectpicker').on('change', function(){
    var selected = $(this).find("option:selected").val();
    updateWell(selected);
  });
}
window.onload=init;

function updateWell(area) {
	
	switch(area) {
		case "Abyss":
			var divid = document.getElementById("swalk");
			divid.innerHTML = ""
			divid.innerHTML = "<h2>Abyss</h2><br />3w;open west;11ws2w2sws7w3swd<br /><span class='text-primary'>ue3n7ene2n2en10e;open east;4e</span>"
			break;
		case "Aldocar":
			var divid = document.getElementById("swalk");
			divid.innerHTML = ""
			divid.innerHTML = "<h2>Aldocar</h2><br />3e;open east;4e4s2es2ed;open west;ws3dn;open down<br /><span class='text-primary'>s3un;open east;eu2wn2w4n3w;open west;4w</span>"
			break;
	}
}

