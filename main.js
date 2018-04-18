//Opening Form box
function open_form_box()
{
	document.getElementById("form-box").style.display = "block";
}

//Closing Form box
function close_form_box()
{
	document.getElementById("form-box").style.display = "none";
}

function contact_card(contacts)
{
	var cards = "";
	
	for (i = 0; i < contacts.length; i++)
	{
		cards += "<div class='card'> <h5 class='title'>" + contacts[i].name + "</h5> <h5>Mobile: " + contacts[i].mobile + "</h5> <h5>Email: " + contacts[i].email + "</h5> <button id='c-edit' class='btn-sm green-bg' data-id = "+ i +">Edit</button> <button id='c-trash' class='btn-sm red-bg right'>Trash</button></div>";
	}
	
	document.getElementById("card-list").innerHTML = cards;
}


(function () {
	var contacts = new Array();
	
	contact_card(contacts);
	
	document.getElementById("save-contact").onclick = function(){ 
		var msg = document.getElementById("msg");
		var cname = document.getElementById("c-fname").value;
		var cphone = document.getElementById("c-phone").value;
		var cemail = document.getElementById("c-email").value;
		
		if (!cname || !cphone || !cemail)
		{
			msg.innerHTML = "Please fill in all fields";
		}
		else  
		{
			msg.innerHTML = "";
			var new_contact = {name: cname, mobile: cphone, email: cemail};
			
			document.getElementById("c-fname").value = "";
			document.getElementById("c-phone").value = "";
			document.getElementById("c-email").value = "";
			
			contacts.push(new_contact);
			
			contact_card(contacts);
			
			close_form_box();
		}
	};
    
    
})();

