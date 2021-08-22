var dropbtn = document.querySelectorAll('.dropbtn')
var menuBtn = document.querySelector('.hamburger')
var navBar = document.querySelector('.navbar')

menuBtn.addEventListener('click', (e) => {
  var Src = menuBtn.src
  if (Src === 'http://127.0.0.1:5500/images/icon-hamburger.svg') {
    menuBtn.src = 'images/icon-close.svg'
  } else {
    menuBtn.src = 'images/icon-hamburger.svg'
  }

  navBar.classList.toggle('expand')
})

dropbtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    btn.classList.toggle('active')

    var arrow = btn.querySelectorAll('.arrow')
    var dropdownContent = btn.nextElementSibling

    if (dropdownContent.style.display === 'block') {
      dropdownContent.style.display = 'none'
      arrow[0].style.transform = 'rotate(360deg)'
      arrow[1].style.transform = 'rotate(360deg)'
    } else {
      dropdownContent.style.display = 'block'
      arrow[0].style.transform = 'rotate(180deg)'
      arrow[1].style.transform = 'rotate(180deg)'
    }
  })
})
