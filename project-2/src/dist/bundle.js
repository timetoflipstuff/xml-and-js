(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const cars = require("../data/cars");

const getAll = ({ id, make, model, year } = {}) =>
  new Promise((resolve) => {
    let result = Array.from(cars);

    if (id) {
      result = result.filter(item => item.id === Number(id));
    }

    if (make) {
      result = result.filter(item => item.make === make);
    }

    if (model) {
      result = result.filter(item => item.model === model);
    }

    if (year) {
      result = result.filter(item => item.year === Number(year));
    }

    resolve({ code: 200, data: result });
  });

const getById = (id) =>
  new Promise((resolve) => {
    const car = cars.find(car => car.id === id);

    if (car) {
      resolve({ code: 200, data: car });
    } else {
      resolve({
        code: 404,
        data: { message: `No car found for id ${id}` },
      });
    }
  });

module.exports = {
  getAll,
  getById,
};

},{"../data/cars":2}],2:[function(require,module,exports){
module.exports=[{"id":1,"make":"Mercedes-Benz","model":"G-Class","year":2008},
{"id":2,"make":"Mitsubishi","model":"Lancer","year":2004},
{"id":3,"make":"Audi","model":"RS 4","year":2008},
{"id":4,"make":"Dodge","model":"Ram Van B250","year":1992},
{"id":5,"make":"BMW","model":"7 Series","year":1992},
{"id":6,"make":"Subaru","model":"Impreza","year":2000},
{"id":7,"make":"Isuzu","model":"Hombre","year":1998},
{"id":8,"make":"Chevrolet","model":"Silverado 3500","year":2004},
{"id":9,"make":"Lexus","model":"GX","year":2009},
{"id":10,"make":"Dodge","model":"Caravan","year":2001},
{"id":11,"make":"Mercedes-Benz","model":"S-Class","year":2004},
{"id":12,"make":"Honda","model":"Element","year":2008},
{"id":13,"make":"Ford","model":"Mustang","year":2006},
{"id":14,"make":"Chevrolet","model":"Corvette","year":1987},
{"id":15,"make":"Eagle","model":"Vision","year":1996},
{"id":16,"make":"Toyota","model":"Land Cruiser","year":2003},
{"id":17,"make":"Dodge","model":"Charger","year":1999},
{"id":18,"make":"Chevrolet","model":"Express 1500","year":2008},
{"id":19,"make":"Mercedes-Benz","model":"E-Class","year":1988},
{"id":20,"make":"Dodge","model":"Colt","year":1992},
{"id":21,"make":"BMW","model":"5 Series","year":1999},
{"id":22,"make":"Buick","model":"Park Avenue","year":2003},
{"id":23,"make":"Pontiac","model":"G5","year":2009},
{"id":24,"make":"Chevrolet","model":"Tracker","year":1999},
{"id":25,"make":"Dodge","model":"Dakota Club","year":1992},
{"id":26,"make":"Saab","model":"9-5","year":2008},
{"id":27,"make":"Ford","model":"ZX2","year":2002},
{"id":28,"make":"GMC","model":"1500","year":1992},
{"id":29,"make":"Bentley","model":"Continental Flying Spur","year":2009},
{"id":30,"make":"Chevrolet","model":"Camaro","year":1994},
{"id":31,"make":"Acura","model":"Integra","year":1994},
{"id":32,"make":"Acura","model":"NSX","year":2002},
{"id":33,"make":"Plymouth","model":"Laser","year":1989},
{"id":34,"make":"Honda","model":"Accord","year":2003},
{"id":35,"make":"BMW","model":"X5","year":2012},
{"id":36,"make":"Subaru","model":"Impreza","year":1995},
{"id":37,"make":"Maserati","model":"Biturbo","year":1987},
{"id":38,"make":"Pontiac","model":"Bonneville","year":1989},
{"id":39,"make":"Ford","model":"F-Series","year":2002},
{"id":40,"make":"Lexus","model":"RX","year":2009},
{"id":41,"make":"Ford","model":"E150","year":2003},
{"id":42,"make":"Mazda","model":"MX-3","year":1995},
{"id":43,"make":"Bugatti","model":"Veyron","year":2009},
{"id":44,"make":"Ford","model":"F-Series","year":1992},
{"id":45,"make":"Land Rover","model":"Range Rover Classic","year":1993},
{"id":46,"make":"Cadillac","model":"STS-V","year":2008},
{"id":47,"make":"Nissan","model":"Rogue","year":2008},
{"id":48,"make":"Toyota","model":"T100 Xtra","year":1998},
{"id":49,"make":"GMC","model":"Sierra 3500","year":2007},
{"id":50,"make":"Hyundai","model":"Santa Fe","year":2006},
{"id":51,"make":"Dodge","model":"Dakota Club","year":2005},
{"id":52,"make":"Ferrari","model":"612 Scaglietti","year":2008},
{"id":53,"make":"Dodge","model":"Caliber","year":2011},
{"id":54,"make":"Chevrolet","model":"Corvette","year":2004},
{"id":55,"make":"Chrysler","model":"300M","year":2001},
{"id":56,"make":"BMW","model":"3 Series","year":2010},
{"id":57,"make":"Chrysler","model":"Sebring","year":2005},
{"id":58,"make":"Mercury","model":"Tracer","year":1989},
{"id":59,"make":"Plymouth","model":"Sundance","year":1993},
{"id":60,"make":"Chevrolet","model":"Uplander","year":2007},
{"id":61,"make":"Audi","model":"Q5","year":2010},
{"id":62,"make":"Mitsubishi","model":"Challenger","year":2000},
{"id":63,"make":"Ford","model":"Ranger","year":2004},
{"id":64,"make":"Volvo","model":"V70","year":2003},
{"id":65,"make":"Honda","model":"Civic","year":1988},
{"id":66,"make":"Maybach","model":"57","year":2005},
{"id":67,"make":"Mazda","model":"929","year":1988},
{"id":68,"make":"Cadillac","model":"Escalade ESV","year":2005},
{"id":69,"make":"Toyota","model":"Prius","year":2008},
{"id":70,"make":"Honda","model":"Insight","year":2004},
{"id":71,"make":"Toyota","model":"4Runner","year":2006},
{"id":72,"make":"Chevrolet","model":"Silverado 3500","year":2009},
{"id":73,"make":"Chevrolet","model":"Monte Carlo","year":2006},
{"id":74,"make":"Mitsubishi","model":"Galant","year":2007},
{"id":75,"make":"Mazda","model":"B2500","year":2001},
{"id":76,"make":"Chrysler","model":"Sebring","year":1996},
{"id":77,"make":"Porsche","model":"Boxster","year":2011},
{"id":78,"make":"Ford","model":"Freestyle","year":2007},
{"id":79,"make":"Land Rover","model":"Discovery Series II","year":2001},
{"id":80,"make":"Audi","model":"TT","year":2004},
{"id":81,"make":"Saab","model":"9-3","year":1999},
{"id":82,"make":"Dodge","model":"Ram Van 3500","year":2003},
{"id":83,"make":"Porsche","model":"911","year":1985},
{"id":84,"make":"Infiniti","model":"EX","year":2012},
{"id":85,"make":"BMW","model":"7 Series","year":1993},
{"id":86,"make":"Chevrolet","model":"Corvette","year":1957},
{"id":87,"make":"Acura","model":"RDX","year":2011},
{"id":88,"make":"Dodge","model":"Nitro","year":2008},
{"id":89,"make":"Chevrolet","model":"Impala SS","year":1994},
{"id":90,"make":"Jeep","model":"Patriot","year":2009},
{"id":91,"make":"Saab","model":"9000","year":1993},
{"id":92,"make":"Infiniti","model":"G","year":2008},
{"id":93,"make":"Volkswagen","model":"New Beetle","year":2007},
{"id":94,"make":"Bentley","model":"Continental GT","year":2009},
{"id":95,"make":"Dodge","model":"Ram Van 3500","year":2002},
{"id":96,"make":"Peugeot","model":"207","year":2006},
{"id":97,"make":"Mitsubishi","model":"Diamante","year":1998},
{"id":98,"make":"Bugatti","model":"Veyron","year":2011},
{"id":99,"make":"Scion","model":"xD","year":2008},
{"id":100,"make":"Chevrolet","model":"G-Series G30","year":1993},
{"id":101,"make":"MINI","model":"Cooper","year":2005},
{"id":102,"make":"Suzuki","model":"Forenza","year":2007},
{"id":103,"make":"BMW","model":"645","year":2005},
{"id":104,"make":"Mercury","model":"Topaz","year":1986},
{"id":105,"make":"Lexus","model":"SC","year":1994},
{"id":106,"make":"Honda","model":"Accord","year":2002},
{"id":107,"make":"Bentley","model":"Continental Flying Spur","year":2011},
{"id":108,"make":"Mazda","model":"RX-7","year":1988},
{"id":109,"make":"Chrysler","model":"PT Cruiser","year":2004},
{"id":110,"make":"Ford","model":"Explorer","year":2007},
{"id":111,"make":"Pontiac","model":"G3","year":2010},
{"id":112,"make":"Pontiac","model":"Firebird","year":2000},
{"id":113,"make":"Mitsubishi","model":"Space","year":1984},
{"id":114,"make":"Audi","model":"R8","year":2009},
{"id":115,"make":"Chevrolet","model":"Corvette","year":1957},
{"id":116,"make":"Audi","model":"90","year":1991},
{"id":117,"make":"Mercedes-Benz","model":"W126","year":1981},
{"id":118,"make":"Lincoln","model":"Navigator","year":2012},
{"id":119,"make":"Lamborghini","model":"Murci??lago","year":2005},
{"id":120,"make":"Ford","model":"Aerostar","year":1987},
{"id":121,"make":"Toyota","model":"Yaris","year":2009},
{"id":122,"make":"Hyundai","model":"Elantra","year":2002},
{"id":123,"make":"Ford","model":"Escape","year":2007},
{"id":124,"make":"Peugeot","model":"207","year":2006},
{"id":125,"make":"Volvo","model":"S80","year":1999},
{"id":126,"make":"Toyota","model":"TundraMax","year":2010},
{"id":127,"make":"Jaguar","model":"XJ Series","year":2003},
{"id":128,"make":"Buick","model":"Regal","year":1995},
{"id":129,"make":"Eagle","model":"Talon","year":1996},
{"id":130,"make":"Mercury","model":"Cougar","year":1986},
{"id":131,"make":"Jeep","model":"Cherokee","year":1995},
{"id":132,"make":"Ford","model":"F-Series Super Duty","year":2007},
{"id":133,"make":"GMC","model":"Acadia","year":2012},
{"id":134,"make":"Ford","model":"Mustang","year":1973},
{"id":135,"make":"Maybach","model":"62","year":2011},
{"id":136,"make":"Dodge","model":"Caravan","year":2001},
{"id":137,"make":"GMC","model":"Sonoma","year":1993},
{"id":138,"make":"Cadillac","model":"Escalade","year":1999},
{"id":139,"make":"Mitsubishi","model":"Endeavor","year":2010},
{"id":140,"make":"Dodge","model":"Ram 1500","year":1999},
{"id":141,"make":"Cadillac","model":"Escalade","year":2004},
{"id":142,"make":"Ford","model":"Bronco II","year":1986},
{"id":143,"make":"Hummer","model":"H3","year":2006},
{"id":144,"make":"Aston Martin","model":"DB9","year":2005},
{"id":145,"make":"Ford","model":"Econoline E350","year":2001},
{"id":146,"make":"Chevrolet","model":"Astro","year":1992},
{"id":147,"make":"Lexus","model":"RX","year":2001},
{"id":148,"make":"Mazda","model":"B-Series Plus","year":2000},
{"id":149,"make":"Geo","model":"Tracker","year":1997},
{"id":150,"make":"Infiniti","model":"G","year":1992},
{"id":151,"make":"Chevrolet","model":"Corvette","year":1973},
{"id":152,"make":"Hyundai","model":"Accent","year":2008},
{"id":153,"make":"Lincoln","model":"MKZ","year":2008},
{"id":154,"make":"Lexus","model":"LX","year":2007},
{"id":155,"make":"Land Rover","model":"Range Rover","year":1990},
{"id":156,"make":"Toyota","model":"Sequoia","year":2007},
{"id":157,"make":"Ford","model":"Bronco","year":1986},
{"id":158,"make":"Chrysler","model":"Concorde","year":2004},
{"id":159,"make":"Isuzu","model":"Trooper","year":1998},
{"id":160,"make":"Toyota","model":"Corolla","year":1993},
{"id":161,"make":"Dodge","model":"Ram 1500","year":2000},
{"id":162,"make":"Mitsubishi","model":"Endeavor","year":2007},
{"id":163,"make":"Ford","model":"F150","year":2009},
{"id":164,"make":"Porsche","model":"Cayenne","year":2004},
{"id":165,"make":"Hummer","model":"H2 SUT","year":2006},
{"id":166,"make":"Volkswagen","model":"rio","year":1998},
{"id":167,"make":"GMC","model":"EV1","year":1999},
{"id":168,"make":"Oldsmobile","model":"88","year":1994},
{"id":169,"make":"Cadillac","model":"CTS","year":2004},
{"id":170,"make":"Suzuki","model":"SX4","year":2007},
{"id":171,"make":"GMC","model":"Rally Wagon 3500","year":1993},
{"id":172,"make":"Ford","model":"Ranger","year":2000},
{"id":173,"make":"Kia","model":"Forte","year":2011},
{"id":174,"make":"Chevrolet","model":"3500","year":1997},
{"id":175,"make":"Chevrolet","model":"Tahoe","year":1998},
{"id":176,"make":"GMC","model":"Sierra 2500","year":1999},
{"id":177,"make":"Ford","model":"F150","year":1995},
{"id":178,"make":"Chevrolet","model":"Silverado 3500","year":2006},
{"id":179,"make":"Dodge","model":"Ram 1500","year":1999},
{"id":180,"make":"Mercedes-Benz","model":"500SEC","year":1993},
{"id":181,"make":"Mitsubishi","model":"Galant","year":1986},
{"id":182,"make":"Suzuki","model":"XL-7","year":2006},
{"id":183,"make":"Saab","model":"9-2X","year":2005},
{"id":184,"make":"Mercedes-Benz","model":"CL-Class","year":2006},
{"id":185,"make":"Ford","model":"C-MAX Hybrid","year":2013},
{"id":186,"make":"Subaru","model":"Impreza","year":1993},
{"id":187,"make":"Mercury","model":"Topaz","year":1993},
{"id":188,"make":"Isuzu","model":"Oasis","year":1997},
{"id":189,"make":"Cadillac","model":"SRX","year":2005},
{"id":190,"make":"Land Rover","model":"Discovery Series II","year":2002},
{"id":191,"make":"Subaru","model":"Impreza","year":2009},
{"id":192,"make":"Pontiac","model":"Grand Prix","year":1996},
{"id":193,"make":"Ford","model":"F150","year":2007},
{"id":194,"make":"Volkswagen","model":"New Beetle","year":2009},
{"id":195,"make":"BMW","model":"7 Series","year":2006},
{"id":196,"make":"Lotus","model":"Esprit","year":1986},
{"id":197,"make":"Hyundai","model":"Elantra","year":2000},
{"id":198,"make":"Geo","model":"Metro","year":1997},
{"id":199,"make":"Mercedes-Benz","model":"SL-Class","year":2002},
{"id":200,"make":"Suzuki","model":"Daewoo Magnus","year":2004},
{"id":201,"make":"Lexus","model":"RX","year":2012},
{"id":202,"make":"Ford","model":"Tempo","year":1991},
{"id":203,"make":"Ram","model":"C/V","year":2012},
{"id":204,"make":"Ford","model":"LTD Crown Victoria","year":1985},
{"id":205,"make":"Lincoln","model":"MKX","year":2010},
{"id":206,"make":"Chevrolet","model":"Cavalier","year":1999},
{"id":207,"make":"Toyota","model":"TundraMax","year":2007},
{"id":208,"make":"Suzuki","model":"Sidekick","year":1993},
{"id":209,"make":"BMW","model":"5 Series","year":2000},
{"id":210,"make":"Chevrolet","model":"Silverado 2500","year":2005},
{"id":211,"make":"Toyota","model":"Prius","year":2008},
{"id":212,"make":"Dodge","model":"Dakota Club","year":1998},
{"id":213,"make":"Chevrolet","model":"S10","year":1995},
{"id":214,"make":"Mazda","model":"CX-7","year":2009},
{"id":215,"make":"Mitsubishi","model":"Mighty Max","year":1996},
{"id":216,"make":"Nissan","model":"Quest","year":2001},
{"id":217,"make":"Volkswagen","model":"Type 2","year":1991},
{"id":218,"make":"GMC","model":"Suburban 2500","year":1992},
{"id":219,"make":"Audi","model":"S4","year":2005},
{"id":220,"make":"Kia","model":"Spectra5","year":2006},
{"id":221,"make":"Ford","model":"Escape","year":2013},
{"id":222,"make":"Chevrolet","model":"Camaro","year":2011},
{"id":223,"make":"Acura","model":"NSX","year":2001},
{"id":224,"make":"Audi","model":"80","year":1989},
{"id":225,"make":"Mitsubishi","model":"Pajero","year":2004},
{"id":226,"make":"Mitsubishi","model":"Lancer Evolution","year":2004},
{"id":227,"make":"Bentley","model":"Continental","year":2009},
{"id":228,"make":"Jeep","model":"Cherokee","year":1998},
{"id":229,"make":"Hyundai","model":"Elantra","year":2004},
{"id":230,"make":"Dodge","model":"Stratus","year":1997},
{"id":231,"make":"GMC","model":"Savana 3500","year":2010},
{"id":232,"make":"Buick","model":"Regal","year":2003},
{"id":233,"make":"Mitsubishi","model":"Eclipse","year":2008},
{"id":234,"make":"Lexus","model":"LX","year":2002},
{"id":235,"make":"Isuzu","model":"Oasis","year":1999},
{"id":236,"make":"Toyota","model":"MR2","year":2004},
{"id":237,"make":"Mazda","model":"Mazdaspeed 3","year":2009},
{"id":238,"make":"Ford","model":"Mustang","year":1991},
{"id":239,"make":"Volvo","model":"XC70","year":2008},
{"id":240,"make":"Toyota","model":"Avalon","year":1999},
{"id":241,"make":"GMC","model":"2500 Club Coupe","year":1995},
{"id":242,"make":"Suzuki","model":"Aerio","year":2003},
{"id":243,"make":"Chevrolet","model":"Cavalier","year":1999},
{"id":244,"make":"Mazda","model":"Navajo","year":1993},
{"id":245,"make":"Dodge","model":"Ram Van B150","year":1994},
{"id":246,"make":"Ford","model":"Mustang","year":2001},
{"id":247,"make":"BMW","model":"7 Series","year":1999},
{"id":248,"make":"Toyota","model":"Tercel","year":1993},
{"id":249,"make":"Mercedes-Benz","model":"SL-Class","year":2005},
{"id":250,"make":"Volkswagen","model":"Passat","year":1988},
{"id":251,"make":"Toyota","model":"Highlander","year":2012},
{"id":252,"make":"Mitsubishi","model":"Chariot","year":1996},
{"id":253,"make":"Cadillac","model":"Fleetwood","year":1996},
{"id":254,"make":"Jaguar","model":"XJ Series","year":2005},
{"id":255,"make":"Buick","model":"Lucerne","year":2008},
{"id":256,"make":"Chrysler","model":"Town & Country","year":1995},
{"id":257,"make":"Audi","model":"A8","year":2011},
{"id":258,"make":"GMC","model":"Savana 1500","year":2004},
{"id":259,"make":"Austin","model":"Mini Cooper","year":1961},
{"id":260,"make":"Audi","model":"A4","year":1997},
{"id":261,"make":"Lexus","model":"RX Hybrid","year":2011},
{"id":262,"make":"GMC","model":"Sierra 2500","year":2005},
{"id":263,"make":"Lexus","model":"GX","year":2006},
{"id":264,"make":"GMC","model":"Envoy","year":2006},
{"id":265,"make":"Nissan","model":"Pathfinder","year":1997},
{"id":266,"make":"Aston Martin","model":"DB9","year":2012},
{"id":267,"make":"Ford","model":"E250","year":2007},
{"id":268,"make":"Mercedes-Benz","model":"M-Class","year":2012},
{"id":269,"make":"Mitsubishi","model":"Eclipse","year":1995},
{"id":270,"make":"Bentley","model":"Azure","year":2007},
{"id":271,"make":"Mercedes-Benz","model":"SL-Class","year":2008},
{"id":272,"make":"Mercedes-Benz","model":"CL-Class","year":2002},
{"id":273,"make":"Mercedes-Benz","model":"SLK-Class","year":2006},
{"id":274,"make":"Cadillac","model":"CTS","year":2012},
{"id":275,"make":"Jaguar","model":"XJ","year":2010},
{"id":276,"make":"Nissan","model":"Titan","year":2007},
{"id":277,"make":"Toyota","model":"Prius c","year":2012},
{"id":278,"make":"Land Rover","model":"Range Rover","year":1995},
{"id":279,"make":"Chrysler","model":"300","year":2006},
{"id":280,"make":"GMC","model":"Sierra 3500HD","year":2006},
{"id":281,"make":"Ford","model":"F250","year":1994},
{"id":282,"make":"Audi","model":"RS4","year":2007},
{"id":283,"make":"Audi","model":"A3","year":2008},
{"id":284,"make":"Mitsubishi","model":"Eclipse","year":2007},
{"id":285,"make":"Porsche","model":"928","year":1985},
{"id":286,"make":"Infiniti","model":"I","year":2002},
{"id":287,"make":"Mazda","model":"Miata MX-5","year":2003},
{"id":288,"make":"Jeep","model":"Cherokee","year":2000},
{"id":289,"make":"Buick","model":"Terraza","year":2007},
{"id":290,"make":"Ford","model":"Bronco II","year":1985},
{"id":291,"make":"BMW","model":"M3","year":2006},
{"id":292,"make":"Chevrolet","model":"Sportvan G30","year":1994},
{"id":293,"make":"Ford","model":"E150","year":2004},
{"id":294,"make":"Chevrolet","model":"HHR","year":2011},
{"id":295,"make":"Mitsubishi","model":"Endeavor","year":2004},
{"id":296,"make":"Ford","model":"F250","year":1996},
{"id":297,"make":"Mazda","model":"626","year":2001},
{"id":298,"make":"Toyota","model":"Echo","year":2003},
{"id":299,"make":"Ford","model":"Focus","year":2011},
{"id":300,"make":"Scion","model":"tC","year":2008}]
},{}],3:[function(require,module,exports){
const { getAll } = require("./api/cars.js");

const form = document.querySelector('form');

const renderTable = data => {
  const tableBody = document.getElementById("table-body");

  if (!tableBody) {
    throw new Error("No table element found");
  }

  let source = data;

  const rows = source.reduce(
    (acc, { id, make, model, year }) =>
      acc +
      `<tr id="table-row-${id}"><td>${id}</td><td>${make}</td><td>${model}</td><td>${year}</td></tr>`,
    ``
  );

  tableBody.innerHTML = rows;
};

getAll().then(({ data }) => renderTable(data));

const onSubmit = event => {
  event.preventDefault();

  const id = event.target.id.value;
  const make = event.target.make.value;
  const model = event.target.model.value;
  const year = event.target.year.value;

  console.log(id, make, model, year);

  getAll({id: id, make: make, model: model, year: year}).then(({ data }) => renderTable(data));
};

const onReset = () => {
  getAll().then(({ data }) => renderTable(data));
};

form.onsubmit = onSubmit;
form.onreset = onReset;
},{"./api/cars.js":1}]},{},[3]);
