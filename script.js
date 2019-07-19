let idade = Number(prompt(`digite sua idade`))
let money = Number(prompt(`digite quanto você ganha`))
let quantidade = Number(prompt(`valor do imprestimo`))

if(idade >=25 && idade <=60 && money >=2000){
alert(`seu imprestimo foi aprovado `)
}
else if(idade <25 || idade >60 || money <2000){
    alert(`reprovado`)
    }
else if (quantidade <=10* "o valor que ganha"){
    alert(`aprovado`)
}
else if (quantidade >=10* "o valor que ganha"){
    alert(`reprovado`)
}
else{alert(`reprovado`)}


// "let idade = Number(prompt("digite sua idade"));
// let aposentado =(prompt("você é aposentado ? sim ou nao"));
// let estudante = prompt("vc é estudante sim ou nao");

// if (idade >= 60 || aposentado == "sim" ){
//     alert("entrada gratis vovo")
// }

// else if (aposentado == "nao"){
//     alert(`você tem e não é aposentado vai ter que pagar`)
// }
// else if (idade <=12){
//     alert(`entrada 10 reais`)
// }
// else if(idade >=13 && idade <=17){
//     alert("entrada 15 reais")
// }
// else if(idade >=18 && idade <= 59){
//     if(estudante==="sim"){
//         alert(`meia entrada`)
//     }
//     else{
//         alert(`entrada 35 reais`)
//     }
// }
// "



// // if(){

// // }
// // else if(){

// // }
// // else{

// // }
