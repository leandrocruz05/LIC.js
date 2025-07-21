console.log('Arranca proceso')

const baseDeDatos = [
    { usuario: 'admin', contraseña: '1234' }
]

let listaDeTareas = []

function registrarUsuario() {
    let nuevoUsuario = prompt('Ingrese nombre de usuario')
    if (!nuevoUsuario) {
        alert('El nombre no puede estar vacio!!')
        return false
    }

    for (let i = 0; i < baseDeDatos.length; i++) {
        if (nuevoUsuario === baseDeDatos[i].usuario) {
            alert('El nombre ingresado ya existe! Por favor, elija otro')
            return false
        }
    }

    let nuevacontraseña = prompt('Ingrese su contraseña')
    if (!nuevacontraseña) {
        alert('La contraseña no puede estar vacia')
        return false
    }

    baseDeDatos.push({ usuario: nuevoUsuario, contraseña: nuevacontraseña })
    console.log('Usuarios actuales en base de datos:', baseDeDatos)
    alert('Usuario registrado con exito, Bienvenido '+nuevoUsuario)
    return true
}

function login(usuario, contraseña) {
    for (let i = 0; i < baseDeDatos.length; i++) {
        const usuarioValido = baseDeDatos[i]

        if (usuario === usuarioValido.usuario && contraseña === usuarioValido.contraseña) {
            alert('¡Inicio de sesión exitoso!\nBienvenido '+usuario)
            return true
        }
    }
    alert('Usuario o contraseña incorrectos. Intente de nuevo.')
    return false;
}

function inicioSesion() {
    let sesionIniciada = false

    for (let i = 0; i < 3; i++) {
        let usuario = prompt('Ingrese usuario')
        let contraseña = prompt('Ingrese contraseña')

        sesionIniciada = login(usuario, contraseña)

        if (sesionIniciada) {
            break
        } else if (i < 2) {
            alert(`Le quedan ${2 - i} intentos.`)
        } else {
            alert('Ha agotado sus intentos. Acceso denegado.')
            let volver = prompt('1- Volver al menu inicial\n2- Registrarme')
            if (volver == 1) {
                menu()
            } else {
                registrarUsuario()
            }
            break
        }
    }

    if (sesionIniciada) {
        iniciarSimuladorDeTareas()
    } else {
        console.log('No se pudo iniciar sesión. El simulador de tareas no se ejecutará.')
    }

    return sesionIniciada
}

function agregarTarea() {
    let nuevaTarea = prompt('Ingrese la nueva tarea:')

    if (!nuevaTarea || nuevaTarea === '') {
        alert("La tarea no puede estar vacía.")
        return
    }

    listaDeTareas.push(nuevaTarea)
    alert('Tarea ' + nuevaTarea + ' agregada con éxito.')
    console.log('Lista de tareas actual:', listaDeTareas)
}

function verTareas() {
    if (listaDeTareas.length === 0) {
        alert('No hay tareas pendientes. ¡Todo listo!')
        console.log('Lista de tareas: Vacía')
        return
    }

    let mensajeTareas = '--- Tus Tareas Pendientes ---\n'
    for (let i = 0; i < listaDeTareas.length; i++) {
        mensajeTareas += i+1 + '. ' + listaDeTareas[i] + '\n'
    }
    alert(mensajeTareas);
    console.log('Lista de tareas:', listaDeTareas)

}

function eliminarTarea() {
    if (listaDeTareas.length === 0) {
        alert('No hay tareas para eliminar.')
        return
    } else {
        verTareas()
        let cualElimina = parseInt(prompt('Ingrese el numero de la tarea a eliminar:'))

        if (isNaN(cualElimina) || cualElimina < 1 || cualElimina > listaDeTareas.length) {
            alert('Número de tarea no válido. Por favor, ingrese un número de la lista.')
            return
        }

        let opcionAEliminar = cualElimina - 1
        let confirmarEliminar = confirm('¿Está seguro de que desea eliminar la tarea ' + listaDeTareas[opcionAEliminar] + '?')
        if (confirmarEliminar) {
            let tareaEliminada = listaDeTareas.splice(opcionAEliminar, 1)
            alert('Tarea ' + tareaEliminada[0] + ' eliminada con éxito.')
            console.log('Tarea eliminada:', tareaEliminada[0])
            console.log('Nueva lista de tareas:', listaDeTareas)
        } else {
            alert('Eliminación de tarea cancelada.')
        }
    }
}

function iniciarSimuladorDeTareas() {
    let salir = false

    while (!salir) {
        let opcionGestor = Number(prompt(
            '--- GESTOR DE TAREAS GT ---\n' +
            'Elija una opción:\n' +
            '1. Agregar Tarea\n' +
            '2. Ver Tareas\n' +
            '3. Eliminar Tarea\n' +
            '4. Salir del Gestor'
        ))

        switch (opcionGestor) {
            case 1:
                agregarTarea()
                break
            case 2:
                verTareas()
                break
            case 3:
                eliminarTarea()
                break
            case 4:
                alert('¡Hasta pronto!')
                salir = true
                break
            default:
                alert('Opción no válida')
                break
        }
    }
}

function menu() {
    let sesion = false
    let bandera = false

    while (!sesion && !bandera) {
        let opcionSeleccionada = Number(prompt(
            '------------ Bienvenido a GT ------------\n' +
            'Elija una opción:\n' +
            '1. Iniciar Sesión\n' +
            '2. Registrar Usuario\n' +
            '3. Salir'
        ))

        switch (opcionSeleccionada) {
            case 1:
                sesion = inicioSesion()
                break
            case 2:
                sesion = registrarUsuario()
                break
            case 3:
                alert('Gracias por usar el servicio GT.\nHasta la vista!')
                bandera = true
                break
            default:
                alert('Opción no valida')
                break
        }

        if (sesion) {
            break
        }
    }

    if (sesion) {
        alert('¡Bienvenido al gestionador de tareas!');
        iniciarSimuladorDeTareas()
    } else if (bandera) {
        console.log('Se ha salido del sistema.');
    } else {
        console.log('No se ha iniciado sesión. El simulador de tareas no se ejecutará.');
    }
}

menu()