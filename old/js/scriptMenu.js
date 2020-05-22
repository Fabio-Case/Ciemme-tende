function menuBurger(){
    var x = document.getElementsByClassName("lista");
    var y = document.getElementById("drop");
    if (x[0].style.display === "block") {
        document.getElementById("burger").innerHTML = "Menù &#9776;";
        for(var i = 0; i < x.length; i++)
            x[i].style.display = "none";
        y.style.display = "none";
    } else {
        document.getElementById("burger").innerHTML = "Chiudi &#10006;";
        for(var i = 0; i < x.length; i++)
            x[i].style.display = "block";
        y.style.display = "block";
    }
}


