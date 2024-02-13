 const alternatives = [
    {text: "", images: "first.gif"},
    {text: "mouahaha tu n'as pas le choix", images: "mouahaha.gif"},
    {text: "Shpouck shpouck", images: "second.gif"},
    {text: "miam miam ramen?", images: "ramen.gif"},
    {text: "ACCEPTEEEEE", images: "third.gif"}
];
const ohyes = {text: "hehehe you're in danger", images: "kidnap.gif"};
const title = document.querySelector('.title');
const text = document.querySelector('.text');
const cat = document.querySelector('.cat');
const buttons = document.querySelectorAll('.button');
const errorButton = document.querySelector('.button__error');

let count = 0;
function updateDisplay(item) {
    cat.src = item.images;
    text.textContent = item.text;
}

errorButton.addEventListener('click', () => {
    count = 0;
    updateDisplay(alternatives[count]);
    buttons.forEach(btn => btn.style.display = 'inline-block');
    errorButton.style.display = 'none';
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === 'OUI') {
            updateDisplay(ohyes);
            buttons.forEach(btn => btn.style.display = 'none');
            errorButton.style.display = 'inline-block'; // Show the error button if needed
        } else if (button.textContent === 'je crois pas nan') {
            count++;
            if (count < alternatives.length) {
                updateDisplay(alternatives[count]);
            } else {
                buttons.forEach(btn => btn.style.display = 'none');
                errorButton.style.display = 'inline-block';
            }
        }
    });
});
