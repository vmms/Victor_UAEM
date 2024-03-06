# Motores a pasos
## Introducción

Los motores a pasos son dispositivos electromecánicos ampliamente utilizados en el campo de la robótica y la automatización debido a su capacidad para controlar el movimiento con precisión y repetibilidad. Estos motores son una herramienta fundamental en la construcción de sistemas que requieren posicionamiento preciso, como impresoras 3D, máquinas CNC, robots industriales y más.

En esta práctica, exploraremos los fundamentos de los motores a pasos y aprenderemos a controlar su movimiento utilizando la plataforma Arduino. A lo largo de esta experiencia, los estudiantes serán introducidos a los conceptos clave relacionados con los motores a pasos, incluyendo su funcionamiento, tipos, características y aplicaciones prácticas. Además, se les guiará en la configuración y programación de un motor a pasos utilizando Arduino, permitiéndoles interactuar directamente con el dispositivo y comprender cómo se pueden aplicar estos conocimientos en proyectos reales de robótica y automatización.

## Objetivos

Durante esta práctica, los estudiantes tendrán como objetivos:

- Comprender los principios de funcionamiento de los motores a pasos y sus aplicaciones en la robótica y la automatización.
- Identificar los componentes básicos de un motor a pasos y sus características fundamentales.
- Aprender los diferentes tipos de motores a pasos y sus ventajas y desventajas.
- Familiarizarse con los conceptos de pasos, pasos por revolución, torque y resolución de un motor a pasos.
- Conectar un motor a pasos a una placa Arduino siguiendo las pautas de cableado apropiadas.
- Programar un motor a pasos utilizando el lenguaje de programación de Arduino para controlar su movimiento en dirección y velocidad.
- Utilizar las bibliotecas y funciones de Arduino específicas para el control de motores a pasos.
- Realizar pruebas prácticas con el motor a pasos para observar su comportamiento y características de movimiento.
- Identificar y solucionar problemas comunes relacionados con la conexión y programación de motores a pasos.
- Reflexionar sobre las aplicaciones prácticas de los motores a pasos y cómo estos pueden ser utilizados en proyectos futuros de robótica y automatización.

## Materiales

- Arduino UNO [Tienda en linea](https://uelectronics.com/producto/arduino-uno-r3-smd/) o compatible, como sugerencia se puede usar la ESP32 [Tienda en linea](https://uelectronics.com/producto/esp32-38-pines-esp-wroom-32/).
<div style="display: inline-block;">
  <img src="./Images/Componentes/Arduino_Uno.jpg" alt="Diagrama de conexión" style="width: 150px;">
</div>
- Motor a pasos con driver  [Tienda en linea](https://uelectronics.com/producto/motor-a-pasos-con-controlador/).
- Cables tipo dupont M-M y M-H[Tienda en linea](https://uelectronics.com/producto/cables-dupont-extra-largos-30cm-hh-mh-mm/).
<div style="display: inline-block;">
  <img src="./Images/Componentes/cable_dupont.jpg" alt="Diagrama de conexión" style="width: 150px;">
</div>
- Computadora con el software Arduino IDE instalado
- Cable USB para conectar la placa Arduino a la computadora

## Procedimiento

1. Realizar la conexión física del motor a pasos al driver y a la placa Arduino como se muestra en la figura

<div style="width: 100%; height: 600px">
  <object data="./Images/P_pasos.pdf" type="application/pdf" style="width: 100%; height: 550px;"></object>
</div>

2. Escribe el siguiente código en Arduino para controlar el movimiento del motor a pasos.

```cpp
// Incluye la librería Stepper para controlar el motor a pasos
#include <Stepper.h>

// Definiciones de pines para el controlador ULN2003
const int in1Pin = 8;  // Conexión IN1 del driver ULN2003 al pin 8 de Arduino
const int in2Pin = 9;  // Conexión IN2 del driver ULN2003 al pin 9 de Arduino
const int in3Pin = 10; // Conexión IN3 del driver ULN2003 al pin 10 de Arduino
const int in4Pin = 11; // Conexión IN4 del driver ULN2003 al pin 11 de Arduino

// Define los parámetros del motor a pasos
const int stepsPerRevolution = 200; // Número de pasos por revolución del motor
Stepper myStepper(stepsPerRevolution, in1Pin, in2Pin, in3Pin, in4Pin); // Crea un objeto de tipo Stepper

void setup() {
  // Establece el número de pasos por segundo (velocidad)
  myStepper.setSpeed(60); // Ajusta la velocidad a 60 pasos por segundo
}

void loop() {
  // Gira el motor en el sentido horario
  myStepper.step(stepsPerRevolution); // Gira una revolución completa en sentido horario

  delay(1000); // Espera 1 segundo

  // Gira el motor en el sentido antihorario
  myStepper.step(-stepsPerRevolution); // Gira una revolución completa en sentido antihorario

  delay(1000); // Espera 1 segundo
}
```

3. Realizar pruebas prácticas con el motor a pasos para verificar su correcto funcionamiento y observar su comportamiento en diferentes configuraciones de velocidad y dirección.

## Análisis de resultados

Después de cargar el código para controlar un motor a pasos, realicemos el siguiente análisis

1. Movimiento del Motor:
- Observen el comportamiento del motor a pasos y verifiquen que responda al código cargado en Arduino.
- Verifiquen que el motor gire en los ángulos y direcciones especificadas en el programa.
- Asegúrense de que la comunicación entre la placa Arduino y el driver ULN2003 sea efectiva.
2. Precisión del Movimiento:
- Evalúen la precisión del movimiento del motor a pasos al observar si se mueve en incrementos discretos.
- Experimenten con diferentes valores de pasos por revolución y velocidades de rotación para comprender cómo afectan el comportamiento del motor.
- Comprendan cómo el código controla la posición y la velocidad del motor con precisión.
3. Consumo de Energía:
- Midan el consumo de energía del motor a pasos durante su funcionamiento utilizando un multímetro en modo de medición de corriente.
- Realicen ajustes en el código para cambiar la velocidad y la carga del motor.
- Observen cómo varía el consumo de energía y comprendan la importancia de optimizar el rendimiento energético en aplicaciones prácticas.
4. Aplicaciones Prácticas:
- Exploraren aplicaciones prácticas del control de motores a pasos en proyectos de robótica y automatización.
- Diseñen y desarrollen proyectos que utilicen el motor a pasos para tareas específicas, como la rotación de cámaras, el posicionamiento preciso de herramientas o el movimiento de dispositivos en sistemas de producción automatizados.
- Comprendan cómo el control de motores a pasos puede contribuir a la funcionalidad global de un proyecto y exploren las posibilidades de aplicación en diversos campos de la ingeniería y la automatización.

## Cuestionario

1. ¿Cuál es el propósito principal del control de motores a pasos en aplicaciones de robótica y automatización?
2. ¿Qué es un motor a pasos y cómo difiere de otros tipos de motores?
3. Describe brevemente cómo funciona el driver ULN2003 en relación con el control de motores a pasos.
4. ¿Por qué es importante la precisión del movimiento en aplicaciones prácticas de control de motores a pasos?
5. ¿Qué factores pueden influir en la precisión del movimiento de un motor a pasos y cómo se pueden mitigar?
6. ¿Qué medidas se pueden tomar para optimizar el consumo de energía de un motor a pasos durante su operación?
7. ¿Cuál es la función de la librería "Stepper.h" de Arduino en el control de motores a pasos?
8. ¿Cómo podrías aplicar los conocimientos adquiridos en esta práctica en proyectos futuros de ingeniería o robótica?