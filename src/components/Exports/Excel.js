
function ExportExcel(table_id) {
  let myData = document.getElementById(table_id).rows;
  //console.log(myData)
  let my_liste = [];
  let el = [];
  let my_el = [];
  for (var i = 0; i < myData.length; i++) {
    el = myData[i].children;
    my_el = [];
    for (var j = 0; j < el.length; j++) {
      my_el.push(el[j].innerText);
    }
    my_liste.push(my_el);
  }
  console.log(my_liste);
  return my_liste
}
export default ExportExcel;