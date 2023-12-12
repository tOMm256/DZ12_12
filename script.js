const button = document.getElementById('button')
const wrapper1 = document.getElementById('wrapper1')
const button1 = document.getElementById('button1')


button.addEventListener('click', function () {
  console.log('click')
  wrapper1.classList.toggle('visible')
  const newButton = document.createElement('button')
  newButton.innerHTML = '235'
  wrapper1.appendChild(newButton)

  newButton.addEventListener('click', function () {
    console.log('clidkjaewdfk')
    wrapper1.innerHTML = ''
  })
})

button1.addEventListener('click', function () {
    console.log('click')
    wrapper1.classList.remove('visible')
    wrapper1.innerHTML = ''
})
