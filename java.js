var pbi,_pbi;
/**
 *Funcion que calcula el PBI de un pais en un anio.
 *@method CalculoPBI.
 *@param{number} Consumo     -Consumo total de un pais.
 * @param {number} Inversion -Inversion total de un pais.
 * @param {number} Gasto Publico -Gasto publico total de un pais.
 * @param {number} Exportaciones -Exportaciones totales de un pais.
 * @param {number} Importaciones -Importaciones totales de un pais.
 * @return
 */

function CalculoPBI(Consumo,Inversion, Gasto,Exportaciones,Importaciones){
    var pbi;


    //calculo el pbi
    pbi = Number(Consumo)+Number(Inversion)+Number(Gasto)+(Number(Exportaciones)-Number(Importaciones));

    document.getElementById("pbi").innerHTML = " " + pbi ;

    return pbi


}
/**
 *Funcion que calcula el PBI de un pais en un anio.
 *@method CalculoPBI_.
 *@param{number} Consumo1     -Consumo total de un pais.
 * @param {number} Inversion1 -Inversion total de un pais.
 * @param {number} Gasto1 -Gasto publico total de un pais.
 * @param {number} Exportaciones1 -Exportaciones totales de un pais.
 * @param {number} Importaciones1 -Importaciones totales de un pais.
 * @return
 */

function CalculoPBI_(Consumo1,Inversion1, Gasto1,Exportaciones1,Importaciones1){


    //calculo el pbi
    _pbi = Number(Consumo1)+Number(Inversion1)+Number(Gasto1)+(Number(Exportaciones1)-Number(Importaciones1));

    document.getElementById("_pbi").innerHTML = " " + _pbi ;


}

/**
 *Funcion que calcula la tasa de variacion.
 *@method Tasa.
 *@param{number} pbi    -Consumo total de un pais.
 * @param {number} _pbi -Inversion total de un pais.
 * @return
 */

function Tasa(){
    var tasa1;

    //calculo tasa
    tasa1= ((Number(pbi)/Number(_pbi))/Number(_pbi))*100;
    document.getElementById("Tasa").innerHTML = " " + tasa1 ;
}


function grafico() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var altura = canvas.height;
    var ancho = canvas.width;
    var X = 50;
    var Y = 60;


    //Titulo del grafico
    ctx.beginPath();
    ctx.font = "50px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("PBI segun los años" , ancho/2 - 200 , Y);
    ctx.closePath();

    //X
    ctx.beginPath();
    ctx.moveTo(X , altura - Y);
    ctx.lineTo(ancho - X, altura-Y);
    ctx.strokeStyle = "#000000";
    ctx.stroke();
    ctx.closePath();

    //Y
    ctx.beginPath();
    ctx.moveTo(X , Y);
    ctx.lineTo(X , altura - Y);
    ctx.strokeStyle = "#000000";
    ctx.stroke();
    ctx.closePath();

    //DIvision en 2
    ctx.beginPath();
    for(i = X + 500 ; i < ancho - Y; i += 800){
        ctx.moveTo(i , altura-Y + 1 );
        ctx.lineTo(i , altura-Y -25);
        ctx.strokeStyle = "#000000";
        ctx.stroke();
    }
    ctx.closePath();

    //Division en 8
    ctx.beginPath();
    for(var i = altura - Y - 50; i > Y; i -= 50){
        ctx.moveTo(X - 2 , i);
        ctx.lineTo(X + 2 , i);
        ctx.strokeStyle = "#000000";
        ctx.stroke();
    }
    ctx.closePath();

    var Anios = 2019;
    var Tasa = 700;
    //Anios
    ctx.beginPath();
    for(i = X + 250; i < ancho - Y; i += 600){
        ctx.font = "15px Arial";
        ctx.fillText(Anios , i , altura  - 30);
        Anios+=1;
    }
    ctx.closePath();


    //PBI
    ctx.beginPath();
    for(var i = altura - Y - 50; i > Y; i -= 50){
        ctx.font = "15px Arial";
        ctx.fillText(Tasa , X - 35 , i);
        Tasa-=50;
    }
    ctx.closePath();



    //Anos
    ctx.beginPath();
    ctx.font = "20px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(" Años" , ancho - X , altura-Y );
    ctx.closePath();

    //tasa
    ctx.beginPath();
    ctx.font = "20px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("PBI" , X - 15 , Y - 10);
    ctx.closePath();
}

/**
 * Funcion que resetea los datos.
 * @method reseteardatos.
 * @return
 */
function reseteardatos1(){
    document.getElementById("datos").reset();
}
/**
 * Funcion que resetea los datos.
 * @method reseteardatos.
 * @return
 */
function reseteardatos(){
    document.getElementById("dato1").reset();
}
/**
 * Funcion que reseteael grafico.
 * @method reseteargrafico
 * @return
 */
function reseteargrafico(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    canvas.width = canvas.width;
    grafico();
}

/**
 * Funcion que restea los datos
 * @method resetear
 * @return
 */
function resetear() {
    reseteardatos();
    reseteargrafico();
}

/**
 * Funcion que restea los datos
 * @method resetear
 * @return
 */
function resetear1() {
    reseteardatos1();
    reseteargrafico();
}
function graficopbi (pbi) {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var alturaMax = canvas.height;
    var anchoMax = canvas.width;
    var margenX = 50;
    var margenY = 60;
    ctx.beginPath();
    ctx.moveTo(margenX , alturaMax - margenY);
    ctx.lineTo(anchoMax - margenX, alturaMax - margenY);
    ctx.strokeStyle = "#000000";
    ctx.stroke();
    ctx.closePath();



}
/**
 * Funcion que dibuja la parabola en el lienzo.
 * @method graficopbi
 * @param {number} pbi  - Total.
 */
function graficopbi(Consumo,Inversion, Gasto,Exportaciones,Importaciones) {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    console.log(Consumo,Inversion, Gasto,Exportaciones,Importaciones);
    pbi = Number(Consumo)+Number(Inversion)+Number(Gasto)+(Number(Exportaciones)-Number(Importaciones));
    var altura = canvas.height;
    var ancho = canvas.width;
    var X = 50;
    var Y = 60;


    ctx.beginPath();
    ctx.moveTo(300 , altura-Y);
    ctx.lineTo(300,  pbi);
    ctx.strokeStyle = "#000000";
    ctx.stroke();
    ctx.closePath();



    ctx.beginPath();
    ctx.font = "20px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("PBI 1" , 300 , 80);
    ctx.closePath();
}

/**
 * Funcion que dibuja la parabola en el lienzo.
 * @method graficopbi
 * @param {number} pbi  - Total.
 */
function graficopbii(Consumo1,Inversion1, Gasto1,Exportaciones1,Importaciones1) {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    console.log(Consumo1,Inversion1, Gasto1,Exportaciones1,Importaciones1);
    _pbi = Number(Consumo1)+Number(Inversion1)+Number(Gasto1)+(Number(Exportaciones1)-Number(Importaciones1));
    var altura = canvas.height;
    var ancho = canvas.width;
    var X = 50;
    var Y = 60;


    ctx.beginPath();
    ctx.moveTo(800 , altura-Y);
    ctx.lineTo(800,  _pbi);
    ctx.strokeStyle = "#000000";
    ctx.stroke();
    ctx.closePath();



    ctx.beginPath();
    ctx.font = "20px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("PBI 2" , 600 , 80);
    ctx.closePath();
}