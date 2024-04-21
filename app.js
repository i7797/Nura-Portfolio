function myButton() {
    let myMenu=document.getElementById('menu');
    if(myMenu.style.display==='none'){
        myMenu.style.display='block';
    }
    else{
        myMenu.style.display='none';
    }
    
}
/*
function sendEmail(){
  var params ={
    name:document.getElementById("name").value,
   email:document.getElementById("email").value,
  message:document.getElementById("message").value,

  };

}

 const serviceID ="service_l62o2rm";
 const templateID ="template_diip4bi";
 

 emailjs.send(serviceID,templateID)
 .then((res)=>{


    document.getElementById("name").value ="",
   document.getElementById("email").value ="",
   document.getElementById("message").value ="",
   console.log(res);
   alert("done")
 

 })
 .catch((err)=>console.log(err));*/