var formatedData = [];
var dataOfTheCity = [];

function dividiInBaseA(cosa, segno){
  return cosa.split(segno);
}

function carica(database){
  /*var i;
  for(i = 0; i < database.length; i++)
    formatedData.push(dividiInBaseA(database[i], ","));
  */
  database = dividiInBaseA(database, "\n");
  database.forEach((item) => {formatedData.push(dividiInBaseA(item, ","));});
}

function search(cityName){
  function formatDate(date){
    return date.slice(0,10);
  }
  dataOfTheCity = [];
  formatedData.forEach(function (element) {
    if(element[5] == cityName)
      dataOfTheCity.push(formatDate(element[0]) + " | " + element[9]  + "<br/>");
    });
}
