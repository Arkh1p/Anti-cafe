$(document).ready(function(){
	
	$('.next').click(function(){
		var currentImage = $('.img.curry');
		var currentImageIndex = $('.img.curry').index();
		var nextImageIndex = currentImageIndex + 1;
		var nextImage = $('.img').eq(nextImageIndex);
		currentImage.fadeOut(1);
		currentImage.removeClass('curry');

		if(nextImageIndex == ($('.img:last').index()+1)){
			$('.img').eq(0).fadeIn(1);
			$('.img').eq(0).addClass('curry');
		} else {
			nextImage.fadeIn(1);
			nextImage.addClass('curry');
		}
	});

	$('.prev').click(function(){
		var currentImage = $('.img.curry');
		var currentImageIndex = $('.img.curry').index();
		var prevImageIndex = currentImageIndex - 1;
		var prevImage = $('.img').eq(prevImageIndex);

		currentImage.fadeOut(1);
		currentImage.removeClass('curry');
		prevImage.fadeIn(1);
		prevImage.addClass('curry');
	});
});