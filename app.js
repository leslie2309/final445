function printEvenNumbers() {
    "use strict";
    const outputStr = document.getElementById('output')
    const outputStr2 = document.getElementById('output2')
  
    var i, j, c, numone, numtwo,count;
    var arr = [];
    count = 0;
    //get the numone and numtwo value from form
   numone = parseInt(document.getElementById('numone').value);                
   numtwo = parseInt(document.getElementById('numtwo').value);
  
    if (numone <= numtwo){
      if ((2 <= numone) && (numone <= 100)){
        if((2 <= numtwo) && (numtwo <= 100)){
          //loop till i equals to end
          for (i = numone; i <= numtwo; i++) {
            if (i % 2 == 0){
              arr.push(i)
            }
  
            } 
            const outputStr = 'There are '+ arr.length + ' even numbers. '
            output.innerHTML = '<h4>' + outputStr + '<h4>'
            const outputStr2 = " " + arr
            output2.innerHTML = '<h3>' + outputStr2 + '<h3>'
        }
        else{
          const outputStr = 'Invalid input, please try again.'
          output.innerHTML = '<h3>' + outputStr + '<h3>'}    
        }
      else{
        const outputStr = 'Invalid input, please try again.'
        output.innerHTML = '<h3>' + outputStr + '<h3>'
      }
  
    }
    else{
      if ((2 <= numone) && (numone <= 100)){
        if((2 <= numtwo) && (numtwo <= 100)){
          //loop till i equals to end
          for (i = numtwo; i <= numone; i++) {
            if (i % 2 == 0){
                arr.push(i)
              }                    

            } 
            const outputStr = 'There are '+ arr.length + ' even numbers. '
            output.innerHTML = '<h4>' + outputStr + '<h4>'
            const outputStr2 = " " + arr
            output2.innerHTML = '<h3>' + outputStr2 + '<h3>'
        }
        else{
          const outputStr = 'Invalid input, please try again.'
          output.innerHTML = '<h3>' + outputStr + '<h3>'}    
        }
      else{
        const outputStr = 'Invalid input, please try again.'
        output.innerHTML = '<h3>' + outputStr + '<h3>'
      }
    
    }
  }