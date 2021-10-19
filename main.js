function LogIn(){
    nameofp1 = document.getElementById("p1n").value;
    nameofp2 = document.getElementById("p2n").value;

    localStorage.setItem("name1", nameofp1);
    localStorage.setItem("name2", nameofp2);

    window.location = "question.html";
}