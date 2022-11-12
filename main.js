let expand = document.getElementById('expand')
let more = document.getElementById('more')
let darkSwitch = document.getElementById('dark')
let flashlight = document.getElementById('flashlight')
let brightnessBar = document.getElementById('brightness')
let mainBody = document.getElementById('main')
let clock = document.getElementById('clock')
let calender = document.getElementById('calender')
var minPopUp = document.getElementById('miniPopUp')
var notification = document.querySelectorAll('.notification')
var clearAll = document.getElementById('clearAll')

//Function for showing more quick setting tiles
more.style.height = '0px'
expand.addEventListener('click', () => {
    if (more.style.height == '0px') {
        more.style.height = more.scrollHeight + 'px'
        miniPopUp.style.opacity = 1
        miniPopUp.innerText = 'You can click Dark Mode and flashlight icon.'
        setTimeout(() => {
            miniPopUp.style.opacity = 0
        }, 5000)
    } else {
        more.style.height = '0px'
    }
})

//help user to find the expand button
expand.addEventListener('mouseover', () => {
    miniPopUp.style.opacity = 1
    miniPopUp.innerText = 'This is the expand Button.'
    setTimeout(() => {
        miniPopUp.style.opacity = 0
    }, 5000)
})

//Simulate Brightness Control
brightness.addEventListener('change', function() {
    mainBody.style.filter = 'brightness(' + brightnessBar.value + "%" + ')'
    miniPopUp.style.opacity = 1
    miniPopUp.innerText = 'Brightnes set to ' + brightnessBar.value + '%'
    setTimeout(() => {
        miniPopUp.style.opacity = 0
    }, 5000)
})

//switch between light and dark theme
darkSwitch.addEventListener('click', () => {
    var html = document.getElementsByTagName('html')[0]
    html.classList.toggle('dark')
    miniPopUp.style.opacity = 1
    if (html.classList[1] == 'dark') {
        miniPopUp.innerText = 'Dark Theme Enabled'
    } else {
        miniPopUp.innerText = 'Light Theme Enabled'
    }
    setTimeout(() => {
        miniPopUp.style.opacity = 0
    }, 3000)

})

//show correct time and date when the page load
window.addEventListener('load', () => {

    //show an alert if user is viewing the page in landscape mode
    if (window.innerHeight < window.innerWidth) {
        miniPopUp.style.opacity = 1
        miniPopUp.innerText = 'Please make your browser window portrait for better vieew.'
        setTimeout(() => {
            miniPopUp.style.opacity = 0
        }, 3000)

        function showSuggestion() {
            miniPopUp.style.opacity = 1
            miniPopUp.innerText = 'Click EXPAND icon to open rest of the icons. '
            setTimeout(() => {
                miniPopUp.style.opacity = 0
            }, 4000)
        }
        setTimeout(() => {
            showSuggestion()
        }, 3000)
    } else {
        //this block help to show suggestion if user is using a portrait window.
        miniPopUp.style.opacity = 1
        miniPopUp.innerText = 'Click EXPAND icon to open rest of the icons. '
        setTimeout(() => {
            miniPopUp.style.opacity = 0
        }, 4000)
    }
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    setInterval(() => {
        function runClock() {
            let date = new Date()
            let hour = date.getHours()
            let minutes = date.getMinutes()
            var seconds = date.getSeconds()
            let day = date.getDay()
            var dayOfMonth = date.getDate()
            var month = date.toLocaleString('default', { month: 'long' })
            var mrd
            if (hour > 12) {
                hour = hour - 12
                mrd = 'PM'
            } else {
                mrd = "AM"
            }
            if (seconds < 10) {
                seconds = '0' + seconds
            }
            if (hour < 10) {
                hour = '0' + hour
            }
            clock.innerText = hour + ':' + minutes + ':' + seconds + mrd
            calender.innerText = daysOfWeek[day].slice(0, 3) + ' , ' + month.slice(0, 3) + ' ' + dayOfMonth
        }
        runClock()
    }, 1000)
})

//Show a messeage when user click the falshlight icon
flashlight.addEventListener('click', () => {
    miniPopUp.style.opacity = 1
    miniPopUp.innerText = 'Flashlight cannot be turned on from browser. If you are viewing this page from mobile than pull down the notification panel and click the flashlight icon'
    setTimeout(() => {
        miniPopUp.style.opacity = 0
    }, 8000)
})

//         alert('It have some little fuctionlity. Try clicking the tiles and changing the brightness.')

//this will clear all notification as user click the close icon
//As it is only a simulation , the notiification will be back again after a certain time 
clearAll.addEventListener('click', () => {
    notification.forEach((items) => {
        items.style.transform = 'translateY(-1000%)'
        items.style.opacity = 0
    })
    setTimeout(() => {
        notification.forEach((items) => {
            items.style.transform = 'translateX(0)'
            items.style.opacity = 1
        })
    }, 4000)
})
