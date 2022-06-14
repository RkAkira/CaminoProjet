let exec_php = function () {
    const request = new XMLHttpRequest();
    request.open('GET', 'http://localhost/CaminoProjet/functions.php?func=get_val&acces=1', false);
    request.send();
    if (request.status === 200) {
        let titre1 = document.getElementById("id_titre1");
        titre1.innerHTML = request.responseText;
    }
    else{
        alert("error");
    }
}

let exec_php2 = function () {
    const request = new XMLHttpRequest();
    request.open('GET', 'http://localhost/CaminoProjet/functions.php?func=get_val&acces=2', false);
    request.send();
    if (request.status === 200) {
        let titre2 = document.getElementById("id_titre2");
        titre2.innerHTML = request.responseText;
    }
    else{
        alert("error");
    }
}

let exec_php3 = function () {
    const request = new XMLHttpRequest();
    request.open('GET', 'http://localhost/CaminoProjet/functions.php/functions.php?func=get_val&acces=2', false);
    request.send();
    if (request.status === 200) {
        let titre3 = document.getElementById("id_titre3");
        titre3.innerHTML = request.responseText;
    }
    else{
        alert("error");
    }
}

setInterval(exec_php, 1000);
setInterval(exec_php2, 1000);
setInterval(exec_php3, 1000);