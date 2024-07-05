//Criador: Diogo Souza 2024-07-04
//Se for copiar, pelo menos deixa meu nome no criador, ja deixei tudo comentado pra voce entender
//Pode me achar aqui: https://www.linkedin.com/in/diogo-souza-clp
//Se ja tiver meu contato, pode chamar que eu ajudo no que precisar
//Coloca seu nome, porque teve que modificar e contato aqui em baixo, lembra de comentar no programa
//################## Revisoes ##########################

//isso aqui ajuda no replace
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
  };
  function replaceAll(str, find, replaceString) {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replaceString);
  };

  //########## Função para fazer download do arquivo L5X #############################
  function downloadL5X(stringXMLDown,filename){
    let bb = new Blob([stringXMLDown], {type: 'text/plain'});
    let pom = document.createElement('a');
    pom.setAttribute('href', window.URL.createObjectURL(bb));
    pom.setAttribute('download', filename);
    pom.click();
  };

  $(document).ready(function(){
    $(document).on('dblclick','form', function() {
        $(this).children().toggle();
        console.log('teste');
    });
});
