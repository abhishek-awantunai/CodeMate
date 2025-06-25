function generateButtons() {
  for (let i = 0; i < 20; i++) {
    document.querySelector('.checkButtons').innerHTML += `<button onClick="alertIndexOfButton(${i})">${i + 1}</button>`;
  }
}

function alertIndexOfButton(index) {
  alert(index);
}

generateButtons();
