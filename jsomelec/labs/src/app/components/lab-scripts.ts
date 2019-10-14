declare var $:any; //so typescript doesn't get angry at $ being undefined for jquery

//this class is copying jquery from the A111 scripts.js file. I know, I know. I was able to get it somewhat
//working by including the script tag in the html, but specifically for image captioning, it would not work
//because the URLs are delineated differently here than they typically are. Considering the amount of code
//is so small and trivial, it hopefully shouldn't be an issue. This also allows us to call the jquery only
//after the lab page component view has initialized.
export class LabScripts {
	initScripts(pageNum) {
		this.captionImages(pageNum);
		this.initQuestionReveals();
		this.setLtiHeight();
	}

	captionImages(pageNum) {
		var images = $('.content img');
		var figure_number = 1; //starting value

		//loops over all images in the content area
		$.each(images, function() {
			//do nothing for aside images or images that should not be captioned
			if ($(this).parents(".aside_LeftWrap").length == 1 || $(this).parents(".aside_RightWrap").length == 1 || $(this).parents(".no_caption").length == 1) {
				//do nothing
			}
			//for animations with play/pause button, captions have to be manually added to prevent formatting issues.
			else if ($(this).parents(".current_display") == 1) {
				figure_number++;
			}
			else if ($(this).parent("a").length == 1) { //for images that can be expanded in a new tab
				$(this).after("<div class='caption'>Figure " + pageNum + "-" + figure_number + "<br>Click on the image for a larger version</div>");
				figure_number++;
			}
			//for all other images, add a caption div with the proper figure name, i.e. 3-11
			else {
				$(this).after("<div class='caption'>Figure " + pageNum + "-" + figure_number + "</div>");
				figure_number++;
			}
		});
	}

	initQuestionReveals() {
		if ($('.question_button').length > 0) {
			var allPanels = $('.revealed_answer').hide(); //hide the answer

			$('.question_button').hover(function() { //border changes color on hover
				$(this).css('border', 'solid #C9B6DE 2px');
			}, function() {
				$(this).css('border', 'solid #4B306A 2px');
			});

			$('.question_button').click(function() {
				var $next = $(this).next();
				if ($next.is(':visible')) { //slide up answer by clicking on question a second time
					$next.slideUp();
					$(this).css('margin-bottom', '10px');
					$(this).css('border-radius', '10px');
					$(this).css('border', 'none');
				} else { //slides down the answer
					$next.slideDown();
					$(this).css('margin-bottom', '0px');
					$(this).css('border-radius', '0px');
					$(this).css('border', 'solid #4B306A 2px');
				}
			});
		}
	}

	setLtiHeight() {
		var height = $('html').height() + 60; //extra space just in case
        window.parent.postMessage(JSON.stringify({subject: 'lti.frameResize', height: height}), '*');
        $('body').css('background-image', 'none'); //make sure bubble background doesn't appear (body is outside app-component)
	}
}
