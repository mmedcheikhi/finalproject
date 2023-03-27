let DataPlayer;
if (localStorage.player != null) {
    DataPlayer = JSON.parse(localStorage.player)
} else {
    DataPlayer = [];
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
        </tr> `
    }
    document.getElementById('tbody').innerHTML = table;
}

readdata()