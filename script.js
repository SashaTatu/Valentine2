console.log('Script connected');

const arrayOfLoveWishes = [
    'Кохайте один одного! Це найважливіше!',
    'Будьте щасливі!',
    'Живіть в гармонії!',
    'Насолоджуйтесь життям!',
    'Не хворійте!',
]

document.getElementById('btn_wishes').addEventListener('click', () =>  {
    //alert('Button clicked');

    let index = Math.floor(Math.random() * arrayOfLoveWishes.length)
    document.getElementById('p_wishes').innerText = arrayOfLoveWishes[index];
})