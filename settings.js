//Save the nickname
function Save(){
	var input = document.getElementById("value1");
    localStorage.setItem("key1", input.value);
}

//Load the nickname from local storage
function Load(){
    var key1 = localStorage.getItem("key1");
    document.getElementById("nicknameonpage").innerHTML = localStorage.getItem("key1");
}

//Restore to default
function Default(){
localStorage.removeItem("key1");
}