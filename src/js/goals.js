import {
  loadLogo,
  loadNavbar,
  callAPI,
  addHideNavListener,
  setTheme,
} from './helper'

setTheme()
loadLogo()
loadNavbar('goalsPage').then(() => addHideNavListener())
