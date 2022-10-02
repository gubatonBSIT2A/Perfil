const body =    document.querySelector("body"),
 sidebar = document.querySelector(".side-menu");
 sidebarBtn = body.querySelector(".sidebarBtn");

sidebarBtn.addEventListner("click",() =>{
    sidebar.classList.toggle("close");
})