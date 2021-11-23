//calculate actual date for footer
function getDate () {
   let date = new Date();
   let year = date.getFullYear();
   let month = date.getMonth();
   let day = date.getDate();
   
   if (month < 10) month = `0${month}`
   if (day < 10) day = `0${day}`
   document.querySelector('.time').innerHTML = `${day}.${month}.${year}`;
}
setInterval(getDate, 0);

//sort values by changing table class
function sortingTable () {
   let radioSort = document.querySelector('.table-sort')
   let tableContainer = document.querySelector('.table-container')

   radioSort.addEventListener('click', (e) => {
      if(e.target == document.querySelector('#reversed')) {
         tableContainer.setAttribute('class','table-container_reversed')
         console.log('reversed')
      }
      if(e.target == document.querySelector('#normal')) {
         tableContainer.setAttribute('class','table-container')
         console.log('normal')
      }
   })
}
sortingTable();

//change table style by removing and setting previously made classes
function colorizeTable() {
   let radioColor = document.querySelector('.table-color')
   let table = document.querySelector('.table-style')

   radioColor.addEventListener('click', (e) => {
      if(e.target == document.querySelector('#dark')) {
         table.removeAttribute('class')
         table.setAttribute('class','man-table table-style_dark')
         console.log('dark-color')
      }
      if(e.target == document.querySelector('#colored')) {
         table.removeAttribute('class')
         table.setAttribute('class','man-table table-style_colored')
         console.log('colored-color')
      }
      if(e.target == document.querySelector('#default')) {
         table.removeAttribute('class')
         table.setAttribute('class','man-table table-style')
         console.log('default-color')
      }})
}
colorizeTable();