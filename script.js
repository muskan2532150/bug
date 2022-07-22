const navright = document.querySelector('.navright');
const burger = document.querySelector('.burger');

const navlink = document.querySelectorAll('.nav-link');

burger.onclick = function () {
  navright.classList.toggle('click');
  document.body.style.overflowX = 'hidden';
};

closeBtn.onclick = function () {
  navright.classList.add('click');
  document.body.style.overflow = 'visble';
};
const closeBtn = document.querySelector('.close-btn');
navLink.forEach((link) => {
  link.onclick = function () {
    navright.classList.add('click');
    document.body.style.overflow = 'visible';
  };
});

//   let email = document.forms.email.value;
  
// let  formObject = {
//   name : String,
//   emails : String,
//   Comment : String,
// }

// function formDetail(event) {
//   event.preventDefault();
//   let fname = document.getElementById("name").value;
// let femail = document.getElementById("email").value;
// let fComment = document.getElementById("text-area").value;

// formObject.name=fname;
// formObject.emails=femail;
// formObject.Comment=fComment;
// // localStorage.clear();
// localStorage.setItem("form Details", JSON.stringify(formObject));
// }

// let formF =document.getElementById('formSubmit');

// formF.addEventListener('submit',(ev) => {
//   let z = document.getElementById("error-message");
//    if (femail !== femail.toLowerCase()){  
//      ev.preventDefault();
//     z.innerText = "dxde";
//     } 
// formDetail(ev);
// })

// let inputs = document.querySelectorAll('input');
// inputs.forEach((inputS) => {
//   inputS.addEventListener('change',(ev)=>formDetail(ev));
// })

// fComment.addEventListener('change',(ev)=>formDetail(ev));
