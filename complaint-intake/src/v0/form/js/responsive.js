$(function() {

	// the header is completely different
	// on mobile version
	$desktop_header = $('.wrapper-header').first();
	$mob_header = $desktop_header.clone();
	$('.wrapper-header').after($mob_header);

	// identify the nodes by a class
	$desktop_header.addClass('desktop-header');
	$mob_header.addClass('mob-header');

	// update mobile node
	$mob_header.find('h1').html('Debt Collection');

	// add the mobile header
	$mob_nav_bar = $('<div />').addClass('mob-nav');
	$mob_nav_bar.append($('<div>Submit a Complaint</div>'));

	// place the menu btn on the nav bar
	$menu_btn = $('<div />').addClass('mob-menu-btn');
	$mob_nav_bar.prepend($menu_btn);

	$menu_btn.click(function(){
		if($('.secondary').hasClass('focused')){
			$('.secondary').animate({left:'-100%'}, 350).removeClass('focused');
		}else{
			$('.secondary').animate({left:0}, 350).addClass('focused');
		}
	});

	// add progress saved button
	$mob_save_msg = $('<div />').addClass('mob-save-msg').html('PROGRESS SAVED');
	$mob_header.after($mob_save_msg);

	// place the save btn
	$save_btn = $('<div />').addClass('mob-save-btn');
	$mob_nav_bar.prepend($save_btn);
	$save_btn.click(function(){
		$('.mob-save-msg').animate({'top':30}, 200).delay(1000).animate({top:-10}, 200);
	});

	// place the bar
	$mob_header.before($mob_nav_bar);

	// update the way the footer is displayed
	$mobile_footer = $('footer').clone();
	$mobile_footer.addClass('mob-only');
	$('footer').after($mobile_footer);
	$mobile_footer.find('.wrapper-footer .wrapper-container').prepend($('.wrapper-footer .sub'));
	$mobile_footer.find('.wrapper-footer .sub').append($('.wrapper-footer .call-us'));


	// some of the radio button's don't reflect the 'active' class
	// when they are selected. lets enforce it.
	$('input[type=radio]').click(function(){
		$(this).closest('.follow-up').find('.selected').removeClass('selected');
		$(this).parent().addClass('selected');
	});

});
