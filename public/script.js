window.addEventListener('scroll', function(){
    //navbar
    var navbar = document.getElementById('navbar');

    if(window.scrollY > 0){
        navbar.classList.add('scrolled');
    }

    else{
        navbar.classList.remove('scrolled');
    }
});

function ExploreMore(divId)
{
    var div = document.getElementById(divId);
    if(div)
    div.scrollIntoView({behavior: 'smooth', block: 'start'});
    window.scrollBy(0, 650);
}

const inputs = document.getElementsByClassName('input');
for(const input of inputs){
    input.addEventListener('input', function(){
        this.style.color = "blue";
    });
}


//Redirecting to other sites
function Redirect(request) {
    if(request === 'WebD')
    {
        window.location.href = '/WebD';
    }

    else if(request === 'DSA'){
        window.location.href = '/DSA';
    }

    else if(request === 'AI')
    {
        window.location.href = '/AI';
    }
    else if(request === 'DS')
    {
        window.location.href = '/DS';
    }
}


//Redirecting to Learn moutable links
function RedirectLearn(request) {
    if(request === 'WebD')
    {
        window.location.href = '/Learn/WebD';
    }

    else if(request === 'DSA'){
        window.location.href = '/Learn/DSA';
    }

    else if(request === 'AI')
    {
        window.location.href = '/Learn/AI';
    }
    else if(request === 'DS')
    {
        window.location.href = '/Learn/DS';
    }
}