class Forca {
  constructor(palavra) {
    this.palavra = palavra.split("");
    this.chutes = [];
    this.vidas = 6;
    this.letras_acertadas = this.palavra.map(() => "_");
  }


  chutar(letra) {

    if (this.palavra.includes(letra)&& !this.chutes.includes(letra)) {
      for (let i = 0; i < this.palavra.length; i++) {
        if (letra == this.palavra[i]) {
          this.letras_acertadas[i] = letra
        }
      }
      this.chutes.push(letra)
    } else if (this.chutes.includes(letra)) {
      return console.log("Ops! Essa ja foi, tente outra")
    }
    else {
      this.chutes.push(letra)
      this.vidas--;
    }
  }

  buscarEstado() {
    if (!this.letras_acertadas.includes("_")) {
      return "ganhou";
    } else if (this.vidas < 1) {
      return "perdeu";
    } else {
      return "aguardando chute";
    }

  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    return {
      letrasChutadas: this.chutes, // Deve conter todas as letras chutadas
      vidas: this.vidas, // Quantidade de vidas restantes
      palavra: this.letras_acertadas // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    }
  }
}

module.exports = Forca;
