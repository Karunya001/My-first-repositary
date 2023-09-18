const homeEl=document.getElementById('home-container')
const guestEl=document.getElementById('guest-container')
let homecountEl=0
let guestcountEl=0
function homeIncrement(homeElvalue){
    homecountEl += homeElvalue
    homeEl.textContent = homecountEl
}
function guestIncrement(guestElvalue){
    guestcountEl += guestElvalue
    guestEl.textContent = guestcountEl
}
function  clearhomeEl()
{
    homecountEl = 0
    homeEl.textContent = homecountEl
}
function  clearguestEl()
{
    guestcountEl = 0
    guestEl.textContent = guestcountEl
}