# Servomotores
## Introducción

En el campo de la robótica, los microcontroladores Arduino han transformado la manera en que los estudiantes y profesionales de la electrónica pueden interactuar con el mundo físico. Una de las aplicaciones fundamentales en la robótica es el control de servomotores, que permite la precisión en el movimiento de componentes mecánicos. En esta práctica nos enfocaremos en cómo controlar servomotores con Arduino y cómo este conocimiento puede ser aplicado en diversas áreas de la robótica, la automatización y otros campos relacionados.

El propósito esencial de esta práctica es proporcionar a los estudiantes una introducción práctica y tangible al control de servomotores utilizando la plataforma Arduino. A lo largo de esta actividad, los participantes comprenderán los conceptos fundamentales sobre cómo se conectan y controlan los servomotores, cómo interactuar con ellos mediante el código de Arduino y cómo esta habilidad puede ser transferida a proyectos de robótica y automatización en un contexto académico.

Durante la práctica los estudiantes serán guiados en la creación de un programa utilizando el lenguaje de programación de Arduino. Dicho programa permitirá controlar el movimiento de un servomotor a través de una variedad de ángulos. Durante esta etapa, se empleará la librería "Servo" de Arduino, diseñada para simplificar de manera significativa la interacción con los servomotores.

A lo largo de esta experiencia de aprendizaje, también se abordarán conceptos esenciales de electrónica y programación, tales como la lógica de control, la estructura de un programa en Arduino y la interpretación de los datos provenientes de sensores. Estos conocimientos brindarán a los estudiantes una base sólida para ampliar sus capacidades y abordar proyectos más avanzados en el campo de la robótica.

Al final de la práctica, los estudiantes habrán adquirido un entendimiento profundo de cómo controlar servomotores utilizando Arduino y cómo aplicar esta habilidad en diversos proyectos de robótica. Esta experiencia sentará las bases para futuras exploraciones en la intersección de la electrónica y la mecánica, fomentando la creatividad y habilidades en el mundo de la automatización y la robótica en un contexto universitario.

## Objetivo General
Familiarizar a los estudiantes con el control de servomotores utilizando la plataforma Arduino, en el contexto de la robótica universitaria. Los estudiantes adquirirán conocimientos esenciales sobre cómo conectar, programar y controlar servomotores, aplicando estos conceptos en proyectos de automatización y robótica.

Durante esta práctica, los estudiantes deberán lograr:

- Identificar los componentes básicos de un servomotor y cómo operan.
- Distinguir entre servomotores analógicos y digitales y sus aplicaciones.
- Conectar un servomotor a un Arduino siguiendo las pautas de cableado apropiadas.
- Crear un programa en el lenguaje de programación de Arduino para controlar el movimiento de un servomotor.
- Utilizar la librería "Servo" de Arduino para facilitar el control y la interacción con el servomotor.
- Implementar la lógica de control en el programa para permitir la selección y cambio de ángulos de rotación del servomotor.
- Realizar pruebas con diversos ángulos de rotación y observar la respuesta del servomotor.
- Reconocer y utilizar conceptos de electrónica, como la conexión de pines PWM, la fuente de alimentación y la comunicación entre componentes.
- Desarrollar habilidades de programación al escribir y modificar programas en el entorno de desarrollo de Arduino.
- Identificar posibles desafíos y problemas que puedan surgir durante el control del servomotor.
- Realizar ajustes en el código y la conexión para optimizar el rendimiento y la precisión del control.

## Materiales

- Arduino UNO [Tienda en linea](https://uelectronics.com/producto/arduino-uno-r3-smd/) o compatible, como sugerencia se puede usar la ESP32 [Tienda en linea](https://uelectronics.com/producto/esp32-38-pines-esp-wroom-32/).
<div style="display: inline-block;">
  <img src="./Images/Componentes/Arduino_Uno.jpg" alt="Diagrama de conexión" style="width: 150px;">
</div>
- Servomotor de 180 grados (MG995  <a href="https://uelectronics.com/producto/servomotor-mg995-mg996r-digital-engranes-de-metal/"> Tienda en linea </a> <img src="./Images/Componentes/servo_MG996.jpg" alt="Diagrama de conexión" style="width: 150px;"> o SG90)  <a href="https://uelectronics.com/producto/servomotor-sg90-rc-9g/"> Tienda en linea </a> <img src="./Images/Componentes/servo_SG90.jpg" alt="Diagrama de conexión" style="width: 150px;">
- Cables tipo dupont M-M y M-H[Tienda en linea](https://uelectronics.com/producto/cables-dupont-extra-largos-30cm-hh-mh-mm/).
<div style="display: inline-block;">
  <img src="./Images/Componentes/cable_dupont.jpg" alt="Diagrama de conexión" style="width: 150px;">
</div>
- Computadora con el software Arduino IDE instalado
- Cable USB para conectar la placa Arduino a la computadora

## Procedimiento

1. Realiza la conexión física:
- Conecta el cable de alimentación (rojo) del servomotor al pin 5V de la placa Arduino.
- Conecta el cable de tierra (negro o marrón) del servomotor al pin GND de la placa Arduino.
- Conecta el cable de señal (amarillo, naranja o blanco) del servomotor al pin digital 9 de la placa Arduino.

![Diagrama de conexion](./Images/P_servo.pdf)

2. Escribe el siguiente programa en Arduino para manipular un servo motor

Un servomotor es un dispositivo electromecánico diseñado para controlar y mover con precisión un eje a una posición específica. Funciona en base a la retroalimentación y la señal de control que recibe. Aquí tienes una explicación de cómo funciona un servomotor:

Un servomotor está compuesto por varios componentes esenciales, incluyendo un motor eléctrico, un conjunto de engranajes y un potenciómetro (sensor de posición) o un codificador (en modelos más avanzados). Estos elementos trabajan en conjunto para lograr el control preciso de la posición.

El servomotor se controla mediante una señal PWM (Modulación por Ancho de Pulso) proveniente de un microcontrolador como Arduino. Esta señal es una forma de onda cuadrada que se caracteriza por la duración del pulso y el período de repetición.

El ancho del pulso PWM determina la posición a la que el servomotor debe moverse. La mayoría de los servomotores tienen un rango de operación de 0 a 180 grados, lo que significa que pueden rotar en cualquier posición dentro de ese rango.

```cpp
#include <Servo.h>

Servo myservo;  // Crear un objeto servo

void setup() {
  myservo.attach(9);  // Asociar el objeto servo al pin 9
}

void loop() {
  // Rotar el servomotor a 0 grados
  myservo.write(0);
  delay(1000);

  // Rotar el servomotor a 90 grados
  myservo.write(90);
  delay(1000);

  // Rotar el servomotor a 180 grados
  myservo.write(180);
  delay(1000);
}
```

Al utilizar myservo.write(90);, estás indicando al Arduino que envíe una señal PWM al servomotor para que se posicione en el ángulo de 90 grados. Esto significa que el eje del servomotor se moverá a la posición específica que corresponde a un ángulo de 90 grados dentro de su rango de movimiento.

3. Carga el sketch del programa de Arduino en tu placa Arduino utilizando el Arduino IDE.

## Análisis de resultados

En esta práctica, llevamos a cabo el control de un servomotor utilizando la plataforma Arduino. A través de la implementación de código y conexiones físicas adecuadas, logramos manipular la posición angular del servomotor y observar su respuesta en tiempo real. A continuación, se presenta un análisis detallado de los resultados obtenidos durante la ejecución de la práctica:

1. Control Preciso del Servomotor. La práctica demostró la capacidad de Arduino para controlar con precisión la posición angular de un servomotor. Al ajustar el valor del ángulo en el código, pudimos lograr que el servomotor se moviera a posiciones específicas, como 0 grados, 90 grados y 180 grados. Esto es esencial para lograr movimientos controlados y mecánicos en aplicaciones robóticas.
2. Funcionamiento Confiable. Durante las pruebas, el servomotor respondió de manera confiable a las señales emitidas por el código de Arduino. Cada vez que se establecía un nuevo ángulo de rotación, el servomotor se movía suavemente y sin vibraciones excesivas. Esta consistencia es crucial para garantizar un comportamiento predecible en sistemas robóticos y de automatización.
3. Retroalimentación Visual. Mediante la observación directa del movimiento del servomotor, fue posible verificar el cambio en la posición angular en tiempo real. Esto proporcionó una retroalimentación visual inmediata, lo que permitió validar la precisión del control implementado y asegurarse de que el servomotor respondiera de acuerdo a lo esperado.
4. Adaptabilidad en Proyectos. La práctica demostró cómo el control de servomotores con Arduino puede ser adaptado en proyectos más amplios de robótica y automatización. La capacidad de controlar los movimientos de manera precisa es esencial para la construcción de brazos robóticos, mecanismos de dirección, sistemas de posicionamiento y otros componentes mecánicos.
5. Conocimiento Transferible. Los conceptos aprendidos en esta práctica, como el uso de la librería "Servo" de Arduino y las conexiones de cableado, son transferibles a aplicaciones más complejas. Los estudiantes pueden aplicar esta comprensión en proyectos futuros que involucren múltiples servomotores, interacciones con sensores y sistemas de control más avanzados.
6. Limitaciones y Mejoras Futuras. Aunque la práctica fue exitosa en controlar un servomotor básico, también es importante reconocer las limitaciones. Algunos servomotores pueden presentar fluctuaciones en su movimiento debido a la calidad del motor o la fuente de alimentación. Para proyectos más avanzados, podrían ser necesarias técnicas de calibración y ajuste para mejorar la precisión.

En resumen, la práctica de control de servomotor con Arduino brindó una sólida introducción a los fundamentos de la electrónica, la programación y la mecánica en el contexto de la robótica. Esta experiencia sentó las bases para futuras exploraciones en proyectos más complejos y permitió a los estudiantes comprender cómo el control preciso de los movimientos es esencial en la construcción de sistemas robóticos y automatizados.

## Cuestionario

El cuestionario que sigue está diseñado para evaluar tu comprensión de los conceptos clave relacionados con la práctica de control de servomotores con Arduino en el contexto de la robótica y la automatización. Las preguntas abarcan temas que van desde los fundamentos de los servomotores y la modulación por ancho de pulso (PWM), hasta la programación en Arduino y la aplicación de los conocimientos adquiridos en proyectos más avanzados.

A través de este cuestionario, tendrás la oportunidad de poner a prueba tus conocimientos y consolidar lo que has aprendido. Responde cada pregunta con precisión, aprovechando las lecciones y los ejemplos proporcionados en la práctica. Al finalizar el cuestionario, podrás evaluar tu nivel de comprensión y determinar áreas en las que podrías necesitar un mayor enfoque.

1. ¿Qué es un servomotor y cuál es su función en aplicaciones robóticas y de automatización?
2. Describe cómo funciona la señal PWM (Modulación por Ancho de Pulso) en el control de un servomotor.
3. ¿Cuál es la importancia de la librería "Servo.h" en la programación de Arduino para el control de servomotores?
4. ¿Cuál es el propósito del cable de señal en la conexión entre el servomotor y la placa Arduino?
5. ¿Cómo se asocia un objeto de la clase Servo a un pin específico de la placa Arduino?
6. Explica brevemente cómo se logra controlar la posición angular de un servomotor utilizando el método write().
7. ¿Por qué es crucial la precisión en el control de servomotores en proyectos de robótica y automatización?
8. ¿Qué precauciones se deben tomar al elegir una fuente de alimentación para un servomotor?
9. ¿En qué situaciones podría ser necesario ajustar o calibrar el movimiento de un servomotor?
10. Describe una aplicación específica en la que el control de servomotores sea esencial y cómo contribuye a la funcionalidad global del proyecto.
11. ¿Qué otros componentes mecánicos o sensores podrían integrarse con servomotores para crear sistemas más complejos?
12. ¿Cómo se pueden utilizar los conceptos aprendidos en esta práctica para abordar proyectos más avanzados en el campo de la robótica y la automatización?