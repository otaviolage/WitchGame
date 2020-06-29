function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  //somDoJogo.loop();
  
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  botaoGerenciador = new BotaoGerenciador('Iniciar', width /2, 400);
  jogo.setup();
  
  inteligencia = new Inteligencia();
  
  cenas = {
    jogo,
    telaInicial
  }
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}