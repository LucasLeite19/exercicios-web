const colors = {
 p:'#1146D9',
 div:'#9F11D9',
 span:'#D911CB',
 section:'#6CC587',
 ul:'#637067',
 ol:'#F0765B',
 header:'#706563',
 nav:'#F0D15B',
 main:'#5B66F0',
 footer:'#F05C5B',
 form:'#F05C5B',
 body:'#F0885B',
 padrao:'#35463A',
 get(tag) {
  return this[tag] ? this[tag] : this.padrao
}
}

document.querySelectorAll('.tag').forEach(elemento => {
  const tagName = elemento.tagName.toLowerCase()

  elemento.style.borderColor = colors.get(tagName)

  if (!elemento.classList.contains('nolabel')) {
  const label = document.createElement('label')
  label.style.backgroundColor = colors.get(tagName)
  label.innerHTML = tagName
  elemento.insertBefore(label, elemento.childNodes[0])
}

})