import './style.css';
import * as PPG from './main.js';

console.log('REEEEEEEEEEEE');
PPG.makeTabs();
PPG.makeHome();
document.getElementById('tab2').addEventListener('click', () => {
    if (document.getElementById('menu')) {document.getElementById('menu').remove()};
    if (document.getElementById('contact')) {document.getElementById('contact').remove()};
    if (document.getElementById('home')) {document.getElementById('home').remove()};
    return PPG.makeHome();
})
document.getElementById('tab1').addEventListener('click', () => {
    if (document.getElementById('menu')) {document.getElementById('menu').remove()};
    if (document.getElementById('contact')) {document.getElementById('contact').remove()};
    if (document.getElementById('home')) {document.getElementById('home').remove()};
    return PPG.makeMenu()
})
document.getElementById('tab3').addEventListener('click', () => {
    if (document.getElementById('menu')) {document.getElementById('menu').remove()};
    if (document.getElementById('contact')) {document.getElementById('contact').remove()};
    if (document.getElementById('home')) {document.getElementById('home').remove()};
    console.log('make Contact')
    return PPG.makeContact()
})