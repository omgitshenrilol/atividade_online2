console.log('Cadastro de eventos');
//array
var participantes = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A1','B2', 'C3', 'D4','E5','F6','G7','H8','I9','J10','K11','L12','M13','N14','O15','P16','Q17','R18','S19','T20','U21','V22','W23','X24','Y25','Z26', 'A','B', 'C', 'D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B', 'C', 'D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U'];
//condição de data
var dataAtual = new Date();
var dataDoEvento = new Date('2022,04,02');
if(dataAtual > dataDoEvento === true){
  console.log ('Data inválida!');

}else {
  console.log('O evento sera: ', dataDoEvento);
}
//condição de idade
let idade = 20
if (idade < 18 ){
  console.log ('O cadastro não será realizado por conta da idade!');
} else {
  console.log('Você tem '+ idade +' anos, o cadastro será realizado');
}

//condição numero máximo de participantes
if (participantes.length < 100){
  console.log ('O cadastro foi realizado com sucesso!:D');
} else {
  console.log ('O cadastro não será realizado porque o numero total de participantes ja foi atingido!');
}
console.log('Número de participantes:', participantes.length)

//lista de participantes
console.log('Lista de participantes:')
for (var i = 0; i < participantes.length; i++) {
  console.log(participantes[i]);}
