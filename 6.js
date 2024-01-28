function show_current_date()
{
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; 
	var yyyy = today.getFullYear();
	
	if(dd<10) 
	{
		dd='0'+dd;
	}
	if(mm<10) 
	{
		mm='0'+mm;
	}
	today = mm+'-'+dd+'-'+yyyy;
	document.getElementById("Curr_Dat1").innerHTML = today;
	//console.log(today);
	today = mm+'/'+dd+'/'+yyyy;
	document.getElementById("Curr_Dat2").innerHTML = today;
	//console.log(today);
	today = dd+'-'+mm+'-'+yyyy;
	document.getElementById("Curr_Dat3").innerHTML = today;
	//console.log(today);
	today = dd+'/'+mm+'/'+yyyy;
	document.getElementById("Curr_Dat4").innerHTML = today;
	//console.log(today);
}