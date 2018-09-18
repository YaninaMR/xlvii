
$(document).ready(function(){

	var useruid = window.location.hash.substring(1);
	  console.log(useruid); 

	    firebase.auth().onAuthStateChanged(function(user) {
	        if (user) {
	            var containerContact = $('#follower-other');
	                   var usercod = user.uid;
	                   console.log(usercod);
				    firebase.database().ref('/user/' + usercod + '/data').on('value', function(snapshot) {
				       console.log(snapshot.child('photo').val());
				       console.log(snapshot.child('name').val());
				       console.log(snapshot.val().photo);
				       console.log(snapshot.val().name);

						var userPhoto = $('<img>', {
						  'class': 'responsive-img circle user img-cont',
						  'src': snapshot.child('photo').val()
						});

						var userPhoto = $('<img>', {
						  'class': 'col l2 m3 s3 offset-l1 offset-m1 offset-s1 responsive-img circle user img-cont',
						  'src': snapshot.val().photo
						});

						var pName = $('<h3/>', {
						  'class': 'col l4 m5 s5 offset-l1 offset-m1 offset-s1  user-name-profile',
						}).text(snapshot.child('name').val());

						var pName = $('<h3/>', {
						  'class': 'col l6 m6 s6 offset-l1 offset-m1 offset-s1 user-name-profile',
						}).text(snapshot.val().name);

						var pAnnex = $('<h3/>', {
						  'class': 'user-annex-profile',
						}).text(snapshot.val().annex);


						$('#user-photo').append(userPhoto);
						$('#user-name').append(pName);
						$('#user-annex').append(pAnnex);
				    });
	        }
	    });
	
	   $('#signout').click(function(){
		 	      
	       firebase.auth().signOut().then(function() {
			  // Sign-out successful.
			   window.location.href = 'register.html';
			}).catch(function(error) { 
			  // An error happened.
		    });
	   });
		
});