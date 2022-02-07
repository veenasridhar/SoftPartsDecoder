function partNumber(){
   document.getElementById("solution").style.display = "block";
    let ValveModel = document.getElementById("ValveModel").value;
    let ValveSize = document.getElementById("ValveSize").value;
    let YokeBoss = document.getElementById("YokeBoss").value;
    let Packing = document.getElementById("Packing").value;
    console.log(ValveModel);
    console.log(ValveSize);
    console.log(YokeBoss);
    console.log(Packing);
            document.getElementById("model").innerHTML =ValveModel;
            document.getElementById("size").innerHTML =ValveSize;
            document.getElementById("packing").innerHTML = Packing;
    if (ValveModel == "EZ" && ValveSize == "1" && YokeBoss == "2 1/8" && Packing == "PTFE"){
            document.getElementById("gasketpn").innerHTML = "RGASKETX162";
            document.getElementById("packingpn").innerHTML = "RPACKX00012";    
    } 
    else if (ValveModel == "EZ" && ValveSize == "2" && YokeBoss == "2 13/16" && Packing == "PTFE"){
        document.getElementById("gasketpn").innerHTML= "RGASKETX182";
        document.getElementById("packingpn").innerHTML = "RPACKX00022";
    }
    else{
        document.getElementById("gasketpn").innerHTML = "";
        document.getElementById("packingpn").innerHTML = "";
    }
} 

