
// const input = document.querySelector("#mail");
// input.setCustomValidity("This is a required field");
// console.log("This field is required");
//    input.reportValidity();


(function() {
	
	const input = document.getElementById('mail');
	const	form = document.getElementById('contact-form');
	const	elem = document.createElement('div');
			elem.id = 'notify';
			elem.style.display = 'none';
			form.appendChild(elem);

	input.addEventListener('invalid', function(event){
		event.preventDefault();
		if ( ! event.target.validity.valid ) {
			elem.textContent   = 'This is a required field';
			elem.className     = 'error';
			elem.style.display = 'block';
		}
	});

	input.addEventListener('input', function(event){
		if ( 'block' === elem.style.display ) {
			input.className = '';
			elem.style.display = 'none';
		}
	});

})();