var products = [
  {
    id: "100",
    name: "iPhone 4S",
    brand: "Apple",
    os: "iOS",
  },
  {
    id: "101",
    name: "Moto X",
    brand: "Motorola",
    os: "Android",
  },
  {
    id: "102",
    name: "iPhone 6",
    brand: "Apple",
    os: "iOS",
  },
  {
    id: "103",
    name: "Samsung Galaxy S",
    brand: "Samsung",
    os: "Android",
  },
  {
    id: "104",
    name: "Google Nexus",
    brand: "ASUS",
    os: "Android",
  },
  {
    id: "105",
    name: "Surface",
    brand: "Microsoft",
    os: "Windows",
  },
];
var table="<table id='ftable'>" +
"<thead thead><tr><th>"+
"ID</th><th>NAME</th><th>BRAND</th><th>OPERATING SYSTEM</th><TH>REMOVE</TH>"

for(var i=0;i<products.length;i++){
    table+="<tr><td>"+ products[i].id +"</td><td>"+ products[i].name +"</td><td>"
    +products[i].brand+"</td><td>"+products[i].os+"</td><td><a href='#' class='close'>X</a>"+
    "</td></tr>"
}
var searchBar="<label for='search'><input type='text' id='search' placeholder='Search...'></label>"


var brandDrop =
    " <label for 'os'> Select Operating System" +
    " <select name='Operating System' id='os'>" +
    " <option value=''>ALL</option>" +
    "<option value='android'>Android</option>" +
    "<option value='ios'>IOS</option>" +
    "<option value='windows'>Windows</option>" +
    "</select></label>" +
    "<label for='brand'> Select Brand <select id='brand' name='brand'>" +
    " <option value=''>ALL</option>" +
    "<option value='Apple'>Apple</option>" +
    "<option value='Samsung'>Samsung</option>" +
    "<option value='motorola'>Motorola</option>" +
    "<option value='asus'>ASUS</option>" +
    "</select></label>" +
    "</div>";

$("#container").append(brandDrop);
$("#container").append(table + "</table");
$("#container").append(searchBar);

$("#container").on("keyup", "#search", function () {
    var value = $(this).val().toLowerCase();
    $("#ftable tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
});
       


$("#container").on("click", "#brand", function () {
    var value = $(this).val().toLowerCase();
    $("#ftable tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });

  $("#container").on("click", "#os", function () {
    var value = $(this).val().toLowerCase();
    $("#ftable tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });

  $("#container").on("click", ".close", function () {
    $(this).parent().parent().hide()
  });