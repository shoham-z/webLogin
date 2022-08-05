function pressed() {
    let name = document.getElementById('input').getElementsByClassName("name").item(0).value;
    let password = document.getElementById('input').getElementsByClassName("pass").item(0).value;
    document.getElementById('debug-output').innerHTML = name + " haha      " + password;
}