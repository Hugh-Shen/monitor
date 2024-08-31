let event;

[
  'click',
  'touchstart',
  'mousedown',
  'keydown',
  'mouseover'
].forEach(eventType => {
  document.addEventListener(eventType, (e) => {
    event = e
  }, { capture: true, passive: true })
})

export default function () {
  return event
}