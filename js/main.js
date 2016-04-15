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
		case "Ancient Fens":
			var divid = document.getElementById("swalk");
			divid.innerHTML = ""
			divid.innerHTML = "<span class='text-success'>s2e2s6wnws</span><br /><span class='text-primary'>nes6e2n2wn</span>"
			break;
		case "Realm of Arachnos":
			var divid = document.getElementById("swalk");
			divid.innerHTML = ""
			divid.innerHTML = "3w;open west;11ws2wnwuw<br /><span class='text-primary'>edes2en10e;open east;4e</span>"
			break;
		case "Arcadia":
			var divid = document.getElementById("swalk");
			divid.innerHTML = ""
			divid.innerHTML = "<span class='text-success'>3e;open east;15e;open east;12e;open east;9e3s2e2s2es3e2n2enen13e;open east;e</span><br /><span class='text-primary'>open west;14wsws2w2s3wn3wn2w2n3w3n7w;open west;12w;open west;15w;open west;4w</span>"
			break;
		case "Astral Planes":
			var divid = document.getElementById("swalk");
			divid.innerHTML = ""
			divid.innerHTML = "<span class='text-success'>n3un6un</span><br /><span class='text-primary'>s6ds3ds</span>"
			break;
		case "Augdrsil":
			var divid = document.getElementById("swalk");
			divid.innerHTML = ""
			divid.innerHTML = "3e;open east;4e4s2es2ed3ne3sesd<br /><span class='text-primary'>unw3nw3su2wn2w4n3w;open west;4w</span>"
			break;
		case "Averni Farmlands":
			var divid = document.getElementById("swalk");
			divid.innerHTML = ""
			divid.innerHTML = "3w;open west;11ws2w2sws10ws;SW;2sw3s4w3s6w5s6w2s6w2s3w2sw3s3ws<br /><span class='text-primary'>n3e3ne2n3e2n6e2n6e5n6e3n4e3ne2n;NE;n10ene2n2en10e;open east;4e</span>"
			break;
		case "Averni Forest":
			var divid = document.getElementById("swalk");
			divid.innerHTML = ""
			divid.innerHTML = "3w;open west;11ws2w2sws10ws;SW;2sw3s4w3s6w5s6w2s3w<br /><span class='text-primary'>3e2n6e5n6e3n4e3ne2n;NE;n10ene2n2en10e;open east;4e</span>"
			break;
		case "Averni Troll Den":
			var divid = document.getElementById("swalk");
			divid.innerHTML = ""
			divid.innerHTML = "3w;open west;11ws2w2sws10ws;SW;2sw3s4w3s6w5s6w2s6w2s3ws2wn<br /><span class='text-primary'>s2en3e2n6e2n6e5n6e3n4e3ne2n;NE;n10ene2n2en10e;open east;4e</span>"
			break;
	}
}
