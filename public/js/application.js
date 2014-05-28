$(document).ready(function() {
	$("#tweet-it").on("submit", function(event) {
		event.preventDefault();

		$(".submit").prop('disabled', true);
		$("#done").remove();
		$("#tweet-it").after("<p id=\"processing\">Your tweet is being processed right now!</p>")

		var url = $("#tweet-it").attr("action");
		var data = $("#tweet-it").serialize();

		$.post(url, data, function(response){
			$(".submit").prop('disabled', false);
			$("#processing").remove();
			$("#tweet-it").after("<p id=\"done\">Your tweet has been tweeted!</p>");
		}); //closes post request
	}); // closes event handling
}); //closes doc ready
