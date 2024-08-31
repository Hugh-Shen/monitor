const getStackInfo = (stackInfo) => {
  return stackInfo.split('\n').slice(1)
    .map(item => item.replace(/^\s+at\s/g, '')).join(' > ')
}

export default getStackInfo