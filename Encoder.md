### Uso de los Encoders
### Introducción

En esta práctica, exploraremos el control de motores de corriente continua (DC) utilizando un encoder de un canal y un puente H junto con Arduino. Los motores de corriente continua son ampliamente utilizados en una variedad de aplicaciones, desde robótica y automatización hasta proyectos de electrónica y mecatrónica. El uso de un encoder nos permitirá obtener información precisa sobre la posición y velocidad del motor, mientras que el puente H actuará como interfaz para controlar la dirección y velocidad de rotación.

El objetivo de esta práctica es brindarte la oportunidad de adquirir habilidades en el control de motores de corriente continua utilizando componentes comunes y ampliamente disponibles. A través de este ejercicio, aprenderás cómo utilizar un encoder de un canal para capturar información en tiempo real sobre la posición y velocidad del motor. Además, comprenderás cómo el puente H actúa como un puente de conexión entre el Arduino y el motor, permitiéndote controlar la dirección y velocidad de rotación con precisión.

Durante el desarrollo de esta práctica, exploraremos los aspectos teóricos y prácticos relacionados con el control de motores de corriente continua. Aprenderemos cómo realizar la conexión física adecuada entre el encoder, el puente H, el motor y el Arduino. Además, programaremos el Arduino para leer los datos del encoder y utilizar esta información para controlar de forma precisa la dirección y velocidad del motor a través del puente H.

Además del control de motores, esta práctica también te proporcionará conocimientos fundamentales sobre el uso de encoders y puentes H en el ámbito de la mecatrónica y la robótica. Estas habilidades y conocimientos son esenciales en aplicaciones que requieren un control preciso de motores y la retroalimentación de posición y velocidad.

¡Prepárate para sumergirte en el fascinante mundo del control de motores de corriente continua con encoders y puentes H utilizando Arduino! Al final de esta práctica, estarás preparado para enfrentar desafíos más complejos y emocionantes en el campo de la robótica, automatización y sistemas mecatrónicos.

### Objetivo

El objetivo de esta práctica es brindarte una comprensión profunda del control de motores de corriente continua (DC) mediante el uso de un encoder de un canal y un puente H, en combinación con Arduino. A lo largo de esta práctica, aprenderás a utilizar el encoder para obtener información precisa sobre la posición y velocidad del motor, y emplearás esta información para controlar con precisión la dirección y velocidad del motor mediante el puente H.

En particular, los objetivos específicos de esta práctica son los siguientes:

1. Familiarizarse con el uso del encoder: Comprender el funcionamiento del encoder de un canal y cómo se utiliza para medir la posición y velocidad del motor. Aprenderás a realizar las conexiones físicas necesarias para obtener la retroalimentación del encoder y cómo interpretar los datos que proporciona.
2. Adquirir habilidades de programación en Arduino: Aprender a utilizar el Arduino para leer y procesar los datos provenientes del encoder. Programarás el Arduino para interpretar los datos de posición y velocidad y utilizar esta información para controlar de manera precisa la dirección y velocidad del motor a través del puente H.
3. Practicar el control del motor: Realizar pruebas y experimentos prácticos para controlar la dirección y velocidad del motor de manera efectiva. Aprenderás a ajustar y afinar los parámetros del control para lograr un movimiento suave y preciso del motor.
4. Comprender la importancia de la retroalimentación: Apreciar el valor de la retroalimentación de posición y velocidad proporcionada por el encoder. Entender cómo esta información permite un control más preciso y una mayor capacidad de respuesta del motor en diversas aplicaciones.

Al alcanzar estos objetivos, obtendrás una sólida base de conocimientos y habilidades en el control de motores de corriente continua utilizando encoders y puentes H. Estarás preparado para aplicar estos conceptos en proyectos más avanzados de mecatrónica, robótica y automatización.

### Materiales necesarios:

- Arduino UNO o compatible
- Motor de corriente continua (DC)
- Encoder de un canal
- Puente H (por ejemplo, L298N)
- Batería o fuente de alimentación para el motor
- Cables de conexión

### Procedimiento

1. Realiza la siguiente conexión física: 
Conecta el pin de salida del encoder a un pin con interrupción del Arduino (por ejemplo, canal A del encoder al Pin 2 del Arduino).
2. Abre el software de Arduino IDE y crea un nuevo proyecto.
Configura los pines de entrada y salida necesarios para el encoder y el puente H de la siguiente manera:
```cpp
//Este código utiliza la interrupción del Arduino para detectar los cambios en el estado del canal A del encoder. La función updatePosition() se ejecuta cada vez que hay una transición en el estado del canal A, lo que permite contar los pulsos y determinar la posición actual del encoder.

// Definición de pines
const int motorPin1 = 4;        // Pin de control del motor - dirección 1
const int motorPin2 = 5;        // Pin de control del motor - dirección 2
const int speedPin = 9;         // Pin de salida PWM para controlar la velocidad del motor
const int encoderPin = 2;       // Pin de lectura del encoder (canal A)

// Variables
volatile int contador = 0;      // Variable para almacenar la posición del encoder

void setup() {
  // Configuración de pines
  pinMode(motorPin1, OUTPUT);
  pinMode(motorPin2, OUTPUT);
  pinMode(encoderPin, INPUT_PULLUP);
  pinMode(speedPin, OUTPUT);

  // Interrupciones para lectura del encoder
  attachInterrupt(digitalPinToInterrupt(encoderPin), updatePosition, CHANGE); // CHANGE, RISING, FALLING, LOW y HIGH
}

void loop() {
  // Ejemplo de uso de la función moverMotor
  moverMotor(255, 1, 1000);    // Mover el motor a máxima velocidad en sentido horario durante 1000 pulsos
  delay(1000);                 // Esperar un segundo
  moverMotor(128, 0, 500);     // Mover el motor a velocidad media en sentido antihorario durante 500 pulsos
  delay(1000);                 // Esperar un segundo
}

void moverMotor(int velocidad, bool sentidoGiro, int pulsos) {
  // Establecer dirección de giro
  digitalWrite(motorPin1, sentidoGiro);
  digitalWrite(motorPin2, !sentidoGiro);
  
  // Control del motor según los pulsos especificados
  int contador = 0;
  while (position < pulsos) {
    // Controlar la velocidad utilizando la señal PWM (modulación por ancho de pulso)
    analogWrite(speedPin, velocidad);
  }
  
  // Detener el motor
  digitalWrite(motorPin1, LOW);
  digitalWrite(motorPin2, LOW);
}

void updatePosition() {
  // Actualizar la posición del encoder en función de las transiciones del canal A
  contador++;
}
```

3. Carga el código en el Arduino y asegúrate de que todas las conexiones estén seguras.
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
