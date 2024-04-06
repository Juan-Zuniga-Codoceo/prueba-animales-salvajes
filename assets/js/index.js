
import { Animal, Leon, Lobo, Oso, Serpiente, Aguila } from './clases.js';
import { obtenerImagenes } from './utilidades.js';

const clasesAnimales = {
    Leon,
    Lobo,
    Oso,
    Serpiente,
    Aguila
};


(async () => {
    try {
        const respuesta = await fetch('animales.json');
        const { animales } = await respuesta.json();

        const selectAnimal = document.getElementById('animal');

        selectAnimal.innerHTML = '';

        const defaultOption = document.createElement('option');
        defaultOption.textContent = 'Seleccione un animal';
        defaultOption.disabled = true;
        defaultOption.selected = true;
        selectAnimal.appendChild(defaultOption);

        animales.forEach(animal => {
            const option = document.createElement('option');
            option.value = animal.name;
            option.textContent = animal.name;
            selectAnimal.appendChild(option);
        });


        const btnRegistrar = document.getElementById('btnRegistrar');
        btnRegistrar.addEventListener('click', () => {
            const nombre = selectAnimal.value;
            const edad = document.getElementById('edad').value;
            const comentarios = document.getElementById('comentarios').value;

            if (!nombre || !edad || !comentarios) {
                alert('Por favor complete todos los campos');
                return;
            }

            const ClaseAnimal = clasesAnimales[nombre];
            const animal = new ClaseAnimal(edad, comentarios);

            const contenedorImagen = document.getElementById('imagenAnimal');
            contenedorImagen.innerHTML = `<img src="${animal.img}" alt="${nombre}" class="animal-img">`;

            const tablaAnimales = document.getElementById('Animales');
            const card = document.createElement('div');
            card.className = 'card mx-2 my-2';
            card.style.width = '10rem';
            card.innerHTML = `
                <img src="${animal.img}" class="card-img-top" alt="${nombre}">
                <div class="card-body">
                    <button class="btn btn-secondary reproducir-sonido" data-sonido="${animal.sonido}">
                        <i class="bi bi-volume-up-fill" ></i> Sonido
                    </button>
                </div>
            `;
            tablaAnimales.appendChild(card);

            const btnReproducirSonido = card.querySelector('.reproducir-sonido');
            btnReproducirSonido.addEventListener('click', () => {
                const audioSrc = btnReproducirSonido.dataset.sonido;
                const audio = new Audio(audioSrc);
                audio.play();
            });

            const imgAnimal = card.querySelector('img');
            imgAnimal.addEventListener('click', () => {
                const modalBody = document.querySelector('.modal-body');
                modalBody.innerHTML = `
                    <img src="${animal.img}" alt="${nombre}" class="w-50">
                    <p>Nombre: ${nombre}</p>
                    <p>Edad: ${animal.edad}</p>
                    <p>Comentarios: ${animal.comentarios}</p>
                `;
                $('#exampleModal').modal('show'); 
            });

            selectAnimal.selectedIndex = 0;
            document.getElementById('edad').selectedIndex = 0;
            document.getElementById('comentarios').value = '';
        });

        await obtenerImagenes(animales);

    } catch (error) {
        console.error('Ocurrió un error:', error);
    }
})();
