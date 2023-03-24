function addElement(){
  const header = document.createElement('h1')
  header.textContent = 'ini setTimeout'

  document.body.appendChild(header)
}

setTimeout(addElement, 5000)
console.log('program selesai')