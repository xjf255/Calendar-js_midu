const actualYear = 2023
const locale = 'en'

//Days of week
 const weekdays = [...Array(7).keys()]
 const intlWeekDays = new   Intl.DateTimeFormat(locale, {weekday : 'short' })

const weekDaysNames = weekdays.map(weekdaysIndex =>{
    const date = new Date(2021, 10, weekdaysIndex + 1)
    const weekDayName = intlWeekDays.format(date)
    console.log(weekDayName)
    return weekDayName 
})
const renderedWeekDays = weekDaysNames.map(weekDayName => `<li class="day-name">${weekDayName}</li>`).join("")
 
//Months names
const months = [...Array(12).keys()]
const intl = new Intl.DateTimeFormat(locale, {month: 'long'})

const calendar = months.map(monthkey =>{
    const monthName = intl.format(new Date(actualYear, monthkey))

    const nextMonthIndex = monthkey + 1
    const daysOfMonth = new Date(actualYear, nextMonthIndex, 0).getDate()

    const startsOn = new Date(actualYear, monthkey, 1).getDay()
    return {
        monthName,
        daysOfMonth,
        startsOn
    }
})

const html = calendar.map(({monthName , daysOfMonth, startsOn}) => {
    const days = [...Array(daysOfMonth).keys()]

    const firstDayAttributes= `class='first-day day' style='--first-day-start : ${startsOn}'`
    const renderedDays = days.map((day, index) => `<li ${index === 0 ? firstDayAttributes : ''} class='day' > ${day + 1}</li>`).join('')

    const title=`<h1>${monthName} ${actualYear}</h1>`

    return `<div class='month'> ${title} <ol> ${renderedWeekDays} ${renderedDays}</ol> </div>`
}).join('')

document.querySelector('.calendario').innerHTML = html
console.log(calendar)


