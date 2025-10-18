import {hoursLoad} from "../form/hours-load";

// Seleciona o input de data
const selectedDate = document.querySelector("#date");

export function schedulesDay() {
// Obtem a data do input
const date = selectedDate.value

    // Renderiza as horas disponíveis
    hoursLoad({date});
    
    // Busca na API os agendamentos para carregar do lado diretinho da tela

    // Os horarios disponíveis (horário futuro + não agendado) do lado esquerdo (form)
}