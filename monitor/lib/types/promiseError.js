import getLastEvent from '../utils/getLastEvent.js'
import getSelector from '../utils/getSelector.js'
import getStackInfo from '../utils/getStackInfo.js'

export const injectPromiseError = () => {

  window.addEventListener('unhandledrejection', (e) => {
    const lastEvent = getLastEvent()
    const { reason } = e
    let message, filename, postion, stack

    if (typeof reason === 'string') {
      message = reason
    } else if (typeof reason === 'object') {
      const match = reason.stack.match(/at\s+(.+):(\d+):(\d+)/)

      message = reason.message
      filename = match[1]
      postion = [+match[2], +match[3]]
      stack = getStackInfo(reason.stack)
    }

    const log = {
      kind: 'stability',
      type: 'error',
      errorType: 'promiseError',
      url: location.href,
      message,
      filename,
      postion,
      stack,
      selector: lastEvent ? getSelector(lastEvent) : ''
    }

    console.log(log)
  })
}