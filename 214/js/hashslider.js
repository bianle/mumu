// hashslider v0.9 by manuel huegel, copyright 2010
// mgoys.com


$(document).ready(function(){
					   
//get width and height of the wrapper and give it to the UL	
	var wrapperwidth = $('#slider').width() *  $('#slider ul > li').size();
	$('#slider ul').css('width', wrapperwidth);
	var wrapperheight = $('#slider').height();
	$('#slider ul').css('height', wrapperheight);	
						   
						   
//set my li width
	var width = $('#slider').width();
	$('#slider ul li').css('width', width);

//set my counter vars
	var counter = $('#slider ul > li').size();
	var decount = 1;
	var autocount = 1;
	
//create my number navigation
	var createNum = 1;
	$('#numbers li:first-child').html(createNum).addClass('activenum').attr('id', 'id1');
	while ( createNum != counter) {
	$('#numbers li:last-child').after('<li>  </li>');
	createNum++;
	$('#numbers li:last-child').html(createNum);
	$('#numbers li:last-child').attr('id', 'id' + createNum);
	}
	
//get my number-width (number navigation should always be centered)
	var numwidth = $('#numbers li:first-child').width() * $('#numbers li').size();
	$('#numbers').css('width', numwidth);


	
//slide the button to the next item
function goNext() {
	if ( decount != counter) {
	$('#slider ul').animate({ left: '-=' + $('#slider').width() }, 400, 'swing', function() { });
	$('.activenum').removeClass('activenum').next().addClass('activenum');
	decount++;
	window.location.hash = decount;
	}
}

function goBack() {
	if ( decount != 1) {
	$('#slider ul').animate({ left: '+=' + $('#slider').width() }, 400, 'swing', function() { });
	$('.activenum').removeClass('activenum').prev().addClass('activenum');
	decount--;
	window.location.hash = decount;
	}
}

//make the number clickable
$("#numbers li").click(function() { 
	//$('#info4').html( $(this).html() ); 
	var clickednum = $(this).html() * - $('#slider').width() + $('#slider').width();
	//$('#info4').html( clickednum );
	$('#slider ul').animate({ left: clickednum }, 400, 'swing', function() { });
	$('.activenum').removeClass('activenum');
	$(this).addClass('activenum');
	decount = $(this).html();
	window.location.hash = $(this).html();	
});


//thaths the hash-shizzle
if ( window.location.hash != '') {
//get hash, scroll to position
	var hashnum = window.location.hash.substr(1) * - $('#slider').width() + $('#slider').width();
	$('#slider ul').animate({ left: hashnum }, 0, function() { });
//set counters to position
	decount = window.location.hash.substr(1);
	$('.activenum').removeClass('activenum');
	var hashname = window.location.hash.substr(1);
	$('#id' + hashname).addClass('activenum');
}
	
//get my clickers
$("#right").click(function() { goNext(); });	
$("#left").click(function() { goBack(); });	

//get mousewheel function
$("#slider ul").mousewheel(function(event, delta) { if (delta > 0) { goBack();	event.stopPropagation();event.preventDefault(); } });
$("#slider ul").mousewheel(function(event, delta) { if (delta < 0) { goNext();  event.stopPropagation();event.preventDefault();	} });







});