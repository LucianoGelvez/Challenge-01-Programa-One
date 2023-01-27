
const botonEncriptar = document.querySelector(".bot-encriptar")
const botonDesencriptar = document.querySelector(".bot-desencriptar")
const espacioDescodificado = document.querySelector(".codificador")



botonEncriptar.addEventListener("click", encriptar)

function encriptar(){
    let textarea = document.querySelector("#texto");
    let textoListo = textarea.value
    textoListo = textoListo.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")

    console.log(textoListo)
    espacioDescodificado.innerHTML = `
      <div class="contenddor-texto">
        <p class="mensaje">${textoListo}</p>
      </div>
      <button class="bot-copiar">Copiar texto</button>`
    textarea.value = "";

    const copiar = document.querySelector(".bot-copiar")
    copiar.addEventListener("click", () =>{
      alert("Texto copiado al portapapeles!");
    })
  }

  botonDesencriptar.addEventListener("click", desencriptar)

  function desencriptar(){
    let textarea = document.querySelector("#texto");
    let textoListo = textarea.value
    textoListo = textoListo.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u")

    console.log(textoListo)
    espacioDescodificado.innerHTML = `<div class="contendor-texto">
        <p class="mensaje">${textoListo}</p>
      </div>
      <button class="bot-copiar">Copiar texto</button>`
    textarea.value = "";

    const copiar = document.querySelector(".bot-copiar")
    copiar.addEventListener("click", copyText)

  function copyText() {
    let content = document.querySelector(".mensaje");
    console.log(content)
    let range = document.createRange();
    range.selectNode(content);
    window.getSelection().addRange(range);
    document.execCommand("copy");
    alert("Contenido copiado al portapapeles");
  }

  }
  


// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`