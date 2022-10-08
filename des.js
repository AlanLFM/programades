
function leerArchivo(){

   var archivo=document.getElementById("file");
   var reader =new FileReader();
   reader.readAsText(archivo.files[0]);
   reader.onload = function()

    {
        
        var texto=this.result;//texto leido
        console.log(texto)
        var plainText=this.result;
        const key=document.getElementById("clave").value;
        console.log(key)
        console.log("Length " + key.length)
    if(key.length<8){
        alert("Debe ser una llave de 8 caracteres.");
    }
    else{
        console.log("Plain text: ", plainText);
        
        var base64Coded = window.btoa(plainText);
        console.log("Base64 coded text: ", base64Coded);

       //var encrypted = encryptDesCbcPkcs7Padding(texto, key);
        
        var en=CryptoJS.DES.encrypt(texto, key)
        
        console.log("Encriptado : ", en);
        
        //var finalEncrypted = CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
        
        //console.log("Final encriptado: ", finalEncrypted);
        //alert("Final encrypted: " + finalEncrypted);
        document.getElementById('Encriptado').innerText=en;
    
        var decrypted=CryptoJS.DES.decrypt(texto, key)
        var deci=CryptoJS.DES.decrypt(texto, key)
        console.log("Esto es el deci" + deci)
        var dec=hex(CryptoJS.DES.decrypt(texto, key))
        console.log("Esto es con hex2a" + dec)
        
        //var decrypted = decryptDesCbcPkcs7Padding(texto, key);
        //console.log("Decrypted: ", decrypted);
        /*
        var finalDecrypted = CryptoJS.enc.Base64.parse(decrypted.toString(CryptoJS.enc.Utf8)).toString(CryptoJS.enc.Utf8);
        console.log("Final decrypted: ", finalDecrypted);
        document.getElementById('Descencriptado').innerText=finalDecrypted;
        */
       document.getElementById('Descencriptado').innerText=dec;
        document.getElementById('texto').innerHTML=texto;



    }
    function decryptDesCbcPkcs7Padding(message, key) {
        //var keyWords = CryptoJS.enc.Utf8.parse(key);
        //var ivWords = CryptoJS.lib.WordArray.create([0, 0]);

        //var decrypted = CryptoJS.DES.decrypt({ciphertext: message}, keyWords, { iv: ivWords });
        console.log("Recibí el mensaje" + message)
        var decrypted=CryptoJS.DES.decrypt(message, key)
        //return decrypted.toString(CryptoJS.enc.Utf8);
        return decrypted;
    }
    function encryptDesCbcPkcs7Padding(message, key) {
        //var keyWords = CryptoJS.enc.Utf8.parse(key);
        //var ivWords = CryptoJS.lib.WordArray.create([0, 0]);
        //var encrypted = CryptoJS.DES.encrypt(message, keyWords, { iv: ivWords});
        
        var encrypted =CryptoJS.DES.encrypt(message,key)
        return encrypted;//.toString(CryptoJS.enc.Utf8);
        
    }
    function hex(hexx) {
        var hex = hexx.toString();//force conversion
        var str = '';
        for (var i = 0; i < hex.length; i += 2)
            str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
        return str;
    }

    function DES(archivo, key) {
        var keyWords = CryptoJS.enc.Utf8.parse(key);
        var ivWords = CryptoJS.lib.WordArray.create([0, 0]);
        var encrypted = CryptoJS.DES.encrypt(archivo, keyWords, { iv: ivWords});
    
        return encrypted;//.toString(CryptoJS.enc.Utf8);
    }
    }
        }
        /*


        const reader = new FileReader();
$("#en").click(function(){
    var key=$("#key").val()
    
    reader.addEventListener('loadend', function() {
        document.getElementById('msg').innerText = this.result;
    });
    console.log(key)
    document.getElementById('msg').files[0].text().then(PromiseResult => {
        var msg=PromiseResult
        console.log(msg)
        var en=CryptoJS.DES.encrypt(msg, key)
        $("#res").text(en)
        download("cifrado.txt",en)
    })
})
function hex2a(hexx) {
    var hex = hexx.toString();//force conversion
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}
$("#de").click(function(){
    var key=$("#key").val()
    
    reader.addEventListener('loadend', function() {
        document.getElementById('msg').innerText = this.result;
    });
    console.log(key)
    document.getElementById('msg').files[0].text().then(PromiseResult => {
        var msg=PromiseResult
        console.log(msg)
        var de=hex2a(CryptoJS.DES.decrypt(msg, key))
        $("#res").text(de)
        download("descifrado.txt",de)
    })
})
    function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
} */