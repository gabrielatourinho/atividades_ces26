self.addEventListener('message', function(e) {
  self.postMessage(e.data + " Recebido pelo worker e devolvido a API!");
}, false);