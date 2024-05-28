function validation() {

    var n = document.student.name;
    var e = document.student.email;
    var t = document.student.telle;
    var g = document.student.gender;
    var d = document.student.date;
    var s = document.student.opt;
    var c = document.student.check;
    var p = document.student.pass;

    if (n.value.length <= 0) {
        alert("enter your name");
        n.style.borderColor = "red";
        return false;
    }

    if (e.value.length <= 0) {
        alert("enter your email");
        e.style.borderColor = "red";
        return false;
    }

    if (t.value.length == 0) {
        alert("enter your Number");
        t.style.borderColor = "red";
        return false;
    }

    if (g.value.length <= 0) {
        alert("enter your Gender");
        return false;
    }

    if (s.value == "select your choice") {
        alert("enter your course");
        s.style.borderColor = "red";
        return false;
    }

    if (d.value.length == "") {
        alert("enter your Bithdate");
        d.style.borderColor = "red";
        return false;
    }

    if (c.checked == false) {
        alert("accept term and conditions");
        return false;
    }
    if (p.length <= 3) {
        alert("enter your password");
        p.style.borderColor = "red";
        return false;
    }

    if (password == newpassword) {
        return true;
    }
    else {
        alert("password not match");
        d.style.borderColor = "red";
        return false;
    }
}

    document.getElementById('setdata').addEventListener("click",()=>{
        localStorage.setItem("name",JSON.stringify(document.getElementById("na").value))
    })
    document.getElementById('setdata').addEventListener("click",()=>{
        localStorage.setItem("email",JSON.stringify(document.getElementById("em").value))
    })
    document.getElementById('setdata').addEventListener("click",()=>{
        localStorage.setItem("number",JSON.stringify(document.getElementById("num").value))
    })
    document.getElementById('setdata').addEventListener("click",()=>{
        localStorage.setItem("bithdate",JSON.stringify(document.getElementById("birth").value))
    })
    document.getElementById('setdata').addEventListener("click",()=>{
        localStorage.setItem("password",JSON.stringify(document.getElementById("p").value))
    })
    
   


