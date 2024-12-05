
//arreglo de objetos frase
const frases = [
    {frase:'el que madriuga dios le ayuda', autor:'Pepito Perez'},
    {frase:'A CABALLO REAGALDO', autor:'Juan Carlos'},
    {frase:'No hay mal que por bien', autor:'Anthony Narvaez'},
    {frase:'El que con lobos se junta', autor:'Roberto Ramos'},
]

const app = Vue.createApp({

    methods: {
        
    },


    //a ese arreglo le asiganaremos una propiedad reactiva
    data() {
        return {
            listafrases: frases

        }

    },
});

app.mount('#myApp')