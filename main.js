let genera = document.querySelector('#genera'); //bottone che convaliderà acquisto generando un biglietto;
let annulla = document.querySelector('#annulla'); //bottone che annullerà l'acquisto e ripristinerà l'app
genera.addEventListener('click',function(){
    let nome = document.querySelector('#nome').value 
    document.querySelector('#name').innerHTML=nome

      //variabile nome acquirente
    let cognome = document.querySelector('#cognome').value
    document.querySelector('#sourname').innerHTML=cognome;
     //variabile cognome acquirente

    let eta =document.querySelector('#eta').value
     document.querySelector('#age').innerHTML=eta
     
      //variabile età acquirente
    let kilometri = document.querySelector('#km').value
     document.querySelector('#travel').innerHTML=kilometri
     //variabile tratta da percorrere in km

     let fumo = document.querySelector('#fumatore').value
     document.querySelector('#fumo').innerHTML='posto:'+" "+fumo

    let postoTreno = Math.floor(Math.random()*(1,50)+1);
    document.querySelector('#posto').innerHTML=postoTreno;
    //variabile che conterrà il posto prenotato

    let carrozzaTreno = Math.floor(Math.random()*(1,10)+1);
    document.querySelector('#carrozza').innerHTML= carrozzaTreno
    //variabile che conterrà il numero della carrozza 
   


    let prezzo = 0.21;
    let prezzoGiovani = prezzo/100*80;
    let anziani = prezzo/100*60;
    let totale 
        
        if((eta=='')||(km=='')||(nome=='')||(cognome=='')||(fumo=='')){
            alert('campo obbligatorio')
            location.reload()
        }
       
    if(eta < 18){
           
        totale = prezzoGiovani*kilometri
        document.querySelector('#total').innerHTML=totale.toFixed(2)+" "+"€";
        document.querySelector('#promotion').innerHTML='Promozione Young'
        
         
    } else if(eta >=18 && eta < 65 ){
        totale = prezzo*kilometri
        document.querySelector('#total').innerHTML=totale.toFixed(2)+" "+"€";
        document.querySelector('#promotion').innerHTML=' Nessuna Promozione '
      
    } else if(eta > 65){
       totale = anziani*kilometri
       document.querySelector('#total').innerHTML=totale.toFixed(2)+" "+"€";
        document.querySelector('#promotion').innerHTML='Promozione Old'
    }

    
        document.querySelector('#nome').value=""; 
        document.querySelector('#cognome').value=""; 
        document.querySelector('#eta').value=""; 
        document.querySelector('#km').value=""; 
        document.querySelector('#fumatore').value=""; 
   
})

/*
------------------------------------------------------------
------------------------------------------------------------
------------------------------------------------------------
*/

annulla.addEventListener('click',function(){
    alert('hai annullato l\'acquisto del biglietto');
    location.reload()
})