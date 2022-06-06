/*
Student: Alison Janise Paico Quispe
*/

const Contenedor = require('./contenedor');

const start = async function() {
    let contenedor = new Contenedor('productos');

    await contenedor.deleteAll();

    let objectPapa = {
        title: 'Papa',
        price: '1',
        thumbnail: 'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2019/09/papa.jpg?resize=1080%2C608&quality=80&ssl=1'
    }
    let idPapa = await contenedor.save(objectPapa);
    console.log(idPapa);
    
    let objectCamote = {
        title: 'Camote',
        price: '2',
        thumbnail: 'https://i0.wp.com/restaurantepiscomar.com/wp-content/uploads/2014/10/camote-boniato.jpg?fit=630%2C355&ssl=1'
    }
    
    let idCamote = await contenedor.save(objectCamote);
    console.log(idCamote);

    let objectPollo = {
        title: 'Pollo',
        price: '1.5',
        thumbnail: 'https://www.lavanguardia.com/files/og_thumbnail/uploads/2018/09/26/5e99833ed5c67.jpeg'
    }
    
    let idPollo = await contenedor.save(objectPollo);
    console.log(idPollo);    
    
    /*await contenedor.deleteById(2);

    let list = await contenedor.getAll();
    console.log(list);

    let productCamote = await contenedor.getById(1);
    console.log(productCamote);

    let product = await contenedor.getById(4);
    console.log(product);*/
}

start();