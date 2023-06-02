// const btns = document.querySelectorAll("#btn")
// const answer = document.querySelectorAll(".answer")

// btns.forEach((btn) => {
//   btn.addEventListener("click", function () {
//     let answer = btn.parentElement.nextElementSibling
//     answer.classList.toggle("show-answer")
//   })
// })

const cards = document.querySelectorAll(".card")
cards.forEach((card) => {
  const btn = card.querySelector("#btn")

  btn.addEventListener("click", function () {
    cards.forEach((element) => {
      if (element !== card) {
        element.classList.remove("show-answer")
        // if (card.classList.contains("show-answer")) {
        //   btn.classList.replace("fa-minus", "fa-plus")
        // } else {
        //   btn.classList.replace("fa-plus", "fa-minus")
        // }
      }
    })

    card.classList.toggle("show-answer")
  })
})
