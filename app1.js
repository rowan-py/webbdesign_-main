const input = document.getElementById("tarefa");
const botao = document.getElementById("botao");
const lista = document.getElementById("lista");

botao.addEventListener("click", function() {
    const tarefa = input.value.trim();
    if (texto === "") return;

    const item = document.createElement("li");
    item.textContent = texto;

    const remover = document.createElement("button");
    remover.textContent = "Remover";
    remover.addEventListener("click", function() {
        item.remove();
    });

    item.append(" ", remover);
    lista.appendChild(item);
    input.value = "";   

});