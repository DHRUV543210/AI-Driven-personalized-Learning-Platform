//FOR NAV SHADOW
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

function SlideUp(id){
    var button = document.getElementById(id);
    
    button.innerHTML = `
        <img id="leftbard" src="/Images/left.png" alt="leftbard">
        Creating Your Pathway for DSA ...
        <img id="rightbard" src="/Images/right.png" alt="rightbard">
    `;

    button.classList.add('slideup');
    console.log('hi');
}

var button = document.getElementById('generate');

button.addEventListener('click', () => {
    const main = document.querySelector('.main');
    const container = document.querySelector('.container');
    let newButton;
    
    setTimeout(() => {
        newButton = document.createElement('button');
        newButton.innerHTML = '<span style="color: green;">Successfully</span> Generated !';
        newButton.classList.add('generated');

        button.remove();
        main.appendChild(newButton);
        container.style.display = 'block';

    }, 4024);

    setTimeout(() => {
        newButton.remove();
        container.style.top = '10%';
    }, 8000)
});

