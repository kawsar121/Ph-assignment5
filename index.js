document.getElementById('btnDonate').addEventListener('click', function(event){
    event.preventDefault();
   const input =  document.getElementById('input').value;
   const inputFloat = parseFloat(input);

   


   const stat = document.getElementById('stat').innerText;
   
   
    //State getting
   const statFloat = parseFloat(stat)   ;

    /*rules*/
    if (!/^\d+(\.\d+)?$/.test(input) || isNaN(inputFloat) || inputFloat <= 0) {
        alert("Please enter a valid donation amount (numbers only).");
        return;
    }
   

   // Main Balance getting
   const mainBalace = document.getElementById('mainBalance').innerText;
   const mainBalaceFloat = parseFloat(mainBalace);

    /*rules*/
   if (inputFloat > mainBalaceFloat) {
    alert("Not enough balance!");
    return;
    }

   //Equation total
   const equal = inputFloat + statFloat;
   const mainEqual = mainBalaceFloat-inputFloat;
   document.getElementById('stat').innerText = equal;
   document.getElementById('mainBalance').innerText = mainEqual;

    //Input field khali korar joono
   document.getElementById('input').value = ""


   //History

   document.getElementById('historyBtn').addEventListener('click', function(){
    document.getElementById('main').classList.add('hidden');

    document.getElementById('historyMain').classList.remove('hidden');
    
    
   })
    const p = document.createElement('p');
    p.innerHTML = `<strong> Donation AMount : </strong> ${inputFloat} Tk is Donated for famine-2024 at Feni, Bangladesh. <br> <strong>Donation Date :</strong> ${new Date()}`;
    const dd =document.getElementById('historyContainer').appendChild(p);


})


   /* Card 2 */
   document.getElementById('btnDonate2').addEventListener('click', function(event){
    event.preventDefault();
    const input =  document.getElementById('input2').value;
    const inputFloat = parseFloat(input);
    const stat = document.getElementById('stat2').innerText;
 //    document.getElementById('ok').classList.remove('hidden');
     //State getting
    const statFloat = parseFloat(stat);
   
    /*rules*/
    if (isNaN(inputFloat) || inputFloat <= 0) {
     alert("Please enter a valid donation amount.");
     return;
     }
    
 
    // Main Balance getting
    const mainBalace = document.getElementById('mainBalance').innerText;
    const mainBalaceFloat = parseFloat(mainBalace);
 
     /*rules*/
     if (!/^\d+(\.\d+)?$/.test(input) || isNaN(inputFloat) || inputFloat <= 0) {
        alert("Please enter a valid donation amount (numbers only).");
        return;
    }
    if (inputFloat > mainBalaceFloat) {
        alert("Not enough balance!");
        return;
        }
    
    //Equation total
    const equal = inputFloat + statFloat;
    const mainEqual = mainBalaceFloat-inputFloat;
    document.getElementById('stat2').innerText = equal;
    document.getElementById('mainBalance').innerText = mainEqual;
 
 
    document.getElementById('input2').value = ""
    //History
 
    document.getElementById('historyBtn').addEventListener('click', function(){
     document.getElementById('main').classList.add('hidden');
 
     document.getElementById('historyMain').classList.remove('hidden');
     
    })

    
    const p = document.createElement('p');
    p.innerHTML = `<strong> Donation AMount : </strong> ${inputFloat} TK is Donated for Flood Relief in Feni,Bangladesh <br> <strong>Donation Date :</strong> ${new Date()}`;
    const dd =document.getElementById('historyContainer').appendChild(p);
 
   })




                /* Card 3 */
   document.getElementById('btnDonate3').addEventListener('click', function(event){
    event.preventDefault();
    const input =  document.getElementById('input3').value;
    const inputFloat = parseFloat(input);
    const stat = document.getElementById('stat3').innerText;
 //    document.getElementById('ok').classList.remove('hidden');
     //State getting
    const statFloat = parseFloat(stat);
   
    /*rules*/
    if (isNaN(inputFloat) || inputFloat <= 0) {
     alert("Please enter a valid donation amount.");
     return;
     }
    
 
    // Main Balance getting
    const mainBalace = document.getElementById('mainBalance').innerText;
    const mainBalaceFloat = parseFloat(mainBalace);
 
     /*rules*/
     if (!/^\d+(\.\d+)?$/.test(input) || isNaN(inputFloat) || inputFloat <= 0) {
        alert("Please enter a valid donation amount (numbers only).");
        return;
    }
 
    if (inputFloat > mainBalaceFloat) {
        alert("Not enough balance!");
        return;
        }
    

    //Equation total
    const equal = inputFloat + statFloat;
    const mainEqual = mainBalaceFloat-inputFloat;
    document.getElementById('stat3').innerText = equal;
    document.getElementById('mainBalance').innerText = mainEqual;
 
 
    document.getElementById('input3').value = ""
    //History
 
    document.getElementById('historyBtn').addEventListener('click', function(){
     document.getElementById('main').classList.add('hidden');
 
     document.getElementById('historyMain').classList.remove('hidden');
     
    })


    const p = document.createElement('p');
    p.innerHTML = `<strong> Donation AMount : </strong> ${inputFloat} TK is Donated for Aid for Injured in the Quota Movement, Bangladesh <br> <strong>Donation Date :</strong> ${new Date()}`;
    const dd =document.getElementById('historyContainer').appendChild(p);
 
   })





   