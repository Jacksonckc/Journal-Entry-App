import { loadLogo, loadNavbar, callAPI, addHideNavListener } from './helper'

loadLogo()
loadNavbar('goalsPage').then(() => addHideNavListener())
