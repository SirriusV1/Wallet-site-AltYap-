function arttir(){
 
    var sonuc=document.getElementById("sonuc");
    if(sonuc.value<5)
    sonuc.value=Number(sonuc.value)+1;
    }
     
    function azalt(){
     
    var sonuc=document.getElementById("sonuc");
    if(sonuc.value>1)
    sonuc.value=Number(sonuc.value)-1;
    }