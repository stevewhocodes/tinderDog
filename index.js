// Remember to import the data and Dog class!
import dogs from './data.js';
import dogClass from './Dog.js';

let i = 0;

function render() {
  let dog = new dogClass(dogs[i]);

  document.body.innerHTML = dog.getDogHtml();

  const imgLikeNope = document.getElementById('img-like-nope');
  document.getElementById('btn-cross').addEventListener('click', function () {
    imgLikeNope.innerHTML = dog.getHasBeenSwipedHtml();
    setTimeout(nextDog, 1000);
  });
  document.getElementById('btn-heart').addEventListener('click', function () {
    imgLikeNope.innerHTML = dog.getHasBeenLikedHtml();
    setTimeout(nextDog, 1000);
  });
}

function nextDog() {
  i++;
  if (i < dogs.length) {
    render();
  } else {
    document.getElementById(
      'img'
    ).innerHTML = `<div><h2>No more DOGGOS in your area!</h2></div>`;
  }
}

document.addEventListener('DOMContentLoaded', render);
