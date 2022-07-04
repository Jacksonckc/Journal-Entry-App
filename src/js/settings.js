import { loadLogo, loadNavbar, callAPI, addHideNavListener } from './helper'

loadLogo()
loadNavbar('settingsPage').then(() => addHideNavListener())
