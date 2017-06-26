function onLoad( )
{
	maxWidth = 1440;
	maxHeight = 900;

	console.log( "PAGE LOADED!" );
	updateContentDivSize();

	addContentListners();
}

function addContentListners( )
{
	$( blueButton ).click( onBlueContentClick );
	$( greenButton ).click( onGreenContentClick );
	$( yellowButton ).click( onYellowContentClick );
	$( redButton ).click( onRedContentClick );
}

function onResize( )
{
	updateContentDivSize();
}

function onBlueContentClick( )
{
	focusContent.style.backgroundColor = "#00BFFF";
}

function onGreenContentClick( )
{
	focusContent.style.backgroundColor = "#3FFF00";
}

function onYellowContentClick( )
{
	focusContent.style.backgroundColor = "#FFFF00";
}

function onRedContentClick( )
{
	focusContent.style.backgroundColor = "#FF0000";
}

function updateContentDivSize( )
{
	focusContent = document.getElementById( "focusContent" );
	
	//focusContent.style.backgroundColor = "#FF0000";

	if( window.innerWidth > maxWidth )
		focusContent.style.width = maxWidth + "px";
	else
		focusContent.style.width = ( window.innerWidth - 20 ) + "px";
	
	if ( window.innerHeight > maxHeight )
		focusContent.style.height = maxHeight + "px";
	else
		focusContent.style.height = ( window.innerHeight - 20 ) + "px";
}


$(document).ready( onLoad );
$(window).resize( onResize );