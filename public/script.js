const uploadContainer=document.getElementById('upload-container');
const icon=document.getElementsByClassName('icon')[0];
const browserBtn=document.getElementById('browse-btn');
const form=document.getElementById('form');
const fileInput=document.getElementById('file-input');
const linkInput=document.getElementById('link-input');
const clipBoard=document.getElementById('clipboard');
const submitBtn=document.getElementById('submit-btn');
const alertBox=document.getElementById('alert-box');
const linkContainer=document.getElementById('link-container');
const emailForm=document.getElementById('email-form');
const maxAllowedSize = 100 * 1024 * 1024; //100mb
let files="";
let fileUrl="";



uploadContainer.addEventListener('dragover',(e)=>{
    e.preventDefault();

    icon.classList.add('icon-animation');
    uploadContainer.classList.add('bg-changer');
})


uploadContainer.addEventListener('dragleave',(e)=>{
    icon.classList.remove('icon-animation');
    uploadContainer.classList.remove('bg-changer');

})

uploadContainer.addEventListener('drop',(e)=>{
    console.log("Dropped")
    e.preventDefault();
    icon.classList.remove('icon-animation');
    uploadContainer.classList.remove('bg-changer');
    showAlert("File is Dropped")
    files=e.dataTransfer.files;
    if(files.length >1){
        showAlert("You can't upload multiple files");
        files="";
        return
    }
})


browserBtn.addEventListener('click',()=>{
    fileInput.click();
})

fileInput.addEventListener('change',()=>{
    showAlert("File is Selected")

    if(fileInput.files[0].size > maxAllowedSize){
        // Show error
        showAlert("Max file size is 100MB");
        fileInput.value="";
        return ;
    }

    files=fileInput.files;
})



form.addEventListener('submit',(e)=>{
    e.preventDefault();

    if(files===""){
        showAlert("Please select the file");
        return;
    }

    uploadFile();


    // console.log(e);

})


clipBoard.addEventListener('click',()=>{
    linkInput.select();
    document.execCommand("copy");
    showAlert("Copied to clipboard");

})

let alertTimer;
function showAlert(msg){
    clearInterval(alertTimer);
    alertBox.innerText=msg;
    alertBox.classList.add('show-alert');
    alertTimer=setTimeout(()=>{
        alertBox.classList.remove('show-alert');
    },2000);
};