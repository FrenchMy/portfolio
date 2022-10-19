const navSection = document.querySelectorAll(".nav-section");

navSection.forEach(function(btn) {
    btn.addEventListener("click", function(evt) {
        evt.preventDefault();
        console.log(this.hash);

        let targetElement = document.querySelector(this.hash);
        let elementPosition = targetElement.getBoundingClientRect().top;

        let offsetPosition = elementPosition + window.pageYOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        })
    })
})