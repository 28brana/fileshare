const progressBar=document.getElementById('progress-bar');
const progressBg=document.getElementById('progress-bg');
const progressPercent =document.getElementById('progress-precent');

const uploadFile=()=>{
    
    console.log("File added uploading");

    if(files==""){
        showAlert("Field is empty");
        return ;
    }

    
    submitBtn.style.display='none';
    progressBar.style.display="block";

    const formData= new FormData();
    formData.append("myfile",files[0]);

    const xhr = new XMLHttpRequest();

    xhr.upload.onprogress =(event)=>{
        let percent = Math.round((100 * event.loaded) / event.total);
        progressPercent.innerText=percent+'%';
        progressBg.style.width=percent+"%";
    }

    xhr.upload.onerror = function () {
        // showToast(`Error in upload: ${xhr.status}.`);
        fileInput.value = ""; // reset the input
        progressBar.style.display="none";
        submitBtn.style.display='block';
        showAlert("Error in upload: "+xhr.status)
        console.log("Error",xhr.status);

    };


    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {

            // console.log("File is done",xhr.responseText);
            const {file:url}=JSON.parse(xhr.responseText);
            linkInput.value=url;
            fileUrl=url;
            progressBar.style.display="none";
            submitBtn.style.display='block';
            linkContainer.style.display='block';
            emailForm.style.display="flex";
            files="";
        }
      };
    xhr.open("POST","/api/files/");
    xhr.send(formData);
    
}