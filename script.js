function comingSoon(){
    alert("Projects coming soon!")
}

let projectsLink = document.querySelector(".projects");

projectsLink.addEventListener("click", comingSoon)




//alert("PROJECTS link coming soon!")


const h2 = document.createElement("h2");
h2.textContent = "reading | interior design | rollerskating | coding | DIY projects";

document.querySelector("body").appendChild(h2);


