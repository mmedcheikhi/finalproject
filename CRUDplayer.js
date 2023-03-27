const submit = document.querySelector(".button");
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

let DataPlayer;
let tmp;
let mod = 'creat';

if (localStorage.player != null) {
    DataPlayer = JSON.parse(localStorage.player)
} else {
    DataPlayer = [];
}

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
        if(mod === 'update'){
        DataPlayer[ tmp ] = NewPlayer;
        localStorage.setItem('player', JSON.stringify(DataPlayer))
        clearinput();
        readdata();
        mod = 'creat';
        submit.innerHTML = 'Creat'
        }

}

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
        <td>${DataPlayer[i].prt}/10</td>
        <td>${DataPlayer[i].salary}$</td>
        <td>${DataPlayer[i].pnum}</td>
        <td>${DataPlayer[i].psw}</td>
        <td><button onclick="deletedata(${i})" id="delete">Delete</button></td>
        <td><button onclick="updatedata(${i})" id="update">Update</button></td>
        </tr> `
    }
    document.getElementById('tbody').innerHTML = table;
}

function deletedata(i){
    DataPlayer.splice(i,1);
    localStorage.player = JSON.stringify(DataPlayer);
    readdata()
}

readdata()

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