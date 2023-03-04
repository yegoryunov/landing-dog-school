// countDownTimer start
countDownTimer();
function countDownTimer() {
	let countDown = new Date("Mar 6, 2023, 12:00:00").getTime();

	let count = setInterval(function() {
		let nowDateTime = new Date().getTime();
		let gapNowAndCountDate = countDown - nowDateTime;
		let days = Math.floor(gapNowAndCountDate / (1000 * 60 * 60 * 24));
		let hours = Math.floor((gapNowAndCountDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		let mins = Math.floor((gapNowAndCountDate % (1000 * 60 * 60)) / (1000 * 60));
		let sec = Math.floor((gapNowAndCountDate % (1000 * 60)) / 1000);

		document.querySelector('.price-block-second__left-time').innerHTML = days + " день " + hours + ":" + mins + ":" + sec;
	}, 1000);
}
// countDownTimer end

// Modal building image start
modalBuildingImage()
function modalBuildingImage() {
	let modalImageBuildingContainer = document.querySelector(".modal-image-building-container");
	let buildingImage = document.querySelector(".building-image");
	let modalImageBuildingContainerImg = document.querySelector(".modal-image-building-container__img");
	buildingImage.onclick = function(){
		modalImageBuildingContainer.style.display = "block";
		modalImageBuildingContainerImg.src = this.src;
	}
	
	let modalImageBuildingContainerClose = document.querySelectorAll(".modal-image-building-container__close")[0];
	
	modalImageBuildingContainerClose.onclick = function() { 
		modalImageBuildingContainer.style.display = "none";
	}
}
// Modal building image end

// Modal room image start
modalRoomImage()
function modalRoomImage() {
	let modalImageRoomContainer = document.querySelector(".modal-image-room-container");
	let roomImage = document.querySelector(".room-image");
	let modalImageRoomContainerImg = document.querySelector(".modal-image-room-container__img");
	roomImage.onclick = function(){
		modalImageRoomContainer.style.display = "block";
		modalImageRoomContainerImg.src = this.src;
	}
	
	let modalImageRoomContainerClose = document.querySelectorAll(".modal-image-room-container__close")[0];
	
	modalImageRoomContainerClose.onclick = function() { 
		modalImageRoomContainer.style.display = "none";
	}
}
// Modal room image end

// Slider reviews start
let slideIndex = 1;
function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".carusel-review__card");
  let dots = document.querySelectorAll(".reviews-block__toggle-dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
// Slider reviews end

// Smooth scroll anchors start
const smoothScrollingAnchors = document.querySelectorAll('a[href^="#"]');
for (let anchor of smoothScrollingAnchors) {
	anchor.addEventListener('click', function(e) {
		e.preventDefault();
		const movingOnAnchors = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body';
		document.querySelector(movingOnAnchors).scrollIntoView({
			behavior: 'smooth',
		})
	})
};
// Smooth scroll anchors end

const btnRequest = document.getElementById('btnRequest');
const modalRequest = document.getElementById('modalRequest');
const btnRequestClose = document.querySelector('#btnRequestClose');

btnRequest.onclick = () => {
	modalRequest.classList.add("modal-request__active");

	btnRequestClose.addEventListener('click', closeRequestModal);

	modalRequest.addEventListener('click', hideRequestModal);

	function closeRequestModal() {
		modalRequest.classList.remove("modal-request__active");
		btnRequestClose.removeEventListener('click', closeRequestModal);
		modalRequest.removeEventListener('click', hideRequestModal);
	}

	function hideRequestModal(event) {
		if(event.target === modalRequest) {
			closeRequestModal();
		}
	}
};