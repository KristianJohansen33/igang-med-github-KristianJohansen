//Øvelse_1

var ja = false;

console.log(ja);
//Øvelse_2

var tal1 = 6;
var tekst = "det er mere in 5";
var tekst2 = "laver end 5";

console.log(tal1);

if(tal1 < 5){
    console.log(tekst)
}
else{
    console.log(tekst2)
}

//Øvelse_3

var tal2 = 6;
var result = tal2 > 5 ? "det er mere in 5" : "det laver end 5";
console.log(result);

//Øvelse_4

var navn = "øl";

if(navn == "øl"){
    console.log("det øl")
}
else if(navn == "nigger"){
}
else{
    console.log("simple text")
}

//Øvelse_5

var name = "h shit";
switch (name){
    case "shit":
    console.log("det shit");
    break;
    case "i shit":
    console.log("det ikke shit")
    break;
    case "m shit":
    console.log("hved ikke hvad det er men det ikke shit");
    
    case "h shit":
    console.log("hjælp kan du ikke få her");
    break;
    default:
    console.log("hvad fuck har du lavet?!");
    break;
}