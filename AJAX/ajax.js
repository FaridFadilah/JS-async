const ajax = new XMLHttpRequest()
ajax.open('GET', 'AJAX/API/hello.json')
// ajax.open('GET', 'AJAX/API/salah.json')

function displayResponse(json){
  const header = document.getElementById('response')
  header.textContent = json.response
}

// get content API
ajax.addEventListener('load', () => {
  if(ajax.status === 200){
    const json = JSON.parse(ajax.responseText)
    displayResponse(json)
  }
  else{
    displayResponse({
      response: `something went wrong !!, status code ${ajax.status}` 
    })
  }
  // const json = JSON.parse(ajax.responseText)
  // const header = document.getElementById('response')

  // header.textContent = json.response
})

ajax.send()