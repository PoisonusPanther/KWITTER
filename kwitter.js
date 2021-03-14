function add_user(){
    username = document.getElementById("Login").value;
    localStorage.setItem("Username", username);
    window.location = "kwitter_room.html";
}

