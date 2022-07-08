import { loadLogo, loadNavbar, callAPI, addHideNavListener } from './helper.js'

loadLogo()
loadNavbar().then(() => addHideNavListener())

const endpoint = 'entries/'

function addEntry(formData) {
  console.log(JSON.stringify(formData))
  // set options for POST method
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Cookie:
        'appSession=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiaWF0IjoxNjU3MTI5MzM3LCJ1YXQiOjE2NTcxMjkzMzcsImV4cCI6MTY1NzIxNTczN30..8TyRN9t5SsOaQzkP.E794G4Vs92SaCIM8Q5fJqPyVftNaQ9LDD9ZUpmVqmzD8_5j6CV4P7hLhWc9byRLhLxFVgYlvkTfN4gdegVELGCmABHe16uTERmSDD-UyWyCsqCWN5AB5O0WgmV5YfoZBW6fmcNDA9M6buYZsD5Q8LaFCZ5NW00wOPd1dNPlFibmKzvUTowhr4ngQvyHy2AM0L7efpV-J8EGMs8-UkNRI633QyLDBPO48F7Xpmz4JIkLk03JYZmwArihfknMTub6A_cOLmtuZNpjQKrWeFm6absKmx2GLnuWF6ngCpYG568X9RH89cRZfELJiYYTO9mkbaRHGH0zWDVWykP18I7OPH0Qtn6w9d3kWivW88e-teBnCiXL_DvZqNUJaT8YIata4Zlz13PfEGhiiV5VTZfCnOK8KVJcz0e_Y3NyjSgqaCidBOOk5eIQmbwwt_XOK11DJJRNLgp3axUsOxOC1Nmxy58RYqrDm5YQpGZeDHDjiN7bD1JhJ_WnXVeXV3t4tJ7EhFeZU5SdkTTFeJQYKeyccMtauP2xa0coMWNZRKir4R7al_26SEmtiwWKyt55kyXmfAKzybzhyghjv4G3ai_B2vyROLagCyipAkAVWZ2Q1Bvz4F2UpkSSq5_FNiU9jwKLjMBqXsPZggdldN6uf0qwfcE2rHWEVOdCSsOXu3Oz4lrJhzzG6pcmpoY0NVWbtZkdG23kKBu539SteMoqNHb3Ei2Hq3gXerCywLvkes5TR4lcVAHoRed9kNDWhnJPWwdjzQRCiDckDVxL-rBvPN599-yJAaFMqY0gq-gTpSS4lGcihh-oyCRSvdvrohGcF8w-jq3lo-wwB80c8Al2H7kOBsBTuRKaBD3KdojJSCZYCzwI66kQ5oXmqqEMNfgBWlOpkQ6CVaYelt5iup48N7ulixYCyt8x5dBdxo8nXfTmoYOx2m_QScixz4BbVkfBjbdLr7hJfL9r_9WKGTDGRUL8aR-AZrYHfnIriiDPmFNAHEnR-wIZ0PVZx5r6DugxnriT7SkC5eSXSlcrApNviEeQ8HDKBWwn7J6TK8xlQC-dHkDxj_1EROA3BcKjZD092y-CY8VVayiUpJg7OW-5y750thCauXrPq9cTbAmwo4H7ry0LnPYL7h6u9c7LAQg4qU_PC7merWwf-G_wCOM26Kxgqn5Abc9AfwlgGtVkGEwRzKQT-OnQZ85iFEDByJniue0dGBOqhLINlN_M4ayknkedfJ9XmPxcK0Smcc7DbVbl8QxOcpgKo0nlqlLn6cgDtPRGXVxRMPhnEfJNXPiJ7l4l1xkYPpaNmCh13c8HXrcQ3AUaQrju9K1Du5ezFyJDTpiJxVzHOtvvcgNSNzyLDxX-Jle-6cSeT7veLstFR1x349k81TW1cDNfUla2PvSXDeMaumWmkkDDuPaK2CfXi1MJdP4rBhodrSo1jb-tCt_cYJforfyU9kMmhSzy5pXB_3oQ2Peb_UZdvGRJ31jHdKlMLejux9QpJmp83drpvMWpfM1jQ1-nhXRO6FyNpkwauvvM4bRNJLl34Y33bKKdgC4vVRVD85NK6etSz3qDryGcmjiLtPX3-ftzX8VrmisZn-NFwS3z3fO5Oq7waP0qa99KtG2NOozdrPIKhiE-1.4Drwo8D9-Gmbm-ug0sVr2w',
    },
    body: JSON.stringify(formData),
  }

  // use callAPI function to make an API call with entries endpont and options
  const token = callAPI(endpoint, options)
  console.log(token)
}

function setEntry() {
  // Add an event listener to the submit button of the entry form.
  // When it is clicked, grab the values of each input and call the
  // addEntry function to add them in the options.
  document.querySelector('#addEntry').addEventListener('click', () => {
    const entryName = document.querySelector('#entryName').value
    const entry = document.querySelector('#entry').value
    addEntry({ entry: entry })
  })
}

// Call the setEntry function
setEntry()
