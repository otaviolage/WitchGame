class TelaInicial {
  constructor(){
  }
  
  draw() {
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }
  
  _imagemDeFundo(){
    image(imagemTelaInicial, 0, 0, width, height);
  }
  
  _texto(){
    textFont(fonteTelaInicial);
    textAlign(CENTER);
    textSize(40);
    text('As Aventuras de', width / 2, height / 3.5);
    textSize(130);
    text('Hipsta', width / 2, height / 2);
  }
  
  _botao(){
    botaoGerenciador.y = height / 7 * 5;
    botaoGerenciador.draw();
  }
}