const colorTiles = (scoreList) => {
  scoreList.forEach((item, index) => {
    if (index % 2 === 0) {
      item.classList.add('gray');
    } else {
      item.classList.add('whiteSmoke');
    }
  });
}

export default colorTiles;