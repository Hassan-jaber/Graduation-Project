
// Start js Script for select-country page
let active = document.querySelectorAll(".city a");
active.forEach((a) => {
    a.addEventListener("click", _ => {
        active.forEach((a) => {
            a.classList.remove("active")
        })
        a.classList.add("active")
    })
})
// End js Script for select-country page