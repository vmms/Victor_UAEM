# Motor DC
## Introducción

La práctica que vamos a realizar tiene como objetivo el control de un motor de corriente continua (DC) utilizando un puente H y Arduino. El puente H es un circuito que nos permite controlar la dirección y velocidad de un motor DC, lo cual resulta fundamental en diversas aplicaciones de robótica y automatización.

En esta práctica, utilizaremos un Arduino como controlador para enviar las señales de control al puente H y controlar así el motor. El Arduino actuará como un puente entre el mundo digital y el mundo físico, permitiéndonos programar y controlar el movimiento del motor con facilidad.

A lo largo de la práctica, aprenderemos cómo conectar y configurar el puente H con Arduino, establecer la dirección de giro del motor y controlar su velocidad utilizando la modulación por ancho de pulso (PWM). Además, exploraremos los conceptos básicos del control de motores de DC y su importancia en proyectos de robótica y automatización.

Al finalizar esta práctica, tendrás los conocimientos necesarios para controlar un motor de DC mediante el uso de un puente H y Arduino, lo cual te abrirá las puertas a un mundo de posibilidades en el ámbito de la robótica y la automatización.

## Objetivo 

El objetivo de esta práctica es familiarizarnos con el control de un motor de corriente continua (DC) utilizando un puente H y Arduino. A través de esta práctica, aprenderemos a realizar la conexión física entre el motor, el puente H y Arduino, así como a programar el Arduino para enviar las señales de control adecuadas al puente H.

Al finalizar la práctica, se espera lograr los siguientes objetivos:

- Conocer los componentes y su función: Comprender la función y el papel de cada componente utilizado en el control de un motor de DC, incluyendo el motor mismo, el puente H y Arduino.
- Conexión física adecuada: Aprender a realizar la conexión física correcta entre el motor de DC, el puente H y Arduino, siguiendo el esquema de conexión proporcionado.
- Control de la dirección de giro: Ser capaz de controlar la dirección de giro del motor mediante el cambio adecuado de los pines de control del puente H utilizando Arduino.
- Control de la velocidad del motor: Utilizar la técnica de modulación por ancho de pulso (PWM) para controlar la velocidad del motor, ajustando el ciclo de trabajo de la señal PWM generada por Arduino.
- Aplicación práctica: Comprender la importancia y aplicaciones prácticas del control de motores de DC en proyectos de robótica, automatización y control de movimiento.

Al alcanzar estos objetivos, adquiriremos los conocimientos y habilidades necesarios para controlar eficientemente un motor de DC utilizando un puente H y Arduino, lo cual nos brinda una base sólida para futuros proyectos y exploraciones en el campo de la robótica y la automatización.

## Materiales

- Arduino UNO [Tienda en linea](https://uelectronics.com/producto/arduino-uno-r3-smd/) o compatible, como sugerencia se puede usar la ESP32 [Tienda en linea](https://uelectronics.com/producto/esp32-38-pines-esp-wroom-32/).
<div style="display: inline-block;">
  <img src="./Images/Componentes/Arduino_Uno.jpg" alt="Diagrama de conexión" style="width: 150px;">
</div>
- Motor de DC 9v [Tienda en linea](https://uelectronics.com/producto/motorreductor-amarillo-para-carrito/).
<div style="display: inline-block;">
  <img src="./Images/Componentes/motordc.jpg" alt="Diagrama de conexión" style="width: 150px;">
</div>
- Puente H, puede ser el <a href="https://uelectronics.com/producto/puente-h-l293-dip-16/">L293D</a> <img src="./Images/Componentes/L293.jpg" alt="Diagrama de conexión" style="width: 150px;"> o <a href="https://uelectronics.com/producto/l298n-modulo-driver-motor-a-pasos/">L298N</a> <img src="./Images/Componentes/L298.jpg" alt="Diagrama de conexión" style="width: 150px;">. No se recomienda la shield para motores.
- Batería o fuente de alimentación externa de 9v [Tienda en linea](https://uelectronics.com/producto/fuente-de-alimentacion-9v-1a-con-plug/).
<div style="display: inline-block;">
  <img src="./Images/Componentes/Fuente_9v.jpg" alt="Diagrama de conexión" style="width: 150px;">
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

1. Realiza la conexión física:

### Conexión para driver L923D
<div style="width: 100%; height: 600px">
  <object data="./Images/P2_293.pdf" type="application/pdf" style="width: 100%; height: 550px;"></object>
</div>

### Conexión para driver L298N
<div style="width: 100%; height: 600px">
  <object data="./Images/P2_298.pdf" type="application/pdf" style="width: 100%; height: 600px;"></object>
</div>

2. Carga el código en el Arduino, Sin importar cual es el driver que usaste puedes cargar el siguiente código:

```cpp
// Definición de pines
const int IN1 = 9;
const int IN2 = 10;
const int ENA = 11;

void setup() {
  // Configuración de pines como salida
  pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT);
  pinMode(ENA, OUTPUT);
}

void loop() {
  // Establecer dirección del motor
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  
  // Control de velocidad del motor utilizando la modulación por ancho de pulso (PWM)
  analogWrite(ENA, 200);  // Velocidad de 0 a 255
  
  // Esperar 2 segundos
  delay(2000);
  
  // Detener el motor
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, LOW);
  analogWrite(ENA, 0);
  
  // Esperar 2 segundos
  delay(2000);
}
```

3. Enciende el sistema: Conecta la fuente de alimentación y asegúrate de que todo esté correctamente conectado. Asegúrate de seguir las precauciones de seguridad adecuadas, como evitar el contacto directo con los terminales de alta tensión y utilizar una fuente de alimentación compatible con el motor.
4. Observa el movimiento del motor: Una vez que el Arduino esté encendido y el código esté cargado, el motor de DC comenzará a moverse en la dirección y a la velocidad establecidas en el código. Observa el movimiento del motor y asegúrate de que se comporte según lo esperado.
5. Experimenta con diferentes configuraciones: Una vez que el motor esté en funcionamiento, puedes experimentar con diferentes configuraciones en el código, como cambiar la dirección de giro, ajustar la velocidad del motor modificando los valores en la función analogWrite(), y explorar otras funcionalidades del puente H y Arduino para controlar el motor de DC de diferentes maneras.

## Análisis de resultados

Una vez completada la práctica de control de un motor de corriente continua (DC) utilizando un puente H y Arduino, es importante realizar un análisis de los resultados obtenidos. En esta sección, evaluaremos el funcionamiento del motor y la precisión del control logrado mediante el uso del puente H y Arduino.

1. Observación del movimiento del motor: Durante la ejecución de la práctica, observa detenidamente el movimiento del motor. Verifica si el motor gira en la dirección esperada según la configuración establecida en el código. Asegúrate de que el motor responda adecuadamente a las señales de control enviadas desde Arduino.
2. Verificación de la velocidad del motor: Evalúa la velocidad del motor ajustada mediante la modulación por ancho de pulso (PWM). Compara la velocidad establecida en el código con la velocidad real del motor en funcionamiento. Si es necesario, realiza mediciones adicionales para confirmar la precisión del control de velocidad logrado.
3. Evaluación de la estabilidad y suavidad del movimiento: Observa si el motor de DC presenta un movimiento estable y suave, sin vibraciones excesivas o comportamientos inesperados. Asegúrate de que el motor arranque y se detenga de manera suave, sin golpes bruscos o cambios repentinos en la velocidad.
4. Exploración de diferentes configuraciones: Experimenta con diferentes configuraciones en el código para modificar la dirección de giro y la velocidad del motor. Observa cómo estas configuraciones afectan el comportamiento del motor y evalúa la capacidad de control del sistema.
5. Precisión del control y ajustes necesarios: Evalúa la precisión del control logrado con el puente H y Arduino. Si notas desviaciones significativas en el movimiento o en la velocidad del motor, identifica posibles causas y realiza ajustes en el código, las conexiones o la configuración del puente H para mejorar la precisión del control.

## Cuestionario

Este cuestionario tiene como objetivo evaluar tus conocimientos adquiridos en la práctica de control de un motor de corriente continua (DC) utilizando un puente H y Arduino. Durante la práctica, exploraste los conceptos fundamentales de conexión, programación y control de motores de DC, utilizando un puente H como interfaz entre el Arduino y el motor.

El cuestionario consta de una serie de preguntas diseñadas para evaluar tu comprensión sobre los componentes y su función, el control de dirección y velocidad del motor, la configuración de pines en Arduino y las precauciones de seguridad necesarias al trabajar con motores de DC y puente H.

Asegúrate de leer cada pregunta detenidamente y responder de manera clara y concisa, utilizando tus conocimientos y experiencia obtenidos durante la práctica. Recuerda que este cuestionario tiene como objetivo reforzar tus aprendizajes y ayudarte a evaluar tu comprensión sobre el tema.

1. ¿Cuál es el propósito de utilizar un puente H en el control de un motor de corriente continua (DC)?
2. ¿Cuáles son los componentes necesarios para realizar la conexión física del motor de DC, el puente H y Arduino?
3. ¿Cuál es la función de los pines IN1, IN2 y ENA en el puente H?
4. ¿Cómo se establece la dirección de giro del motor utilizando el puente H y Arduino?
5. ¿Qué es la modulación por ancho de pulso (PWM) y cómo se utiliza para controlar la velocidad del motor?
6. ¿Qué precauciones de seguridad se deben tener en cuenta al trabajar con motores de DC y puente H?
7. ¿Cuál es la importancia del código pinMode() en la configuración de pines en Arduino?
8. ¿Cómo se configura y se carga el código en el Arduino utilizando el Arduino IDE?
9. ¿Qué observaciones se deben realizar durante la ejecución de la práctica para verificar el correcto funcionamiento del motor?
10. ¿Qué mejoras o ajustes se podrían realizar en el sistema de control del motor de DC para obtener un control más preciso o ampliar sus funcionalidades?