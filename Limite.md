### Inicio y fin de carrera
### Introducción

En el campo de la robótica, el control preciso y seguro del movimiento es esencial para el correcto funcionamiento de los robots. Desde robots industriales hasta robots móviles y brazos robóticos, garantizar que los actuadores se muevan dentro de límites específicos es fundamental tanto para la seguridad como para el rendimiento del robot. Para lograr esto, se utilizan sensores de inicio y fin de carrera, también conocidos como sensores de límite.

Los sensores de inicio y fin de carrera desempeñan un papel clave al detectar los puntos de referencia y los límites físicos del movimiento de los actuadores en los robots. Estos sensores permiten conocer cuándo el robot ha alcanzado su posición inicial o final, y también ayudan a prevenir daños a los componentes o al entorno al detener el movimiento en los momentos adecuados. Los sensores de límite se utilizan en una amplia variedad de aplicaciones robóticas, desde robots industriales que realizan tareas repetitivas y precisas, hasta robots móviles que navegan en entornos complejos.

En esta práctica, exploraremos el uso de los sensores de inicio y fin de carrera en el control de motores de corriente continua en un entorno robótico. Aprenderemos a utilizar estos sensores para detectar los límites de movimiento del motor y detenerlo de manera precisa y segura. Comprenderemos cómo los sensores de límite contribuyen al control y la programación de los robots, permitiendo un movimiento controlado y confiable en una amplia gama de aplicaciones.

Al dominar el uso de los sensores de inicio y fin de carrera en los robots, los estudiantes podrán diseñar y construir sistemas robóticos más seguros y eficientes, garantizando un control preciso del movimiento y evitando situaciones potencialmente peligrosas o dañinas.

### Objetivo

El objetivo de esta práctica es familiarizar a los estudiantes con el uso de sensores de inicio y fin de carrera en el contexto de los sistemas robóticos. A través de la implementación y configuración de estos sensores, los alumnos adquirirán habilidades prácticas para detectar los límites de movimiento de los actuadores y detenerlos de manera precisa y segura.

Objetivos Específicos:

1. Comprender la importancia de los sensores de inicio y fin de carrera en el control del movimiento en los sistemas robóticos.
2. Familiarizarse con los diferentes tipos de sensores de límite y su funcionamiento.
3. Aprender a implementar y configurar sensores de inicio y fin de carrera en un sistema robótico utilizando una plataforma de desarrollo como Arduino.
4. Desarrollar habilidades de programación para interpretar las señales de los sensores de límite y tomar decisiones en función de ellas.
5. Realizar pruebas y ajustes para asegurar un funcionamiento preciso y confiable de los sensores de límite en el control del movimiento.
6. Reconocer las aplicaciones prácticas de los sensores de inicio y fin de carrera en diversos tipos de robots y sistemas automatizados.
7. Fomentar el pensamiento crítico y la resolución de problemas al enfrentar desafíos relacionados con la implementación y configuración de los sensores de límite.
8. Promover la conciencia de la importancia de la seguridad y la precisión en el control del movimiento en entornos robóticos mediante el uso de sensores de límite.

### Materiales

- Arduino Uno
- Motor de DC
- Puente H L298N
- Dos sensores de límite
- Resistencias
- Cables de conexión

**Procedimiento:**
1. Realiza la siguiente conexion fisica:

2. Abre el software de Arduino IDE y crea un nuevo proyecto.
Copia el siguiente código:

```cpp
// Definición de pines
const int motorPin1 = 8;         // Pin de control del motor - Sentido 1
const int motorPin2 = 7;         // Pin de control del motor - Sentido 2
const int limitSensorRightPin = 2;     // Pin del sensor de límite derecho
const int limitSensorLeftPin = 3;      // Pin del sensor de límite izquierdo

void setup() {
  // Configurar los pines como salidas o entradas según sea necesario
  pinMode(motorPin1, OUTPUT);
  pinMode(motorPin2, OUTPUT);
  pinMode(limitSensorRightPin, INPUT_PULLUP);
  pinMode(limitSensorLeftPin, INPUT_PULLUP);
}

void loop() {
  // Verificar el estado del sensor de límite derecho
  if (digitalRead(limitSensorRightPin) == LOW) {
    // Detener el motor si se alcanza el límite derecho
    digitalWrite(motorPin1, LOW);
    digitalWrite(motorPin2, LOW);
  } else if (digitalRead(limitSensorLeftPin) == LOW) {
    // Detener el motor si se alcanza el límite izquierdo
    digitalWrite(motorPin1, LOW);
    digitalWrite(motorPin2, LOW);
  } else {
    // Continuar el giro en sentido horario
    digitalWrite(motorPin1, HIGH);
    digitalWrite(motorPin2, LOW);
  }
}
```

### Análisis de Resultados

Una vez completada la práctica de detener el giro de un motor DC utilizando dos sensores de límite, es importante realizar un análisis de los resultados obtenidos. A continuación, se presentan algunos aspectos a considerar en el análisis:

1. Funcionamiento de los sensores de límite:
- Verificar si los sensores de límite detectan correctamente los extremos de giro del motor en cada dirección.
- Comprobar si los sensores responden de manera precisa y consistente al alcanzar los límites establecidos.
2. Precisión y fiabilidad del sistema:
- Evaluar la precisión con la que el motor se detiene al alcanzar los límites de giro.
- Analizar si el motor se detiene de manera suave y sin oscilaciones excesivas al llegar a los límites.
3. Comportamiento del motor:
- Observar el comportamiento del motor al moverse en ambas direcciones y detenerse en los límites.
- Identificar posibles problemas como ruidos, vibraciones o movimientos bruscos durante el proceso de detención.
4. Mejoras y ajustes:
- Proponer posibles mejoras para optimizar el sistema de detención del motor.
- Identificar ajustes que podrían realizarse para lograr una mayor precisión y estabilidad en la detención.
5. Aplicaciones prácticas:
- Considerar las posibles aplicaciones prácticas de este sistema de detención del motor en entornos robóticos o automatizados.
- Explorar cómo esta funcionalidad de detención precisa podría ser utilizada en diferentes proyectos o situaciones del mundo real.

### Cuestionario

1. ¿Cuál es el propósito de utilizar sensores de límite en el control de un motor DC?
2. ¿Cuál es la función de los sensores de límite en esta práctica específica?
3. ¿Cómo se configuran los pines del Arduino para leer los estados de los sensores de límite?
4. ¿Qué sucede cuando se alcanza el límite de giro a la derecha? ¿Y cuando se alcanza el límite de giro a la izquierda?
5. ¿Cuál es la importancia de utilizar resistencias pull-up o pull-down con los sensores de límite?
6. ¿Cuál es el impacto de un mal ajuste en la posición de los sensores de límite en el funcionamiento del sistema?
7. ¿Qué acciones se deben tomar si el motor no se detiene correctamente al alcanzar los límites de giro?
8. ¿Cuáles son las ventajas y desventajas de utilizar sensores de límite en comparación con otros métodos de detección de límites de giro?
9. ¿Qué mejoras podrían implementarse en este sistema de control utilizando los sensores de límite?
10. ¿En qué aplicaciones prácticas podrían utilizarse sistemas similares con sensores de límite?
