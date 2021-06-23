let dates = [
{
  name: "Christmas",
  date: new Date(2021,12,25)
},

{
  name: "New Year's",
  date: new Date(2022,01,01)
},

{
  name: "Valentine's",
  date: new Date(2022,02,14)
}
];

// Loops through the 'dates' objects array and calculates the number of days left from current date.
function calculate() {
  let today = new Date();
  for (let i = 0; i < dates.length; i++) {
  let daysToCustomDate = parseInt((dates[i].date-today)/(24*3600*1000)); 
    
// Displays the name of the date and the number of days left until that date.
  $("#days-until").append("<li>" + daysToCustomDate.toString()+" days until " + dates[i].name + "</li>")};
};

$("#trigger").click(calculate());
