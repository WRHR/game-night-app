const baseUrl = 'http://localhost:5000'
const usersUrl = `${baseUrl}/users/`
const loginUrl = `${usersUrl}/login`
const registerUrl = `${usersUrl}/register`
const eventsUrl = `${baseUrl}/events`
const gamesUrl = `${baseUrl}/games`

const useLogin = (body) => {
    fetch(loginUrl, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(body)
    })
    .then(res => res.json())
    .then(result => {return result})
}

const useRegister = (body) => {
    fetch(registerUrl, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(body)
    })
    .then(res => res.json())
    .then(result => {return result})
}

const useGetEvents = () => {
    fetch(eventsUrl, {
        method:'GET'
    })
    .then(res => res.json())
    .then(result => { return result })
}

const usePostEvent = (body) => {
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

const usePostGame = (body) => {
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