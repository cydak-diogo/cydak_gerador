//Criador: Diogo Souza 2024-07-04
//Se for copiar, pelo menos deixa meu nome no criador, ja deixei tudo comentado pra voce entender
//Pode me achar aqui: https://www.linkedin.com/in/diogo-souza-clp
//Se ja tiver meu contato, pode chamar que eu ajudo no que precisar
//Coloca seu nome, porque teve que modificar e contato aqui em baixo, lembra de comentar no programa
//################## Revisoes ##########################

// Função para aplicar o tema de acordo com a preferência do usuário
function aplicarTemaPreferido() {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('tema-escuro');
  } else {
    document.body.classList.remove('tema-escuro');
  }
}
// Aplicar o tema ao carregar a página
aplicarTemaPreferido();
// Atualizar o tema quando a preferência do usuário mudar
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', aplicarTemaPreferido);


//isso aqui ajuda no replace
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
  };
  function replaceAll(str, find, replaceString) {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replaceString);
  };

  //########## Função para fazer download do arquivo L5X #############################
  function downloadStringToFile(stringXMLDown,filename){
    let bb = new Blob([stringXMLDown], {type: 'text/plain'});
    let pom = document.createElement('a');
    pom.setAttribute('href', window.URL.createObjectURL(bb));
    pom.setAttribute('download', filename);
    pom.click();
  };
  //Create a <p> e coloca no body
  function createNewP(textP){    
    var p = $('<p>').text(textP);
    $('body').append(p);
  };

$(document).ready(function(){
  $(document).on('dblclick','form', function() {
    $(this).children().toggle();
  });
  //Aumenta o tamanho das inputs
  $(document).on('keyup','input', function() {
    if ($(this).val().length > 12) {
      $(this).attr('size', $(this).val().length);
      };
  });
  //Aumenta o tamanho das inputs
  $(document).on('click','input', function() {
    if ($(this).val().length > 12) {
    $(this).attr('size', $(this).val().length);
    };
  });
  //Reload Page
  $(document).on('click','.reloadBtn',reloadPage);
  function reloadPage(){
    location.reload()
  };
});
