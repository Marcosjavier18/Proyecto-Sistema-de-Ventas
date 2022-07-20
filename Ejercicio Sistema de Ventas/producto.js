
//Segun la imagen, tenemos que hacer la clas Producto primero y luego la clase orden

class Producto{
    static contadorProductos = 0;

    constructor(nombre,precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }
    get idProducto(){
        return this._idProducto;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get precio(){
        return this._precio;
    } 
    set precio(precio){
        return this._precio = precio;
    }
    toString(){
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: $${this._precio} `;
    }

}
class Orden{
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS(){
        return 5;
      }
      constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        // this._contadorProductorAgregados = 0;
      }
      get idOrden(){
        return this._idOrden;
      }
      
      agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
            // this._productos[this._contadorProductorAgregados++] = producto;
        }
        else{
            console.log("no se puededn agregar mas productos");
        }
      }

      calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta += producto.precio; //totalVenta = totalVenta + producto.precio
        }
        return totalVenta;
      }

       mostrarOrden(){
        let productosOrden = "";
        for(let producto of this._productos){
            productosOrden += '\n{' +   producto.toString() + "}" ;
        }
        console.log(`Orden: ${this._idOrden} Total: $${this.calcularTotal()}, Productos: ${productosOrden}`)
       }   
    
}


let producto1 = new Producto("Pantalon", "2000");
let producto2 = new Producto("salsa golf", 100);
// console.log(producto1.toString());
// console.log(producto2.toString());

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden();

let orden2 = new Orden();
let producto3 = new Producto('Coca Cola', 50);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.mostrarOrden();