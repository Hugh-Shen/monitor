import { onLoadCycle } from '../lifeCycle'

const selector = (element) => {
  if (element.id) {
    return `#${element.id}`
  }
  if (element.className && typeof element.className === 'string') {
    return `.${element.className.split(' ').join('.')}`
  }
  
  return element.nodeName.toLowerCase()
}


export const blankScreen = (pointCount = 10) => {
  const filterElementsList = ['html', 'body', '#app', '.container']
  let emptyPoint = 0


  const isWrapper = (element) => {
    const selectorDom = element ? selector(element) : 'html'
  
    if (filterElementsList.includes(selectorDom)) {
      emptyPoint += 1
    }
  }
  const run = () => {
    for (let i = 1; i <= pointCount; i++) {
      const elementX = document.elementsFromPoint(
        window.innerWidth / pointCount * i,
        window.innerHeight / 2,
      )
  
      const elementY = document.elementsFromPoint(
        window.innerWidth / 2,
        window.innerHeight / pointCount * i
      )
  
      isWrapper(elementX[0])
      isWrapper(elementY[0])
    }

    if (emptyPoint >= pointCount * 2) {
      const log = {
        kind: 'stability',
        type: 'blank',
        url: location.href,
        screen: window.screen.width + 'x' + window.screen.height,
        viewSize: window.innerWidth + 'x' + window.innerHeight,
        emptyPoint,
      }

      console.log(log)
    }
  }

  
  onLoadCycle(run)
}