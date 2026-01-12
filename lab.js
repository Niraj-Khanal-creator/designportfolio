
function findFactorial() {
    let n = document.getElementById("num").value;
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact *= i;
    }

    document.getElementById("result").innerHTML = "Factorial of " + n + " is " + fact;
}

function fibonici(){
    let n=document.getElementById("num").value;
    let a=0,b=1,c;
    let output = "";

    for (let i = 1; i <= n; i++) {
        output += a + " ";
        c = a + b;
        a = b;
        b = c;
    }

    document.getElementById("result1").innerHTML =  "Fibonici of " + n + " is " + output;
}


