

function Reset(){
    document.getElementById("input").value = "";
    document.getElementById("output").value = "";
}

function Convert(){
    var input = document.getElementById("input").value;
    var splt = input.split(/\r\n|\r|\n/g);
    var final = "";
    splt.forEach(element => {
        var str = element.replace(/\s\s/g, '');
        if (str != ""){
            final += str + " ";
        }

    });
    document.getElementById("output").value = final;

}



function Paste(){
      navigator.clipboard.readText().then(
        clipText => document.getElementById("input").value = clipText);
}
function Copy(){
    var output = document.getElementById("output");
    output.select();
    output.setSelectionRange(0, 99999999);
    document.execCommand("copy");
}
window.onunload = Reset;
