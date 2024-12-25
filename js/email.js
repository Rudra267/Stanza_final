const form = document.querySelector("form");
const Fname = document.getElementById("Fname");
const Lname = document.getElementById("Lname");
const email = document.getElementById("email");
const phone = document.getElementById("PhoneNumber");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name: ${Fname.value} ${Lname.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}`;
    console.log(bodyMessage)
    Email.send({
        Host : "smtp.mailendo.com",
        Username: "virtuoustesting123@gmail.com",
        Password: "29A655ED0E463B037D8BB165F9B36293AD26",
        To: 'nrudra550@gmail.com',
        From: "virtuoustesting123@gmail.com",
        Subject: "This is the subject",
        Body: bodyMessage
    }).then(
        message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
});
