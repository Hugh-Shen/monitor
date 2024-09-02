import * as errorCollection from './lib'

const init = () => {
  const {
    injectJsError,
    injectPromiseError,
    injectXMLError
  } = errorCollection
  

  injectJsError()
  injectPromiseError()
  injectXMLError()
}

export default init