alert("JS carregou!");

document.addEventListener("DOMContentLoaded", function () {
        const formCadastro = document.getElementById("formCadastro");

        if (formCadastro){


        formCadastro.addEventListener("submit", async (e) => {
            e.preventDefault();

            const dados = Object.fromEntries(
                new FormData(formCadastro)
            );

            try{
                const resp = await fetch('/cadastrar', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(dados)
                });
                
                const result = await resp.json();

                document.getElementById('mensagem').innerText = result.message;
                formCadastro.reset();
            }
            catch(err){
                alert("Erro de comunicação com o servidor:" + err);
            }

            console.log("Dados capturados:");
            console.log("Nome:", dados.nome);
            console.log("Email:", dados.email);
            console.log("Telefone", dados.telefone);
            console.log(dados);
        });
    };
});