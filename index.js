//======================JQuery Section ===============================//

$('.butt').click(function () {
    $('.header').css('color', 'Blue');
    setTimeout(function(){
        $('.header').css('color', 'Red');
    }, 1000);
});


$(document).keypress(function(event){
    $('.header').text(event.key);
})

//=====================FETCH SECTION=============================//

const name = document.getElementById('name')
const eye_color = document.getElementById('eye_color')
const birthyear = document.getElementById('birthyear')
const height = document.getElementById('height');
const randomer = document.getElementById('randomer');

const button = document.querySelector('.change')


button.addEventListener('click', (e) =>{
    e.preventDefault();
    names.innerHTML = '<em>Loading....</em>';
    eye_color.innerHTML = '<em>Loading....</em>';
    birthyear.innerHTML = '<em>Loading....</em>';
    height.innerHTML = '<em>Loading....</em>';
    randomer.innerHTML = '<em>Loading....</em>';


    const randomNum = Math.ceil(Math.random() * 83);
    fetch(`https://swapi.dev/api/people/${randomNum}/`)
    .then((response) => response.json())
    .then(characters => {
    names.innerHTML = characters['name'];
    eye_color.innerHTML = characters['eye_color'];
    birthyear.innerHTML = characters['birth_year'];
    height.innerHTML = characters['height'];
    randomer.innerHTML = `Character is number ${randomNum}`;
    })
    .catch(error => console.error('Error:', error));
});
