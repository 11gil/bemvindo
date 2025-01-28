let nome = prompt('Qual é o seu nome?');

// Validação de entrada
if (!nome || nome.trim() === "") {
    alert('Por favor, insira um nome válido.');
} else {
    alert(`Bem-vindo, ${nome}!`);
}

let idade = prompt('Qual é a sua idade?');

// Validação de entrada
if (!idade || isNaN(idade) || idade <= 0 || !Number.isInteger(Number(idade))) {
    alert('Por favor, insira uma idade válida (um número inteiro positivo).');
} else {
    alert(`Sua idade é ${idade} anos.`);
}