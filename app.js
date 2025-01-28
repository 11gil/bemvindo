let nome = prompt('Qual é o seu nome?');

// Validação de entrada
if (!nome || nome.trim() === "") {
    alert('Por favor, insira um nome válido.');
} else {
    alert(`Bem-vindo, ${nome}!`);
}