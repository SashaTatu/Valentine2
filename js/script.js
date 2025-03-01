console.log('Script connected');

const arrayOfLoveWishes = [
    "Бажаю тобі нескінченної любові та тепла!",
    "Нехай твоє серце завжди буде сповнене ніжності.",
    "Нехай кожен день приносить радість і кохання.",
    "Бажаю, щоб поруч завжди була людина, яка тебе кохає.",
    "Нехай кохання буде чистим, щирим і взаємним.",
    "Нехай у твоєму житті буде багато обіймів і поцілунків.",
    "Бажаю, щоб твоє серце ніколи не знало болю і смутку.",
    "Нехай кохання наповнює кожен твій день яскравими емоціями.",
    "Бажаю вірного і турботливого партнера поруч.",
    "Нехай твоє серце завжди знаходить відгук у іншому серці.",
    "Бажаю, щоб ваше кохання було вічним і міцним.",
    "Нехай твоє життя буде наповнене щасливими моментами з коханою людиною.",
    "Бажаю пристрасних і незабутніх поцілунків.",
    "Нехай твоя любов буде натхненням для нових звершень.",
    "Бажаю романтики і казкових моментів у стосунках.",
    "Нехай ваші серця б’ються в унісон назавжди.",
    "Бажаю, щоб ваше кохання було міцним, як діамант.",
    "Нехай кожен день приносить вам нові причини для щастя разом.",
    "Бажаю багато тепла, розуміння і гармонії у відносинах.",
    "Нехай ваше кохання буде яскравим, як найкрасивіший схід сонця!"
  ];
  let countOfHearts = 5
console.log('countOfHearts ' + countOfHearts)


document.getElementById('count-of-hearts').innerText = '🧡'.repeat(countOfHearts)


document.getElementById('btn_wishes').addEventListener('click', () =>  {
  console.log('Button clicked');


  let index = Math.floor(Math.random() * arrayOfLoveWishes.length)
   
  //console.log('Номер елементу масиву - ', index);
  document.getElementById('p_wishes').innerText = arrayOfLoveWishes[index];


  countOfHearts--
  console.log('countOfHearts ' + countOfHearts)
  document.getElementById('count-of-hearts').innerText = '🧡'.repeat(countOfHearts) + '🤍'.repeat(5-countOfHearts)


  let randomIMG = Math.floor(Math.random()*5)+1
  console.log('randomIMG '+ randomIMG);
  document.getElementById('p-love-img').innerHTML = `<img src = "img/gallery/${randomIMG}.png" alt = "Heart for U">`

  document.getElementById('p-love-img').style.display = 'flex'

  if(countOfHearts == 0) {
    document.getElementById('btn_wishes').style.display = 'none'
    document.getElementById('count-of-hearts').innerText = ' Придбайте нові сердечка🧡'
  }
})
  
document.getElementById('count-of-hearts').addEventListener('click', () =>{
  if(countOfHearts == 0) {
    alert('Придбати сердечка можна натиснувши кнопку "Купити🧡"')
  }
})

document.getElementById('btn-buy-hearts').addEventListener('click', () =>  {
  countOfHearts = 5
  document.getElementById('count-of-hearts').innerText = '🧡'.repeat(countOfHearts)
  document.getElementById('btn_wishes').style.display = 'inline-block'
  document.getElementById('p_wishes').innerText = ''
  document.getElementById('p-love-img').style.display = 'none'

  console.log('btn_buy-hearts clicked')
})
