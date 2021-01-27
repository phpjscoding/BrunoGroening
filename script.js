const menuToggler = document.querySelector('.main-header__top-toggler');
const toggledMenu = document.querySelector('.main-header__menu');

function doesToggle(toggler,toggled){
  menuToggler.addEventListener('click',()=>{
  	if(toggledMenu) toggledMenu.classList.toggle('display-menu');
  })
}
doesToggle(menuToggler, toggledMenu);


//  slider ----------------
new Glide('.glide',{
   type: 'carousel',
  startAt: 1,
  perView:1,
  autoplay: 2800,
 }).mount()

new Glide('.glide.glide-2',{
   type: 'carousel',
  startAt: 1,
  perView:3,
  autoplay: false,
  breakpoints:{
  	760:{
   	perView:2
   },
   480:{
   	perView:1,
    autoplay: 2800,
   }
  }

 }).mount()

// ------------------this is for the BRUNO accordion
function initAcc(elem, option){
    document.addEventListener('click', function (e) {
        if (!e.target.matches(elem+' .a-btn')) return;
        else{
            if(!e.target.parentElement.classList.contains('active')){
                if(option==true){
                    let elementList = document.querySelectorAll(elem+' .a-container');
                    Array.prototype.forEach.call(elementList, function (e) {
                        e.classList.remove('active');
                    });
                }            
                e.target.parentElement.classList.add('active');
            }else{
                e.target.parentElement.classList.remove('active');
            }
        }
    });
}

initAcc('.accordion.v1', true);
initAcc('.accordion.v2', true);
initAcc('.accordion.v3', true);

// --------------------viedos glide-----------
new Glide('.glide.glide-3',{
   type: 'carousel',
  startAt: 1,
  perView:3,
  autoplay: false,
  breakpoints:{
    760:{
    perView:2
   },
   500:{
    perView:1,
    autoplay: 2800,
   }
  }

 }).mount()

// ---------------------scroll top
const scrollTopBtn = document.querySelector('.scroll-top');
scrollTopBtn.addEventListener('click',function(){
     window.scroll({top: 0, left: 0, behavior: 'smooth'});
     
})
document.addEventListener('scroll',function(){
  if(window.scrollY > 600){
 scrollTopBtn.style.visibility ="visible"
}else{
    scrollTopBtn.style.visibility ="hidden"
}
})