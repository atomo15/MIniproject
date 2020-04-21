
// function updatedisplay() {
// 	x = document.getElementById("stable-display-id").value;
// 	y = document.getElementById("edit").value;
// 	if(x==null)
// 	{
// 		document.getElementById("realtime-display").innerHTML = y;
// 	}
// 	else
// 	{
// 		document.getElementById("realtime-display").innerHTML = x+y;
// 	}
// }

// function submitcode() {
// 	x = document.getElementById("stable-display-id").value;
// 	z = document.getElementById("realtime-display").value;

// 	if(x==null)
// 	{
// 		document.getElementById("backupcode").value = "No backup code";
// 		document.getElementById("stable-display-id").innerHTML = z;
// 		document.getElementById("stable-display-id").value = z;
// 	}
// 	else
// 	{
// 		pz = x;
// 		console.log(pz)
// 		document.getElementById("backupcode").value = pz;
// 		document.getElementById("backupcode").innerHTML = pz;
// 		document.getElementById("stable-display-id").innerHTML = z;
// 		document.getElementById("stable-display-id").value = z;
// 	}
// }

function submitcode() {
	x = document.getElementById("stable-display-id").value;
	z = document.getElementById("edit").value;

	if(x==null)
	{
		document.getElementById("backupcode").value = "No backup code";
		document.getElementById("stable-display-id").innerHTML = z;
		document.getElementById("stable-display-id").value = z;
	}
	else
	{
		pz = x;
		console.log(pz)
		document.getElementById("backupcode").value = pz;
		document.getElementById("backupcode").innerHTML = pz;
		document.getElementById("stable-display-id").innerHTML = x+"\n"+z;
		document.getElementById("stable-display-id").value = x+"\n"+z;
	}
	document.getElementById("edit").value = "";
	document.getElementById("edit").value = "";
}

function undocode() {
	backupcode = document.getElementById("backupcode").value;
	document.getElementById("stable-display-id").innerHTML = backupcode;
	document.getElementById("stable-display-id").value = backupcode;
}
