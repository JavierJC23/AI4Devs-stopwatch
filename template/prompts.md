Toma el rol de un desarrollador Senior que tiene la tarea de crear una página web con un cronometro y una cuenta regresiva, es necesario poder escoger entre ambas opciones y que se despliegue el tablero de cada opción según sea seleccionada.

Para seleccionar cada opción, se requiere de dos botones grandes en el centro de la pantalla que indiquen la opción de cronometro y la cuenta regresiva y que cada uno te muestre el tablero debido. Esto será lo primero que se vea cuando se inicie la pagina.

#Cronometro

Cuando se seleccione la opción de cronometro debe mostrar el tablero con los dígitos empezando en cero y dos botones, uno de Comenzar y otro de Limpiar.
La lógica de los botones será la siguiente:
El botones de empezar una vez sea clicado comenzara a correr el tiempo como un reloj normal, contando segundos, minutos y horas, una vez clicado también cambiara el texto del botón a Pausar y al volverlo a presionar se debe congelar el tiempo que lleva el cronometro y el botón cambiara su texto a Reanudar, y al ser clicado debe volver a avanzar el contador donde se quedo, esto debe poder repetirse indefinidamente.

El botón de limpiar debe tener la funcionalidad de limpiar el tiempo que ha transcurrido independientemente del estado del botón de Comenzar/Pausar y una vez clicado debe restablecer el valor del botón Comenzar/Pausar a Comenzar ya se si se encuentra en el estado de Comenzar, Reanudar o Pausar

#Cuenta regresiva

Al momento que se seleccione la cuenta regresiva debe mostrar en pantalla los dígitos en cero de la hora, minutos y segundos, además de los botones con todos los dígitos para poder seleccionarlos y así ir formando el tiempo que queremos establecer en la cuenta regresiva, al igual que dos botones mas, uno con la etiqueta de Establecer y otro con la de limpiar, los cuales tendrán la lógica de establecer el tiempo que determino el usuario con los dígitos y el de limpiar tendrá la lógica de restablecer a cero lo que el usuario haya puesto en la cuenta regresiva.
Para agregar el tiempo el usuario seleccionara digito por digito y tomaremos como ejemplo... si el usuario requiere 10 segundos en su cuenta regresiva tendrá que dar click al botón 1 y luego al botón 0 y el resultado de la cuenta regresiva se actualizara conforme se vaya clicando cada botón y al final tendremos el resultado de 00:00:10.
Una vez el usuario este seguro dará click en el botón de establecer el cual comenzara la cuenta regresiva y cambiara los botones a uno que tenga la opción de Comenzar/Reanudar o pausar cuando este corriendo la cuenta atrás y funcionara como en el cronometro, otro que sea de Limpiar el cual reiniciara el temporizador a la cantidad establecida por el usuario pero sin iniciar la cuenta regresiva, esta solo iniciara cuando el usuario de click en el botón de Comenzar, también agrega otro botón para volver a colocar los dígitos de la cuenta atrás por si el usuario quiere colocar otro tiempo en la cuenta regresiva.

Cuando la cuenta regresiva llegue a cero desaparecerá el botón de Comenzar/Pausar y solo quedara el de Limpiar y también hará un efecto de parpadeo el contenedor de la cuenta regresiva y para detenerlo es necesario dar click en el botón de Limpiar.

Tanto el cronometro como la cuenta regresiva, deben tener un botón para regresar a la pagina inicial donde se muestran ambas opciones.

Agrega comentarios en el código que indique que hace cada parte.

Requiero el código en 3 archivos, uno donde se indique el html, otro para el javascript y otro para el css.

El estilo de la pagina debe ser formal, educativa, con colores serios y las letras y cantidades muy visibles