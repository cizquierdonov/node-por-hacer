const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completo de una tarea', {
        descripcion,
        completado
    })
    .command('listar', 'Lista las tareas almacenadas', {})
    .command('borrar', 'Elimina una tarea dada su descripcion', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
};