// document.querySelector(".display").value = "";
// document.querySelector(".one").addEventListener ("click", function(){
//     (document.querySelector(".display").value) += "1";
// })
// document.querySelector(".addition").addEventListener ("click", function(){
//     (document.querySelector(".display").value) += "+";
// })

// document.querySelector(".equals").addEventListener ("click", function(){
//     const play2 = (document.querySelector(".display").value) = eval(document.querySelector(".display").value);
//     console.log (play2);
// })

document.querySelector("#one").addEventListener ("click", function(){
    document.querySelector("#display").value +="1"
});

document.querySelector("#two").addEventListener ("click", function(){
    document.querySelector("#display").value +="2"
});

document.querySelector("#three").addEventListener ("click", function(){
    document.querySelector("#display").value += "3"
})

document.querySelector("#four").addEventListener ("click", function(){
    document.querySelector("#display").value += "4"
})

document.querySelector("#five").addEventListener ("click", function(){
    document.querySelector("#display").value += "5"
})

document.querySelector("#six").addEventListener ("click", function(){
    document.querySelector("#display").value += "6"
})

document.querySelector("#seven").addEventListener ("click", function(){
    document.querySelector("#display").value += "7"
})

document.querySelector("#eight").addEventListener ("click", function(){
    document.querySelector("#display").value += "8"
})

document.querySelector("#nine").addEventListener ("click", function(){
    document.querySelector("#display").value += "9"
})

document.querySelector("#zero").addEventListener ("click", function(){
    document.querySelector("#display").value += "0"
})

document.querySelector("#addition").addEventListener ("click", function(){
    document.querySelector("#display").value += "+"
})

document.querySelector("#minus").addEventListener ("click", function(){
    document.querySelector("#display").value += "-"
})

document.querySelector("#divide").addEventListener ("click", function(){
    document.querySelector("#display").value += "/"
})

document.querySelector("#multiply").addEventListener ("click", function(){
    document.querySelector("#display").value += "*"
})
document.querySelector("#cancel").addEventListener ("click", function(){
    document.querySelector("#display").value = ""
});
document.querySelector("#equals").addEventListener ("click", function(){
    document.querySelector("#display").value = eval(document.querySelector("#display").value)
})