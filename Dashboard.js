function update_data1(){
    const text1 = document.getElementById("text-item1");
    const value = text1.value;
    const url = 'http://localhost/CaminoProjet/functions.php?func=set_val1&state=1&val=' + value;

    var request = new XMLHttpRequest();
    request.open('GET', url, false);
    request.send();
    if (request.status !== 200) {
        alert("error");
    }
}

function update_data2(){
    const text = document.getElementById("text-item2");
    const value = text.value;
    const url = 'http://localhost/CaminoProjet/functions.php?func=set_val1&state=2&val=' + value;

    var request = new XMLHttpRequest();
    request.open('GET', url, false);
    request.send();
    if (request.status !== 200) {
        alert("error");
    }
}

function update_data3(){
    const text = document.getElementById("text-item2");
    const value = text.value;
    const url = 'http://localhost/CaminoProjet/functions.php?func=set_val1&state=3&val=' + value;

    var request = new XMLHttpRequest();
    request.open('GET', url, false);
    request.send();
    if (request.status !== 200) {
        alert("error");
    }
}