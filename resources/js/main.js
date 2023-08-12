

(function($) {

//fade in the main page.
	$('.face').fadeIn(1000);
	$('.more').fadeIn(1000);

// \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
//controlls menu hide and disapear
	$( ".menuToggle" ).click(function () {

		$("#menu").animate({"right":"0px"}, "slow");
	});


	$(".closeToggle").click(function () {
		$("#menu").animate({"right":"-30em"}, "10000");
	});
// /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\

// \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
	//Smooth Scrolling
	$(".scroll").click(function(event) {
		event.preventDefault();
		$('html,body').animate( { scrollTop:$(this.hash).offset().top } , 500);
	});
// /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\


// \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
	var $wn = $(window).scroll(function(){
	    if ( $wn.scrollTop() >= ($("#one").offset().top) ) {
	    	$('#header').css("background-color","#017C4D");
	    	$('.headerTitle').css("visibility","visible");
//			console.log($wn.scrollTop())
//			console.log(($("#one").offset().top))
	    } else {
	    	$('#header').css("background-color","transparent");
	    	$('.headerTitle').css("visibility","hidden");
//			console.log($wn.scrollTop())
//			console.log(($("#one").offset().top))
	    }
	});
// /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\

})(jQuery);

//This is for later when we can figure it out.
//We need to check for screen size to do set up of page.
/*
function detectmob() {
   if(window.innerWidth <= 800 && window.innerHeight <= 600) {
     return true;
   } else {
     return false;
   }
}

function detectmob() { 
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    return true;
  }
 else {
    return false;
  }
}
*/

