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
		if (displaytext == " ")
		{
			alert("Select a movie")
		}
		
    }
	function validate() {
		var Ename = document.frmInput.txtName.value;
		var name = Ename.trim();
		var phone = document.frmInput.txtPhoneNum.value;
		var email = document.frmInput.txtEmail.value;
		var letters = /^[a-zA-Z ]*$/;
		var phone_format = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
		var email_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if(name === "" || name.length < 6 || !name.match(letters)){
			alert( "Please provide your name corretly, more than 6 letters and only alphabet!" );
			document.frmInput.txtName.focus();
			return false;
		}
		if(phone === "" || !phone.match(phone_format)) {
			alert( "Please provide a valid phone number" );
			document.frmInput.txtPhoneNum.focus();
			return false;
		}
		if(email === "" || !email.match(email_format)) {
			alert( "Please provide a valid email" );
			document.frmInput.txtEmail.focus();
			return false;
		}
	}
	/*function ValidateEmail(txtEmail) 
	{
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(frmInput.txtEmail.value))
		{
			return (true)
		}
			alert("You have entered an invalid email address!")
    return (false)
	}*/
	
	function login()
	{
        var l=document.getElementById("usrname").value;
		var p=document.getElementById("psw").value;
		
		
		if (l == "ibn@gmail.com" && p == "A123456789x")
		{
			document.write(l);
			location.replace("Index.html")
		}
		else
		{
			alert("Invalid username or password")
			window.open("Java_login.html", "_self");
		}
	}

	function passVal()
	{
		document.getElementById("result").innerHTML=localStorage.getItem('Selected');
		var Selected2=localStorage.getItem('Selected');
		
			if (Selected2 == "300")
			{
			window.open("https://www.youtube.com/embed/UrIbxk7idYA?autoplay=1&mute=1", "_self");
			}	
			else if (Selected2 == "Avengers: Endgame")
			{
			window.open("https://www.youtube.com/embed/TcMBFSGVi1c?autoplay=1&mute=1", "_self");
			}
			else if (Selected2 == "Batman - The Dark Knight")
			{
			window.open("https://www.youtube.com/embed/kmJLuwP3MbY?autoplay=1&mute=1", "_self");
			}
			else if (Selected2 == "Black Widow")
			{
			window.open("https://www.youtube.com/embed/ybji16u608U?autoplay=1&mute=1", "_self");
			}
			else if (Selected2 == "Coco")
			{
			window.open("https://www.youtube.com/embed/Rvr68u6k5sI?autoplay=1&mute=1", "_self");
			}
			else if (Selected2 == "Iron Man 3")
			{
			window.open("https://www.youtube.com/embed/Ke1Y3P9D0Bc?autoplay=1&mute=1", "_self");
			}
			else if (Selected2 == "Man of Steel")
			{
			window.open("https://www.youtube.com/embed/vGrBV1C4hgo?autoplay=1&mute=1", "_self");
			}
			else if (Selected2 == "Minions: The Rise of Gru")
			{
			window.open("https://www.youtube.com/embed/6DxjJzmYsXo?autoplay=1&mute=1", "_self");
			}
			else if (Selected2 == "Spiderman: No Way Home")
			{
			window.open("https://www.youtube.com/embed/rt-2cxAiPJk?autoplay=1&mute=1", "_self");
			}
			else if (Selected2 == "The Expendables 2")
			{
			window.open("https://www.youtube.com/embed/ip_CYHdyUBs?autoplay=1&mute=1", "_self");
			}
			else if (Selected2 == "Wonder Woman")
			{
			window.open("https://www.youtube.com/embed/1Q8fG0TtVAY?autoplay=1&mute=1", "_self");
			}
	}