import getLastEvent from '../utils/getLastEvent.js'
import getSelector from '../utils/getSelector.js'
import getStackInfo from '../utils/getStackInfo.js'

export const injectJsError = () => {

  window.addEventListener('error', (e) => {
    const lastEvent = getLastEvent()
    let log = null

    // Error loading file resource
    if (e.target && (e.target.src || e.target.href)) {
      log = {
        kind: 'stability',
        type: 'error',
        errorType: 'resourceError',
        url: location.href,
        tagName: e.target.tagName.toLowerCase(),
        filename: e.target.src || e.target.href,
        selector: getSelector(e)
      }
    } else {
      log = {
        kind: 'stability',
        type: 'error',
        errorType: 'jsError',
        url: location.href,
        message: e.message,
        filename: e.filename,
        postion: [e.lineno, e.colno],
        stack: getStackInfo(e.error.stack),
        selector: lastEvent ? getSelector(lastEvent) : ''
      }
    }

    console.log(log)
  }, true)
}