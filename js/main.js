/*const collapseElementList = document.querySelectorAll('.collapse')
const collapseList = [...collapseElementList].map(collapseEl => new bootstrap.Collapse(collapseEl))
*/

//Crear una instancia collapse

const bsCollapse = new bootstrap.Collapse('#navbarNavDropdown', {
    toggle: false
  })

  document.addEventListener("click", e => {
    if (!e.target.matches(".navbar .dropdown-menu a")) return false

    bsCollapse.hide()
    
  })