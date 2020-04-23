function popup2pair() {
	var data1 = document.getElementById("data1");
	var data2 = document.getElementById("data2");
	if (data1.style.display === "block") {
    	data1.style.display = "none";
    	data2.style.display = "none";
  	} else {
    	data1.style.display = "block";
    	var w = '<b><h1>Object Name: </h1></b><input type="text" id="obj-name" class="input-box">';
    	var x = '<b><h1>KEY : </h1></b><input type="text" id="obj-key" class="input-box">';
		var y = '<b><h1>VALUES : </h1></b><input type="text" id="obj-val" class="input-box">';
		var z = '<br><br><a href="#popup2key" class="myButton" onclick="convert2keyvalue()" >Convert</a>'
		data1.innerHTML= w+x+y+z;
  	}
}

function convert2keyvalue() {
	var name = document.getElementById("obj-name").value;
	var key = document.getElementById("obj-key").value;
	var value = document.getElementById("obj-val").value;
	var data2 = document.getElementById("data2");
	var letterNumber = /^[0-9a-zA-Z]+$/;

	data2.style.display = "block";
	
	//console.log(key);
	//console.log(value);

	var key_split = key.split(" ");
	var sum_key = 0;

	var key_length = key_split.length;

	if(key[key.length-1]==" ")
	{
		//console.log("ERROR")
		key_length = key_split.length-1;
	}

	for (var i = 0;i<key_length;i++) {
		if(key_split[i].match(letterNumber))
		{
			sum_key+=1;
		}
		console.log(key_split[i])
	}
	console.log("Total key: ",sum_key);


	var val_split = value.split(" ");
	var sum_val = 0;

	var val_length = val_split.length;

	if(value[value.length-1]==" ")
	{
		//console.log("ERROR")
		val_length = val_split.length-1;
	}

	for (var i = 0;i<val_length;i++) {
		if(val_split[i].match(letterNumber))
		{
			sum_val+=1;
		}
		console.log(val_split[i])
	}
	console.log("Total value: ",sum_val);

	if(sum_val>sum_key){
		var result = "some key is missing ( "+(sum_val-sum_key)+" )";
		console.log(result);
		data2.innerText = result;
	}
	else if(sum_key>sum_val){
		var result = "some value is missing ( "+(sum_key-sum_val)+" )";
		console.log(result);
		data2.innerText = result;
	}
	else
	{
		var result = name+" = ";
		for(var i=0;i<sum_val;i++){
			if(i==0){
				result = result+"{\'"+key_split[i]+"\':\'"+val_split[i]+"\'";
			}
			else
			{
				result = result+",\'"+key_split[i]+"\':\'"+val_split[i]+"\'";
			}
			
		}
		result = result+"}";
		data2.innerText = result;
		alert(result);
	}




	
}