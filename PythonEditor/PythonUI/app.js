
<script>

function updatedisplay() {
	x = document.getElementById("stable-display-id").value;
	if(x==null)
	{
		console.log("null")
	}
	y = document.getElementById("edit").value;
	//console.log(x+y)
    document.getElementById("realtime-display").innerHTML = y;
}

</script>