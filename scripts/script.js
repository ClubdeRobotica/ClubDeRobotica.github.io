function OnClickFlag(aFlag){
    if(aFlag == 'Spanish'){
        document.getElementById("enNavBar").style.display = "none";
        document.getElementById("enNosotros").style.display = "none";
        document.getElementById("enCoresat").style.display = "none";
        document.getElementById("enARTI").style.display = "none";
        document.getElementById("enCoheteria").style.display = "none";
        document.getElementById("enDebris").style.display = "none";
        document.getElementById("enSumo").style.display = "none";
        document.getElementById("enRSL").style.display = "none";
        document.getElementById("enVRTD").style.display = "none";
        document.getElementById("enRSLuz").style.display = "none";
        document.getElementById("enProyectos").style.display = "none";
        document.getElementById("enParticipa").style.display = "none";
        document.getElementById("enReuniones").style.display = "none";
        document.getElementById("enRobots").style.display = "none";
        document.getElementById("enAero").style.display = "none";
        document.getElementById("enNovedades").style.display = "none";
        
        document.getElementById("spNavBar").style.display = "block";
        document.getElementById("spNosotros").style.display = "block";
        document.getElementById("spCoresat").style.display = "block";
        document.getElementById("spARTI").style.display = "block";
        document.getElementById("spCoheteria").style.display = "block";
        document.getElementById("spDebris").style.display = "block";
        document.getElementById("spSumo").style.display = "block";
        document.getElementById("spRSL").style.display = "block";
        document.getElementById("spSumo").style.display = "block";
        document.getElementById("spRSL").style.display = "block";
        document.getElementById("spProyectos").style.display = "block";
        document.getElementById("spParticipa").style.display = "block";
        document.getElementById("spReuniones").style.display = "block";
        document.getElementById("spRobots").style.display = "block";
        document.getElementById("spAero").style.display = "block";
        document.getElementById("spNovedades").style.display = "block";
    }
    else{
        document.getElementById("enNavBar").style.display = "block";
        document.getElementById("enNosotros").style.display = "block";
        document.getElementById("enCoresat").style.display = "block";
        document.getElementById("enARTI").style.display = "block";
        document.getElementById("enCoheteria").style.display = "block";
        document.getElementById("enDebris").style.display = "block";
        document.getElementById("enSumo").style.display = "block";
        document.getElementById("enRSL").style.display = "block";
        document.getElementById("enVRTD").style.display = "block";
        document.getElementById("enRSLuz").style.display = "block";
        document.getElementById("enProyectos").style.display = "block";
        document.getElementById("enParticipa").style.display = "block";
        document.getElementById("enReuniones").style.display = "block";
        document.getElementById("enRobots").style.display = "block";
        document.getElementById("enAero").style.display = "block";
        document.getElementById("enNovedades").style.display = "block";
        
        
        document.getElementById("spNavBar").style.display = "none";
        document.getElementById("spNosotros").style.display = "none";
        document.getElementById("spCoresat").style.display = "none";
        document.getElementById("spARTI").style.display = "none";
        document.getElementById("spCoheteria").style.display = "none";
        document.getElementById("spDebris").style.display = "none";
        document.getElementById("spSumo").style.display = "none";
        document.getElementById("spRSL").style.display = "none";
        document.getElementById("spVRTD").style.display = "none";
        document.getElementById("spRSLuz").style.display = "none";
        document.getElementById("spProyectos").style.display = "none";
        document.getElementById("spParticipa").style.display = "none";
        document.getElementById("spReuniones").style.display = "none";
        document.getElementById("spRobots").style.display = "none";
        document.getElementById("spAero").style.display = "none";
        document.getElementById("spNovedades").style.display = "none";
    }
}

var content = "";
function efectoCarrusell(){    
$(".content-item-car").animate({left : -645},3000,function () {
 $(".content-item-car").append("<div class='item-car' style='width:645px; position:relative; float:left; padding:20px'>"+$(".item-car:eq(0)").html()+"</div>");
 $(".item-car:eq(0)").remove();
 $(".content-item-car").css({left : 0});
 setTimeout(efectoCarrusell, 1000); 
 })     
}
$(document).ready(function (){
efectoCarrusell();//inicio del efecto
})
