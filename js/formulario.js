const formulario = []
const app = Vue.createApp({
 
    methods: {
        agregarFormulario() {
            console.log(this.nombre)
            console.log(this.apellido)
            console.log(this.hobby)
            console.log(this.lugarNacimiento)
 
            const nuevoFormulario = {
                nombre: this.nombre,
                apellido: this.apellido,
                hobby: this.hobby,
                lugarNacimiento: this.lugarNacimiento,
            }
 
            //es para que reciba un nuevo elemento al final
            this.listaformulario.unshift(nuevoFormulario);

            this.nombre = "";
            this.apellido = "";
            this.hobby = "";
            this.lugarNacimiento = "";
 
        },
 
    },
 
    data() {
        return {
            listaformulario: formulario,
            nombre: null,
            apellido: null,
            hobby: null,
            lugarNacimiento: null
        }
 
    },
});
 
app.mount('#myApp')