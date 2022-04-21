const Pizzas = [{
    ID:1,
    nombre:'pizza cuatro quesos',
    ingredientes:['Mozzarella','Parmesano','Provolone','Roquefort'],
    precio:'$1500',
},{
    ID:2,
    nombre:'pizza fugazzeta',
    ingredientes:['Mozzarella','Parmesano','cebolla',],
    precio:'$1000',
},{
    ID:3,
    nombre:'pizza calabresa',
    ingredientes:['Mozzarella','Parmesano','morron','oregano'],
    precio:'$600',
},{
    ID:4,
    nombre:'pizza de jamón y morrones',
    ingredientes:['jamon','Parmesano','morron'],
    precio:'$700',
},{
    ID:5,
    nombre:'pizza napolitana',
    ingredientes:['tomate','huevo','chedar','Roquefort'],
    precio:'$900',
},{
    ID:6,
    nombre:'pizza de pepperoni',
    ingredientes:['ajo','lechuga','queso'],
    precio:'$800',
}]

//a) Las pizzas que tengan un id impar.
const idPar = Pizzas.filter(Pizzas => Pizzas.ID%2!==0).map(Pizzas => Pizzas.nombre)
console.log(`Las pizzas con identificador impar son ${idPar}.`)

// b) ¿Hay alguna pizza que valga menos de $600?
const precioPizza = Pizzas.filter(Pizzas => Pizzas.precio < 600).map(Pizzas => Pizzas.nombre)

const valor = () =>{
    if(precioPizza == false){
        console.log("No contamos con pizzas a ese precio.")
    }else{
        console.log(`Tenemos a menos de $600 ${precioPizza}.`)
    }
}
valor()

// Los nombres de todos las pizzas.

const nombresPizzas = Pizzas.map(Pizzas => Pizzas.nombre)

console.log(`Los nombres de las pizzas son ${nombresPizzas}.`)

// d) Los precios de las pizzas.

const valorPizzas = Pizzas.map(Pizzas => Pizzas.precio)

console.log(`El precio de cada pizza es ${valorPizzas}.`)


// e) El nombre de cada pizza con su respectivo precio.
const nombreYprecio = Pizzas.forEach(Pizzas => 

console.log(`La pizza ${Pizzas.nombre} sale $${Pizzas.precio}`))