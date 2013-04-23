(function($){

	// Lighbox generation function
	function tumblrLightbox(img){		
		img = $(img).clone().attr({
			'class' : 'lightboxed'
		})
		
		return $('<div>',{
			'class' : 'tumblr-lightbox',
		}).append($(img));		
	}

	$(function(){
		$('img:not(.lightboxed)').live('click', function(e){
			e.preventDefault();
			$('body').css('overflow' , 'hidden').find('.tumblr-lightbox').remove()
			.end().append(tumblrLightbox(this)).end();

			$('.tumblr-lightbox').fadeIn('fast',
				function(){
					$(this)
					.find('img')
					.css({				
						'width' : (($('.tumblr-lightbox img').width() < window.innerWidth) ? $('.tumblr-lightbox img').width() :  window.innerWidth) + 'px',
					})
					.css({
						'margin-left' : -($('.tumblr-lightbox img').width()/2),
						'margin-top' : -($('.tumblr-lightbox img').height()/2),
					})
					.animate({
						'top' : '50%',
					}, 300);
				})

		});

		$('.tumblr-lightbox').live('click', function(e){
			if(e.target === $(this).find('img')){
				return;
			}
			e.preventDefault();
			$('.tumblr-lightbox img').animate({
				'top' : '-100%'
			}, 300, function(){
				$('.tumblr-lightbox').fadeOut('fast', function(){
					$('body').css('overflow' , 'auto').find('.tumblr-lightbox').remove();					
				})
			});
		});
	})
})(jQuery)


