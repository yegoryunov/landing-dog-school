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

