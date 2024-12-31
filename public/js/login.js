
document.querySelector("#loginbtn").addEventListener("click",()=>{
    console.log("hello")
})

var login =() =>
{
    var accid = $("#userId").val();
    var pwd = $("$accountPassword").val();
    var userdetails={};
    userdetails.username = accid;
    userdetails.password = pwd;

    axios.post('/get/userdetails/',userdetails).then((result) => {
        console.log(result)
    }).catch((err) => {
        console.log(err)
    });
}

var fun =()=>
{
    console.log("hjello");
}