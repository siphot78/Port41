function sendMail(params){
     var tempParams ={
         from_name : document.getElementById("fromName").value,
         to_name : document.getElementById("toName").value,
         message : document.getElementById("msg").value, 

     }
     emailjs.send('service_0c2y5xe', "template_dun2awq", tempParams)  
     .then(function(res){
         alert("email sent", res.status);
     })
}