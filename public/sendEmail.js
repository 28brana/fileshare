const send=document.getElementById('send');
const yourEmail=document.getElementById('your-email');
const receiverEmail=document.getElementById('receiver-email');

function validateEmail(email) 
{
    if(!email){
        showAlert("Email field is empty");
        return true;
    }
    var re = /\S+@\S+\.\S+/;
    return !re.test(email);
}


send.addEventListener('click',(e)=>{
    console.log("Send");
   

    if(validateEmail(yourEmail.value) || validateEmail(receiverEmail.value)){
        // console.log("Field is empty");
        showAlert("Email is not valid");
        return 
    }
    const formData={
        uuid:fileUrl.split("/").splice(-1, 1)[0],
        emailTo:yourEmail.value,
        emailFrom:receiverEmail.value
    };

    fetch('/api/files/send', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
          if (data.success) {
              
            showAlert("Email Sent");
            linkContainer.style.display='none';
            emailForm.style.display='none';
          }
        }).catch(err=>{
            console.log(err)
        })

    // fetch()
})

