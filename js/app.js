"use strict"

$(document).ready(function() {

	$('body').on('click', 'btn', function(event) { 
		event.preventDefault(); 
		var val = $(this).attr('href');
		

		if(val == '#contact') {
			$('#conteneur').toggle();

			$('#fermer').on('click', function()  {
				$('#conteneur').hide();
			});
		}

		else {
			$(val).toggle();
		}

	});