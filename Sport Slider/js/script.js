const api_url = "http://promo.888.com/888sport/webmaster/data.php";
  
async function getapi(url) {
    
    const response = await fetch("http://promo.888.com/888sport/webmaster/data.php");
    
    var data = await response.json();
    console.log(data);

    var slider=document.getElementById("slider");
	var val = document.getElementById("value");
	var val2 = document.getElementById("value2");
	val.innerHTML= "$" + data.left.price[1];
	val2.innerHTML= "$" + data.right.price[1];
	slider.oninput=function(){
		if (slider.value == 0) {
			val.innerHTML = "$" + data.left.price[0];
			val2.innerHTML = "$" + data.right.price[0];
		} else if (slider.value == 1) {
			val.innerHTML = "$" + data.left.price[1];
			val2.innerHTML = "$" + data.right.price[1];
		} else if (slider.value == 2) {
			val.innerHTML = "$" + data.left.price[2];
			val2.innerHTML = "$" + data.right.price[2];
		} else {
			val.innerHTML = "$" + data.left.price[1];
			val2.innerHTML = "$" + data.right.price[1];
		}
	}
}

getapi(api_url);


