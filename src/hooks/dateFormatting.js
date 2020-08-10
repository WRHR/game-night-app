const monthNumLookup = {
    '01': 'January',
    '02': 'February',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December',
}

export const formatDay = (date) => {
    let [year, month, unformattedDay] = date.split('-')
    let nums = unformattedDay.split('')
    let dateNum = parseInt(nums[0]) === 0 ? nums[1]: nums.join('') 

    return `${monthNumLookup[month]} ${dateNum}`

}

const formatTime = (time) => {
    let [unformatedHours, mins] = time.split(':')
    let hours = parseInt(unformatedHours)
    if(hours === 12){
        return `${hours}:${mins}pm`
    } else if(hours > 12){
        return `${hours-12}:${mins}pm`
    } else {
        return `${hours}:${mins}am`
    }
}

export const formatEventDate = (selectedEvent)=> {
    let [unformattedDate, unformattedTime] = selectedEvent.start.split('T')
    
    
    let formattedTime = formatTime(unformattedTime)

    let day = formatDay(unformattedDate)

    return {
        'day': day,
        'time': formattedTime
    }
}

export function getToday(){
    const today =  new Date(Date.now())
    const todayString = today.toDateString()
    const [weekday, unformattedMonth, day, year]= todayString.split(' ')

    const monthLookup = {
        'Jan': '01',
        'Feb': '02', 
        'Mar':'03',
        'Apr': '04',
        'May': '05',
        'Jun': '06',
        'Jul': '07',
        'Aug': '08',
        'Sep': '09',
        'Oct': '10',
        'Nov': '11',
        'Dec': '12'
    }
    return `${year}-${monthLookup[unformattedMonth]}-${day}`
}