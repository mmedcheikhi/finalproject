# SC50 Final Project

## Video Demo: https://www.youtube.com/watch?v=IHm57hN-2io&t=89s

## Description: Website application for basketball team management

## Developed by : CHEIKHI Mohamed

## Framed by : Sc50

#
#
## Introduction :

Basketball is among the most popular sports, And the communication between players and coaches is the essence of winning and brilliance for the team, and Herein lies the importance of this project, which :

1 - Create a special space between the players, coaches and the team owner.

2 - More organization for team.

3 - More Transparency.



#
# 1 Home Page

This page contains a lot of information about me and also the project, and I created it specifically for the presentation that was requested from me.

This page is attached with a button that will transferred you directly to the Login page.



#
# 2 Login Page

this page requests the user to choose his UserType (Player or coach or Team Owner) and also enter his UserName & his Password

Then the recorded data is processed, i used JavaScript to creat DataForPlayer and DataForCoach in The localStorage..

That means if the user really exists, he logs directly into his own space. But in case of wrong data mediately a message appears indicating that the information was incorrect.



#
# 3 Players Space ( Home )

This page is only for players, they can enter it after obtaining A valid Username & Password from the coach.

if (select == "player") {

    for(var i = 0; i < DataPlayer.length; i++) {

        if(name == DataPlayer[i].lname && password == DataPlayer[i].psw) {

        window.location = "playerhome.html";

    }}

    document.getElementById('error').innerHTML = message;
}

#
In the top of The page there is a button for Log-out, by only one click automaticly takes the user back to the Login page.

This page also provides the player to View PlayersList & CoachesList




## Players List :

This page reads the PlayerData contained in the localStorage and shows it in the form of a table containing all the Players Informations in an organized and clear manner.

let DataPlayer;

if (localStorage.player != null) {

    DataPlayer = JSON.parse(localStorage.player)
} else {

    DataPlayer = [];

}
#



And I did it through by a function I named it ReadData() using JavaScript 

function readdata() {

    let table = '';
    for (let i = 0; i < DataPlayer.length; i++) {
        table += `

        <tr>
        <td>${i+1}</td>
        <td>${DataPlayer[i].fname}</td>
        <td>${DataPlayer[i].lname}</td>
        <td>${DataPlayer[i].bday}</td>
        <td>${DataPlayer[i].nty}</td>
        <td>${DataPlayer[i].prt}/10</td> //Player ratting
        <td>${DataPlayer[i].salary}$</td>
        <td>${DataPlayer[i].pnum}</td>
        </tr> `
    }
    document.getElementById('tbody').innerHTML = table;

}



## Coaches List :

This page reads the CoachData contained in the localStorage and shows it in the form of a table containing all the Coaches Informations in an organized and clear manner.

let DataCoach;
if (localStorage.coach != null) {

    DataCoach = JSON.parse(localStorage.coach)

} else {

    DataCoach = [];

}
#



And I did it through by a function I named it ReadData() using JavaScript

function readdata() {

    let table = '';
    for (let i = 0; i < DataCoach.length; i++) {
        table += `

        <tr>
        <td>${i+1}</td>
        <td>${DataCoach[i].fname}</td>
        <td>${DataCoach[i].lname}</td>
        <td>${DataCoach[i].bday}</td>
        <td>${DataCoach[i].nty}</td>
        <td>${DataCoach[i].tec}</td> //Technical job
        <td>${DataCoach[i].salary}$</td>
        <td>${DataCoach[i].pnum}</td>
        </tr> `
    }
    document.getElementById('tbody').innerHTML = table;

}


#
# 4 Coaches Space ( Home2 )

This page is only for Coaches, they can enter it after obtaining A valid Username & Password from the Team owner.

In the top of The page there is a button for Log-out.

This page provides the coach to View PlayersList & CoachesList and also Add/Mod/Del Players.



# Player Management ( Add/Mod/Del Players ) :

## This page is divided into two parts :

the first for Creating new players, This is done by entering all the information (firstname, lastname, salary...) than pressing on Submit Button.

submit.onclick = (e) => {

    e.preventDefault();
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const bday = document.getElementById("bday").value;
    const nty = document.getElementById("nty").value;
    const prt = document.getElementById("prt").value;
    const salary = document.getElementById("salary").value;
    const pnum = document.getElementById("pnum").value;
    const psw = document.getElementById("psw").value;

}



Immediately after that, the system ADD a new player in localStorage.player

submit.onclick = function() {

        let NewPlayer = {
            fname: fname.value,
            lname: lname.value,
            bday: bday.value,
            nty: nty.value,
            prt: prt.value,
            salary: salary.value,
            pnum: pnum.value,
            psw: psw.value,
        }
        if(mod === 'creat'){
            DataPlayer.push(NewPlayer);
        localStorage.setItem('player', JSON.stringify(DataPlayer))
        console.log(DataPlayer);
        clearinput()
        readdata();
        }

}



the second part is for modify and delete Players, This part contains a table with players information attached at the end by two buttons :

the first button for DELETE, It allows to remove a player from localStorage.player by only one click.

function deletedata(i){

    DataPlayer.splice(i,1);
    localStorage.player = JSON.stringify(DataPlayer);
    readdata()

}



the second button for UPDATE, And when you click on it, all the information about the player will appear in the inputs of the first part than all the informations can be changed as desired..
and also Immediately the CREAT Button changes to UPDATE Button, Which in turn after clicking on it, changes the Player data and does NOT ADD a new one.



if(mod === 'update'){

        DataPlayer[ tmp ] = NewPlayer;
        localStorage.setItem('player', JSON.stringify(DataPlayer))
        clearinput();
        readdata();
        mod = 'creat';
        submit.innerHTML = 'Creat'

}


function updatedata(i){

    fname.value = DataPlayer[i].fname;
    lname.value = DataPlayer[i].lname;
    bday.value = DataPlayer[i].bday;
    nty.value = DataPlayer[i].nty;
    prt.value = DataPlayer[i].prt;
    salary.value = DataPlayer[i].salary;
    pnum.value = DataPlayer[i].pnum;
    psw.value = DataPlayer[i].psw;
    submit.innerHTML = 'Update';
    tmp = i;
    mod = 'update';

}



I also added a function in order to remove the written informations immediately after CREATING or UPDATING Players.

function clearinput() {

    fname.value = '';
    lname.value = '';
    bday.value = '';
    nty.value = '';
    prt.value = '';
    salary.value = '';
    pnum.value = '';
    psw.value = '';

}



#
# 5 Team Owner space ( home3 )

This page is only for The team owner, There is only one T-Owner so there is only one way to enter his space by using : OWNER as UserName & owner123 as Password.


if (select == "owner" && name == "OWNER" && password == "owner123" ){

    window.location = "ownerhome.html";

}else{

    document.getElementById('error').innerHTML = message;
}
#


In the top of The page there is a button for Log-out.

This page provides the T-Owner to View PlayersList & CoachesList and also Add/Mod/Del coaches.


## coach management ( Add/Mod/Del coaches ) :
## This page is divided into two parts :

the first for Creating new coach, This is done by entering all the information (firstname, lastname, salary...) than pressing on CREAT Button.

submit.onclick = (e) => {

    e.preventDefault();
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const bday = document.getElementById("bday").value;
    const nty = document.getElementById("nty").value;
    const tec = document.getElementById("tec").value;
    const salary = document.getElementById("salary").value;
    const pnum = document.getElementById("pnum").value;
    const psw = document.getElementById("psw").value;

}



Immediately after that, the system ADD a new Coach in localStorage.coach

submit.onclick = function() {

        let NewCoach = {
            fname: fname.value,
            lname: lname.value,
            bday: bday.value,
            nty: nty.value,
            tec: tec.value,
            salary: salary.value,
            pnum: pnum.value,
            psw: psw.value,
        }
        if(mod === 'creat'){
            DataCoach.push(NewCoach);
        localStorage.setItem('Coach', JSON.stringify(DataCoach))
        console.log(DataCoach);
        clearinput()
        readdata();
        }

}



the second part is for modify and delete coaches, This part contains a table with all coaches informations attached at the end by two buttons :

the first button is DELETE, It allows to remove a Coach from localStorage.coach by only one click.

function deletedata(i){

    DataCoach.splice(i,1);
    localStorage.coach = JSON.stringify(DataCoach);
    readdata()

}



the second button for UPDATE, And when you click on it, all the information about the coach that you choosed will appear in the inputs of the first part than all the informations can be changed as desired..
and also Immediately the CREAT Button changes to UPDATE Button, Which in turn after clicking on it, changes the Coach data and does NOT ADD a new one.

if (mod === 'update') {

        DataCoach[ tmp ] = NewCoach;
        localStorage.setItem('coach', JSON.stringify(DataCoach))
        clearinput();
        readdata();
        mod = 'creat';
        submit.innerHTML = 'Creat'

}

function updatedata(i) {

    fname.value = DataCoach[i].fname;
    lname.value = DataCoach[i].lname;
    bday.value = DataCoach[i].bday;
    nty.value = DataCoach[i].nty;
    tec.value = DataCoach[i].tec;
    salary.value = DataCoach[i].salary;
    pnum.value = DataCoach[i].pnum;
    psw.value = DataCoach[i].psw;
    submit.innerHTML = 'Update';
    tmp = i;
    mod = 'update';

}


I also added a function in order to remove the written informations immediately after CREATING or UPDATING coaches.

function clearinput() {

    fname.value = '';
    lname.value = '';
    bday.value = '';
    nty.value = '';
    tec.value = '';
    salary.value = '';
    pnum.value = '';
    psw.value = '';

}


#
#
## Contact me:
Email : mmed.gaara@gmail.com
##
Phone Number : +212622666232