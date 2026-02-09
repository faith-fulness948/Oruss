/*
  1. Accessing the elements
    a. getElementById()
    b. getElementsByClassName()
    c. getElementsByTagName()
    d. querySelector()
    e. querySelectorAll()
  2. Modifying elements
    a. innerHTML
    b. innerText
    c. textContent
    d. src
    e. alt
    f. setAttribute()
    g. removeAttribute()
  3. Styling elements
    a. Style
    b. classList
  4. Creating and adding Elements
    a. Create Element
    b. appendChild()
    c. append
  5. Event Handlers and Event listeners
*/

//using document

// console.log(heading.innerHTML);

// heading.innerHTML = "Hello <span style = 'color: purple;'>Faithfulness<span>"

// console.log(heading.innerText);

// heading.innerText = "Hello <span style = 'color: purple;'>FayFay<span>"
// console.log(heading.innerText);

// console.log(heading.textContent);

// heading.innerText = "Hello <span style = 'color: purple;'>FayFemi<span>"

const img1 = document.querySelectorAll('img')[0];
console.log(img1.src);




// const body = document.body

// const bgColoRandomizer = (element) => {
//   const red = Math.floor(Math.random() * 256)
//   const green = Math.floor(Math.random() * 256)
//   const blue = Math.floor(Math.random() * 256)

//   element.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
// }

// setInterval(() => {
//   const red = Math.floor(Math.random() * 256)
//   const green = Math.floor(Math.random() * 256)
//   const blue = Math.floor(Math.random() * 256)

//   document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
// }, 5000);

// btns.forEach((btn) => {
//     btn.classList.add("styled-btn")
// });

// Creatin and adding element

const fruits = ["Apple", "Banana", "Grape", "Cashew"];

const fruitsList = document.querySelector('#fruits');

fruits.forEach((fruit) => {
  
  const li = document.createElement("li");

  li.textContent = fruit;

  fruitsList.appendChild(li);

  if (fruit === "Banana") {
     fruitsList.removeChild(li);
  }
})

//Event Listener

const menu = document.getElementById("menu");
const menuBtn = document.querySelector("#menu-btn");

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('show');
});





const form = document.querySelector('#myForm');

form.addEventListener('submit', (e)=> {
  e.preventDefault();

  const firstname = document.querySelector('#firstname');
  const lastname = document.querySelector('#lastname');
  const email = document.querySelector('#email');
  const tel = document.querySelector('#tel');
  const password = document.querySelector('#password');
  const cpassword = document.querySelector('#cpassword');
  const modalWrapper = document.querySelector('#modal-wrapper');
  const title = document.querySelector('#title');
  const desc = document.querySelector('#desc');
  const cancel = document.querySelector('#cancel');
  
  const message = ["Success", "Fail"]

  cancel.addEventListener("click", () => modalWrapper.style.display = 'none');





  //Form Validation

 if (firstname.value.trim().length < 3) {
       modalWrapper.style.display = 'flex';
       title.textContent = message[1];
       title.style.color = "red";
       desc.textContent = "First name cannot be empty or less than 3 characters!"

       setTimeout(()=>{
        modalWrapper.style.display = 'none';
        firstname.focus();
       }, 5000)
  } else {
    
  }

  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%%^&*()_\-=[\]{}|;:'",.<>?/]).{8,}$/;

 

 if (password.value !== passwordRegex) {
   
      alert("Password must contain uppercase, lowercase, number, special character and be at least 8 characters");
      
      
    
 } else {
  
 };

 if (cpassword.value !== password.value) {
  alert("Password and Confirm PAssword must be of the same value")
 }

 const emailRegex = /''/;

 if (email !== emailRegex) {
  alert("Please enter a valid email address")
 }



});



