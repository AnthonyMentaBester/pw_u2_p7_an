console.log(Vue)

const app = Vue.createApp({
    template: `
    <h1> Hola Mundo </h1>
    <p> Con Vue.js </p>
    `
});

app.mount('#myApp')