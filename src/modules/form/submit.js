import dayjs from "dayjs";

import {scheduleNew} from '../../services/schedule-new.js';
import {schedulesDay} from '../schedules/load.js';

const form = document.querySelector('form');
const clientName = document.querySelector('#client')
const selectedDate = document.querySelector('#date');

// data atual para o input date
const inputToday = dayjs(new Date()).format('YYYY-MM-DD');

// Carrega a data atual e define a data mínima como a data atual
selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.onsubmit = async (event) => {
    // Evita o comportamento padrão do formulário
    event.preventDefault();

    try {
        // Recuperando o nome do cliente
        const name = clientName.value.trim();

        // Recuperando o nome do cliente
        if (!name) {
            return alert("Informe o nome do cliente!")
        }

        // Recupera o horário selecionado
        const hourSelected = document.querySelector('.hour-selected')

        // Recupera o horário selecionado
        if (!hourSelected) {
            return alert("Selecione um horário.")
        }

        // Recupera somente a hora
        const [hour] = hourSelected.innerText.split(":")

        //Insere a hora na data
        const when = dayjs(selectedDate.value).add(hour, "hour")

        // Gera um ID
        const id = new Date().getTime().toString()

        // Faz o agendamento
        await scheduleNew({
            id,
            name,
            when,
        })

        // Recarrega os agendamentos
        await schedulesDay()

        // Limpa o campo do cliente
        clientName.value = ""
    } catch (error) {
        alert("Não foi possível realizar o agendamento.")
        console.log(error)
    }
}