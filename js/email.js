const Fname = document.getElementById("Fname");
const Lname = document.getElementById("Lname");
const email = document.getElementById("email");
const phone = document.getElementById("PhoneNumber");
const mess = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name: ${Fname.value} ${Lname.value} Email: ${email.value} Phone Number: ${phone.value} Message: ${mess.value}`;
    console.log(bodyMessage)
    var param = {
        to_name:"Stanza Soft Customer Service Team",
        from_name:"Stanza Soft Customer Support",
        message:bodyMessage
    }

const service_Id = "service_y8nbvic";
 const template_Id = "template_x4w50ef"

    emailjs.send(service_Id,template_Id,param).then((res) =>{
            document.getElementById("Fname").value = "",
            document.getElementById("Lname").value = "",
            document.getElementById("email").value = "",
            document.getElementById("PhoneNumber").value = "",
            document.getElementById("message").value = ""

            console.log(res);
            alert("message is sent successfully");
        }

        
    ).catch((err)=>console.log(err));


  
}


