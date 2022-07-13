import {
  loadLogo,
  loadNavbar,
  callAPI,
  addHideNavListener,
  setTheme,
} from './helper'
setTheme()
loadLogo()
loadNavbar('photosPage').then(() => addHideNavListener())
