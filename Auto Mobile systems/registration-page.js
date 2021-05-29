function firstname()
{
	var fname=document.getElementById("fname").value;
	var check= /^[a-zA-Z\s\'\-]{1,100}$/;
	if(check.test(fname))
	{
		document.getElementById("fn").style.color="green";
		document.getElementById("fn").innerHTML="<strong>Valid</strong>";
		return true;
	}
	else
	{
		document.getElementById("fn").style.color="red";
		document.getElementById("fn").innerHTML="<strong>Enter correct details</strong>";
		return false;
	}
}

function lastname()
{
	var lname=document.getElementById("lname").value;
	var check= /^[a-zA-Z\s\'\-]{1,100}$/;
	if(check.test(lname))
	{
		document.getElementById("ln").style.color="green";
		document.getElementById("ln").innerHTML="<strong>Valid</strong>";
		return true;
	}
	else
	{
		document.getElementById("ln").style.color="red";
		document.getElementById("ln").innerHTML="<strong>Enter correct details</strong>";
		return false;
	}
}

function funemail()
{
	var eml=document.getElementById("em").value;
	var check= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if(check.test(eml))
	{
		document.getElementById("email").style.color="green";
		document.getElementById("email").innerHTML="<strong>Valid</strong>";
		return true;
	}
	else
	{
		document.getElementById("email").style.color="red";
		document.getElementById("email").innerHTML="<strong>Enter proper email address</strong>";
		return false;
	}
	
}
function pswd()
{
	var pswd=document.getElementById("ps").value;
	
	var check=/^[A-Za-z]\w{5,}$/;
if(check.test(pswd))
	{
		document.getElementById("pswd").style.color="green";
		document.getElementById("pswd").innerHTML="<strong>Valid</strong>";
		return true;
	}
	else
	{
		document.getElementById("pswd").style.color="red";
		document.getElementById("pswd").innerHTML="<strong>Password must contain atleast 6 charecters</strong>";
		return false;
	}	
	
}
function cpswd()
{
	var pswd=document.getElementById("ps").value;
	var cpswd=document.getElementById("cps").value;
	if(pswd != cpswd)
	{
		document.getElementById("cpswd").style.color="red";
		document.getElementById("cpswd").innerHTML="<strong>Password did not match</strong>";
		return false;
	}
	else{
		
	}  	
}
