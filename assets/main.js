window.onscroll = () => {
    const nav = document.querySelector('.navbar');
    const navlink = document.querySelectorAll('.navbar a');
    const navtog = document.querySelector('.navbar-toggler');
    if(this.scrollY <= 80){
        nav.style.backgroundColor= "transparent";
        navtog.style.backgroundColor = "transparent"; 
        navlink.forEach(function(nava){
            nava.style.color= "white";  
        })
    } 
    else{
        nav.style.backgroundColor= "#F4F5FD"; 
        navtog.style.backgroundColor="black"
        navlink.forEach(function(nava){
            nava.style.color= "black";  
        })      
    }  
  };