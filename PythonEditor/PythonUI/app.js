

function submitcode() {
	x = document.getElementById("stable-display-id").value;
	z = document.getElementById("edit").value;

	if(x==null)
	{
		document.getElementById("stable-display-id").innerHTML = z;
		document.getElementById("stable-display-id").value = z;
	}
	else
	{
		pz = x;
		console.log(pz)
		document.getElementById("backupcode").value = pz;
		document.getElementById("backupcode").innerHTML = pz;
		document.getElementById("stable-display-id").innerHTML = x+"<br>"+z;
		document.getElementById("stable-display-id").value = x+"<br>"+z;
	}
	document.getElementById("edit").value = "";
	document.getElementById("edit").value = "";
}

function undocode() {
	backupcode = document.getElementById("backupcode").value;
	document.getElementById("stable-display-id").innerHTML = backupcode;
	document.getElementById("stable-display-id").value = backupcode;
}

function reload() {
	window.location.reload();
}

function loadfile() {
	var txt;
	txt = loadStrings("input.txt");
	console.log(txt)
}
