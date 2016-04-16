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
		case "Baeon's Cathedral":
			var divid = document.getElementById("swalk");
			divid.innerHTML = ""
			divid.innerHTML = "3w;open west;11ws2w2sws7w5s;SE;2s3w<br /><span class='text-primary'>3e2n;NW;5n7ene2n2en10e;open east;4e</span>"
			break;
		case "Baeon's Tower":
			var divid = document.getElementById("swalk");
			divid.innerHTML = ""
			divid.innerHTML = "3w4n2e7n10en3e4n<br /><span class='text-primary'>4s3ws10w7s2w4s3e</span>"
			break;
		case "Bandit's Lair":
			var divid = document.getElementById("swalk");
			divid.innerHTML = ""
			divid.innerHTML = "3e;open east;4e4s2es2ed3ne4swse3sdw2nu<br /><span class='text-primary'>d2seu3nwne4nw3su2wn2w4n3w;open west;4w</span>"
			break;
		case "Forest Canopy":
			var divid = document.getElementById("swalk");
			divid.innerHTML = ""
			divid.innerHTML = "<span class='text-success'>3w4n2e8n2un</span><br /><span class='text-primary'>s2d8s2w4s3e</span>"
			break;
		case "Dwarven Catacombs":
			var divid = document.getElementById("swalk");
			divid.innerHTML = ""
			divid.innerHTML = "<span class='text-info'>3e;open east;4e4n2e3n3w2d</span><br /><span class='text-primary'>2u3e3s2w4s3w;open west;4w</span>"
			break;
		case "Cemetary of Winter Past":
			var divid = document.getElementById("swalk");
			divid.innerHTML = ""
			divid.innerHTML = "3e;open east;4e4s4w3s2ws<br /><span class='text-primary'>n2e3n4e4n3w;open west;4w</span>"
			break;
		case "Chapel":
			var divid = document.getElementById("swalk");
			divid.innerHTML = ""
			divid.innerHTML = "3e7sw;open south;5s;open south;s;give 10 silver ac<br /><span class='text-primary'>open north;5n;open north;ne7n3w</span>"
			break;
		case "Claymont":
			var divid = document.getElementById("swalk");
			divid.innerHTML = ""
			divid.innerHTML = "3w;open west;11ws2w2sws10ws;SW;2sw3s4w3s6w5s6w2s2ws<br /><span class='text-primary'>n2e2n6e5n6e3n4e3ne2n;NE;n10ene2n2en10e;open east;4e</span>"
			break;
		case "Cursed Fields":
			var divid = document.getElementById("swalk");
			divid.innerHTML = ""
			divid.innerHTML = "3e;open east;4e4s2ws<br /><span class='text-primary'>n2e4n3w;open west;4w</span>"
			break;
		case "Dangerous Neighborhood":
			var divid = document.getElementById("swalk");
			divid.innerHTML = ""
			divid.innerHTML = "6ses2es2e<br /><span class='text-primary'>2wn2wnw6n</span>"
			break;
		case "Darkenwood":
			var divid = document.getElementById("swalk");
			divid.innerHTML = ""
			divid.innerHTML = "3w;open west;11ws2w2sws10w2nw22n<br /><span class='text-primary'>22se2s10ene2n2en10e;open east;4e</span>"
			break;
		case "Dwarven Day Care":
			var divid = document.getElementById("swalk");
			divid.innerHTML = ""
			divid.innerHTML = "3e;open east;4e4n2es<br /><span class='text-primary'>n2w4s3w;open west;4w</span>"
			break;
		case "Dragon Sea":
			var divid = document.getElementById("swalk");
			divid.innerHTML = ""
			divid.innerHTML = "3e;open east;15e;open east;12e;open east;8e<br /><span class='text-primary'>7w;open west;12w;open west;15w;open west;4w</span>"
			break;
		case "Dragon Sea Ships":
			var divid = document.getElementById("swalk");
			divid.innerHTML = ""
			divid.innerHTML = "3e;open east;15e;open east;12e;open east;8e<br /><span class='text-primary'>7w;open west;12w;open west;15w;open west;4w</span><br /> There are various sailors throughout the area, use <span class='text-success'>say</span> and the word 'yes' to get into the ship."
			break;
		case "Dragon Tower":
			var divid = document.getElementById("swalk");
			divid.innerHTML = ""
			divid.innerHTML = "3w;open west;11ws2w2sws3wnw3n2w2n<br /><span class='text-primary'>2s2e3ses3ene2n2en10e;open east;4e</span>"
			break;
		case "Druidic Pathway":
			var divid = document.getElementById("swalk");
			divid.innerHTML = ""
			divid.innerHTML = "3w;open west;11w2ne;open east;eds;open east;e<br /><span class='text-primary'>w;open west;nuw;open west;w2s10e;open east;4e</span>"
			break;
		case "Dwarven Outpost":
			var divid = document.getElementById("swalk");
			divid.innerHTML = ""
			divid.innerHTML = "3e;open east;4e4n2e3n<br /><span class='text-primary'>3s2w4s3w;open west;4w</span>"
			break;
		case "Elemental Canyon":
			var divid = document.getElementById("swalk");
			divid.innerHTML = ""
			divid.innerHTML = "3e;open east;4e4s2es2eds4un<br /><span class='text-primary'>s4dnu2wn2w4n3w;open west;4w</span>"
			break;
		case "Elemental Planes":
			var divid = document.getElementById("swalk");
			divid.innerHTML = ""
			divid.innerHTML = "3e;open east;15e;open east;12e;open east;9e3se2ne2ne3n2es2es3ene2nenenwn2wn2uwu5e<br /><span class='text-primary'>5wde2ds2eseswsw2sws3wn2wn2w3sw2sw2sw3n8w;open west;12w;open west;15w;open west;4w</span>"
			break;
		case "Fortress of Torment":
			var divid = document.getElementById("swalk");
			divid.innerHTML = ""
			divid.innerHTML = "<span class='text-success'>3e;open east;15e;open east;6e6n;open north;11n4en7e4s4es2enw2nes2nswn2wen</span><br /><span class='text-primary'>sw2esen2snw2ses2wn4w4n7ws4w10s;open south;7s5w;open west;15w;open west;4w</span>"
			break;
		case "Ghost Town":
			var divid = document.getElementById("swalk");
			divid.innerHTML = ""
			divid.innerHTML = "3e;open east;15e;open east;12e;open east;3e4n<br /><span class='text-primary'>4s2w;open west;12w;open west;15w;open west;4w</span>"
			break;
		case "Gnome Village":
			var divid = document.getElementById("swalk");
			divid.innerHTML = ""
			divid.innerHTML = "3e;open east;6es2e<br /><span class='text-primary'>2wn5w;open west;4w</span>"
			break;
		case "Graveyard":
			var divid = document.getElementById("swalk");
			divid.innerHTML = ""
			divid.innerHTML = "3e7sw;open south;s<br /><span class='text-primary'>open north;ne7n3w</span>"
			break;
		case "Grillam's Tavern":
			var divid = document.getElementById("swalk");
			divid.innerHTML = ""
			divid.innerHTML = "3w4n2e3n2en2e2nene;NE;e<br /><span class='text-primary'>w;SW;wsw2s2ws2w3s2w4s3e</span>"
			break;
		case "Haon Dor":
			var divid = document.getElementById("swalk");
			divid.innerHTML = ""
			divid.innerHTML = "3w;open west;3w<br /><span class='text-primary'>2e;open east;4e</span>"
			break;
		case "High Seas":
			var divid = document.getElementById("swalk");
			divid.innerHTML = ""
			divid.innerHTML = "3e;open east;15e;open east;6e6n;open north;11n4en6e<br /><span class='text-primary'>6ws4w10s;open south;7s5w;open west;15w;open west;4w</span>"
			break;
		case "High Tower of Sorcery":
			var divid = document.getElementById("swalk");
			divid.innerHTML = ""
			divid.innerHTML = "3w9s2e2sw3s2wswn<br /><span class='text-primary'>sen2e3ne2n2w9n3e</span><br />You will need to <span class='text-success'>scan</span> for a lost adventurer. Don't worry he'll be somewhere, just keep moving and <span class='text-success'>scanning</span>!"
			break;
		case "Holy Grove":
			var divid = document.getElementById("swalk");
			divid.innerHTML = ""
			divid.innerHTML = "3e;open east;6e2n<br /><span class='text-primary'>2s5w;open west;4w</span>"
			break;
		case "Ice Caverns":
			var divid = document.getElementById("swalk");
			divid.innerHTML = ""
			divid.innerHTML = "3e;open east;4e4s2es2ed3ne4swse3sd4sd<br /><span class='text-primary'>u4nu3nwne4nw3su2wn2w4n3w;open west;4w</span>"
			break;
		case "Ice Palace":
			var divid = document.getElementById("swalk");
			divid.innerHTML = ""
			divid.innerHTML = "3e;open east;4e4s2es2ed3ne4swse3sd6s;SE<br /><span class='text-primary'>NW;6nu3nwne4nw3su2wn2w4n3w;open west;4w</span>"
			break;
	}
}
