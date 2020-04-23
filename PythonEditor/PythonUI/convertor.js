function popup2pair() {
	var data1 = document.getElementById("data1");

	if (data1.style.display === "block") {
		console.log("Hello")
    	data1.style.display = "none";
  	} else {
  		console.log("Hi")
    	data1.style.display = "block";
    	var x = '<b><h1>KEY : </h1></b><input type="text">';
		var y = '<b><h1>VALUES : </h1></b><input type="text">';
		var z = '<br><br><a href="#popup2key" class="myButton" >Convert</a>'
		data1.innerHTML= x+y+z;
  	}
	
	
	
  	
}