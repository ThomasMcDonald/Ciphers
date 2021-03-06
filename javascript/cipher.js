//Ciphers


function rot13()
{
  var preCipher = document.getElementById('textCipherable').value;

  var ciphertext = "";
      for(var i = 0; i < preCipher.length; i++) {
          
          var character = preCipher.charCodeAt(i);

          if(character >= 97 && character <= 122) {
              ciphertext += String.fromCharCode((character - 97 + 13)% 26 + 97);
          } else if(character >= 65 && character  <= 90) {
              ciphertext += String.fromCharCode((character  - 65 + 13)% 26 + 65);
          } else {
              ciphertext += String.fromCharCode(character );
          }
      }
    return ciphertext;
}

function atbash()
{
        var message = document.getElementById('textCipherable').value;
        var alphabet, coded, ch, index, key;
        alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
             key = "ZYXWVUTSRQPONMLKJIHGFECDBA"
        coded = "";                                      
        for (var i = 0; i < message.length; i++) {        // for as many letters as there are
            ch = message.charAt(i);                   //   access the letter in the message
            index = alphabet.indexOf(ch);             //   find its position in alphabet
            if (index == -1) {                        //   if it's not a letter,
                coded = coded + ch;                   //     then leave it as is & add
            }                                         //   otherwise,
            else {                                    //     find the corresponding
                coded = coded + key.charAt(index);    //     letter in the key & add
            }
        }
        return coded;
}


function base64()
{
  var data = document.getElementById('textCipherable').value;
  var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
    ac = 0,
    enc = '',
    tmp_arr = [];

  if (!data) {
    return data;
  }

  do { // pack three octets into four hexets
    o1 = data.charCodeAt(i++);
    o2 = data.charCodeAt(i++);
    o3 = data.charCodeAt(i++);

    bits = o1 << 16 | o2 << 8 | o3;

    h1 = bits >> 18 & 0x3f;
    h2 = bits >> 12 & 0x3f;
    h3 = bits >> 6 & 0x3f;
    h4 = bits & 0x3f;

    // use hexets to index into b64, and append result to encoded string
    tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
  } while (i < data.length);

  enc = tmp_arr.join('');

  var r = data.length % 3;
  var output = (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);
  return output;
}










