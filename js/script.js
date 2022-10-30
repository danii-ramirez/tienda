function showMenu() {
    var x = document.getElementById("nav-menu");
    if (x.className === "nav-menu") {
        x.className = "d-none"
    } else {
        x.className = "nav-menu"
    }
}
