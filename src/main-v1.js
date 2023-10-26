const bsOffcanvas = new bootstrap.Offcanvas('#mobileMenu')
const mobileLinks = document.querySelectorAll('.bb-mobile-menu-link')
mobileLinks.forEach((link) => {
  link.addEventListener(
    'click',
    () => {
      bsOffcanvas.hide()
    },
    {
      once: true,
    }
  )
})
