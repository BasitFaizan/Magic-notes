show();
let menu = document.querySelector('.menu');
let nav = document.querySelector('.navbar')
nav.addEventListener('click', function() {
  menu.classList.toggle('active');
});
let navbar2 = document.getElementById('nav');
//let win = window.innerHeight;
window.addEventListener('scroll', function() {
  navbar2.classList.toggle('fixed', window.scrollY > 200);
})

let btn = document.querySelector('.btn');
btn.addEventListener('click', function(e) {
  let addTitle = document.querySelector('#addTitle');
  let title = localStorage.getItem('title');
  let addTxt = document.querySelector('#txtArea');
  
  let notes = localStorage.getItem('notes');
  if (notes == null) {
    objNotes = []
  }
  else {
    objNotes = JSON.parse(notes);
  }
  let myObj = {
    title:addTitle.value,
    text:addTxt.value
  }
  objNotes.push(myObj);
  localStorage.setItem('notes', JSON.stringify(objNotes));
  addTxt.value = '';
  addTitle.value = '';
  console.log(objNotes);
  show();
  
})


function show() {
  let notes = localStorage.getItem('notes')
  if (notes == null) {
    objNotes = [];
  }
  else {
    objNotes = JSON.parse(notes);
  }
  let html = '';
  objNotes.forEach(function(element, index) {
    html += `
    <div class="mainCard my-3 mx-3">
  <div class="card-body">
    <h5 class="card-title">${element.title}</h5>
    <p class="card-text">${element.text}</p>
    <button id =${index} onclick = 'deleted(this.id)' class="BTN btn-primary">Delete now</button>
  </div>
</div>`
  });
  let noteElement = document.getElementById('notes');
  if (objNotes.length != 0) {
    noteElement.innerHTML = html;
  }
  else {
    noteElement.innerHTML = '<h1 class="container mx-3 my-3">nothing here</h1>'
  }

};
function deleted(index){
  let notes = localStorage.getItem('notes')
  if (notes == null) {
    objNotes = [];
  }
  else {
    objNotes = JSON.parse(notes);
  }
  objNotes.splice(index,1);
  localStorage.setItem('notes', JSON.stringify(objNotes));
  show();
}