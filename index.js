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


$(document).ready(() => {
    const $names = $('#names');
    const $eyeColor = $('#eyeColor');
    const $skinColor = $('#skinColor');
    const $gender = $('#gender');
    const $height = $('#height');
    const $charactersImg = $('#CharactersImages');
    const $randomer = $('#randomer');

    const $button = $('.change');

    $button.on('click', (e) => {
        e.preventDefault();

        $names.html('<em>Loading....</em>');
        $eyeColor.html('<em>Loading....</em>');
        $skinColor.html('<em>Loading....</em>');
        $gender.html('<em>Loading....</em>');
        $height.html('<em>Loading....</em>');
        $randomer.html('<em>Loading....</em>');
        $charactersImg.attr('src', '');

        const randomNum = Math.ceil(Math.random() * 83);

        $.get(`https://akabab.github.io/starwars-api/api/id/${randomNum}.json`, (character) => {
            $names.text(character.name);
            $eyeColor.text(character.eyeColor);
            $skinColor.text(character.skinColor);
            $gender.text(character.gender);
            $height.text(character.height);
            $randomer.text(`Character is number ${randomNum}`);

            $charactersImg.attr('src', character.image);
            $charactersImg.attr('alt', character.name);
        }).fail((error) => {
            console.error('Error:', error);
        });
    });
});
