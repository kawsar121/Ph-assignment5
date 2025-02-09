document.getElementById('btnDonate').addEventListener('click', function(event){
    event.preventDefault();
   const input =  document.getElementById('input').value;
   const inputFloat = parseFloat(input);
   const stat = document.getElementById('stat').innerText;

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

   //Equation total
   const equal = inputFloat + statFloat;
   const lol = mainBalaceFloat-input;
   document.getElementById('stat').innerText = equal;
   document.getElementById('mainBalance').innerText = lol
   console.log(lol,equal)

    const pp =document.getElementById('pp');
    pp.innerText = `donet : ${inputFloat}`
    
})