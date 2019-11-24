$(document).ready(function(){
	var creampie = "https://drive.google.com/uc?export=download&id=";
	$('a[href^="https://drive.google.com/open?"]').each(function(){ 
		var Janda = $(this).attr("href"); 
		var Perawan = Janda.replace("https://drive.google.com/open?id=", creampie); 
		$(this).attr("id", "crot"); 
		$(this).attr("href", Perawan); 
		var ubah = document.getElementById("crot").href;
		$(this).attr("style", "display:none;"); 
	
		var vbuka = ' pause controls controlsList="nodownload" oncontextmenu="return false;" style="width:100%;height:270px;">\n'+
		'<source src="';
		var vtutup = '" type="video/mp4"></video>';
		$('#iframeHolder').html( '<video ' + vbuka + ubah  + vtutup );
	
	});
	
});