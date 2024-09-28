
 const uname = document.querySelector("#uname") 
const mail = document.querySelector("#mail")
const pass = document.querySelector("#pass")
const cpass = document.querySelector("#cpass")
const mobile = document.querySelector("#mobile")

function validate(){
	if(uname.value === "" || uname.value == null){
		var a= document.querySelector("#show")
		a.innerText = "Username is Required!"
		return false
	}	
}