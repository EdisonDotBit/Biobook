document.addEventListener("DOMContentLoaded", function () {
	var lessonLinks = document.querySelectorAll('.lesson-content li a');
		
		lessonLinks.forEach(function (link) {
			link.addEventListener('click', function (e) {
				e.preventDefault();
		
					var targetId = this.getAttribute('href').substring(1);
					var targetElement = document.getElementById(targetId);
		
					if (targetElement) {
						window.scrollTo({
							top: targetElement.offsetTop - 50, // Adjust the offset as needed
							behavior: 'smooth'
					});
				}
			});
	});
});
