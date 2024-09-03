import * as errorCollection from './lib'

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
}

export default init