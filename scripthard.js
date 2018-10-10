let str = "урок-3-был слишком легким";
document.write(str + "<br>");

for (let i = 0; i < str.length; i++) {
   if (i == 0) {
    document.write(str[i].toUpperCase());
   }
   else
   document.write(str[i]);    
}
document.write("<br>");
for (let i = 0; i < str.length; i++) {
    if (i == 0) {
     document.write(str[i].toUpperCase());
    }
    else     if (str[i] == "-") {
    document.write(" ");
        } else
    document.write(str[i]);
}
document.write("<br>");
let str2 = str.replace('легким', '');
document.write(str2);

//////////////////////////////
let arr = [20, 33, 1, "Человек", 2, 3], arr2 = [];
let j = 0;
for (let i = 0; i < arr.length; i++) {
    if (typeof(arr[i]) == 'number') {
        arr2[j] = arr[i];
    } else {j--;}
    j++;
}
document.write("<br>");
document.write("<br>");
document.write(arr2);
document.write("<br>");

let arrk = [],sum = 0;
for (let i = 0; i < arr2.length; i++) {
    arrk[i] = arr2[i] ** 3;
    sum = sum + arrk[i];
}
document.write(arrk);
document.write("<br>");
document.write((sum ** 0.5));
document.write("<br>");
document.write("<br>");

/////////////////////////////////
document.write("  Привет всем присутствующим!     ");
document.write("<br>");
function stroka(text) {
    if ((typeof(text)) === 'string') {
     for (let i = 1; i < text.length-1; i++) {
        document.write(text[i]);
     }
    }else
    alert( 'Not a stroka' );
  }
stroka(" Привет всем присутствующим! ");


document.write("<br>");
document.write("<br>");

function stroka2(text) {
    if (text.length > 50) {
        for (let i = 0; i < 50; i++) {
            document.write(text[i]);   
        }
        document.write("..."); 
    } else 
    document.write(text);   
  }
let inp = prompt("Input: ",'');
document.write("Длинна: " + inp.length + "<br>");   
stroka2(inp);


