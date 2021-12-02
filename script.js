function sendMail(params){
   var tempParams = {
from_name:document.getElementById("fromName").value,
to_name:document.getElementById("toName").value,



email:document.getElementById("mail").value,
tele:document.getElementById("tel").value,
message:document.getElementById("msg").value,
   }
emailjs.send('service_y1o3oyf','template_x7i7tzd',tempParams)
.then(function(res){
console.log("succes",res.status);

})
}





