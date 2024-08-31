import * as errorCollection from './lib'

const init = () => {
  const {
    injectJsError,
    injectPromiseError
  } = errorCollection
  

  injectJsError()
  injectPromiseError()
}

export default init