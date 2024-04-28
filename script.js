
const showBook=document.querySelector('#book-display');
const openModalBtn=document.querySelectorAll('[data-modal-target]');
const closeModalBtn=document.querySelectorAll("[data-close-button]");
const overlay=document.querySelector('#overlay');
const cardSection=document.querySelector('#card-section');
const card=document.querySelectorAll('#card');
const removeBtn=document.querySelectorAll("#remove-btn");
const bookStatusBtn=document.querySelectorAll("#status-button");

removeBtn.forEach(button =>{
  button.addEventListener('click', ()=>{
    if(button.classList.contains('remove-btn')){
      const card=button.closest('#card');
      card.remove()
    }

  });
});

bookStatusBtn.forEach(button =>{
  button.addEventListener('click', ()=>{
    const card=button.closest('#card');
    button.textContent='Have not Read';
    card.append(button)
  });
});

openModalBtn.forEach(button =>{
  button.addEventListener('click', ()=>{
    const modal=document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});
closeModalBtn.forEach(button =>{
  button.addEventListener('click', ()=>{
    const modal=document.querySelector('.modal');
    closeModal(modal);
  });
});

overlay.addEventListener('click' , () => {
  const modals=document.querySelectorAll('.modal.active');
  modals.forEach(modal  =>{
    closeModal(modal)
  })
})
function openModal (modal){
  if(modal==null) return
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal){
  if(modal==null) return
  modal.classList.remove('active');
  overlay.classList.remove('active');
}



const myLibrary = [];



function Book(title,author,page,status) {
  this.title=title;
  this.author=author;
  this.page=page;
  this.status=status;
  this.info=function(){
    return `${this.title} by ${this.author}, ${this.page} pages, status: ${this.status}`;
  }
}

 
function addBookToLibrary(event) {
  event.preventDefault();
    const bookName = document.getElementById('book-name').value;
    const authorName = document.getElementById('author-name').value;
    const numberOfPage = document.getElementById('page').value;
    const bookStatus = document.getElementById('book-status').value;

  const cardDiv=document.createElement('div');
  cardDiv.setAttribute('id','card');
  cardDiv.classList.add("card");
  
  const h3=document.createElement('h3');
  h3.classList.add("book-title");
  h3.textContent=bookName;

  const authorParagraph=document.createElement('p');
  authorParagraph.classList.add("author");
  authorParagraph.textContent=authorName;
  
  const NumOfPageParagraph=document.createElement('p');
  NumOfPageParagraph.classList.add("pages");
  NumOfPageParagraph.textContent=`${numberOfPage} Pages`;

  const statusBtn=document.createElement('button');
  statusBtn.setAttribute('id','Status-button');
  statusBtn.textContent=bookStatus;

  const removeBook=document.createElement('button');
  removeBook.classList.add('remove-your-book')
  removeBook.setAttribute('id','remove-btn');
  removeBook.textContent='Remove';
  
 removeBook.addEventListener('click', ()=>{
  const removeMyBook=document.querySelector('.remove-your-book');
    if(removeMyBook.classList.contains('remove-your-book')){
    const card=removeMyBook.closest('#card');
    card.remove()
}
});

 
  cardSection.append(cardDiv)
  cardDiv.append(h3)
  cardDiv.append(authorParagraph)
  cardDiv.append(NumOfPageParagraph)
  cardDiv.append(statusBtn);
  cardDiv.append(removeBook);
  const modal = document.querySelector('.modal.active');
  closeModal(modal);
}