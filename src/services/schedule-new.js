import {apiConfig} from './api-config';

export async function scheduleNew({id, name, when}) {
    try {
        // Fazendo a requisição para enviar os dados do agenamento.
        await fetch(`${apiConfig.baseURL}/schedules`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id, name, when}),
        })
        
        // Exibe mensagemm de agendamento realizado.
        alert("Agendamento realizado com sucesso!")

    } catch (error) {
        console.log(error)
        alert("Não foi possível agendar. Tente novamente mais tarde.")
    }
}