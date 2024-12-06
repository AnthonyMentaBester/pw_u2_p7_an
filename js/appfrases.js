
//arreglo de objetos frase
const frases = [
    { frase: 'el que madriuga dios le ayuda', autor: 'Pepito Perez' },
    { frase: 'A CABALLO REAGALDO', autor: 'Juan Carlos' },
    { frase: 'No hay mal que por bien', autor: 'Anthony Narvaez' },
    { frase: 'El que con lobos se junta', autor: 'Roberto Ramos' },
]

const app = Vue.createApp({

    methods: {
        agregarFrase() {
            console.log(this.frase)
            console.log(this.autor)

            const nuevaFrase = {
                frase: this.frase,
                autor: this.autor
            }

            //es para que reciba un nuevo elemento al inicio
            this.listafrases.unshift(nuevaFrase);

        },

        agregarFraseFinal() {
            console.log(this.frase)
            console.log(this.autor)

            const nuevaFraseFinal = {
                frase: this.frase,
                autor: this.autor
            }

            //es para que reciba un nuevo elemento al final
            this.listafrases.push(nuevaFraseFinal);

        },
        eventoKeyPress(event) {

            if (event.charCode === 13) {
                //no olvidar que siempre viene un evento
                console.log('evento');
                console.log(event);
                console.log(event.charCode);
                console.log(event.key);
                this.agregarFraseFinal();

            }

        },
        //desestructurado parra ahorrar lo del punto
        eventoKeyPressDes({charCode,key,cancelable }) {

            if (key === "Enter") {
                //no olvidar que siempre viene un evento
                console.log('evento');
                console.log(charCode);
                console.log(key);
                console.log(cancelable);
                this.agregarFraseFinal();

            }

        },
        //para no poner el condicional
        eventoKeyPressNoEnter({charCode, key, cancelable}) {

            //no olvidar que siempre viene un evento
            console.log('evento');
            console.log(charCode);
            console.log(key);
            console.log(cancelable);
            this.agregarFraseFinal();


        }

    },


    //a ese arreglo le asiganaremos una propiedad reactiva
    data() {
        return {
            listafrases: frases,
            frase: null,
            //autor:'sin autor' ejemplo de que se puede poner valor en el input
            autor: null

        }

    },
});

app.mount('#myApp')