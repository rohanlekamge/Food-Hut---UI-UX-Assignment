function loginfunc ()
{

    const valid_username = 'vihanperera';
    const valid_password = 1234;

    var username = document.getElementById('InputUsername').value;
    var password = document.getElementById('InputPassword').value;

    if (username == valid_username && password == valid_password) 
    { 
        // System Feedback Model for Login Success
        $('#login-successful-modal').modal('show');
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        window.location.href = "stu01_home.html";
    }
    else
    {
        // System Feedback Model for Login Failed
        $('#login-validation-modal').modal('show');
    }
}

function storageClear()
{
    localStorage.removeItem('username');
    localStorage.removeItem('favFoods');
    localStorage.removeItem('cartItems');
    localStorage.removeItem('password');
    localStorage.removeItem('isAuthorized');
    window.location.href = "stu01_login.html";
}