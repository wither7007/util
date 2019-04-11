d = Array.from(document.querySelectorAll("*"))
k = d.reduce((x, i, n) => {
  x.push(
    n +
    ": " +
    i.tagName +
    " - " +
    "{" +
    i.classList +
    "}" +
    ": " +
    i.textContent.replace(/\s\s+/g, " ").substring(0, 70)
  )
  return x
}, [])
copy(k)

function tc(n) {
  //general function to remove space
  return n.replace(/\s\s+/g, " ").substring(0, 70)
}

function gcl(cls) {
  let d = Array.from(document.querySelectorAll(cls))
  return d
}