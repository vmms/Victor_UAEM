# Parpadeo de un LED
## Introducción

Parpadeo de un LED es la primera actividad diseñada para familiarizar a los alumnos con el entorno de desarrollo de Arduino, la programación básica y los circuitos electrónicos. Esta práctica es el punto de partida ideal para aquellos que no tienen experiencia previa en electrónica ni programación, ya que proporcionará una introducción práctica y accesible a los conceptos fundamentales.

El objetivo principal de esta práctica es lograr que los alumnos comprendan el proceso de creación, carga y ejecución de un programa en Arduino, mientras controlan un componente básico como un LED. El LED servirá como un indicador visual que parpadeará a intervalos regulares, lo que permitirá a los alumnos experimentar directamente la interacción entre el programa y el circuito electrónico.

Durante esta práctica, los alumnos se familiarizarán con el entorno de desarrollo de Arduino, donde podrán escribir, compilar y cargar programas en el microcontrolador. Además, aprenderán a conectar componentes electrónicos básicos, como el LED, y utilizarán instrucciones de programación sencillas para controlar su encendido y apagado.

Es importante destacar que, aunque esta práctica pueda parecer simple, sienta las bases para el aprendizaje futuro en el campo de la robótica y la electrónica. Al comprender los conceptos básicos de programación y los circuitos electrónicos utilizando Arduino, los alumnos estarán preparados para abordar desafíos más complejos, como el control de motores, la lectura de sensores y el desarrollo de proyectos robóticos interactivos.

A medida que los alumnos avancen en la práctica y logren que el LED parpadee exitosamente, se fomentará la experimentación y la creatividad. Se les animará a realizar modificaciones en el código para alterar la velocidad y el patrón de parpadeo del LED, así como a explorar diferentes componentes electrónicos y sus posibles aplicaciones en futuros proyectos.

## Objetivo 
Familiarizar a los alumnos con el entorno de desarrollo de Arduino, la programación básica y los circuitos electrónicos utilizando un LED.

## Materiales
- Arduino UNO [Tienda en linea](https://uelectronics.com/producto/arduino-uno-r3-smd/) o compatible, como sugerencia se puede usar la ESP32 [Tienda en linea](https://uelectronics.com/producto/esp32-38-pines-esp-wroom-32/).
<div style="display: inline-block;">
  <img src="./Images/Componentes/Arduino_Uno.jpg" alt="Diagrama de conexión" style="width: 150px;">
</div>
- LED de 5mm cualquier color [Tienda en linea](https://uelectronics.com/producto/led-5mm-difuso-rojo-amarillo-verde-azul-blanco/).
<div style="display: inline-block;">
  <img src="./Images/Componentes/Leds_5mm.jpg" alt="Diagrama de conexión" style="width: 150px;">
</div>
- Resistencia de 220 ohmios [Tienda en linea](https://uelectronics.com/producto/resistencia-de-1-ohm-1m-ohms-1-4w/).
<div style="display: inline-block;">
  <img src="./Images/Componentes/Resistencias.jpg" alt="Diagrama de conexión" style="width: 150px;">
</div>
- Protoboard, se sugiere para esta práctica usar una de 400 puntos [Tienda en linea](https://uelectronics.com/producto/protoboard-400-pts/).
<div style="display: inline-block;">
  <img src="./Images/Componentes/Protoboard_400.jpg" alt="Diagrama de conexión" style="width: 150px;">
</div>
- Cables tipo dupont M-M y M-H[Tienda en linea](https://uelectronics.com/producto/cables-dupont-extra-largos-30cm-hh-mh-mm/).
<div style="display: inline-block;">
  <img src="./Images/Componentes/cable_dupont.jpg" alt="Diagrama de conexión" style="width: 150px;">
</div>
- Computadora con el software Arduino IDE instalado
- Cable USB para conectar la placa Arduino a la computadora

Opciones de compra en tiendas físicas
- [Orvasa Toluca Electrónica en general](https://maps.app.goo.gl/WfXovhGmsa6bvw3A8)
- Aelectronics 
  - [Toluca](https://maps.app.goo.gl/2dBnsdb4rg1Kh8qeA)
  - [Metepec](https://maps.app.goo.gl/QzJUeCJrsBDh4xaH8)
- [Mega Audio y Electrónica](https://maps.app.goo.gl/LrWqTBnz7GEuf38YA)
- [Electronica Gomi](https://maps.app.goo.gl/3WTRr7YPy6c65gF89)

## Procedimiento

1. Conecta el ánodo (patita más larga) del LED al pin digital 13 de Arduino.
2. Conecta el cátodo (patita más corta) del LED a una fila del protoboard.
3. Conecta una resistencia de 220 ohmios desde la fila donde está conectado el cátodo del LED a la fila de tierra (-) del protoboard.
![Diagrama de conexion](./Images/P1.pdf)
4. Conecta Arduino a tu computadora mediante un cable USB y abre el entorno de desarrollo Arduino.
5. Abre el IDE Arduino para que muestre un nuevo sketch. Identifica los siguientes botones para poder trabajar en el IDE.
![Diagrama de conexion](./Images/arduinoIDE.pdf)
- Compilar: La función de compilar en el IDE de Arduino verifica sintácticamente el código escrito en el sketch para detectar posibles errores de programación. Durante este proceso, el IDE convierte el código escrito en lenguaje de programación C/C++ en instrucciones binarias que el microcontrolador de la placa Arduino puede entender. Si no se encuentran errores, el código se compila con éxito y se genera un archivo binario listo para ser cargado en la placa.
- Cargar el programa: Una vez que el código se ha compilado correctamente, la función de carga (upload) del IDE de Arduino se encarga de transferir el archivo binario generado al microcontrolador de la placa Arduino. Esto se realiza a través del puerto USB conectado entre la computadora y la placa Arduino. Una vez que el programa se ha cargado en la placa, el microcontrolador comienza a ejecutar las instrucciones del programa, permitiendo que el proyecto se vuelva funcional.
- Seleccionar tarjeta: Antes de compilar y cargar el programa en la placa Arduino, es necesario seleccionar el tipo de placa que se está utilizando. Esta opción permite al IDE conocer las especificaciones de hardware de la placa, como el tipo de microcontrolador y la configuración de pines, para garantizar que el código se compile y cargue correctamente. El IDE ofrece una lista desplegable con una variedad de opciones de placas Arduino populares, como Arduino Uno, Arduino Nano, Arduino Mega, entre otras.
- Monitor serie: El monitor serie es una herramienta de depuración y visualización que permite a los usuarios comunicarse con la placa Arduino a través del puerto serial. Esta función muestra los datos enviados por la placa Arduino a la computadora y viceversa en tiempo real. Es útil para visualizar mensajes de depuración, resultados de sensores, o cualquier otra información que el programa Arduino envíe a través del puerto serial. El monitor serie también permite enviar comandos desde la computadora a la placa Arduino, lo que facilita la interacción y el control del proyecto en ejecución.

Tambien puedes encontrar estas secciones que son fundamentales y no deben de faltar en ningun proyecto de arduino:
- void setup() { }: En esta sección, se pueden realizar todas las configuraciones iniciales necesarias para el proyecto. Esto incluye la definición de los pines que se utilizarán y su configuración (entrada o salida), la inicialización de variables, la configuración de comunicaciones, como la velocidad del puerto serie, y cualquier otra configuración que sea necesaria antes de que comience la ejecución del programa principal.
- void loop() { }: Aquí es donde se coloca el programa principal del proyecto, que se ejecutará continuamente en un ciclo infinito mientras la placa Arduino esté encendida. En esta sección, se pueden incluir todas las acciones que se deben realizar de manera repetida, como leer datos de sensores, controlar actuadores, actualizar variables, enviar datos por el puerto serie, y cualquier otra tarea que se requiera para el funcionamiento del proyecto.
6. En el sketch, escribe el siguiente código:

```cpp
// Programa de ejemplo para encender y apagar un LED mediante arduino.

void setup() {
  pinMode(13, OUTPUT); // Establece el pin 13 como salida, que se utilizará para controlar un LED
}

void loop() {
  digitalWrite(13, HIGH); // Enciende el LED conectado al pin 13
  delay(1000); // Espera 1 segundo
  digitalWrite(13, LOW); // Apaga el LED conectado al pin 13
  delay(1000); // Espera 1 segundo
}

```
7. Selecciona la versión de la tarjeta arduino que utilzas.
8. Carga el código en Arduino y observa cómo el LED parpadea a intervalos de un segundo.

## Análisis de resultados

Observa el parpadeo del LED y cómo está controlado por el programa que has cargado en Arduino.

Experimenta modificando los valores de los parámetros delay() para acelerar o ralentizar el parpadeo del LED.

Realiza cambios en el código para modificar el patrón de encendido y apagado del LED.

## Cuestionario

Toma un tiempo para reflexionar sobre las preguntas y proporciona respuestas claras y fundamentadas para cada una de ellas. Puedes basarte en tu experiencia durante la realización de la Práctica 1: Parpadeo de un LED y en los conceptos aprendidos. Si es necesario, realiza investigaciones adicionales para ampliar tus conocimientos sobre los temas relacionados. Escribe tus respuestas de forma clara y concisa, asegurándote de proporcionar una explicación lógica y coherente.

Recuerda que el objetivo de responder a estas preguntas es profundizar en tu comprensión de los conceptos involucrados en la práctica y reflexionar sobre su aplicación práctica. No dudes en compartir tus ideas, sugerencias y cualquier dificultad que hayas enfrentado durante el proceso. ¡Exprésate de manera clara y detallada para demostrar tu comprensión del tema!

1. ¿Cuál es el propósito del LED en esta práctica? ¿Qué función cumple en el circuito electrónico?
2. ¿Qué ocurre cuando el pin digital está configurado como OUTPUT y se establece en HIGH? ¿Y cuando se establece en LOW?
3. ¿Cómo se logra el efecto de parpadeo del LED en el programa? ¿Qué instrucciones son responsables de encender y apagar el LED?
4. ¿Qué sucede si modificas el valor del parámetro delay() en el programa? ¿Cómo afecta al patrón de parpadeo del LED?
5. ¿Cuáles son las ventajas de utilizar un microcontrolador como Arduino para controlar un LED en comparación con un interruptor manual?
6. ¿Por qué es importante conectar una resistencia en serie con el LED en el circuito? ¿Cuál sería el efecto si no se utilizara la resistencia?
7. ¿Qué otros componentes electrónicos podrían controlarse utilizando Arduino y cómo se diferenciaría el código para controlarlos?
8. ¿Cómo podrías modificar el programa para que el LED parpadee a una frecuencia más rápida? ¿Y para que parpadee de forma intermitente en lugar de estar siempre encendido y apagado?
9. ¿Qué aplicaciones prácticas podrías imaginar para el control de LEDs mediante Arduino?
10. ¿Qué desafíos podrían surgir al trabajar con circuitos electrónicos y cómo podrían abordarse?