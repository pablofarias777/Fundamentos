const futuro = Date.now() + 2000;
quantidade = 0;

while (Date.now() < futuro) {
quantidade++;
}

console.log('Quantidade: ' + quantidade);


