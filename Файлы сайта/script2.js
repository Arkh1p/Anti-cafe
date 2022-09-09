$(document).ready(function(){
	
	$('.next2').click(function(){
		var currentImage = $('.img2.curry2');
		var currentImageIndex = $('.img2.curry2').index();
		var nextImageIndex = currentImageIndex + 1;
		var nextImage = $('.img2').eq(nextImageIndex);
		currentImage.fadeOut(1);
		currentImage.removeClass('curry2');

		if(nextImageIndex == ($('.img2:last').index()+1)){
			$('.img2').eq(0).fadeIn(1);
			$('.img2').eq(0).addClass('curry2');
		} else {
			nextImage.fadeIn(1);
			nextImage.addClass('curry2');
		}
	});

	$('.prev2').click(function(){
		var currentImage = $('.img2.curry2');
		var currentImageIndex = $('.img2.curry2').index();
		var prevImageIndex = currentImageIndex - 1;
		var prevImage = $('.img2').eq(prevImageIndex);

		currentImage.fadeOut(1);
		currentImage.removeClass('curry2');
		prevImage.fadeIn(1);
		prevImage.addClass('curry2');
	});
});