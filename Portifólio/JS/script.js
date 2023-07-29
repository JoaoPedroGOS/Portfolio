const localStorageLang = 'language'
dataUS = document.getElementById('EN-US');
dataPT = document.getElementById('PT-BR');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    });
    
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100)

}


function enus(){
    
    let lang = JSON.parse(localStorage.getItem(localStorageLang) || "[]")

    lang.push({
        name: dataUS.value
    });

    localStorage.setItem(localStorageLang,JSON.stringify(lang))

    validation();
}

function ptbr(){
    
    let lang = JSON.parse(localStorage.getItem(localStorageLang) || "[]")

    lang.push({
        name: dataPT.value
    });

    localStorage.setItem(localStorageLang,JSON.stringify(lang))

    validation();
}

function validation(){
    let lang = JSON.parse(localStorage.getItem(localStorageLang) || "[]")
    var i = lang.length - 1;
    if(`${lang[i]['name']}` == '1'){
        dataUS.innerHTML = "<input type='radio' name='enus' id='en'>en-us"
        dataPT.innerHTML = "<input type='radio' name='ptbr' id='pt' checked>pt-br"
    }else{
        dataUS.innerHTML = "<input type='radio' name='enus' id='en' checked>en-us"
        dataPT.innerHTML = "<input type='radio' name='ptbr' id='pt'>pt-br "
    }
}

validation();

function removetoggle(){
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}