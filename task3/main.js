//calculate actual date for footer
function getDate() {
   let date = new Date();
   let year = date.getFullYear();
   let month = date.getMonth();
   let day = date.getDate();

   if (month < 10) month = `0${month}`
   if (day < 10) day = `0${day}`
   document.querySelector('.time').innerHTML = `${day}.${month}.${year}`;
   setInterval(getDate, 10000);
}
getDate()


//sort values by changing table class
function sortingTable() {
   let radioSort = document.querySelector('.table-sort')
   let tableContainer = document.querySelector('.table-container')

   radioSort.addEventListener('click', (e) => {
      if (e.target == document.querySelector('#reversed')) {
         tableContainer.classList.remove('table-container')
         tableContainer.classList.add('table-container_reversed')
      }
      if (e.target == document.querySelector('#normal')) {
         tableContainer.classList.remove('table-container_reversed')
         tableContainer.classList.add('table-container')
      }
   })
}
sortingTable();

//change table style by removing and setting previously made classes
function colorizeTable() {
   let radioColor = document.querySelector('.table-color')
   let table = document.querySelector('.table-style')

   radioColor.addEventListener('click', (e) => {
      if (e.target == document.querySelector('#dark')) {
         table.classList.remove('table-style')
         table.classList.remove('table-style_colored')
         table.classList.add('table-style_dark')
      }
      if (e.target == document.querySelector('#colored')) {
         table.classList.remove('table-style')
         table.classList.remove('table-style_dark')
         table.classList.add('table-style_colored')
      }
      if (e.target == document.querySelector('#default')) {
         table.classList.remove('table-style_dark')
         table.classList.remove('table-style_colored')
         table.classList.add('table-style')
      }
   })
}
colorizeTable();