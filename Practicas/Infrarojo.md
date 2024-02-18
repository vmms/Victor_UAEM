# Sensor Infrarrojo

## Introducción

Los sensores infrarrojos desempeñan un papel fundamental en numerosas aplicaciones de robótica y automatización al permitir la detección precisa de objetos sin necesidad de contacto físico directo. Estos dispositivos funcionan emitiendo pulsos de luz infrarroja invisible y midiendo la cantidad de luz reflejada por los objetos cercanos. 

En esta práctica, exploraremos cómo utilizar un sensor infrarrojo junto con Arduino para detectar obstáculos y tomar decisiones en función de estas detecciones. 

Esta capacidad es esencial en aplicaciones como sistemas de evasión de obstáculos en vehículos autónomos y robots seguidores de línea, donde la detección confiable de obstáculos permite una navegación segura y eficiente.

## Objetivos

El objetivo principal de esta práctica es aprender a utilizar un sensor infrarrojo en conjunto con Arduino para la detección precisa de obstáculos. Al finalizar, los participantes habrán adquirido las habilidades necesarias para implementar sistemas de detección de obstáculos en sus proyectos de robótica y automatización. Los objetivos específicos incluyen:

- Comprender el funcionamiento del sensor infrarrojo y su aplicación en la detección de obstáculos.
- Aprender a conectar y configurar el sensor infrarrojo con Arduino.
- Desarrollar habilidades para programar Arduino y utilizar la información del sensor para tomar decisiones en tiempo real.
- Realizar pruebas prácticas para verificar la precisión y fiabilidad de la detección de obstáculos.
- Explorar posibles aplicaciones de la detección de obstáculos en proyectos de robótica y automatización.

## Materiales

- Arduino UNO [Tienda en linea](https://uelectronics.com/producto/arduino-uno-r3-smd/) o compatible, como sugerencia se puede usar la ESP32 [Tienda en linea](https://uelectronics.com/producto/esp32-38-pines-esp-wroom-32/).
<div style="display: inline-block;">
  <img src="./Images/Componentes/Arduino_Uno.jpg" alt="Diagrama de conexión" style="width: 150px;">
</div>
- Modulo de sensor infrarojo [Tienda en linea](https://uelectronics.com/producto/fc-51-sensor-de-obstaculos-reflectivo-infrarojo/).
<div style="display: inline-block;">
  <img src="./Images/Componentes/infra.jpg" alt="Diagrama de conexión" style="width: 150px;">
</div>
- Cables tipo dupont M-M y M-H[Tienda en linea](https://uelectronics.com/producto/cables-dupont-extra-largos-30cm-hh-mh-mm/).
<div style="display: inline-block;">
  <img src="./Images/Componentes/cable_dupont.jpg" alt="Diagrama de conexión" style="width: 150px;">
</div>
- Objetos para simular obstáculos (por ejemplo, libros, cajas...)
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

1. Realiza la Conexión Física. Conecta el sensor infrarrojo al Arduino según el esquema de conexión proporcionado.

![Diagrama de conexion](./Images/Infra.pdf)

2. Copia el Código en tu IDE:

```cpp
// Definición de pines
#define sensorPin 2 // Cambia el pin según corresponda

void setup() {
  Serial.begin(9600); // Iniciar comunicación serial
  pinMode(sensorPin, INPUT); // Configurar el pin del sensor como entrada
}

void loop() {
  int objectDetected = digitalRead(sensorPin); // Leer el estado del sensor (1 = objeto detectado, 0 = no hay objeto)
  if (objectDetected == HIGH) {
    Serial.println("¡Objeto detectado!"); // Imprimir mensaje si se detecta un objeto
  } else {
    Serial.println("No se detecta ningún objeto."); // Imprimir mensaje si no se detecta ningún objeto
  }
  delay(500); // Esperar medio segundo antes de realizar la siguiente lectura
}
```

3. Carga el Código en Arduino y Abre el Monitor Serial:

4. Coloca objetos a diferentes distancias del sensor infrarrojo. Observa cómo varían los valores del sensor infrarrojo en función de la presencia o ausencia de obstáculos.

## Análisis

1. Sensibilidad del Potenciómetro: Observa cómo ajustar el potenciómetro afecta la sensibilidad del módulo infrarrojo. Experimenta con diferentes configuraciones del potenciómetro para comprender cómo afecta la distancia de detección y la sensibilidad del sensor.

2. Rango de Detección: Experimenta con diferentes configuraciones del potenciómetro para determinar el rango de detección del módulo infrarrojo. Observa cómo varía la distancia a la que se detectan los objetos en función de la configuración del potenciómetro.

3. Precisión de las Detecciones: Observa si hay variaciones en la precisión de las detecciones en función de la configuración del potenciómetro y la distancia de detección. Analiza si el módulo infrarrojo es capaz de detectar objetos de manera consistente y precisa en diferentes condiciones.

4. Tiempo de Respuesta: Analiza la velocidad de respuesta del módulo infrarrojo ante cambios en la presencia de obstáculos. Observa si hay algún retardo significativo entre la detección del objeto y la respuesta del sensor.

## Cuestionario

1. ¿Cómo afecta el ajuste del potenciómetro la sensibilidad del módulo infrarrojo para detectar obstáculos?
2. ¿Qué variaciones observaste en el rango de detección al experimentar con diferentes configuraciones del potenciómetro?
3. ¿Qué puedes decir sobre la precisión de las detecciones del módulo infrarrojo en función de la configuración del potenciómetro y la distancia de detección?
4. ¿Hubo algún retardo significativo en la respuesta del módulo infrarrojo ante cambios en la presencia de obstáculos? Explica.
5. ¿Cuál sería una configuración óptima del potenciómetro para detectar objetos de manera precisa y consistente en tu aplicación específica?