var inputFields = ["value", "value1", "value2", "value3", "value4", "value5", "value6", "value7", "value8", "value9", "value0-1","value1-1","value1-2","value1-3","value2-1","value2-2","value5-1","value6-1","value9-1"];
var area, perimeter, shapes = ["rhombus", "trap", "tri", "circ", "squar", "rect", "parall", "hex", "oct", "kite"];
var val = 0, val1 = 0, val2 = 0, val3 = 0;

function calculate(idn, idn2, idn3, idn4){
    val = parseFloat(document.getElementById(inputFields[idn]).value);
    val1 = parseFloat(document.getElementById(inputFields[idn2]).value);
    val2 = parseFloat(document.getElementById(inputFields[idn3]).value);
    val3 = parseFloat(document.getElementById(inputFields[idn4]).value);

    switch(shapes[idn]){
        case "rhombus":
            area = (val * val1)/2;
            perimeter = 4*(val);
            break;
        case "hex":
            area = ((3 * Math.sqrt(3)) * Math.pow(val, 2)) / 2;
            perimeter = 6 * val;
            break;
        case "trap":
            area = ((val + val1) /2) * val2;
            perimeter = val + val1 + val2 + val3;
            break;
        case "tri":
            area = (val * val) /2;
            perimeter = val + val1 + val2;
            break;
        case "circ":
            area = Math.PI * Math.pow(val, 2);
            perimeter = 2 * Math.PI * val;
            break;
        case "squar":
            area = Math.pow(val, 2);
            perimeter = 4 * val;
            break;
        case "rect":
            area = val * val1;
            perimeter = 2(val + val1);
            break;
        case "parall":
            area = val * val1;
            perimeter = 2 * (val + val1);
            break;
        case "oct":
            area = 2 * (1 + Math.sqrt(2)) * Math.pow(val, 2);
            perimeter = 8 * val;
            break;
        case "kite":
            area = (val * val1) /2;
            perimeter = 2 * (val + val1);
            break;
        default:
            console.log("Invalid Input");
            break;
    }
    changeFormula(idn);
}


function changeFormula(id) {
    var select = document.getElementById("selectFormula"+id);
    var selValue = select.options[select.selectedIndex].value;
    if( !isNaN(area) && !isNaN(perimeter)){
        if(selValue === "Area"+id){
            document.getElementById("result"+id).innerHTML = "Area: "+ area.toFixed(2);
        } else if(selValue === "Perimeter"+id){
            document.getElementById("result"+id).innerHTML = "Perimeter: "+ perimeter.toFixed(2);
        }
    }
}


var divs = ["homepage", "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eight", "ninth", "tenth", "about"];
var div, visibleDiv = null;
const mainDiv = document.getElementById("homepage");

function Show(id, result) {
    if(visibleDiv !== id) {
        visibleDiv = id;
        Hide();
    } else if(visibleDiv === id){
        const repeatDiv = document.getElementById(id);
        repeatDiv.style.display = "none";
        mainDiv.style.display = "block";
        visibleDiv = null;
    }
    returnFormula(result);
}

function Hide() {
    var i, id;
    for(i = 0; i < divs.length; i++) {
        id = divs[i];
        div = document.getElementById(id);
        if(visibleDiv === id) {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    }
}  

function returnFormula(shape_result){
    switch(shape_result){
        case "result0":
            document.getElementById(shape_result).innerHTML = "A = pq / 2";
            document.getElementById("value").value = "";
            document.getElementById("value0-1").value = "";
            area = 0;
            perimeter = 0;
            break;
        case "result1":
            document.getElementById(shape_result).innerHTML = "A = {(a + b)/ 2}h";
            document.getElementById("value1").value = "";
            document.getElementById("value1-1").value = "";
            document.getElementById("value1-2").value = "";
            document.getElementById("value1-3").value = "";
            area = 0;
            perimeter = 0;
            break;
        case "result2":
            document.getElementById(shape_result).innerHTML = "A = Hb * B / 2";
            document.getElementById("value2").value = "";
            document.getElementById("value2-1").value = "";
            document.getElementById("value2-2").value = "";
            area = 0;
            perimeter = 0;
            break;
        case "result3":
            document.getElementById(shape_result).innerHTML = "A = πr2";
            document.getElementById("value3").value = "";
            area = 0;
            perimeter = 0;
            break;
        case "result4":
            document.getElementById(shape_result).innerHTML = "A = a^2";
            document.getElementById("value4").value = "";
            area = 0;
            perimeter = 0;
            break;
        case "result5":
            document.getElementById(shape_result).innerHTML = "A = w * l";
            document.getElementById("value5").value = "";
            document.getElementById("value5-1").value = "";
            area = 0;
            perimeter = 0;
            break;
        case "result6":
            document.getElementById(shape_result).innerHTML = "A = b * h";
            document.getElementById("value6").value = "";
            document.getElementById("value6-1").value = "";
            area = 0;
            perimeter = 0;
            break;
        case "result7":
            document.getElementById(shape_result).innerHTML = "A = ( (3 √ 3 )* a ^ 2 )/ 2";
            document.getElementById("value7").value = "";
            area = 0;
            perimeter = 0;
            break;
        case "result8":
            document.getElementById(shape_result).innerHTML = "A = 2(1 + √2)a^2";
            document.getElementById("value8").value = "";
            area = 0;
            perimeter = 0;
            break;
        case "result9":
            document.getElementById(shape_result).innerHTML = "A = p * q /2";
            document.getElementById("value9").value = "";
            document.getElementById("value9-1").value = "";
            area = 0;
            perimeter = 0;
            break;
        default:
            /* Do Nothing */
            break;
    }
}