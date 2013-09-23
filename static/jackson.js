//hides previous and shows current text box depending
//on which title you click on.
jQuery(document).ready(function(){	
			jQuery('#objTitle').click(function(){
				jQuery('.hiddenText').hide();	
				jQuery('#objText').fadeIn('slow')
			});
			jQuery('#projTitle').click(function(){
				jQuery('.hiddenText').hide();
				jQuery('#projText').fadeIn('slow')
			});

			jQuery('#skillTitle').click(function(){
				jQuery('.hiddenText').hide();
				jQuery('#skillText').fadeIn('slow')
			});
			jQuery('#expTitle').click(function(){
				jQuery('.hiddenText').hide();
				jQuery('#expText').fadeIn('slow')
			});
			jQuery('#aboutTitle').click(function(){
				jQuery('.hiddenText').hide();
				jQuery('#aboutText').fadeIn('slow')
			});
			jQuery('#whyTitle').click(function(){
				jQuery('.hiddenText').hide();
				jQuery('#whyText').fadeIn('slow')
			});
			//mouseover head pic to enlarge
			jQuery('.pic').mouseenter(function(){
				jQuery(this).animate({
					height:'+=200px'
				});
			});
			jQuery('.pic').mouseleave(function(){
				jQuery(this).animate({
					height:'-=200px'
				})
			});
			//mouseover color change for titles
			jQuery('#objTitle').mouseenter(function(){
				jQuery('#objTitle').css('color', '#797979')
			});
			jQuery('#objTitle').mouseleave(function(){
				jQuery('#objTitle').css('color', 'white')
			});

			jQuery('#projTitle').mouseenter(function(){
				jQuery('#projTitle').css('color', '#797979')
			});
			jQuery('#projTitle').mouseleave(function(){
				jQuery('#projTitle').css('color', 'white')
			});

			jQuery('#skillTitle').mouseenter(function(){
				jQuery('#skillTitle').css('color', '#797979')
			});
			jQuery('#skillTitle').mouseleave(function(){
				jQuery('#skillTitle').css('color', 'white')
			});

			jQuery('#expTitle').mouseenter(function(){
				jQuery('#expTitle').css('color', '#797979')
			});
			jQuery('#expTitle').mouseleave(function(){
				jQuery('#expTitle').css('color', 'white')
			});

			jQuery('#aboutTitle').mouseenter(function(){
				jQuery('#aboutTitle').css('color', '#797979')
			});
			jQuery('#aboutTitle').mouseleave(function(){
				jQuery('#aboutTitle').css('color', 'white')
			});

			jQuery('#whyTitle').mouseenter(function(){
				jQuery('#whyTitle').css('color', '#797979')
			});
			jQuery('#whyTitle').mouseleave(function(){
				jQuery('#whyTitle').css('color', 'white')
			});

		})
			
