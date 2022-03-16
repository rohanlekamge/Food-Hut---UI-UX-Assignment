function registerFunc()
{
    //alert('reg clicked');
    $('#register-validation-modal').modal('show');
    setTimeout(function () {
        window.location.href = "stu01_login.html"; 
        //will redirect to your blog page (an ex: blog.html)
    }, 2000); 
    //will call the function after 2 secs.
}