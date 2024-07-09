birthDate = document.querySelector("#date")
birthMonth = document.querySelector("#month")
birthYear = document.querySelector("#year")
let calc = document.querySelector("#submit-btn")
today = new Date()

function ageCalc(){
    years = to
}

//     years = today.getFullYear() - birthday.getFullYear()

//     month_calc()
    
//     days_calc()
    
//     text = "You are " + years + "years ; " + months +"months; " + days + "days old"
//     document.querySelector(".text").innerHTML = text
// }


// function month_calc(){
//     if (birthday.getMonth() > today.getMonth()){
//         months = (12 - birthday.getMonth()) + today.getMonth()
//         years -= 1
//         return
//     }
//     months = today.getMonth() - birthday.getMonth()
// }

// function days_calc(){
//     today_month_date = new Date(birthday.getFullYear(), birthday.getMonth()+1, 0).getDate()
   
//     if (birthday.getDate() > today.getDate()){
//         days = today_month_date - birthday.getDate() + today.getDate();
//         months -= 1 
//     }
//     else{
//         days = today.getDate() - birthday.getDate()
//     }
// }


calc.addEventListener("click", ()=>{ 
    event.preventDefault();
    birthday = new Date(birthYear.value , birthMonth.value, birthDate.value)
    console.log(birthday.getDate())
    // birthday.setFullYear(birthYear.value)
    // birthday.setMonth(birthMonth.value - 1)
    // birthday.setDate(birthDate.value)
    // ageCalc()
})







