//Conversions


//Binary to Text Conversion 

function textToBinary()
{
	var PADDING = "00000000"

	var string = document.getElementById('textCipherable').value;
	var resultArray = []

	for (var i = 0; i < string.length; i++) {
	  var compact = string.charCodeAt(i).toString(2)
	  var padded  = compact.substring(0, PADDING.length - compact.length) + compact

	  resultArray.push(padded)
	}

	console.log(resultArray.join(" "))
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

//Binary to Decimal
function BinarytoDecimal() {
	var x = document.getElementById("textCipherable").value;
	x = parseInt(x);
	var dec = parseInt(x, 2);


	var figs = "Decimal of " + x + " is " + dec + '\n';

return figs;

}


//To Ascii

function Ascii()
{
  var message = document.getElementById('textCipherable').value;

  var ciphertext = "";
    for(var i = 0; i < message.length; i++) {
        
        var character = message.charCodeAt(i);
            ciphertext += character + " ";
        
    }
     return ciphertext;

}



