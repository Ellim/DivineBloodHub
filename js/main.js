function init(){
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
			divid.innerHTML = "3w;open west;11ws2w2sws7w3swd<br /><span class='text-primary'>ue3n7ene2n2en10e;open east;4e</span>"
			break;
		case "Aldocar":
			var divid = document.getElementById("swalk");
			divid.innerHTML = ""
			divid.innerHTML = "3e;open east;4e4s2es2ed;open west;ws3dn;open down<br /><span class='text-primary'>s3un;open east;eu2wn2w4n3w;open west;4w</span>"
			break;
		case "Amongst the Clouds":
			var divid = document.getElementById("swalk");
			divid.innerHTML = ""
			divid.innerHTML = "6sws2w4se4us<br /><span class='text-primary'>n4dw4n2ene6n</span>"
			break;
		case "Amyshor Woods":
			var divid = document.getElementById("swalk");
			divid.innerHTML = ""
			divid.innerHTML = "3w;open west;11ws2w2sws10ws;SW<br /><span class='text-primary'>NE;n10ene2n2en10e;open east;4e</span>"
			break;
	}
}
