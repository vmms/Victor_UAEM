# Sensor Ultrasónico

## Introducción

En esta práctica, haremos uso de los sensores ultrasónicos, que son dispositivos que utilizan ondas sonoras de alta frecuencia para medir distancias sin necesidad de un contacto físico directo. 

Estos sensores emiten pulsos ultrasónicos y miden el tiempo que tarda en recibir el eco de esos pulsos al reflejarse en un objeto. Esta medición del tiempo de vuelo del eco permite calcular la distancia entre el sensor y el objeto con una precisión notable. 

Gracias a su capacidad para detectar objetos en entornos diversos y su precisión en la medición de distancias, los sensores ultrasónicos se han convertido en componentes fundamentales en una amplia gama de aplicaciones, desde sistemas de detección de obstáculos en robots móviles hasta sistemas de estacionamiento automático en vehículos. 

En esta práctica, aprenderemos cómo utilizar un sensor ultrasónico con Arduino para medir distancias y aprovechar estas mediciones para realizar acciones específicas, abriendo así la puerta a un mundo de posibilidades en el ámbito de la robótica y la automatización.

## Objetivos

El propósito principal de esta práctica es familiarizarse con el uso y la implementación de un sensor ultrasónico junto con Arduino para medir distancias y realizar acciones basadas en esas mediciones. Al finalizar la práctica, se espera que los participantes logren:

- Comprender el funcionamiento básico de los sensores ultrasónicos y cómo utilizan ondas sonoras de alta frecuencia para medir distancias.
- Aprender a conectar un sensor ultrasónico a Arduino de manera adecuada, siguiendo las instrucciones y recomendaciones proporcionadas.
- Adquirir conocimientos sobre la programación de Arduino para capturar y procesar los datos del sensor ultrasónico.
- Realizar mediciones precisas de distancias utilizando el sensor ultrasónico y verificar la fiabilidad de los resultados obtenidos.
- Experimentar con diferentes aplicaciones prácticas del sensor ultrasónico, como sistemas de detección de obstáculos, sistemas de navegación autónoma y sistemas de seguridad.
- Explorar posibles mejoras o ajustes en el sistema de detección basado en el sensor ultrasónico y Arduino para optimizar su rendimiento y precisión.

Al alcanzar estos objetivos, los participantes estarán en condiciones de utilizar eficazmente sensores ultrasónicos en una variedad de proyectos y aplicaciones, lo que les proporcionará una sólida base para futuras exploraciones en el campo de la robótica, la automatización y la electrónica.

## Materiales

- Arduino UNO [Tienda en linea](https://uelectronics.com/producto/arduino-uno-r3-smd/) o compatible, como sugerencia se puede usar la ESP32 [Tienda en linea](https://uelectronics.com/producto/esp32-38-pines-esp-wroom-32/).
<div style="display: inline-block;">
  <img src="./Images/Componentes/Arduino_Uno.jpg" alt="Diagrama de conexión" style="width: 150px;">
</div>
- Sensor ultrasonico [Tienda en linea](https://uelectronics.com/producto/sensor-ultrasonico-hc-sr04/).
<div style="display: inline-block;">
  <img src="./Images/Componentes/ultrasonico.jpg" alt="Diagrama de conexión" style="width: 150px;">
</div>
- Cables tipo dupont M-M y M-H[Tienda en linea](https://uelectronics.com/producto/cables-dupont-extra-largos-30cm-hh-mh-mm/).
<div style="display: inline-block;">
  <img src="./Images/Componentes/cable_dupont.jpg" alt="Diagrama de conexión" style="width: 150px;">
</div>
- Computadora con el software Arduino IDE instalado
- Cable USB para conectar la placa Arduino a la computadora

## Procedimiento
1. Realiza la conexión Física:
    - Conecta el sensor ultrasónico al Arduino utilizando el esquema de conexión proporcionado.
    - Asegúrate de que el sensor esté conectado correctamente y que no haya conexiones sueltas o incorrectas.

![Diagrama de conexion](./Images/P_us.pdf)

2. Copia el código en tu IDE.

```cpp
// Código para determinar la distancia con un sensor ultrasonico sin usar librerias.

// Definición de pines
#define trigPin 12
#define echoPin 11

void setup() {
  Serial.begin(9600); // Iniciar comunicación serial
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
}

void loop() {
  long duration, distance;
  
  // Envía un pulso ultrasónico
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  
  // Mide la duración del eco
  duration = pulseIn(echoPin, HIGH);
  
  // Calcula la distancia en centímetros
  distance = (duration * 0.034) / 2;
  
  // Muestra la distancia en el monitor serie
  Serial.print("Distancia: ");
  Serial.print(distance);
  Serial.println(" cm");
  
  delay(1000); // Espera 1 segundo antes de realizar la siguiente medición
}
```

3. Carga el código en Arduino y abre el monitor serial.
4. Coloca objetos a diferentes distancias del sensor ultrasónico y observa cómo varían las mediciones.
5. Ahora copia el siguiente codigo en un archivo nuevo.

```cpp
// Código para determinar la distancia con un sensor ultrasonico por medio de la libreria NewPing.

#include <NewPing.h>

#define TRIGGER_PIN  12  // Pin de salida del pulso de ultrasonido
#define ECHO_PIN     11  // Pin de entrada del eco del ultrasonido
#define MAX_DISTANCE 200 // Distancia máxima de medición en centímetros

NewPing sonar(TRIGGER_PIN, ECHO_PIN, MAX_DISTANCE); // Configuración del sensor ultrasónico

void setup() {
  Serial.begin(9600); // Inicialización del puerto serial
}

void loop() {
  delay(50);                      // Espera para estabilidad del sensor
  unsigned int distance = sonar.ping_cm(); // Realiza la medición de distancia en centímetros
  Serial.print("Distancia: ");
  Serial.print(distance); // Imprime la distancia medida en el monitor serial
  Serial.println(" cm");
  delay(1000); // Espera un segundo antes de realizar la siguiente medición
}
```

6. Carga el código en Arduino y abre el monitor serial.
7. Coloca objetos a diferentes distancias del sensor ultrasónico y observa cómo varían las mediciones.

## Análisis de Resultados

Durante la ejecución de la práctica, es importante que los alumnos presten atención a los siguientes puntos y realicen un análisis detallado:

Uso del Sensor Ultrasónico sin Librerías:

- Precisión de las Mediciones: Observa cómo el sensor ultrasónico mide distancias de manera precisa y rápida sin el uso de librerías. Compara las mediciones obtenidas con la posición y tipo de objetos colocados frente al sensor.
- Efecto de la Distancia: Experimenta con diferentes objetos y distancias para comprender cómo afecta la precisión del sensor. Observa si las mediciones se desvían significativamente a medida que aumenta la distancia entre el sensor y el objeto.
- Estabilidad del Sensor: Analiza si el sensor ultrasónico mantiene una estabilidad en las mediciones y si existe alguna variabilidad en las mediciones al repetirlas en condiciones similares.

Uso del Sensor Ultrasónico con Librería NewPing:

- Comparación de Métodos: Compara las mediciones obtenidas utilizando la librería NewPing con las obtenidas sin librerías. Observa si hay diferencias en la precisión, el tiempo de respuesta y la estabilidad de las mediciones entre ambos métodos.
- Facilidad de Implementación: Evalúa la facilidad de implementación del sensor ultrasónico con la librería NewPing en comparación con el método sin librerías. Considera factores como la complejidad del código, el tiempo de desarrollo y la claridad en la lectura del código.
- Rendimiento del Sensor: Analiza si el rendimiento del sensor mejora o se mantiene similar al utilizar la librería NewPing en términos de precisión, estabilidad y tiempo de respuesta. Observa si hay algún impacto en el consumo de recursos del Arduino.

## Cuestionario

Este cuestionario tiene como objetivo evaluar tu comprensión y aprendizaje sobre el uso del sensor ultrasónico con Arduino para medir distancias y realizar acciones en función de esas mediciones. Responde cada pregunta de manera clara y concisa, utilizando tus conocimientos adquiridos durante la práctica.

1. ¿Cuál es la diferencia principal entre el método de medición de distancia utilizando el sensor ultrasónico con y sin el uso de librerías?
2. ¿Cuáles son las ventajas y desventajas de utilizar el sensor ultrasónico sin librerías en comparación con el uso de la librería NewPing?
3. ¿Cómo se realiza la medición de distancia utilizando el sensor ultrasónico sin el uso de librerías?
4. ¿Cuál es la función principal de la librería NewPing y qué beneficios proporciona en el manejo del sensor ultrasónico?
5. ¿Qué factores podrían influir en la precisión y estabilidad de las mediciones realizadas con el sensor ultrasónico?
6. ¿Cómo se configuran los pines del Arduino para utilizar el sensor ultrasónico con la librería NewPing?
7. ¿Qué precauciones de seguridad se deben considerar al utilizar un sensor ultrasónico en un proyecto?
8. ¿Cuál es la importancia de la calibración del sensor ultrasónico y cómo se realiza?
9. ¿Qué aplicaciones prácticas podrías desarrollar utilizando un sensor ultrasónico con y sin el uso de librerías en proyectos de robótica y automatización?
10. ¿Cómo podrías optimizar el rendimiento del sensor ultrasónico en términos de precisión, estabilidad y tiempo de respuesta en un proyecto específico?
