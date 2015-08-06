//Conversions


//Binary to Text Conversion 

function textToBinary()
{
	var result = "";
  	var input = document.getElementById("textCipherable").value;
    for (i=0; i < input.length; i++) {
        result +=input[i].charCodeAt(0).toString(2) + " ";
    }

	return result;
}

//Decimal to Binary

function dec2BinHexOct() {
	var x = document.getElementById("textCipherable").value;
	if ((/[^0-9]/g.test(x)) || x == "") 
		return ("You must enter an integer decimal number!");

	x = parseInt(x);
	var bin = x.toString(2);
	var hex = x.toString(16).toUpperCase();

	var figs = "Binary of " + x + " is " + bin + '\n';
	figs = figs + "Hex of " + x + " is " + hex + '\n';

return figs;

}

//