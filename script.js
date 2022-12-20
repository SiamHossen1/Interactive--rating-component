const ratingCard = document.querySelector(".rating__card")
const thankyouCard = document.querySelector(".thankyou__card")
const submitBtn = document.querySelector(".submit__btn")
const ratingScore = document.querySelector(".rating__score")
const ratingNumber = document.querySelectorAll(".rating__number")


submitBtn.addEventListener("click",()=>{
    ratingCard.style.display = "none";
    thankyouCard.style.display = "block";
})

for (const rating of ratingNumber) {
    rating.addEventListener("click",(e)=>{
        ratingScore.innerHTML = `You selected ${e.target.name} out of 5`
    })
}




