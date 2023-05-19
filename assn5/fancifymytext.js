
function BiggerBtn(){
document.getElementById("textbox").style.fontSize = "3em";
}

function fancifytext(){
    textchange()
    document.getElementById("textbox").style.fontFamily = "cursive";
}

function boringtext(){
    textchange()
    document.getElementById("textbox").style.fontFamily = "normal";
    document.getElementById("textbox").style.fontWeight = "normal"
    document.getElementById("textbox").style.color = "black";
    document.getElementById("textbox").style.textDecoration = "none";
}
function textchange(){
    alert("Font update!")
    document.getElementById("textbox").style.fontWeight = "bold";
    document.getElementById("textbox").style.color = "blue";
    document.getElementById("textbox").style.textDecoration = "underline";
}

function MooBtn(){
    const text = document.getElementById("textbox").value;
    const words = text.split(".");
    for (var i = 0; i < words.length-1; i++){
        let word = words[i].trim();
        word += "MOO";
        words[i] = word;
    }
    document.getElementById("textbox").value = words.join(". ");
    document.getElementById("textbox").style.textTransform = "uppercase";
    }