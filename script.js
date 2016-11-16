let temp=[0,0,0];

function getVal(oldthis) {
//    determine which input was used then set value and call convertTemp
    let i = 0;
	switch(oldthis.id) {
    case "tempF":
        i = 0;
        break;
    case "tempC":
        i = 1;
        break;
    case "tempK":
        i = 2;
    } 

    temp[i] = Number(oldthis.value);
    convertTemp(i);
}


function convertTemp(temp_scale) {

	if (temp_scale===0) { //F
		temp[1] = (temp[0]-32.0)/1.8;
		temp[2] = (temp[0]-32.0)/1.8 + 273.15;
		document.getElementById("tempC").value = temp[1];
		document.getElementById("tempK").value = temp[2];
	}
	if (temp_scale===1) { //C
		temp[0] = (temp[1])*1.8 + 32.0;
		temp[2] = temp[1] + 273.15;
		document.getElementById("tempF").value = temp[0];
		document.getElementById("tempK").value = temp[2];
	}
	if (temp_scale===2) { //K
		temp[0] = ((temp[2] - 273.15))*1.8 + 32.0;
		temp[1] = temp[2] - 273.15;
		document.getElementById("tempF").value = temp[0];
		document.getElementById("tempC").value = temp[1];
	}
	
}