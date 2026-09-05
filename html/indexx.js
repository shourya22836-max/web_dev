function validateForm(event) {
    event.preventDefault();
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    if (name == "" || email == "" || message == "") {
        alert("First and Last Name check");
        return false;
    }
    return true;
}