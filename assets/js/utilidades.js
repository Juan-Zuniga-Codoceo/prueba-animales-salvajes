
export async function obtenerImagenes(animales) {
    try {
        const promises = animales.map(async animal => {
            const imgRespuesta = await fetch(IMG_BASE_PATH + animal.imagen);
            if (!imgRespuesta.ok) throw new Error(`Error al cargar imagen: ${animal.imagen}`);
            const imgBlob = await imgRespuesta.blob();
            animal.imagen = URL.createObjectURL(imgBlob);
        });
        await Promise.all(promises);
    } catch (error) {
        console.error('Error al cargar imágenes:', error);
    }
}
