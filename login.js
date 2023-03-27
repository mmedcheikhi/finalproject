let DataPlayer;
let DataCoach;

DataPlayer = JSON.parse(localStorage.player)
DataCoach = JSON.parse(localStorage.coach)



login.onclick = function() {

    let message = 'incorrect information !';

    var select = document.getElementById('select').value
	var name = document.getElementById('name').value
	var password = document.getElementById('password').value



    if(select == "player"){
        for(var i = 0; i < DataPlayer.length; i++) {
            if(name == DataPlayer[i].lname && password == DataPlayer[i].psw) {
        window.location = "playerhome.html";
    }}

    document.getElementById('error').innerHTML = message;

    }
    
    


    if(select == "coach"){
        for(var i = 0; i < DataCoach.length; i++) {
            if(name == DataCoach[i].lname && password == DataCoach[i].psw) {
        window.location = "coachhome.html";
    }}

    document.getElementById('error').innerHTML = message;
    
    }



	if (select == "owner" && name == "OWNER" && password == "owner123" ){
        window.location = "ownerhome.html";
	}else{

        document.getElementById('error').innerHTML = message;

    }


}