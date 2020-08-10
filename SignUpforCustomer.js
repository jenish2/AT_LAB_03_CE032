const signupform = document.getElementById("signup-form");
const submitbutton = document.getElementById("signup");
submitbutton.addEventListener("click", (e) => {

    e.preventDefault();

    var uname = signupform.uname.value;
    var pass = signupform.password.value;
    var repass = signupform.repassword.value;
    var gender = signupform.gender.value;
    var mno = signupform.mno.value;
    var email = signupform.email.value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var letters = /^[A-Za-z]+$/;
    if (!(uname.value.match(letters))) {
        alert('Username must have alphabet characters only');
        uname.focus();
    }
    if (pass != repass) {
        alert("Passsword and Repassword are not matching!!");
        repass.focus();
    }
    if (!(email.value.match(mailformat))) {
        alert("You have entered an invalid email address!");
        email.focus();
    }
    alert("Data Added Successfully");

});