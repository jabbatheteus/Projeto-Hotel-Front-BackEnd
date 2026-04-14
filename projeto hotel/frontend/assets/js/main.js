document.addEventListener("DOMContentLoaded", function () {
    const formCadastro = document.getElementById("formCadastro");

    if (formCadastro) {
        formCadastro.addEventListener("submit", async (e) => {
            e.preventDefault();
            const dados = Object.fromEntries(
                new FormData(formCadastro)
            );
            try {
                const resp = await fetch('/cadastrar', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(dados)
                });
                const result = await resp.json();
                document.getElementById('mensagem').innerText = result.message;
                formCadastro.reset();
            } catch (err) {
                alert('Erro de comunicação com o servidor: ' + err);
            }

            console.log("Dados capturados:");
            console.log("Nome:", dados.name);
            console.log("Email:", dados.email);
            console.log("Telefone:", dados.telefone);
            console.log(dados);
        });
    }

    const btnBuscar = document.getElementById('btnBuscar');

    if(btnBuscar) {
        btnBuscar.addEventListener('click', async () => {
            
            const nome = document.getElementById('campoBusca').value;
            const resp = await fetch(`/buscar?nome=${nome}`);
            const client = await resp.json();
            const tabela = document.getElementById('tabelaResultados');
            tabela.innerHTML = ''

            client.forEach(cli => {
                const row = `
                <tr>
                    <td>{$cli.ID}</td>
                    <td>{$cli.Nome}</td>
                    <td>{$cli.CPF}</td>
                    <td>{$cli_Email}</td>
                    <td>{$cli_Telefone}</td>
                    <td><a href="/alterar?id=${cli.ID}" class="btn btn-am btn-warning"Editar</a></td>
                </tr>`
                tabela.innerHTML += row;
            })
        })
    }

    formAlterar.addEventListener('submit', async(e) =>{
        e.preventDefault();

        const dados = {
            nome: nome.value,
            cpf: cpf.value,
            email:email.value,
            telefone: telefone.value,
            endereco: endereco.value,
            observacoes: observacoes.value
        }

        const resp = await fetch(`/api/atalizar/${id}`,{
            method: 'POST',
            headers: { 'Content-Type': 'appliction/json' },
            body: JSON.stringify(dados)
        });

        const result = await resp.json();
        mensagem.innerText = result.message;
    });
});

