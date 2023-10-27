// Import our custom CSS
import '../scss/styles.scss'
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.scss'

import { Offcanvas } from 'bootstrap'

// Handle mobile menu behavior
const bsOffcanvas = new Offcanvas('#mobileMenu')
const mobileLinks = document.querySelectorAll('.blb-mobile-menu-link')
mobileLinks.forEach((link) => {
  link.addEventListener('click', () => {
    bsOffcanvas.hide()
  })
})

// Current year to display for copyright at bottom of page.
const currentYearEl = document.getElementById('currentYear')
currentYearEl.innerText = new Date().getFullYear()

