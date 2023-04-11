let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');
let themeColor=document.querySelectorAll('.theme-toggler span')
themeColor.forEach(color=>color.addEventListener('click',()=>{
    let background=color.style.background;
    document.querySelector('body').style.background=background;
}))
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}
$(".hover").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
  );
  
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}



