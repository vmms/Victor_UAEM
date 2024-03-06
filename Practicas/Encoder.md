# Uso de los Encoders
## Introducción

En esta práctica, exploraremos el control de motores de corriente continua (DC) utilizando un encoder de un canal y un puente H junto con Arduino. Los motores de corriente continua son ampliamente utilizados en una variedad de aplicaciones, desde robótica y automatización hasta proyectos de electrónica y mecatrónica. El uso de un encoder nos permitirá obtener información precisa sobre la posición y velocidad del motor, mientras que el puente H actuará como interfaz para controlar la dirección y velocidad de rotación.

El objetivo de esta práctica es brindarte la oportunidad de adquirir habilidades en el control de motores de corriente continua utilizando componentes comunes y ampliamente disponibles. A través de este ejercicio, aprenderás cómo utilizar un encoder de un canal para capturar información en tiempo real sobre la posición y velocidad del motor. Además, comprenderás cómo el puente H actúa como un puente de conexión entre el Arduino y el motor, permitiéndote controlar la dirección y velocidad de rotación con precisión.

Durante el desarrollo de esta práctica, exploraremos los aspectos teóricos y prácticos relacionados con el control de motores de corriente continua. Aprenderemos cómo realizar la conexión física adecuada entre el encoder, el puente H, el motor y el Arduino. Además, programaremos el Arduino para leer los datos del encoder y utilizar esta información para controlar de forma precisa la dirección y velocidad del motor a través del puente H.

Además del control de motores, esta práctica también te proporcionará conocimientos fundamentales sobre el uso de encoders y puentes H en el ámbito de la mecatrónica y la robótica. Estas habilidades y conocimientos son esenciales en aplicaciones que requieren un control preciso de motores y la retroalimentación de posición y velocidad.

¡Prepárate para sumergirte en el fascinante mundo del control de motores de corriente continua con encoders y puentes H utilizando Arduino! Al final de esta práctica, estarás preparado para enfrentar desafíos más complejos y emocionantes en el campo de la robótica, automatización y sistemas mecatrónicos.

## Objetivo

El objetivo de esta práctica es brindarte una comprensión profunda del control de motores de corriente continua (DC) mediante el uso de un encoder de un canal y un puente H, en combinación con Arduino. A lo largo de esta práctica, aprenderás a utilizar el encoder para obtener información precisa sobre la posición y velocidad del motor, y emplearás esta información para controlar con precisión la dirección y velocidad del motor mediante el puente H.

En particular, los objetivos específicos de esta práctica son los siguientes:

- Familiarizarse con el uso del encoder: Comprender el funcionamiento del encoder de un canal y cómo se utiliza para medir la posición y velocidad del motor. Aprenderás a realizar las conexiones físicas necesarias para obtener la retroalimentación del encoder y cómo interpretar los datos que proporciona.
- Adquirir habilidades de programación en Arduino: Aprender a utilizar el Arduino para leer y procesar los datos provenientes del encoder. Programarás el Arduino para interpretar los datos de posición y velocidad y utilizar esta información para controlar de manera precisa la dirección y velocidad del motor a través del puente H.
- Practicar el control del motor: Realizar pruebas y experimentos prácticos para controlar la dirección y velocidad del motor de manera efectiva. Aprenderás a ajustar y afinar los parámetros del control para lograr un movimiento suave y preciso del motor.
- Comprender la importancia de la retroalimentación: Apreciar el valor de la retroalimentación de posición y velocidad proporcionada por el encoder. Entender cómo esta información permite un control más preciso y una mayor capacidad de respuesta del motor en diversas aplicaciones.

Al alcanzar estos objetivos, obtendrás una sólida base de conocimientos y habilidades en el control de motores de corriente continua utilizando encoders y puentes H. Estarás preparado para aplicar estos conceptos en proyectos más avanzados de mecatrónica, robótica y automatización.

## Materiales necesarios

- Arduino UNO [Tienda en linea](https://uelectronics.com/producto/arduino-uno-r3-smd/) o compatible, como sugerencia se puede usar la ESP32 [Tienda en linea](https://uelectronics.com/producto/esp32-38-pines-esp-wroom-32/).
<div style="display: inline-block;">
  <img src="./Images/Componentes/Arduino_Uno.jpg" alt="Diagrama de conexión" style="width: 150px;">
</div>
- Motor de DC 9v con enconder  <a href="https://uelectronics.com/producto/gm-25-370-motor-con-encoder-12v-dc-140rpm-330rpm//"> Tienda en linea </a> <img src="./Images/Componentes/motor_encoder.jpg" alt="Diagrama de conexión" style="width: 150px;">. Como alternativa se puede armar un motor con encoder usando un motor DC con doble eje <a href="https://uelectronics.com/producto/motorreductor-amarillo-para-carrito/"> Tienda en linea </a> <img src="./Images/Componentes/motordc.jpg" alt="Diagrama de conexión" style="width: 150px;"> y un sensor de ranura <a href="https://uelectronics.com/producto/hc-020k-modulo-encoder-sensor-de-velocidad-b83609/"> Tienda en linea </a> <img src="./Images/Componentes/sensor_ranura.jpg" alt="Diagrama de conexión" style="width: 150px;">
- Puente H, puede ser el L298N <a href="https://uelectronics.com/producto/l298n-modulo-driver-motor-a-pasos/"> Tienda en linea </a> <img src="./Images/Componentes/L298.jpg" alt="Diagrama de conexión" style="width: 150px;"> o L293D <a href="https://uelectronics.com/producto/puente-h-l293-dip-16/">Tienda en linea</a> (Revisar la práctica de MotorDC para realizar la conexión) <img src="./Images/Componentes/L293.jpg" alt="Diagrama de conexión" style="width: 150px;">. No se recomienda la shield para motores.
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

Revisa cuales son los pines que permiten programar interrupciones en placa arduino. Por ejemplo, Arduino uno tiene dos interrupciones en los pines 2 y 3. En caso de que quieras programar más interrupciones deberas usar otra tarjeta.

### Diagrama de un motor con encoder de un canal
<div style="width: 100%; height: 600px">
  <object data="./Images/P_ch1.pdf" type="application/pdf" style="width: 100%; height: 470px;"></object>
</div>

### Diagrama de un motor con enconder de dos canales
<div style="width: 100%; height: 600px">
  <object data="./Images/P3.pdf" type="application/pdf" style="width: 100%; height: 450px;"></object>
</div>

2. Abre el software de Arduino IDE y crea un nuevo proyecto.
Configura los pines de entrada y salida necesarios para el encoder y el puente H de la siguiente manera:

```cpp
//Este código utiliza la interrupción del Arduino para detectar los cambios en el estado del canal A del encoder. La función updatePosition() se ejecuta cada vez que hay una transición en el estado del canal A, lo que permite contar los pulsos y determinar la posición actual del encoder usando la tecnica 2X.

// Definición de pines para el motor y el encoder
const int motorEnablePin = 9;
const int motorDirectionPin1 = 4;
const int motorDirectionPin2 = 5;
const int encoderPin = 2; // Pin para el encoder

// Variables del encoder
volatile long encoderPos = 0; // Debe ser "volatile" para la interrupción

void setup() {
  pinMode(motorEnablePin, OUTPUT);
  pinMode(motorDirectionPin1, OUTPUT);
  pinMode(motorDirectionPin2, OUTPUT);

  // Inicializa el motor
  analogWrite(motorEnablePin, 0);  // Desactiva el motor inicialmente
  digitalWrite(motorDirectionPin1, LOW);
  digitalWrite(motorDirectionPin2, LOW);

  // Configura la interrupción para el encoder
  attachInterrupt(digitalPinToInterrupt(encoderPin), updateEncoder, CHANGE);
}

void loop() {
  moveMotor(100, true, 1000); // Gira el motor en sentido horario a velocidad 100 durante 1000 pulsos
  delay(2000); // Espera 2 segundos
  moveMotor(50, false, 500); // Gira el motor en sentido anti-horario a velocidad 50 durante 500 pulsos
  delay(2000); // Espera 2 segundos
}

void moveMotor(int speed, bool clockwise, int pulses) {
  // Controla el sentido de giro del motor
  if (clockwise) {
    digitalWrite(motorDirectionPin1, HIGH);
    digitalWrite(motorDirectionPin2, LOW);
  } else {
    digitalWrite(motorDirectionPin1, LOW);
    digitalWrite(motorDirectionPin2, HIGH);
  }

  // Espera hasta alcanzar el número deseado de pulsos
  while (abs(encoderPos) < pulses) {
    analogWrite(motorEnablePin, speed); // Controla la velocidad del motor
  }

  // Detiene el motor
  digitalWrite(motorDirectionPin1, LOW);
  digitalWrite(motorDirectionPin2, LOW);
  analogWrite(motorEnablePin, 0);
}

void updateEncoder() {
  encoderPos++;
  // Serial.println(encoderPos); // Descomenta esta linea para ver en la terminal los pulsos que da el encoder.
}
```

```cpp
//Este código utiliza las interrupciones del Arduino para detectar los cambios en el estado de los canales A y B del encoder. La función updatePosition() se ejecuta cada vez que hay una transición en el estado del canal A pero tambien cuando hay un cambio en el canal B. Lo que permite contar los pulsos y determinar la posición actual del encoder usando la tecnica 4X.

// Definición de pines para el motor y el encoder
const int motorEnablePin = 9;
const int motorDirectionPin1 = 4;
const int motorDirectionPin2 = 5;
const int encoderPinA = 2; // Canal A del encoder
const int encoderPinB = 3; // Canal B del encoder

// Variables del encoder
volatile long encoderPos = 0; // Debe ser "volatile" para la interrupción

void setup() {
  pinMode(motorEnablePin, OUTPUT);
  pinMode(motorDirectionPin1, OUTPUT);
  pinMode(motorDirectionPin2, OUTPUT);

  // Inicializa el motor
  analogWrite(motorEnablePin, 0);  // Desactiva el motor inicialmente
  digitalWrite(motorDirectionPin1, LOW);
  digitalWrite(motorDirectionPin2, LOW);

  // Configura las interrupciones para los dos canales del encoder (CHANGE)
  attachInterrupt(digitalPinToInterrupt(encoderPinA), updateEncoder, CHANGE);
  attachInterrupt(digitalPinToInterrupt(encoderPinB), updateEncoder, CHANGE);
}

void loop() {
  moveMotor(100, true, 1000); // Gira el motor en sentido horario a velocidad 100 durante 1000 pulsos
  delay(2000); // Espera 2 segundos
  moveMotor(50, false, 500); // Gira el motor en sentido anti-horario a velocidad 50 durante 500 pulsos
  delay(2000); // Espera 2 segundos
}

void moveMotor(int speed, bool clockwise, int pulses) {
  // Controla el sentido de giro del motor
  if (clockwise) {
    digitalWrite(motorDirectionPin1, HIGH);
    digitalWrite(motorDirectionPin2, LOW);
  } else {
    digitalWrite(motorDirectionPin1, LOW);
    digitalWrite(motorDirectionPin2, HIGH);
  }

  // Espera hasta alcanzar el número deseado de pulsos
  while (abs(encoderPos) < pulses) {
    analogWrite(motorEnablePin, speed); // Controla la velocidad del motor
  }

  // Detiene el motor
  digitalWrite(motorDirectionPin1, LOW);
  digitalWrite(motorDirectionPin2, LOW);
  analogWrite(motorEnablePin, 0);
}

void updateEncoder() {
  encoderPos++;
  // Serial.println(encoderPos); // Descomenta esta linea para ver en la terminal los pulsos que da el encoder.
}

```

3. Carga el código en el Arduino y asegúrate de que todas las conexiones sean las correctas. Utiliza el código correcto de acuerdo a los canales que tiene tu encoder.
4. Verifica el movimiento y control del motor, observando si responde correctamente a los cambios de dirección y velocidad.
5. Realiza ajustes en el código según sea necesario para lograr el control deseado del motor.

### Análisis de resultados

Durante la práctica, analiza los resultados obtenidos en términos de precisión del control del motor, respuesta del motor a los cambios de dirección y velocidad, y la capacidad del encoder para proporcionar datos de posición y velocidad precisos. Evalúa también la estabilidad y suavidad del movimiento del motor, y ajusta el código si es necesario para mejorar estos aspectos.

1. Verificación del control de velocidad y sentido de giro: Comprueba que el motor responde adecuadamente a los comandos de velocidad y sentido de giro. Observa que al aumentar la velocidad, el motor gira más rápido, mientras que al disminuir la velocidad, el motor reduce su velocidad de giro. Además, verifica que el motor giraba en el sentido deseado según la configuración del sentido de giro.
2. Evaluación del control de posición: Realiza una serie de pruebas para evaluar la capacidad del sistema de control para controlar la posición del motor utilizando la retroalimentación del encoder. Verifica que el motor se mueva la cantidad de pulsos especificada y se detiene una vez alcanzado el número de pulsos objetivo.
3. Estabilidad del sistema: Observa el comportamiento del motor y verifica que el sistema de control era estable. ¿Se observan oscilaciones excesivas o inestabilidades en el movimiento del motor?.
Realiza pruebas con diferentes combinaciones de velocidad y dirección de giro para asegurarse de que el sistema mantenía una respuesta estable y consistente en todas las condiciones.
4. Análisis de error de posición: Compara las posiciones deseadas con las posiciones reales del motor para evaluar la precisión del control.
Determina que existe un cierto margen de error debido a posibles imperfecciones mecánicas o de lectura del encoder. Calcula el error promedio y analiza si estaba dentro de un rango aceptable para la aplicación específica.

### Cuestionario

Responde las siguientes preguntas relacionadas con la práctica:

1. Describe brevemente el objetivo de esta práctica y cómo se logra mediante el uso del motor de DC y el encoder.
2. ¿Cuál es la función del encoder en este sistema de control? Explica cómo se utiliza la retroalimentación de posición proporcionada por el encoder para controlar el motor.
3. Describe paso a paso el procedimiento que seguiste para realizar la conexión del motor de DC, el encoder y el Arduino. Incluye detalles sobre los pines utilizados y cualquier consideración adicional.
4. ¿Cómo se obtienen los datos de posición y velocidad del motor utilizando el encoder?
5. ¿Cuál es la importancia de la interrupción en la lectura del encoder Explica cómo se implementa la interrupción y por qué es necesaria para contar los pulsos del encoder.
6. Comenta sobre la estabilidad del sistema de control. ¿Notaste alguna oscilación o inestabilidad en el movimiento del motor? Si es así, ¿a qué crees que se deba y cómo podría mejorarse?
7. ¿Cuál es la importancia de la calibración y ajuste del código en el control del motor?
8. ¿Qué mejoras o ajustes podrías proponer para este sistema de control? ¿Cómo podrías aumentar la precisión del control de posición o la respuesta del motor en general?
9. ¿Consideras que el uso del encoder proporciona una retroalimentación precisa de la posición del motor? ¿Por qué?
10. ¿Cómo podrías aplicar los conceptos y habilidades adquiridos en esta práctica a otros proyectos o situaciones del mundo real?
