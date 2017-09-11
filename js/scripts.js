$( document ).ready(function() {
    
	$('body').on('submit', '#userSearch', function(e) {
		e.preventDefault();
		
		var username = $('#username').val();
		var usernameUrl = 'https://api.github.com/users/' + username;
		var followersUrl = 'https://api.github.com/users/' + username + '/followers';
		
		$.ajax({
			url: usernameUrl, 
			success: function(user) {
				
				var handle = user.login;
				var followers = user.followers;
				var avatar = user.avatar_url;
				
				$( "section#user h2" ).each(function( heading ) {
					$( this ).css('display', 'block') ;
				});
				
				$('#userInformation').html('<div class="row"><div class="col-xs-4"><img class="img-circle img-responsive" src="' + avatar + '" /></div><div class="col-xs-8"><h4>@' + handle + '</h4><p>Follower Count: ' + followers + '</p></div></div>');
				$('#userInformation').slideDown('slow');
				
				
				$.ajax({
					url: followersUrl, 
					success: function(results) {
						
						$('#userFollowers').html('');
						if (results.length > 0) {
							results.forEach(function(key) {
								$('#userFollowers').append('<div class="col-xs-4 col-sm-3 col-md-2 follower"><img class="img-circle img-responsive" src="' + key.avatar_url + '" /></div>');
							});
							if (followers > results.length) {
								$( '#loadMore' ).css('display', 'block') ;
							}
							$('#userFollowers').slideDown('fast');
						} else {
							$('#userFollowers').html('<p>You need some friends...</p>');
						}
					}, 
					error: function() {
						$('#userFollowers').html('<p>Error. Please try again.</p>');
					},
				});
			},
			error: function() {
				$('#userInformation').html('<h4>No User Found...</h4><p>Please try again...</p>');
				$('#userInformation').slideDown('slow');
			},
		});
		
	});
	
	var page = 1;
	var followerLimit = 30;
	$('body').on('click', '#loadMore', function(e) {
		e.preventDefault();
		
		page++;
		
		var username = $('#username').val();
		var usernameUrl = 'https://api.github.com/users/' + username;
		var followersUrl = 'https://api.github.com/users/' + username + '/followers?page=' + page;
		console.log(followersUrl);
		
		$.ajax({
			url: usernameUrl, 
			success: function(user) {
				
				var followers = user.followers;
				
				$.ajax({
					url: followersUrl, 
					success: function(results) {
						
						if (results.length > 0) {
							
							results.forEach(function(key) {
								$('#userFollowers').append('<div class="col-xs-4 col-sm-3 col-md-2 follower"><img class="img-circle img-responsive" src="' + key.avatar_url + '" /></div>');
							});
							
							if (followers < (followerLimit*page)) {
								$( '#loadMore' ).css('display', 'none') ;
							}
							
							$('#userFollowers').slideDown('fast');
							
						} else {
							$('#userFollowers').html('<p>You need some friends...</p>');
						}
					}, 
					error: function() {
						$('#userFollowers').html('<p>Error. Please try again.</p>');
					},
				});
			},
			error: function() {
				$('#userInformation').html('<h4>No User Found...</h4><p>Please try again...</p>');
				$('#userInformation').slideDown('slow');
			},
		});
		
	});
	
});