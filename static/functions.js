    function ddlselect() {
        var d=document.getElementById("ddselect");
		var displaytext=d.options[d.selectedIndex].text;
		var price1=6;
		var price2=4;
		var price3=2;
		var taxes1=(price1*0.15)+5;
		var taxes2=(price2*0.15)+5;
		var taxes3=(price3*0.15)+5;
		var tcost1=price1+taxes1;
		var tcost2=price2+taxes2;
		var tcost3=price3+taxes3;
		document.getElementById("txtVideo").value=displaytext;
		localStorage.setItem("Selected", displaytext);
		
		
		if (displaytext == "Avengers: Endgame" || displaytext == "Minions: The Rise of Gru" || displaytext == "Spiderman: No Way Home")
		{
			document.getElementById("txtprice").value=price1;
			document.getElementById("txtDeliveryFee").value=taxes1;
			document.getElementById("txtTotalCost").value=tcost1;
		}
		
		if (displaytext == "Black Widow" || displaytext == "Iron Man 3" || displaytext == "Man of Steel" || displaytext == "Wonder Woman")
		{
			document.getElementById("txtprice").value=price2;
			document.getElementById("txtDeliveryFee").value=taxes2;
			document.getElementById("txtTotalCost").value=tcost2;
		}
		
		if (displaytext == "300" || displaytext == "Batman - The Dark Knight" || displaytext == "Coco" || displaytext == "The Expendables 2")
		{
			document.getElementById("txtprice").value=price3;
			document.getElementById("txtDeliveryFee").value=taxes3;
			document.getElementById("txtTotalCost").value=tcost3;
		}
		if (displaytext == "")
		{
			alert("Select a movie");
		}
		
    }

	function ValidateEmail(txtEmail) 
	{
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(frmInput.txtEmail.value))
		{
			return (true)
		}
			alert("You have entered an invalid email address!")
    return (false)
	}
	
	function login()
	{
        var username=document.getElementById("username").value;
		var password=document.getElementById("password").value;
		
		
		if (username == "ibn@gmail.com" && password == "A123456789x")
		{
			alert("login succesfully");
			return false;
		}
		else if (username != "ibn@gmail.com" || password != "A123456789x")
		{
			window.open("login.html");
			alert("Invalid username or password");
		}
	}

	function passVal()
	{
		document.getElementById("result").innerHTML=localStorage.getItem('Selected');
		var Selected2=localStorage.getItem('Selected');
		
			if (Selected2 == "300")
			{
			window.open('1.html', "_self");
			}
			if (Selected2 == "Avengers: Endgame")
			{
			window.open('2.html', "_self");
			}
			if (Selected2 == "Batman - The Dark Knight")
			{
			window.open('3.html', "_self");
			}
			if (Selected2 == "Black Widow")
			{
			window.open('4.html', "_self");
			}
			if (Selected2 == "Coco")
			{
			window.open('5.html', "_self");
			}
			if (Selected2 == "Iron Man 3")
			{
			window.open('6.html', "_self");
			}
			if (Selected2 == "Man of Steel")
			{
			window.open('7.html', "_self");
			}
			if (Selected2 == "Minions: The Rise of Gru")
			{
			window.open('8.html', "_self");
			}
			if (Selected2 == "Spiderman: No Way Home")
			{
			window.open('9.html', "_self");
			}
			if (Selected2 == "The Expendables 2")
			{
			window.open('10.html', "_self");
			}
			if (Selected2 == "Wonder Woman")
			{
			window.open('11.html', "_self");
			}
			//if (Selected2 == "300")
			//{
			//window.open("https://www.youtube.com/embed/UrIbxk7idYA?autoplay=1&mute=1", "_self");
			//}	

	}