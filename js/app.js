const bar = document.querySelector('.fa-bars')
const clBar = document.querySelector('.fa-xmark')
const infoStructure = document.querySelector('.bottomList')
const registerr = document.getElementById('register')
const inputContainer = document.getElementById('input-container')
const imgSection = document.querySelector('.img_section')
const barLogin = document.querySelector('.btn2')
const login  = document.getElementById('login')
const loginContainers = document.getElementById('login-container')
// import { bar,clBar,infoStructure,registerr,inputContainer,barLogin,login,loginContainers} from './helpers.js'
   
function loginContainer () {
    setTimeout (() => {
        loginContainers.style.display = 'block'
        },1000)
    
}
login.addEventListener('click', loginContainer)

//------------------------------------------------------------------
function loginTopDown () {
    setTimeout(() => {
        inputContainer.style.display = 'block'
        inputContainer.style.paddingTop = '20px'
    },1000)
  
}
registerr.addEventListener('click',loginTopDown)
//-------------------------------------------------------------------

function openBarLogin () {
    inputContainer.style.display = 'block'
    infoStructure.style.display = 'none'
}
barLogin.addEventListener('click',openBarLogin)

//-------------------------------------------------------------

function openBar () {
   bar.style.display = 'none'
   bar.style.transition = 'all ease .8s'
   infoStructure.style.display = 'block'
}

function closeBar () {
    clBar.style.display = 'block'
}

function openCloseBar () {
    clBar.style.display = 'none'
    bar.style.display = 'block'
    infoStructure.style.display = 'none'
    inputContainer.style.display = 'none'
    
}

bar.addEventListener('click', closeBar)
bar.addEventListener('click',openBar)
clBar.addEventListener('click',openCloseBar)