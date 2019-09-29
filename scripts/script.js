function OnClickFlag(aFlag){
    if(aFlag == 'Spanish'){
        document.getElementById("enNosotros").style.display = "none";
        document.getElementById("spNosotros").style.display = "block";
    }
    else{
        document.getElementById("enNosotros").style.display = "block";
        document.getElementById("spNosotros").style.display = "none";
    }
}
