
<script>

function updatedisplay() {
	x = document.getElementById("stable-display-id").value;
	y = document.getElementById("edit").value;
	console.log(x+y)
    document.getElementById("realtime-display").innerHTML = x+y;
}

</script>