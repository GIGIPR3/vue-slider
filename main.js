var app = new Vue({
    el: '#root',
    data: {
        immagini: [{
                immagine: './immagini/immagine1.jpg'
            },

            {
                immagine: './immagini/immagine2.jpg'
            },

            {
                immagine: './immagini/immagine3.jpg'
            },

            {
                immagine: './immagini/immagine4.jpg'
            },

            {
                immagine: './immagini/immagine5.jpg'
            },

        ],

        indice: 0,
    },
    methods: {
        prossimaImmagine: function () {
            /* let lunghezza = this.immagini.lenght - 1;
            console.log(lunghezza); */

            if (this.indice < this.immagini.length - 1) {
                this.indice++;
            } else {
                this.indice = 0;

            }
        },
        immaginePrecedente: function () {
            if (this.indice <= 0) {
                this.indice = this.obj.length - 1;

            } else {
                this.indice--;
            }
        },
    }
})