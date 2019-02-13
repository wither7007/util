j = s.reduce((a, i) => {
  a.push(i.innerText)
  return a
}, [])
copy(j)
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

function gcl(cls) {
  let d = Array.from(document.querySelectorAll(cls))
  return d
}

g = f.reduce((a, i) => {
  a += i.innerText + "\n"
  return a
}, "")
copy(g)

g = f.reduce((a, i) => {
  a.push(i.innerText + " ")
  return a
}, [])
copy(g.join("\n"))

d = Array.from(document.querySelectorAll("*"))
k = []
d.forEach((x, i) =>
  k.push(
    i +
      ": " +
      x.tagName +
      " - " +
      x.textContent.replace(/\s\s+/g, " ").substring(0, 70)
  )
)
copy(k)

function gcl(cls) {
  d = Array.from(document.querySelectorAll(cls))
  return d
}
j.reduce((a, i) => a.push(i.textContent), [])

k = j.reduce((a, i) => {
  a.push(i.textContent.replace(/\s\s+/g))
  return a
}, [])
copy(k)
