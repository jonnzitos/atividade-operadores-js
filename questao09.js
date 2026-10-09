let senhaCorreta = "ifpb2026";
let senha;
let tentativas = 0;

do {
    senha = prompt("Digite a senha:");
    tentativas++;
} while (senha !== senhaCorreta);

console.log("Bem-vindo! Você acertou em " + tentativas + " tentativa(s).");
