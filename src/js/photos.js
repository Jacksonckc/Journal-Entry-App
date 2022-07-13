import {
  loadLogo,
  loadNavbar,
  callAPI,
  addHideNavListener,
  setTheme,
  clearSessionStorage,
} from './helper'

setTheme()
clearSessionStorage()
loadLogo()
loadNavbar('photosPage').then(() => addHideNavListener())
