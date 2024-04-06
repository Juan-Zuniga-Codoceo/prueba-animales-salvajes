
const IMG_BASE_PATH = 'assets/imgs/';
const SOUND_BASE_PATH = 'assets/sounds/';

export class Animal {
    constructor(edad, comentarios) {
        this.edad = edad;
        this.comentarios = comentarios;
    }
    
    get img() {
        return IMG_BASE_PATH + this.constructor.img;
    }

    get sonido() {
        return SOUND_BASE_PATH + this.constructor.sonido;
    }

    static get img() {
        throw new Error('Método "img" no implementado en la clase Animal.');
    }

    static get sonido() {
        throw new Error('Método "sonido" no implementado en la clase Animal.');
    }
}


export class Leon extends Animal {
    static img = 'Leon.png';
    static sonido = 'Rugido.mp3';
}

export class Lobo extends Animal {
    static img = 'Lobo.jpg';
    static sonido = 'Aullido.mp3';
}

export class Oso extends Animal {
    static img = 'Oso.jpg';
    static sonido = 'Gru単ido.mp3';
}

export class Serpiente extends Animal {
    static img = 'Serpiente.jpg';
    static sonido = 'Siseo.mp3';
}

export class Aguila extends Animal {
    static img = 'Aguila.png';
    static sonido = 'Chillido.mp3';
}
