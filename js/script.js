document.addEventListener( 'DOMContentLoaded', function() {
	const scrollBtn = document.getElementById( 'sbport-scroll-to-top' );

	window.addEventListener( 'scroll', function() {
		if (window.scrollY > 300) {
			scrollBtn.classList.add( 'show' );
		} else {
			scrollBtn.classList.remove( 'show' );
		}
	});

	scrollBtn.addEventListener( 'click', function() {
		window.scrollTo( {
			top: 0,
			behavior: 'smooth'
		} );
	} );
} );
