function toggleMenu(){
  const myNav = document.querySelector(".my-nav");
  const navBarDirection = document.querySelector("#navBarDirection");

  if (!myNav.classList.contains("horizontal")){
    myNav.classList.add("horizontal");
  }else{
    myNav.classList.remove("horizontal");
  }
}