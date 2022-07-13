const count = document.getElementById('count')

function countDown() {
  setInterval(() => {
    if (count.innerHTML > 0) {
      count.innerHTML = count.innerHTML - 1
    } else {
      const message = document.getElementById('logout_message')
      message.innerHTML = `Time to go!`
      const a = document.querySelector('a')
      a.innerHTML = `There is no return ...`
      a.style.pointerEvents = 'none'

      setTimeout(() => {
        window.location.replace('https://online-journey.herokuapp.com/logout')
      }, 1000)
    }
  }, 1000)
}

countDown()
