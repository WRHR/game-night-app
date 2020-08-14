const baseUrl = 'http://localhost:5000'
export const usersUrl = `${baseUrl}/users`
export const loginUrl = `${usersUrl}/login`
export const registerUrl = `${usersUrl}/register`
export const eventsUrl = `${baseUrl}/events`
export const gamesUrl = `${baseUrl}/games`

const fecthLogin = (body) => {
    fetch(loginUrl, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(body)
    })
    .then(res => res.json())
    .then(result => {return result})
}

const fetchRegister = (body) => {
    return fetch(registerUrl, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(body)
    })
    .then(res => res.json())
    .then(result => {return result})
    
}

const fecthGetEvents = () => {
    fetch(eventsUrl, {
        method:'GET'
    })
    .then(res => res.json())
    .then(result => { return result })
}

const fetchPostEvent = (body) => {
    fetch(eventsUrl, {
        method:'POST',
        headers:{
            'Authorization': `Bearer ${localStorage.token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(result => { return result})
}

const fetchPostGame = (body) => {
    fetch(gamesUrl,{
        method:'POST',
        headers: {
            'Authorization': `Bearer ${localStorage.token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(res=> res.json())
    .then(result => {return result})
}