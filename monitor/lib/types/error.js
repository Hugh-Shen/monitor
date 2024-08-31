import getLastEvent from '../utils/getLastEvent.js'
import getSelector from '../utils/getSelector.js'

export const injectJsError = () => {
  const getLines = (stackInfo) => {
    return stackInfo.split('\n').slice(1)
      .map(item => item.replace(/^\s+at\s/g, '')).join(' > ')
  }


  window.addEventListener('error', (e) => {
    const lastEvent = getLastEvent()

    const log = {
      kind: 'stability',
      type: 'error',
      errorType: 'jsError',
      url: '',
      message: e.message,
      filename: e.filename,
      postion: [e.lineno, e.colno],
      stack: getLines(e.error.stack),
      selector: lastEvent ? getSelector(lastEvent) : ''
    }

    console.log(log)
  },)
}