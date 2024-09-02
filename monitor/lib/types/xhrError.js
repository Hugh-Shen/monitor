export const injectXMLError = () => {
  const XMLHttpRequest = window.XMLHttpRequest
  const open = XMLHttpRequest.prototype.open
  const send = XMLHttpRequest.prototype.send

  XMLHttpRequest.prototype.open = function (type, url, async) {

    /** 匹配上报地址 */
    if (!url.match(/sendError/)) {
      this.logData = { type, url, async }
    }

    open.apply(this, arguments)
  }
  XMLHttpRequest.prototype.send = function (params) {
    const startTime = Date.now()

    const handle = (errorType) => (event) => {
      const timer = Date.now() - startTime

      const log = {
        kind: 'stability',
        type: 'xhr',
        errorType,
        url: location.href,
        requstUrl: this.logData.url,
        status: this.status,
        duration: timer,
        response: this.response || null,
        params,
      }
      
      console.log(log)
    }

    if (this.logData) {
      this.addEventListener('load', handle('load'), false)
      this.addEventListener('error', handle('error'), false)
      this.addEventListener('abort', handle('abort'), false)
    }

    return send.apply(this, arguments)
  }
}
