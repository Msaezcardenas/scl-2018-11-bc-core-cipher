window.cipher = {
  encode: (texto,offset) => {
    let finalText = '';
    for (let i = 0; i < texto.length; i++) {
      let ascii = texto[i].charCodeAt();
      if (ascii == 32) {
        finalText += String.fromCharCode(ascii);
      } else {
      if (ascii >= 65 && ascii <= 90) {
        let newAscii = (ascii - 65 + offset) % 26 + 65;
        if(newAscii<65) {
          newAscii +=26;
        }
        finalText += String.fromCharCode(newAscii);
      }
    }
  }
    return finalText
  },
  decode: (texto,offset) => {
    let finalText = '';
    for (let i = 0; i < texto.length; i++) {
      let ascii = texto[i].charCodeAt();
      if (ascii == 32) {
        finalText += String.fromCharCode(ascii);
      } else {
      if (ascii >= 65 && ascii <= 90) {
        let newAscii = (ascii - 65 - offset) % 26 + 65;
        if (newAscii < 65) {
          newAscii += 26;
        }
        finalText += String.fromCharCode(newAscii);
      }

    }
  }
    return finalText
  }
}
