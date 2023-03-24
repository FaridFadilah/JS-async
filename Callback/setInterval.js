function addElement(){
  const header = document.getElementById('header')
  header.textContent = new Date().toString()

  document.body.appendChild(header)
}

setInterval(addElement, 1000)