## Parpadeo de un LED
### Introducción

Parpadeo de un LED es la primera actividad diseñada para familiarizar a los alumnos con el entorno de desarrollo de Arduino, la programación básica y los circuitos electrónicos. Esta práctica es el punto de partida ideal para aquellos que no tienen experiencia previa en electrónica ni programación, ya que proporcionará una introducción práctica y accesible a los conceptos fundamentales.

El objetivo principal de esta práctica es lograr que los alumnos comprendan el proceso de creación, carga y ejecución de un programa en Arduino, mientras controlan un componente básico como un LED. El LED servirá como un indicador visual que parpadeará a intervalos regulares, lo que permitirá a los alumnos experimentar directamente la interacción entre el programa y el circuito electrónico.

Durante esta práctica, los alumnos se familiarizarán con el entorno de desarrollo de Arduino, donde podrán escribir, compilar y cargar programas en el microcontrolador. Además, aprenderán a conectar componentes electrónicos básicos, como el LED, y utilizarán instrucciones de programación sencillas para controlar su encendido y apagado.

Es importante destacar que, aunque esta práctica pueda parecer simple, sienta las bases para el aprendizaje futuro en el campo de la robótica y la electrónica. Al comprender los conceptos básicos de programación y los circuitos electrónicos utilizando Arduino, los alumnos estarán preparados para abordar desafíos más complejos, como el control de motores, la lectura de sensores y el desarrollo de proyectos robóticos interactivos.

A medida que los alumnos avancen en la práctica y logren que el LED parpadee exitosamente, se fomentará la experimentación y la creatividad. Se les animará a realizar modificaciones en el código para alterar la velocidad y el patrón de parpadeo del LED, así como a explorar diferentes componentes electrónicos y sus posibles aplicaciones en futuros proyectos.

Objetivo: Familiarizar a los alumnos con el entorno de desarrollo de Arduino, la programación básica y los circuitos electrónicos utilizando un LED.

### Materiales
- Arduino Uno o similar.
- LED.
- Resistencia de 220 ohmios.
- Protoboard.
- Cables de conexión.

### Procedimiento

1. Conecta el ánodo (patita más larga) del LED al pin digital 13 de Arduino.
2. Conecta el cátodo (patita más corta) del LED a una fila del protoboard.
3. Conecta una resistencia de 220 ohmios desde la fila donde está conectado el cátodo del LED a la fila de tierra (-) del protoboard.
![DDiagrama de conexion](/Images/P1.png)
4. Conecta Arduino a tu computadora mediante un cable USB y abre el entorno de desarrollo Arduino.
5. Abre un nuevo sketch en Arduino.
6. En el sketch, escribe el siguiente código:

```cpp
void setup() {
  pinMode(13, OUTPUT);
}

void loop() {
  digitalWrite(13, HIGH);
  delay(1000);
  digitalWrite(13, LOW);
  delay(1000);
}
```
7. Carga el código en Arduino y observa cómo el LED parpadea a intervalos de un segundo.

### Análisis de resultados:

Observa el parpadeo del LED y cómo está controlado por el programa que has cargado en Arduino.

Experimenta modificando los valores de los parámetros delay() para acelerar o ralentizar el parpadeo del LED.

Realiza cambios en el código para modificar el patrón de encendido y apagado del LED.

### Cuestionario
Instrucción: Toma un tiempo para reflexionar sobre las preguntas y proporciona respuestas claras y fundamentadas para cada una de ellas. Puedes basarte en tu experiencia durante la realización de la Práctica 1: Parpadeo de un LED y en los conceptos aprendidos. Si es necesario, realiza investigaciones adicionales para ampliar tus conocimientos sobre los temas relacionados. Escribe tus respuestas de forma clara y concisa, asegurándote de proporcionar una explicación lógica y coherente.

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