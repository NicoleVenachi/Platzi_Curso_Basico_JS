var articulos = [
  {nombre: 'Bici', costo:3000},
  {nombre: 'TV', costo:2000},
  {nombre: 'Libro', costo:30000},
  {nombre: 'Laptop', costo:2000},
  {nombre: 'Mesa', costo:400},
  {nombre: 'Vaso', costo:6000},
  {nombre: 'Casa', costo:9000},
  {nombre: 'Aufifonos', costo:800}
]

//filter

var articulosFiltrados = articulos.filter(function(articulo){
  return articulo.costo <= 500;
})

// map

var nombreArticulos = articulos.map(function(articulo) {
  return articulo.nombre
})


//find

var encuentraArticulos = articulos.find(function(articulo){
  return articulo.nombre === 'Casa'
})

//foreach

articulos.forEach((articulo, i) => { console.log(articulo.nombre)
});

//some
var articulosBaratos = articulos.some((articulo) => articulo.costo <= 500)

//reduce

var articulosTotal = articulos.reduce(reducer, 0);

const reducer = (acum, articulo) => acum +=articulo.costo;
