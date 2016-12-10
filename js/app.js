
  function dragAndDrop(card) {
    card.onmousedown = function(e) { // 1. отследить нажатие

  // подготовить к перемещению
  // 2. разместить на том же месте, но в абсолютных координатах
  card.style.position = 'absolute';
  moveAt(e);
  // переместим в body, чтобы мяч был точно не внутри position:relative
  document.body.appendChild(card);

  card.style.zIndex = 1000; // показывать мяч над другими элементами

  // передвинуть мяч под координаты курсора
  // и сдвинуть на половину ширины/высоты для центрирования
  function moveAt(e) {
    card.style.left = e.pageX - card.offsetWidth / 2 + 'px';
    card.style.top = e.pageY - card.offsetHeight / 2 + 'px';
  }

  // 3, перемещать по экрану
  document.onmousemove = function(e) {
    moveAt(e);
  }

  // 4. отследить окончание переноса
  card.onmouseup = function() {
    document.onmousemove = null;
    card.onmouseup = null;
  }
}

  card.ondragstart = function() {
    return false;
  };
}
    var cards = ['card1','card2','card3','card4']
    
  for(let i = 0 ; i < 4; i++){
    var card = document.getElementById(cards[i]);
    dragAndDrop(card);
}

