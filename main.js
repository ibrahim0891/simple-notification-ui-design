let expand = document.getElementById('expand')
let more = document.getElementById('more')
let darkSwitch = document.getElementById('dark')
let flashlight = document.getElementById('flashlight')
let brightnessBar = document.getElementById('brightness')
let mainBody = document.getElementById('main')
let clock = document.getElementById('clock')
let calender = document.getElementById('calender')
var minPopUp = document.getElementById('miniPopUp')
 
//Function to show more tiles
expand.addEventListener('click', () => {
    if (more.style.height == '0px') {
        more.style.height = more.scrollHeight + 'px'
    } else {
        more.style.height = '0px'
    }
})

//Simulate Brightness Control
brightness.addEventListener('change', function() {
    mainBody.style.filter = 'brightness(' + brightnessBar.value + "%" + ')'
})

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

window.addEventListener('load', () => {
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let date = new Date()
    let hour = date.getHours()
    let minutes = date.getMinutes()
    let day = date.getDay()
    var dayOfMonth = date.getUTCDay()
    var month = date.toLocaleString('default', { month: 'long' })
    var mrd
    if (hour > 12) {
        hour = hour - 12
        mrd = 'PM'
    } else {
        mrd = "AM"
    }
    miniPopUp.style.opacity = 1
    miniPopUp.innerText = 'Doule Click the expand Icon to expand the quick setting panel.'
    setTimeout(() => {
        miniPopUp.style.opacity = 0
    }, 3000)
    
    setInterval(() => {
        clock.innerText = hour + ':' + minutes + mrd
    }, 60000)
    clock.innerText = hour + ':' + minutes + mrd
    calender.innerText = daysOfWeek[day].slice(0, 3) + ' , ' + month.slice(0, 3) + ' ' + dayOfMonth
})

flashlight.addEventListener('click',()=>{
    miniPopUp.style.opacity = 1
    miniPopUp.innerText = 'Flashlight cannot be turned on from browser. If you are viewing this page from mobile than pull down the notification panel and click the flashlight icon'
    setTimeout(() => {
        miniPopUp.style.opacity = 0
    }, 8000)
})
