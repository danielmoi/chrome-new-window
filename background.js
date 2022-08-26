const adjustPosition = () => {
  chrome.windows.update(-2, { left: 0 })
}

chrome.windows.onCreated.addListener(
  adjustPosition
)
