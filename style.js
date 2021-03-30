function slide() {
    var tanyaImg = document.getElementById("tanya-img");
    var tanya = document.getElementById("tanya");
    var johnImg = document.getElementById("john-img");
    var john = document.getElementById("john");

    if (tanyaImg.style.display !== "none" && tanya.style.display !== "none") {
        
        johnImg.style.display = "block";
        john.style.display = "block";
        tanyaImg.style.display = "none";
        tanya.style.display = "none";
   
    } else {
       
        johnImg.style.display = "none";
        john.style.display = "none";
        tanyaImg.style.display = "block";
        tanya.style.display = "block";
    }
}