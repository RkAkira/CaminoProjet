let exec_php = function () {
    const request = new XMLHttpRequest();
    request.open('GET', 'http://localhost/demoajax/src/functions.php?func=get_val1', false);
    request.send();
    if (request.status === 200) {
        let titre1 = document.getElementById("id_titre1");
        let titre2 = document.getElementById("id_titre2");
        let titre3 = document.getElementById("id_titre3");
        titre1.innerHTML = request.responseText;
    }
    else{
        alert("error");
    }
}

setInterval(exec_php, 1000);