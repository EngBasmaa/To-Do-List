const button=document.querySelector("button")
const container = document.getElementById("container")
const input=document.querySelector("input")
const form=document.querySelector("form")


// button.addEventListener("click", (eo) => {
//     eo.preventDefault()
//     const task = `
//     <div class="task">
//         <p class="margin"><i class="icon fa-solid fa-star"></i></p>
//         <p class="font">${input.value}e</p>
//         <!-- <i class="fa-solid fa-heart"></i> -->
//         <p class="margin">
//           <!-- to be besides  -->
//           <i class="icon fa-solid fa-trash-can"></i>
//           <i class="icon fa-solid fa-face-frown"></i>
//         </p>
//       </div>
//     `
//     container.innerHTML += task 

// })

          // .....or .....
// when you call (form) you must choose (submit) event
// (submit) for (form) : sends your info to your database 
form.addEventListener("submit", (eo) => {
    eo.preventDefault()
    const task = `
    <div class="task">
        <p class="margin"><i class="icon fa-solid fa-star"></i></p>
        <p class="font">${input.value}e</p>
        <!-- <i class="fa-solid fa-heart"></i> -->
        <p class="margin">
          <!-- to be besides  -->
          <i class="icon fa-solid fa-trash-can"></i>
          <i class="icon fa-solid fa-face-frown"></i>
        </p>
      </div>
    `
    container.innerHTML += task 

})