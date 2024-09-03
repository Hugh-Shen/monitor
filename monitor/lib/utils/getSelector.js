export const _selector = (path) => {
  const result = path.map(dom => {
    if (dom.id) {
      return `${dom.nodeName.toLowerCase()}#${dom.id}`
    }
    if (dom.className && typeof dom.className === 'string') {
      return `${dom.nodeName.toLowerCase()}.${dom.className.split(' ').join('.')}`
    }
  
    return dom.nodeName.toLowerCase()
  }).join(' ')

  return result
}

const getSelector = (element) => {
  const path = []
  let target = element.target
    

  while(target && target !== (document || window)) {
    path.unshift(target)

    target = target.parentNode
  }
  
  return _selector(path)
}

export default getSelector