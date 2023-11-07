// Define o tempo em milissegundos para atualizar a página (por exemplo, a cada 5 segundos).
var intervaloDeAtualizacao = 9000; // 5000 milissegundos = 5 segundos

function atualizarPagina() {
  location.reload(); // Recarrega a página
}

// Configura o temporizador para atualizar a página automaticamente
setTimeout(atualizarPagina, intervaloDeAtualizacao);
