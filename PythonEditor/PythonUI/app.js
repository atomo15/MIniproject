
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
	z = document.getElementById("realtime-display").value;
	pz = document.getElementById("stable-display-id").value;
	document.getElementById("backupcode").value = pz;
	document.getElementById("backupcode").innerHTML = pz;
	document.getElementById("stable-display-id").innerHTML = z;
}
