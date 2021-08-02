var miAuto = {
  marca: 'Toyora',
  modelo: 'Corolla',
  annio: 2020,
  detallesDelAuto: function() {
    console.log(`Auto ${this.modelo} ${this.annio}`);
  }
};
miAuto;
miAuto.marca;
miAuto.detallesDelAuto();


//constructor y objetos del tipo miAuto
function auto(marca, modelo, annio) {
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}


var autoTessla = new auto('Tesla', 'Model 3', 2019);
var autoToyota = new auto('Toyota', 'Corona', 2020);

var cars = [];
function carConstruct(limit) {
  for (var i=0; i<=limit; i++){
    cars.push(new auto(`Toyota ${i}`, `Model ${i}`, Number(`202${i}`)))
  }

}
