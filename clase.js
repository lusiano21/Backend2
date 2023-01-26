class Usiario {
    constructor(nombre, apellidos, libros, mascotas){
        this.nombre = nombre
        this.apellidos = apellidos
        this.libros = libros 
        this.mascotas = mascotas
    }
    addMascota(mascota){
        this.mascotas.push(mascota)
    }
    countMascotas(){
        return this.mascotas.length
    }
    addLibro(libro,autor){
        this.libros.push({nombre: libro, autor: autor})
    }
    getLibros() {
        let arrayNombres = []
            for (let i = 0; i < this.libros.length; i++) {
                arrayNombres.push(this.libros[i].nombre)

            }
            return arrayNombres
    
    }
    getFullname(){
        return `${this.nombre} ${this.apellidos}`
    }
}
let nombre = 'Luciano',apellidos = 'Moya', libros = [], mascotas = []
let usuario = new Usiario(nombre,apellidos,libros,mascotas); 
usuario.addMascota('Perro')
usuario.addMascota('Gato')
usuario.addLibro('Harry Potter', 'T.K.')
usuario.addLibro('The striming','Stepehen king')

console.log(usuario)
console.log(usuario.countMascotas());
console.log(usuario.getLibros())
console.log(usuario.getFullname())