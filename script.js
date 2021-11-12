
function insert(num){
    let result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result + num;
    
}

function cleanAll(){
    document.getElementById('result').innerHTML = '';
}

function back(){
    let result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, result.length -1);
}

function calc(){
   var result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = eval(result);
        }

