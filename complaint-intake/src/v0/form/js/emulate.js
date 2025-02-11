function err($elm){
	var $root = $elm.closest('.cr-question');
	$elm.addClass('failure');
	$root.find('.cr-validate').removeClass('success').addClass('failure');
	$root.find('.cr-validate-message').show();
}

function ok($elm){
	var $root = $elm.closest('.cr-question');
	$elm.removeClass('failure');
	$root.find('.cr-validate').removeClass('failure').addClass('success');
	$root.find('.cr-validate-message').hide();
}

$(function(){
	$('*[data-required]').each(function(i, _this){
		var $this = $(_this);
		$this.change(function(){
			if($this.val())
				ok($this);
		})
	});

	$('.next-page-action').click(function(){
		if(validate()){
			document.location = $(this).attr('data-next-page');
		}
	})
})

function validate(){
	var errors = [];

	$('*[data-required]').each(function(i, _this){
		var $this = $(_this);
		if(!$this.val()){
			errors.push($this);
			err($this);
		}
	});

	if(errors.length){
		$('#error-list').empty();
		$(errors).each(function(i, $n){
			var $errli = $('<li />');
			var $erra = $('<a />');

			$erra.attr('href', "#" + $n.attr('id'));
			$erra.html($n.attr('data-question'));
			$erra.click(function(){
				$($(this).attr('href')).focus();
				return false;
			});

			$errli.append($erra);
			$('#error-list').append($errli);
		});

		$('.error-panel').show();

		return false;
	}

	return true;
};
