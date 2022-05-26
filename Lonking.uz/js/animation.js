

// ----------------------------------------------------------

$(window).on('load',function(){
    $(".loader").fadeOut();
    $("#preloder").delay(200).fadeOut("slow");
});

//-----------------------------------------------------------



//-----------------header------------------------------------

(function (){
	const header = document.querySelector('.header__fixst');
	window.onscroll=()=> {
		if (window.pageYOffset > 250) {
			header.classList.add('header__aktiv');
            $('.header__aktiv').fadeTo(1000,1);
		} else{
			header.classList.remove('header__aktiv');
            $('.header__aktiv').fadeTo(1000,1);
		}
};
}());

//-----------------header------------------------------------

