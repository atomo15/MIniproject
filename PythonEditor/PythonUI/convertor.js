function popup2pair() {
	console.log("Hello")
	var data1 = document.getElementById("data1");
	var x = '<b><h1>KEY : </h1></b><input type="text">';
	var y = '<b><h1>VALUES : </h1></b><input type="text">';
	var z = '<br><br><a href="#popup2key" class="myButton" >Convert</a>'
	data1.innerHTML= x+y+z;
}