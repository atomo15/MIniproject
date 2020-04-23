function popup2pair() {
	var data1 = document.getElementById("data1");

	if (data1.style.display === "block") {
		console.log("Hello")
    	data1.style.display = "none";
  	} else {
  		console.log("Hi")
    	data1.style.display = "block";
    	var w = '<b><h1>Object Name: </h1></b><input type="text" class="input-box">';
    	var x = '<b><h1>KEY : </h1></b><input type="text" class="input-box">';
		var y = '<b><h1>VALUES : </h1></b><input type="text" class="input-box">';
		var z = '<br><br><a href="#popup2key" class="myButton" >Convert</a>'
		data1.innerHTML= w+x+y+z;
  	}
	
	
	
  	
}