/* Acá va tu código */
const root = document.getElementById("root");
 document.getElementById("btnCifrar").addEventListener("click",(evento)=>{
    evento.preventDefault();

 let texto = document.getElementById("frase").value.toUpperCase();
 let offset = parseInt(document.getElementById("num").value);
 
 root.innerHTML=cipher.encode(texto,offset);

 });
const rootDoble = document.getElementById("root");
 document.getElementById("btnDescifrar").addEventListener("click",(evento)=>{
    evento.preventDefault(); 

 let texto = document.getElementById("frase").value.toUpperCase();
 let offset = document.getElementById("num").value;
 
 rootDoble.innerHTML=cipher.decode(texto,offset)
 });

 
 document.getElementById("Ingresar").addEventListener("click",(evento)=>{
    evento.preventDefault();

    document.getElementById("Pag1").style.display="none";
    document.getElementById("Pag2").style.display="block";
   });

document.getElementById("btnEnviar").addEventListener("click",(evento)=>{
   evento.preventDefault();
   alert("Te enviaremos un correo con la respuesta, en el asunto se indicara un numero para descifrar el mensaje. Utiliza esta misma interfaz para descifrar la repuesta que te enviaremos. ")
});
