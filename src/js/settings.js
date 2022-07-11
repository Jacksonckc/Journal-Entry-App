import { loadLogo, loadNavbar, addHideNavListener, setTheme } from './helper'
setTheme()

loadLogo()
loadNavbar('settingsPage').then(() => addHideNavListener())

const ele = document.getElementById('themes')

function changeTheme() {
  const theme = ele.options[ele.selectedIndex].value
  document.cookie = `theme=${theme}`

  setTheme()
}

ele.addEventListener('change', () => changeTheme())
