$("buttton").click(function(){
			alert("b");alert(result.msg);
				$.ajax({
					  url: "success.json"
				}).done(function(data) {
					if ( console && console.log ) {
						console.dir(data);
						alert(data.msg);
					}
				});
			};
});