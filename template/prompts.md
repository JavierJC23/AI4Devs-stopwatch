Toma el rol de un desarrollador Senior que tiene la tarea de crear una p�gina web con un cronometro y una cuenta regresiva, es necesario poder escoger entre ambas opciones y que se despliegue el tablero de cada opci�n seg�n sea seleccionada.

Para seleccionar cada opci�n, se requiere de dos botones grandes en el centro de la pantalla que indiquen la opci�n de cronometro y la cuenta regresiva y que cada uno te muestre el tablero debido. Esto ser� lo primero que se vea cuando se inicie la pagina.

#Cronometro

Cuando se seleccione la opci�n de cronometro debe mostrar el tablero con los d�gitos empezando en cero y dos botones, uno de Comenzar y otro de Limpiar.
La l�gica de los botones ser� la siguiente:
El botones de empezar una vez sea clicado comenzara a correr el tiempo como un reloj normal, contando segundos, minutos y horas, una vez clicado tambi�n cambiara el texto del bot�n a Pausar y al volverlo a presionar se debe congelar el tiempo que lleva el cronometro y el bot�n cambiara su texto a Reanudar, y al ser clicado debe volver a avanzar el contador donde se quedo, esto debe poder repetirse indefinidamente.

El bot�n de limpiar debe tener la funcionalidad de limpiar el tiempo que ha transcurrido independientemente del estado del bot�n de Comenzar/Pausar y una vez clicado debe restablecer el valor del bot�n Comenzar/Pausar a Comenzar ya se si se encuentra en el estado de Comenzar, Reanudar o Pausar

#Cuenta regresiva

Al momento que se seleccione la cuenta regresiva debe mostrar en pantalla los d�gitos en cero de la hora, minutos y segundos, adem�s de los botones con todos los d�gitos para poder seleccionarlos y as� ir formando el tiempo que queremos establecer en la cuenta regresiva, al igual que dos botones mas, uno con la etiqueta de Establecer y otro con la de limpiar, los cuales tendr�n la l�gica de establecer el tiempo que determino el usuario con los d�gitos y el de limpiar tendr� la l�gica de restablecer a cero lo que el usuario haya puesto en la cuenta regresiva.
Para agregar el tiempo el usuario seleccionara digito por digito y tomaremos como ejemplo... si el usuario requiere 10 segundos en su cuenta regresiva tendr� que dar click al bot�n 1 y luego al bot�n 0 y el resultado de la cuenta regresiva se actualizara conforme se vaya clicando cada bot�n y al final tendremos el resultado de 00:00:10.
Una vez el usuario este seguro dar� click en el bot�n de establecer el cual comenzara la cuenta regresiva y cambiara los botones a uno que tenga la opci�n de Comenzar/Reanudar o pausar cuando este corriendo la cuenta atr�s y funcionara como en el cronometro, otro que sea de Limpiar el cual reiniciara el temporizador a la cantidad establecida por el usuario pero sin iniciar la cuenta regresiva, esta solo iniciara cuando el usuario de click en el bot�n de Comenzar, tambi�n agrega otro bot�n para volver a colocar los d�gitos de la cuenta atr�s por si el usuario quiere colocar otro tiempo en la cuenta regresiva.

Cuando la cuenta regresiva llegue a cero desaparecer� el bot�n de Comenzar/Pausar y solo quedara el de Limpiar y tambi�n har� un efecto de parpadeo el contenedor de la cuenta regresiva y para detenerlo es necesario dar click en el bot�n de Limpiar.

Tanto el cronometro como la cuenta regresiva, deben tener un bot�n para regresar a la pagina inicial donde se muestran ambas opciones.

Agrega comentarios en el c�digo que indique que hace cada parte.

Requiero el c�digo en 3 archivos, uno donde se indique el html, otro para el javascript y otro para el css.

El estilo de la pagina debe ser formal, educativa, con colores serios y las letras y cantidades muy visibles