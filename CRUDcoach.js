const submit = document.querySelector(".button");
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

let DataCoach;
let tmp;
let mod = 'creat';

if (localStorage.coach != null) {
    DataCoach = JSON.parse(localStorage.coach)
} else {
    DataCoach = [];
}

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
        localStorage.setItem('coach', JSON.stringify(DataCoach))
        console.log(DataCoach);
        clearinput()
        readdata();
        }
        if(mod === 'update'){
        DataCoach[ tmp ] = NewCoach;
        localStorage.setItem('coach', JSON.stringify(DataCoach))
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
    tec.value = '';
    salary.value = '';
    pnum.value = '';
    psw.value = '';
}


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
        <td>${DataCoach[i].tec}</td>
        <td>${DataCoach[i].salary}$</td>
        <td>${DataCoach[i].pnum}</td>
        <td>${DataCoach[i].psw}</td>
        <td><button onclick="deletedata(${i})" id="delete">Delete</button></td>
        <td><button onclick="updatedata(${i})" id="update">Update</button></td>
        </tr> `
    }
    document.getElementById('tbody').innerHTML = table;
}

function deletedata(i){
    DataCoach.splice(i,1);
    localStorage.coach = JSON.stringify(DataCoach);
    readdata()
}

readdata()

function updatedata(i){
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