import * as errorCollection from './lib'
import { onLoadCycle } from './lib/lifeCycle'
import timing from './lib/performance/timing'

const init = () => {
  const {
    injectJsError,
    injectPromiseError,
    injectXMLError,
    blankScreen
  } = errorCollection
  

  injectJsError()
  injectPromiseError()
  injectXMLError()
  blankScreen()

  // init lifecycle
  onLoadCycle(timing)
}

export default init