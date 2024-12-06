console.log(Vue)

const app = Vue.createApp({
    /*template: `
    <h1> Hola Mundo </h1>
    <p> Con Vue.js </p>

    
    <p>{{1 + 2}}</p>
    <p>{{[1,2,3,4,5,6,7,8,9]}}</p>

    
    <p>{{ {nombre: "Edison", apellido:"Cayambe"} }}</p>
    
    <p>{{false? 'Activo':'Inactivo'}}</p>
    <p> 1===1 </p>
    <p>{{ 1===1 }}</p>
    
    `*/

    //OPTIONS API
    /* ESTE YA SE DECLARO ARRIBA SIRVE PARA CODIGO HTML PERO NO ES BUENA PRACTICA
    template:{

    },*/



    /* vue para trabajar el comprotamiento de la pagina web , los eventos y el funcionamiento utiliza 
    lo que son directivas que tienen un objetivo en especifico */

    //PRIMERA DIRECTIVA -----> PARA EVENTOS
    //v-on:eventos=""  ----------> ejemp  v-on:click="cambiarMensaje"
    //Se usa dentro de cualquier elemento html que genera un evento

    //segunda opcion
    //permite declarar metodos y para usar cada propiedad reactiva debo usar el "this"

    methods: {
        cambiarMensaje() {
            this.mensaje = 'Mensaje compeltamente nuevo';
            this.edad = 30;

        }

    },

    //primera opcion
    //ESTA DESTINADA PARA CREAR PROPIEDADES DENTRO DE VUE NEXO COMUNICACION
    //PAGINA HTML Y EL CODIGO JS CONOCIDAS COMO PROPIEDADES REACTIVAS
    //todo lo declarado aqui es codigo js
    //estas  propiedades permiten la comunicacion de manera biridiccional con v-model


    //tercera opcion
    //v-model esta permite enlazar un elemento html de entrada en la vista, con un elemento js
    //normalmente inputs

    data() {
        return {
            mensaje: 'Hola Mundo PWEB',
            edad: 35

        }

    },
});

app.mount('#myApp')