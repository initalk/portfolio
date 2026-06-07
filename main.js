function switchTab(tabId) {
  const contents = document.querySelectorAll('.tab-content')
  contents.forEach((content) => content.classList.remove('active-tab'))

  const targetContent = document.getElementById(tabId)
  if (targetContent) {
    targetContent.classList.add('active-tab')
  }

  const menuItems = document.querySelectorAll('.menu-item')
  menuItems.forEach((item) => item.classList.remove('active-menu'))

  const clickedItem = Array.from(menuItems).find((item) =>
    item.getAttribute('onclick').includes(`'${tabId}'`),
  )
  if (clickedItem) {
    clickedItem.classList.add('active-menu')
  }

  const hamburgerBtn = document.getElementById('hamburger-btn')
  const menuBar = document.getElementById('menu-bar')
  if (hamburgerBtn && menuBar) {
    hamburgerBtn.classList.remove('active')
    menuBar.classList.remove('active')
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.getElementById('hamburger-btn')
  const menuBar = document.getElementById('menu-bar')

  if (hamburgerBtn && menuBar) {
    hamburgerBtn.addEventListener('click', () => {
      hamburgerBtn.classList.toggle('active')
      menuBar.classList.toggle('active')
    })
  }

  const darkModeToggle = document.getElementById('dark-mode-toggle')
  const icon = darkModeToggle.querySelector('i')

  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme')
    icon.classList.replace('fa-moon', 'fa-sun')
  }

  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme')

    if (document.body.classList.contains('dark-theme')) {
      localStorage.setItem('theme', 'dark')
      icon.classList.replace('fa-moon', 'fa-sun')
    } else {
      localStorage.setItem('theme', 'light')
      icon.classList.replace('fa-sun', 'fa-moon')
    }
  })
})
