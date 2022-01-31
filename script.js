//Gjord av Lukas Lindqvist

// Loop for premierLeague img
var index1 =1;
var images =  document.getElementById('premierLeague').innerHTML
while (index1 <= 19) {
    images += '<img src="bilder/PL_Trophy.png" style="padding-right: 10px;  margin-bottom: 10px;">';
     document.getElementById('premierLeague').innerHTML = images
    index1++;
}

// Loop for champions league img
var index2 =1;
var images =  document.getElementById('championsLeague').innerHTML
while (index2 <= 2) {
    images += '<img src="bilder/CL_Trophy.png" style="padding-right: 10px;  margin-bottom: 10px;">';
     document.getElementById('championsLeague').innerHTML = images
    index2++;
}

// Loop for facup image
var index3 =1;
var images =  document.getElementById('faCup').innerHTML
while (index3 <= 11) {
    images += '<img src="bilder/Fa_Cup_Trophy.png" style="padding-right: 10px;  margin-bottom: 10px;">';
     document.getElementById('faCup').innerHTML = images
    index3++;
}

// Loop for league cup image
var index4 =1;
var images =  document.getElementById('leagueCup').innerHTML
while (index4 <= 4) {
    images += '<img src="bilder/League_Cup_Trophy.png" style="padding-right: 10px;  margin-bottom: 10px;">';
     document.getElementById('leagueCup').innerHTML = images
    index4++;
}