var SUPABASE_URL = 'https://aglnnvwhtbkudpkfjpri.supabase.co'
var SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnbG5udndodGJrdWRwa2ZqcHJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgzNzE3ODgsImV4cCI6MjAzMzk0Nzc4OH0.38aOMzO_81dVq57L9rwqGHRefQvkWwDT9_z_Wvlthe0'

var supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY)
window.userToken = null

document.addEventListener('DOMContentLoaded', function (event) {

    var logInForm = document.querySelector('#log-in')
    logInForm.onsubmit = logInSubmitted.bind(logInForm)

    var logoutButton = document.querySelector('#logout-button')
    logoutButton.onclick = logoutSubmitted.bind(logoutButton)
})


const logInSubmitted = (event) => {
    event.preventDefault()
    const email = event.target[0].value
    const password = event.target[1].value

    supabase.auth
        .signIn({ email, password })
        .then((response) => {
            response.error ? alert(response.error.message) : setToken(response)
        })
        .catch((err) => {
            alert(err.response.text)
        })
}

const fetchUserDetails = () => {
    alert(JSON.stringify(supabase.auth.user()))
}

const logoutSubmitted = (event) => {
    event.preventDefault()

    supabase.auth
        .signOut()
        .then((_response) => {
            document.querySelector('#access-token').value = ''
            document.querySelector('#refresh-token').value = ''
            alert('Logout successful')
        })
        .catch((err) => {
            alert(err.response.text)
        })
}

function setToken(response) {
    if (response.user.confirmation_sent_at && !response?.session?.access_token) {
        alert('Confirmation Email Sent')
    } else {
        document.querySelector('#access-token').value = response.session.access_token
        document.querySelector('#refresh-token').value = response.session.refresh_token
        alert('Logged in as ' + response.user.email)
    }
}