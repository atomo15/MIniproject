
function updatedisplay() {
	x = document.getElementById("stable-display-id").value;
	y = document.getElementById("edit").value;
	if(x==null)
	{
		document.getElementById("realtime-display").innerHTML = y;
	}
	else
	{
		document.getElementById("realtime-display").innerHTML = x+y;
	}
}

function submitcode() {
	x = document.getElementById("realtime-display").value;
	document.getElementById("stable-display-id").innerHTML = x;
}
