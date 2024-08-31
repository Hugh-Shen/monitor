const getSelector = (element) => {
  const path = []
  let target = element.target

  while(target && target !== (document || window)) {
    path.push(target)

    target = target.parentNode
  }

  const selector = path.map(dom => {
    if (dom.id) {
      return `${dom.nodeName.toLowerCase()}#${dom.id}`
    }
    if (dom.className && typeof dom.className === 'string') {
      return `${dom.nodeName.toLowerCase()}.${dom.className}`
    }

    return dom.nodeName.toLowerCase()
  }).reverse().join(' ')

  return selector
}

export default getSelector