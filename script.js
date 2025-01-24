// Função para registrar cliques na página
function logClicks(event) {
  const target = event.target;
  console.log(`Clique detectado! Elemento clicado:`, target);
  console.log(`Tag do elemento: ${target.tagName}`);
  console.log(`Texto do elemento: ${target.textContent.trim()}`);
}

// Adiciona o ouvinte de eventos de clique no documento
document.addEventListener('click', logClicks);

// Mensagem de confirmação que o script foi carregado e começou a ouvir os cliques
console.log("Script remoto carregado e ouvindo cliques...");


function hello() {
  console.log("Hello! Script remoto funcionando.");
}
