function getDate(){
   let date = new Date();
   let year = date.getFullYear();
   let month = date.getMonth();
   let day = date.getDate();
   if (month < 10) month = `0${month}`
   if (day < 10) day = `0${day}`
   document.querySelector('.time').innerHTML = `${day}.${month}.${year}`;
}
setInterval(getDate, 0);