///////////////////////////////////////////////////////////////////////
// ALL THE FUNCTIONS FOR ADDING AND REMOVING CLASSES FOR ANIMATIONS //
/////////////////////////////////////////////////////////////////////

// Loads home page project list
export const onLoadHomeProjectAnimation = () => {
    const projectLiElements = document.querySelectorAll(".projectLi");

    projectLiElements.forEach((li, index) => {
      li.style.display = "grid"
      document.body.style.justifyContent = "flex-end";

      li.classList.add("animateNav");
      li.style.animationDelay = `${index * 0.3 }s`; // Apply staggered delay
    })
};

export const onLoadIntroAnimation = () => {
    const headerNavItems = document.querySelector(".headerNav");
    headerNavItems.classList.add("HeaderNavHomeLoad");
}
