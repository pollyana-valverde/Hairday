import {schedulesDay} from "../schedules/load";
// Seleciona o input de data
const selectedDate = document.querySelector('#date');

// Recarrega a lista de horários quando o input de data mudar
selectedDate.onchange = () => schedulesDay()
