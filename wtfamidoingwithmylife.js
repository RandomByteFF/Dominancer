function Reset(){
    document.getElementById("input").value = "";
    document.getElementById("output").value = "";
}

function Convert(){
    var input = document.getElementById("input").value;
    var splt = input.split(/\r\n|\r|\n/g);
    var final = "";
    splt.forEach(element => {
        var str = element.replace(/\s/g, '');
        if (str != ""){
            final += str + " ";
        }

    });
    document.getElementById("output").value = final;

}
window.onunload = Reset;