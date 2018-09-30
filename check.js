alert("HEllo");
function validate() {
	var username=document.getElementById("t1").value;
	var password=document.getElementById("t2").value;
	if(username==password)
	{
		alert("USERNAME and PASSWORD should be different.Refresh the page and try again");
	}
	else
	{
		
		alert("successful");
	}
	
}