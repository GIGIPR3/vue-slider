var app = new Vue({
        el: '#root',
        data: {
            immagini: [
                './immagini/immagine1',

                './immagini/immagine2',

                './immagini/immagine3',

                './immagini/immagine4',

                './immagini/immagine5',

            ],

            indice: 0,
        },
        methods: {
            prossimaImmagine: function () {
                let lunghezza = this.immagini.lenght -1;
                console.log(lunghezza);
            }
        }
    }

);