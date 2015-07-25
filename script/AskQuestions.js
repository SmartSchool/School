function inputFocus(i){
    if(i.value==i.defaultValue){ i.value=""; i.style.color="#000"; }
}
function inputBlur(i){
    if(i.value==""){ i.value=i.defaultValue; i.style.color="#888"; }
}

function enable()
{
var x = document.getElementById("email");
var y = document.getElementById("pass");
if(x.value != "" && y.value != "")
{
$('.signinbtn').prop('disabled', false);
}
else
{
$('.signinbtn').prop('disabled', true);
}
document.getElementById("demo").innerHTML = (x.value != "" && y.value != "");
}