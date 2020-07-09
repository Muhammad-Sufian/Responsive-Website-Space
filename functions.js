var globVar=0;
var lastcoord=0;
function change(){
	//document.getElementById("headSection").innerHTML="Space";
	//console.log(document.getElementById("headSection").innerHTML);
}

function startTimer(){
	
	setInterval(setNewPic, 5000);
	
}

function setNewPic(){
	if(parseInt(window.pageYOffset)<500)
	{
		var images=["Images/sun.png", "Images/Mercury.jpg", "Images/Venus.jpg", "Images/Earth.jpg", "Images/Mars.jpg", "Images/Jupitar.png", "Images/Saturn.jpg", "Images/Uranus.jpg", "Images/Neptune.jpg"]; 
		
		document.getElementById("imagesID").src=images[globVar];
		if(globVar==8)
		{
			globVar=0;
		}
		else{
			globVar++;
		}
	
	}
	//console.log(window.pageYOffset);
	
	
}

function checkcoordinates()
{

	/*
	if(lastcoord<window.pageYOffset)
	{
		//console.log("scrolldown");
	}
	else{
		//console.log("scrollup");
	}*/
	
	if(parseInt(window.pageYOffset)>600)
	{
		if((parseInt(document.getElementById("NavigationBar").style["top"]) > 0)&&(lastcoord<window.pageYOffset)&&(document.getElementById("NavigationBar").style.position=="fixed"))
		{
			document.getElementById("NavigationBar").style.top= parseInt(document.getElementById("NavigationBar").style.top) - 10;
		}
		
		if((parseInt(document.getElementById("NavigationBar").style["top"]) <= 0)&&(lastcoord<window.pageYOffset)&&(document.getElementById("NavigationBar").style.position=="fixed"))
		{
			document.getElementById("NavigationBar").style.position="absolute"; //setAttribute("style", "position:absolute");
			document.getElementById("NavigationBar").style.top=127;
		}
	}
	else
	{
		
		
		if((parseInt(document.getElementById("NavigationBar").style["top"]) < 127))
		{
			document.getElementById("NavigationBar").style.top= parseInt(document.getElementById("NavigationBar").style.top) +5;
		}
		if((parseInt(document.getElementById("NavigationBar").style["top"]) >= 127))
		{
			document.getElementById("NavigationBar").style.top= 127;
			//console.log('heelo');
		}
	}
	lastcoord=window.pageYOffset;
	
	
}


var OpenSideBarfuntion = function(){
	document.getElementById("sideBar").style.width="200px";

};


var closeSideBarFunction = function ()
{
	document.getElementById("sideBar").style.width="0px";

};

var DestinationButtonFunc = function(e)
{
	var selectedLoc = e.getAttribute("data-planet-name");
	console.log(selectedLoc);
	document.getElementById("SelectedLocation").innerHTML="Selected Location: "+ selectedLoc;
	var selectedImage = "./Images/"+selectedLoc+".jpg";
	document.getElementById("SelectedLocationImage").src = selectedImage;
	console.log(document.getElementById("SelectedLocationImage").src);
	
	
};



