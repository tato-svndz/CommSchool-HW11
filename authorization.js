let login = prompt("Enter Login");
let isCancelled = login;
if (login === "admin") {
    let pass = prompt("Enter Password");
    isCancelled = pass;
    if (pass === 'TheMaster') {
        alert("Welcome!");
    } else if (pass === '' || isCancelled == null) {
        alert('Cancelled');
    } else if (pass !== "TheMaster") {
        alert('Wrong Password');
    }
} else if (login === "" || isCancelled == null) {
    alert("Cancelled");
} else if (login !== "admin") {
    alert("I don't know you");
}