// JavaScript Document
	
	window.onscroll = function(){ var top=document.getElementById("top");
	var h1=document.getElementsByTagName("h1")[0];
	var t = document.documentElement.scrollTop || document.body.scrollTop;
	if(t>50){top.style.background="#fff";h1.style.color="#F30";}
	else if(t<50){top.style.background="transparent";h1.style.color="#000";}
	}