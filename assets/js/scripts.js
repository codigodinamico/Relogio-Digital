//Criando uma função e chamando-a a cada segundo
setInterval(() => {

    let date = new Date(),
    hour = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds();

    let d;
    d = hour < 12 ? "AM" : "PM"; //Se a hora for menor que 12, seu valor será AM, caso contrário, seu valor será PM
    hour = hour > 12 ? hour - 12 : hour; //Se o valor da hora for maior que 12, 12 será subtraido (ao fazer isso, obteremos o valor até 12)
    hour = hour == 0 ? hour = 12 : hour; //Se o valor da hora for 0, seu valor será 12
    
    //Adicionando 0 a todos o valor se eles forem menores que 10
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    
    console.log(date);

    document.querySelector(".hour_num").innerText = hour;
    document.querySelector(".min_num").innerText = min;
    document.querySelector(".sec_num").innerText = sec;
    document.querySelector(".am_pm").innerText = d;
    
}, 1000); //1000 millissecundos = 1s