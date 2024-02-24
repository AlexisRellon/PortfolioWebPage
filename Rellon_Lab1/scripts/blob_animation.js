function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  document.styleSheets[0].insertRule(`
    @keyframes moveRandom {
      from {
        transform: translate(${getRandomValue(-100, 100)}px, ${getRandomValue(-50, 50)}px) rotate(${getRandomValue(-90, 90)}deg);
        border-radius: ${getRandomValue(20, 30)}% ${getRandomValue(70, 80)}% ${getRandomValue(30, 40)}% ${getRandomValue(60, 70)}% / ${getRandomValue(20, 30)}% ${getRandomValue(30, 40)}% ${getRandomValue(60, 70)}% ${getRandomValue(70, 80)}%;
      }
  
      to {
        transform: translate(${getRandomValue(-100, 100)}px, ${getRandomValue(-50, 50)}px) rotate(${getRandomValue(-90, 90)}deg);
        border-radius: ${getRandomValue(60, 70)}% ${getRandomValue(20, 30)}% ${getRandomValue(30, 40)}% ${getRandomValue(70, 80)}% / ${getRandomValue(70, 80)}% ${getRandomValue(50, 60)}% ${getRandomValue(40, 50)}% ${getRandomValue(30, 40)}%;
      }
    }
  `, document.styleSheets[0].cssRules.length);
  
  document.styleSheets[0].insertRule(`
    @keyframes moveTwoRandom {
      from {
        transform: translate(${getRandomValue(400, 600)}px, ${getRandomValue(400, 600)}px) rotate(${getRandomValue(-10, 10)}deg);
        border-radius: ${getRandomValue(70, 80)}% ${getRandomValue(20, 30)}% ${getRandomValue(30, 40)}% ${getRandomValue(60, 70)}% / ${getRandomValue(70, 80)}% ${getRandomValue(50, 60)}% ${getRandomValue(40, 50)}% ${getRandomValue(30, 40)}%;
      }
  
      to {
        transform: translate(${getRandomValue(-100, 100)}px, ${getRandomValue(-50, 50)}px) rotate(${getRandomValue(-90, 90)}deg);
        border-radius: ${getRandomValue(20, 30)}% ${getRandomValue(70, 80)}% ${getRandomValue(30, 40)}% ${getRandomValue(60, 70)}% / ${getRandomValue(20, 30)}% ${getRandomValue(30, 40)}% ${getRandomValue(60, 70)}% ${getRandomValue(70, 80)}%;
      }
    }
  `, document.styleSheets[0].cssRules.length);
  