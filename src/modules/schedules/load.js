import {scheduleFetchByDay} from '../../services/schedule-fetch-by-day'
import {schedulesShow} from '../schedules/show.js'
import { hoursLoad } from "../form/hours-load";

// Seleciona o input de data
const selectedDate = document.querySelector("#date");

export async function schedulesDay() {
    // Obtem a data do input
    const date = selectedDate.value

    // Busca na API os agendamentos
    const dailySchedules = await scheduleFetchByDay({date})

    // Exibe os agendamentos
    schedulesShow({dailySchedules})

    // Renderiza as horas disponíveis
    hoursLoad({ date, dailySchedules });
}