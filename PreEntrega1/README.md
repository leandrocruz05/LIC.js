Gestión de Tareas

Un gestor de tareas que permita agregar, ver y eliminar tareas.

Características que cumpliría:
    - Variables y Constantes: tareaNueva, opcionElegida.
    - Arrays: Un array para almacenar las tareas (listaDeTareas).

Funciones:
    - agregarTarea(): Pide al usuario la tarea y la agrega al array.
    - verTareas(): Muestra todas las tareas numeradas.
    - eliminarTarea(): Pide el número de la tarea a eliminar y la quita del array.

Ciclos de Iteración y Condicionales:
    - Un ciclo while o do...while principal para mostrar un menú y permitir al usuario elegir una opción (agregar, ver, eliminar, salir).
    - Condicionales if/else o switch para ejecutar la función correspondiente según la opción elegida por el usuario.
    - Condicionales para validar si el índice de la tarea a eliminar es válido.

Consola JS y Cuadros de Diálogo:
    - prompt para mostrar el menú y pedir la opción elegida, o para solicitar el nombre de la tarea.
    - confirm si querés agregar una confirmación antes de eliminar una tarea.
    - alert para notificar al usuario si la tarea fue agregada/eliminada o si hubo un error.
    - console.log para mostrar la lista de tareas o depurar.

Ejemplo de flujo:
    - Mostrar un menú al usuario: "1. Agregar tarea, 2. Ver tareas, 3. Eliminar tarea, 4. Salir".
    - Pedir la opción.
    - Ejecutar la acción correspondiente.
    - Volver a mostrar el menú hasta que el usuario elija "Salir".