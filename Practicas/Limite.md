# Sensor de limite
### Introducción

En el campo de la robótica, el control preciso y seguro del movimiento es esencial para el correcto funcionamiento de los robots. Desde robots industriales hasta robots móviles y brazos robóticos, garantizar que los actuadores se muevan dentro de límites específicos es fundamental tanto para la seguridad como para el rendimiento del robot. Para lograr esto, se utilizan sensores de inicio y fin de carrera, también conocidos como sensores de límite.

Los sensores de inicio y fin de carrera desempeñan un papel clave al detectar los puntos de referencia y los límites físicos del movimiento de los actuadores en los robots. Estos sensores permiten conocer cuándo el robot ha alcanzado su posición inicial o final, y también ayudan a prevenir daños a los componentes o al entorno al detener el movimiento en los momentos adecuados. Los sensores de límite se utilizan en una amplia variedad de aplicaciones robóticas, desde robots industriales que realizan tareas repetitivas y precisas, hasta robots móviles que navegan en entornos complejos.

En esta práctica, exploraremos el uso de los sensores de inicio y fin de carrera en el control de motores de corriente continua en un entorno robótico. Aprenderemos a utilizar estos sensores para detectar los límites de movimiento del motor y detenerlo de manera precisa y segura. Comprenderemos cómo los sensores de límite contribuyen al control y la programación de los robots, permitiendo un movimiento controlado y confiable en una amplia gama de aplicaciones.

Al dominar el uso de los sensores de inicio y fin de carrera en los robots, los estudiantes podrán diseñar y construir sistemas robóticos más seguros y eficientes, garantizando un control preciso del movimiento y evitando situaciones potencialmente peligrosas o dañinas.

### Objetivo

El objetivo de esta práctica es familiarizar a los estudiantes con el uso de sensores de inicio y fin de carrera en el contexto de los sistemas robóticos. A través de la implementación y configuración de estos sensores, los alumnos adquirirán habilidades prácticas para detectar los límites de movimiento de los actuadores y detenerlos de manera precisa y segura.

Objetivos Específicos:

- Comprender la importancia de los sensores de inicio y fin de carrera en el control del movimiento en los sistemas robóticos.
- Familiarizarse con los diferentes tipos de sensores de límite y su funcionamiento.
- Aprender a implementar y configurar sensores de inicio y fin de carrera en un sistema robótico utilizando una plataforma de desarrollo como Arduino.
- Desarrollar habilidades de programación para interpretar las señales de los sensores de límite y tomar decisiones en función de ellas.
- Realizar pruebas y ajustes para asegurar un funcionamiento preciso y confiable de los sensores de límite en el control del movimiento.
- Reconocer las aplicaciones prácticas de los sensores de inicio y fin de carrera en diversos tipos de robots y sistemas automatizados.
- Fomentar el pensamiento crítico y la resolución de problemas al enfrentar desafíos relacionados con la implementación y configuración de los sensores de límite.
- Promover la conciencia de la importancia de la seguridad y la precisión en el control del movimiento en entornos robóticos mediante el uso de sensores de límite.

### Materiales

- Arduino UNO [Tienda en linea](https://uelectronics.com/producto/arduino-uno-r3-smd/) o compatible, como sugerencia se puede usar la ESP32 [Tienda en linea](https://uelectronics.com/producto/esp32-38-pines-esp-wroom-32/).
<div style="display: inline-block;">
  <img src="./Images/Componentes/Arduino_Uno.jpg" alt="Diagrama de conexión" style="width: 150px;">
</div>
- 2 sensores de limite o limit switch [Tienda en linea](https://uelectronics.com/producto/interruptor-fin-de-carrera-125v-1a-limit-switch/).
<div style="display: inline-block;">
  <img src="./Images/Componentes/limit.jpg" alt="Diagrama de conexión" style="width: 150px;">
</div>
- Resistencia de 4.7k ohms [Tienda en linea](https://uelectronics.com/producto/resistencia-de-1-ohm-1m-ohms-1-4w/).
<div style="display: inline-block;">
  <img src="./Images/Componentes/Resistencias.jpg" alt="Diagrama de conexión" style="width: 150px;">
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

**Procedimiento:**
1. Realiza la siguiente conexion fisica:

![Diagrama de conexion](./Images/P_switch.pdf)

2. Abre el software de Arduino IDE y crea un nuevo proyecto.
Copia el siguiente código:

```cpp
// Definición de pines
#define switchPin1 7
#define switchPin2 8

void setup() {
  Serial.begin(9600); // Iniciar comunicación serial
  pinMode(switchPin1, INPUT_PULLUP); // Configurar el pin del primer switch como entrada con resistencia pull-up
  pinMode(switchPin2, INPUT_PULLUP); // Configurar el pin del segundo switch como entrada con resistencia pull-up
}

void loop() {
  // Leer el estado del primer switch
  int switchState1 = digitalRead(switchPin1);
  
  // Leer el estado del segundo switch
  int switchState2 = digitalRead(switchPin2);
  
  // Imprimir el estado de los switches en el monitor serial
  Serial.print("Estado del Switch 1: ");
  Serial.println(switchState1);
  Serial.print("Estado del Switch 2: ");
  Serial.println(switchState2);
  
  delay(500); // Espera medio segundo antes de realizar la siguiente lectura
}

```

### Utiliza los sensores como inicio y fin de carrera.  

4. Agrega un motor con encoder y conectalo como se muestra en el diagrama:

![Diagrama de conexion](./Images/P_ls_enc.pdf)

5. Carga el siguiente programa para ponerlo a funcionar 

```cpp
// Definición de pines para el motor y el encoder
const int motorEnablePin = 9;
const int motorDirectionPin1 = 4;
const int motorDirectionPin2 = 5;
const int encoderPin = 2; // Pin para el encoder
const int limitSwitchPin1 = 7; // Pin para el primer sensor de límite
const int limitSwitchPin2 = 8; // Pin para el segundo sensor de límite

// Variables del encoder y los sensores de límite
volatile long encoderPos = 0; // Debe ser "volatile" para la interrupción
bool limitSwitch1_triggered = false;
bool limitSwitch2_triggered = false;

void setup() {
  pinMode(motorEnablePin, OUTPUT);
  pinMode(motorDirectionPin1, OUTPUT);
  pinMode(motorDirectionPin2, OUTPUT);
  pinMode(limitSwitchPin1, INPUT_PULLUP); // Configurar el pin del primer sensor de límite como entrada con resistencia pull-up
  pinMode(limitSwitchPin2, INPUT_PULLUP); // Configurar el pin del segundo sensor de límite como entrada con resistencia pull-up

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

  // Espera hasta alcanzar el número deseado de pulsos o que se active un sensor de límite
  while (abs(encoderPos) < pulses && !limitSwitch1_triggered && !limitSwitch2_triggered) {
    // Verificar si se activa un sensor de límite
    if (digitalRead(limitSwitchPin1) == LOW || digitalRead(limitSwitchPin2) == LOW) {
      // Si se activa un sensor de límite, detener el motor
      stopMotor();
      return;
    }
    analogWrite(motorEnablePin, speed); // Controla la velocidad del motor
  }

  // Detiene el motor si se alcanzan los pulsos deseados
  stopMotor();
}

void updateEncoder() {
  encoderPos++;
  // Serial.println(encoderPos); // Descomenta esta linea para ver en la terminal los pulsos que da el encoder.
}

void stopMotor() {
  analogWrite(motorEnablePin, 0);
  digitalWrite(motorDirectionPin1, LOW);
  digitalWrite(motorDirectionPin2, LOW);
}
```

### Análisis de Resultados

Una vez completada la práctica de detener el giro de un motor DC utilizando dos sensores de límite, es importante realizar un análisis de los resultados obtenidos. A continuación, se presentan algunos aspectos a considerar en el análisis:

Entendido, aquí está la sección de análisis sin el cuestionario, incluyendo la importancia del uso de una protoboard:

---

### Análisis de Resultados

Al combinar el uso de sensores de límite y un encoder para controlar el movimiento de un motor DC en un proyecto robótico, es esencial realizar un análisis exhaustivo de los resultados obtenidos. A continuación, se presentan algunos aspectos clave a considerar en este análisis:

1. Funcionamiento de los sensores de límite:
- Verificar si los sensores de límite responden adecuadamente cuando se presionan manualmente, simulando el movimiento del motor.
- Comprobar la consistencia y precisión de los sensores al detectar los puntos de referencia y los límites de movimiento del "robot", garantizando que proporcionen señales confiables en diferentes condiciones.
2. Precisión y fiabilidad del sistema:
- Evaluar la precisión con la que el "robot" se detiene al alcanzar los límites de movimiento, ya sea por la detección de los sensores de límite o del encoder.
- Analizar si el sistema responde de manera coherente y confiable cuando se utilizan los sensores de límite como inicio y fin de carrera, asegurando que el "robot" se detenga de manera precisa y segura en los puntos deseados.
3. Comportamiento del "robot":
- Observar el comportamiento del "robot" al detenerse tanto por la detección de los sensores de límite como por el encoder.
- Identificar posibles problemas como vibraciones, oscilaciones o movimientos bruscos durante el proceso de detención, y determinar si estos problemas afectan la estabilidad y precisión del sistema.
4. Mejoras y ajustes:
- Proponer posibles mejoras para optimizar el sistema de control del "robot", considerando la integración de los sensores de límite como parte esencial del funcionamiento del mismo.
- Identificar ajustes que podrían realizarse para mejorar la precisión, estabilidad y eficiencia en la detención del "robot", tomando en cuenta las limitaciones y características de los sensores de límite utilizados.
5. Aplicaciones prácticas:
- Considerar las posibles aplicaciones prácticas de este sistema de control en entornos robóticos y automatizados, donde los sensores de límite se utilizan como inicio y fin de carrera para garantizar un movimiento controlado y seguro del "robot".
- Explorar cómo esta funcionalidad de detección precisa podría ser utilizada en diferentes proyectos y situaciones del mundo real, donde se requiere un control preciso del movimiento en sistemas robóticos y mecatrónicos.
6. Importancia del uso de una protoboard:
- Aunque no se tiene un robot físico, la protoboard sigue siendo crucial ya que proporciona un entorno seguro y conveniente para simular y conectar los componentes electrónicos durante el desarrollo y la prueba de la práctica.
- Permite realizar conexiones rápidas y modificar el circuito de manera temporal, facilitando el proceso de aprendizaje y experimentación para los estudiantes.
- Al utilizar una protoboard, puedes realizar pruebas iterativas y explorar diferentes configuraciones de circuito, lo que contribuye a una comprensión más profunda de los conceptos involucrados en la práctica.
- Al tener un numero limitado de pines de tiera y voltaje en arduino, es importante crear lineas con ayuda de la protoboar para distribuir a los diferente componentes que integran cualquier proyecto.
- Además, la protoboard simplifica la identificación y solución de problemas al proporcionar una plataforma visual clara para las conexiones y los componentes electrónicos.

Con este análisis, podemos evaluar de manera integral el rendimiento del sistema y identificar áreas de mejora para futuras iteraciones o aplicaciones prácticas.

### Cuestionario

1. ¿Cuál es el propósito principal de los sensores de inicio y fin de carrera en un sistema robótico?
2. ¿Qué función cumplen los sensores de límite durante el movimiento de un actuador en un robot?
3. ¿Por qué es importante utilizar resistencias pull-up al conectar los sensores de límite a un microcontrolador?
4. ¿Cuál es la diferencia entre un motor con encoder y un motor sin encoder en términos de precisión y control de posición?
5. ¿Cómo se utiliza la función attachInterrupt() en Arduino y cuál es su papel en el control del motor en esta práctica?
6. ¿Cuál es el propósito de la función updateEncoder() en el código proporcionado?
7. ¿Por qué es importante detener el motor cuando se activa un sensor de límite durante su movimiento?
8. ¿Cuál es el papel de la protoboard en esta práctica y por qué es esencial su uso?
9. ¿Qué aspectos del funcionamiento del sistema deben ser analizados para evaluar su precisión y fiabilidad?
10. ¿Qué mejoras o ajustes propondrías para optimizar el sistema de control del motor utilizando sensores de límite?