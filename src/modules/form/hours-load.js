import dayjs from 'dayjs';
import {openingHours} from '../../utils/opening-hours.js';

const hours = document.querySelector("#hours")

export function hoursLoad({date}) {
const opening = openingHours.map((hour) => {
    // Renderiza somente as horas
    const [scheduleHour] = hour.split(":")

    // Adiciona a hora na date e verificar se está no passado
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())

    return{
        hour,
        available: isHourPast
    }
})

// Renderiza os horários.
opening.forEach(({hour, available}) => {
    const li = document.createElement("li");
    
    li.classList.add("hour")
    li.classList.add(available ? "hour-available" : "hour-unavailable")

    li.textContent = hour;
    hours.append(li)

})
}