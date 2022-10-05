
function leerArchivo(){

   var archivo=document.getElementById("file");
   var reader =new FileReader();
   reader.readAsText(archivo.files[0]);
   reader.onload = function()
    {
        var texto=this.result;//texto leido
        console.log(texto)
        var plainText=this.result;
        var key=document.getElementById("clave");

    console.log("Plain text: ", plainText);
    var base64Coded = window.btoa(plainText);
    console.log("Base64 coded text: ", base64Coded);

    var encrypted = encryptDesCbcPkcs7Padding(base64Coded, key);
    console.log("Encrypted: ", encrypted);
    var finalEncrypted = CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
    console.log("Final encrypted: ", finalEncrypted);
    //alert("Final encrypted: " + finalEncrypted);
    document.getElementById('Encriptado').innerText=finalEncrypted;


    function decryptDesCbcPkcs7Padding(message, key) {
        var keyWords = CryptoJS.enc.Utf8.parse(key);
        var ivWords = CryptoJS.lib.WordArray.create([0, 0]);

        var decrypted = CryptoJS.DES.decrypt({ciphertext: message}, keyWords, { iv: ivWords });

        return decrypted.toString(CryptoJS.enc.Utf8);
    }

    var base64Decoded = CryptoJS.enc.Base64.parse(finalEncrypted);
    console.log("Base64 decoded", base64Decoded);

    var decrypted = decryptDesCbcPkcs7Padding(base64Decoded, key);
    console.log("Decrypted: ", decrypted);

    var finalDecrypted = CryptoJS.enc.Base64.parse(decrypted.toString(CryptoJS.enc.Utf8)).toString(CryptoJS.enc.Utf8);
    console.log("Final decrypted: ", finalDecrypted);
    document.getElementById('Descencriptado').innerText=finalDecrypted;
    


}
function encryptDesCbcPkcs7Padding(message, key) {
    var keyWords = CryptoJS.enc.Utf8.parse(key);
    var ivWords = CryptoJS.lib.WordArray.create([0, 0]);
    var encrypted = CryptoJS.DES.encrypt(message, keyWords, { iv: ivWords});
  
    return encrypted;//.toString(CryptoJS.enc.Utf8);
}

function DES(archivo, key) {
    var keyWords = CryptoJS.enc.Utf8.parse(key);
    var ivWords = CryptoJS.lib.WordArray.create([0, 0]);
    var encrypted = CryptoJS.DES.encrypt(archivo, keyWords, { iv: ivWords});
  
    return encrypted;//.toString(CryptoJS.enc.Utf8);
}
        
    }
    /*
    var plainText="hola";

    var key=document.getElementById("clave");

    console.log("Plain text: ", plainText);
    var base64Coded = window.btoa(plainText);
    console.log("Base64 coded text: ", base64Coded);

    var encrypted = encryptDesCbcPkcs7Padding(base64Coded, key);
    console.log("Encrypted: ", encrypted);
    var finalEncrypted = CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
    console.log("Final encrypted: ", finalEncrypted);
    alert("Final encrypted: " + finalEncrypted);

    function decryptDesCbcPkcs7Padding(message, key) {
        var keyWords = CryptoJS.enc.Utf8.parse(key);
        var ivWords = CryptoJS.lib.WordArray.create([0, 0]);

        var decrypted = CryptoJS.DES.decrypt({ciphertext: message}, keyWords, { iv: ivWords });

        return decrypted.toString(CryptoJS.enc.Utf8);
    }

    var base64Decoded = CryptoJS.enc.Base64.parse(finalEncrypted);
    console.log("Base64 decoded", base64Decoded);

    var decrypted = decryptDesCbcPkcs7Padding(base64Decoded, key);
    console.log("Decrypted: ", decrypted);

    var finalDecrypted = CryptoJS.enc.Base64.parse(decrypted.toString(CryptoJS.enc.Utf8)).toString(CryptoJS.enc.Utf8);
    console.log("Final decrypted: ", finalDecrypted);
    alert("Final decrypted: " + finalDecrypted);
    


}
function encryptDesCbcPkcs7Padding(message, key) {
    var keyWords = CryptoJS.enc.Utf8.parse(key);
    var ivWords = CryptoJS.lib.WordArray.create([0, 0]);
    var encrypted = CryptoJS.DES.encrypt(message, keyWords, { iv: ivWords});
  
    return encrypted;//.toString(CryptoJS.enc.Utf8);
}

function DES(archivo, key) {
    var keyWords = CryptoJS.enc.Utf8.parse(key);
    var ivWords = CryptoJS.lib.WordArray.create([0, 0]);
    var encrypted = CryptoJS.DES.encrypt(archivo, keyWords, { iv: ivWords});
  
    return encrypted;//.toString(CryptoJS.enc.Utf8);
}
*/

