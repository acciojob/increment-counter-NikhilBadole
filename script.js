//your JS code here. If required.
let btn = document.getElementById("incrementBtn");

btn.addEventListener("click",Increment);

function Increment() {
	let val = document.getElementById("counter");
	let val2 = parseInt(val.textContent);
	alert(val2);
	val.textContent = val2+1;
}