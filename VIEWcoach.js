let DataCoach;
if (localStorage.coach != null) {
    DataCoach = JSON.parse(localStorage.coach)
} else {
    DataCoach = [];
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
        </tr> `
    }
    document.getElementById('tbody').innerHTML = table;
}

readdata()