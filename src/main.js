console.log("REEEEEEEEEEEE");
export function component(el,content,id,parentid,cls,onclick) {
    const element = document.createElement(el);
    element.innerHTML = content; 
    document.getElementById(parentid).appendChild(element);
    element.setAttribute('id', id);
    element.setAttribute('class', cls);
    if (onclick == true) {
      return element}
    else {
    return element;
  }
}
export function makeTabs() {
component('div','','navbar','content') ;
component('button','Menu','tab1','navbar','', true) ;
component('button','Home','tab2','navbar','',true) ;
component('button','Contact','tab3','navbar','',true) ;
}
export function makeHome() {
  component('div','','home','content','tab') ;
  component('div','','main','home') ;
  component('div','','titles','main') ;
  component('div','Sijil Palace','title','titles') ;
  component('div','authentic, traditional, exquisite','subtitle','titles') ;
  component('div','','desc','home') ;
  component('div','','hpic','desc') ;
  component('div','','des','desc') ;
  component('div','The Restaurant','dtitle','des') ;
  component('p','For more than 42 years, Sijil Palace in Marrakech has been a staple of Moroccan hospitality.','par','des') ;
  component('p','Our restaurant invites you after every sunset for a dinner outside in the cool breeze of our gardens or inside in the lounge.','par','des') ;
  component('p','Sijil Palace opens its doors for lunch and dinner in in the heart of the Red City.','par','des') ;
}
export function makeMenu() {
  component('div','','menu','content','tab') ;
  //document.getElementById('menu').style.display = 'none';
  component('div','','grid','menu') ;
  let pics =
    ["https://w.wallhaven.cc/full/47/wallhaven-47z7oy.jpg",
    "https://w.wallhaven.cc/full/0j/wallhaven-0jg7jp.jpg",
    "https://w.wallhaven.cc/full/p8/wallhaven-p869pm.jpg",
    "https://w.wallhaven.cc/full/dg/wallhaven-dg1rro.jpg",
    "https://w.wallhaven.cc/full/0p/wallhaven-0py8oe.jpg", 
    "https://w.wallhaven.cc/full/39/wallhaven-39mppy.jpg",
    "https://w.wallhaven.cc/full/4d/wallhaven-4drymo.jpg", 
    "https://w.wallhaven.cc/full/ym/wallhaven-ympdex.jpg", 
    "https://w.wallhaven.cc/full/nm/wallhaven-nm7em8.jpg",
    "https://w.wallhaven.cc/full/ym/wallhaven-ym2987.jpg", 
    "https://w.wallhaven.cc/full/r7/wallhaven-r75wlj.jpg",
    "https://w.wallhaven.cc/full/ey/wallhaven-eymv8l.jpg", 
    "https://w.wallhaven.cc/full/kw/wallhaven-kwedqd.jpg",
    "https://w.wallhaven.cc/full/1j/wallhaven-1jwlz1.jpg",
    "https://w.wallhaven.cc/full/md/wallhaven-mdq6wk.jpg",
    "https://w.wallhaven.cc/full/0j/wallhaven-0jpv9y.jpg",
    "https://w.wallhaven.cc/full/45/wallhaven-45xj53.jpg",
    "https://w.wallhaven.cc/full/ym/wallhaven-ymmd3l.jpg", 
    "https://w.wallhaven.cc/full/45/wallhaven-45xje1.jpg",
    "https://w.wallhaven.cc/full/4o/wallhaven-4oy6g5.jpg",
    "https://w.wallhaven.cc/full/ox/wallhaven-ox26g5.jpg",
    "https://w.wallhaven.cc/full/r2/wallhaven-r2339q.jpg"]
  for (var i=0; i< pics.length; i++) {
    
    let el = component('div','','pic','grid') ;
    el.style.backgroundImage = `url(${pics[i]})`;
  }
}
export function makeContact() {
  component('div','','contact','content','tab') ;
  component('div','','cmain','contact') ;
  component('div','Contact','box','cmain') ;
  component('div','Phone:','sbox','cmain') ;
  component('div','+123 456 789','sbox','cmain') ;
  component('div','Email:','sbox','cmain') ;
  component('div','contact@sijil.com','sbox','cmain') ;
}
 function openTab(tab) {
    var i;
    var x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(tab).style.display = "block";
}
export function makePage() {
  makeTabs()
  makeHome()
  makeMenu()
  makeContact()
  return
}