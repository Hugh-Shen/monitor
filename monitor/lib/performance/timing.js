const timing = () => {
  setTimeout(() => {
    const performanceEntries = performance.getEntries()
    const {
      connectStart,
      connectEnd,
      requestStart,
      responseStart,
      responseEnd,
      domComplete,
      domContentLoadedEventEnd,
      domContentLoadedEventStart,
      loadEventEnd,
      loadEventStart,
      domainLookupEnd,
      domainLookupStart,
      fetchStart,
      domInteractive,
    } = performanceEntries[0]

  
    const log = {
      kind: 'experience',
      type: 'timing',
      domainTime: domainLookupEnd - domainLookupStart,
      connectTime: connectEnd - connectStart,
      ttfbTime: responseStart - requestStart, // 首字节到达时间
      loadTime: loadEventEnd - fetchStart, // 首次加载时间
      timeToInteraction: domInteractive - fetchStart, // 首次交互时间
      requestTime: responseStart - requestStart,
      responseTime: responseEnd - responseStart,
      domCompleteTime: domComplete - responseEnd,
      domContentLoadedEventTime: domContentLoadedEventEnd - domContentLoadedEventStart,
    }

    console.log(log)
  }, 3000)
}


export default timing