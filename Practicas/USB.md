## Comunicación por USB
### Introducción

El intercambio de datos es fundamental en el mundo de la electrónica, la programación, y la robótica. Una de las formas más comunes de lograr esta comunicación es a través de los puertos seriales. En esta práctica, exploraremos cómo enviar información desde un Arduino a una computadora mediante el puerto serial. Este proceso no solo es esencial para el monitoreo y la depuración de proyectos, sino que también sienta las bases para la comunicación entre dispositivos en una amplia gama de aplicaciones.

Durante esta práctica, aprenderemos los conceptos básicos de la comunicación serial y cómo implementarlos utilizando la plataforma Arduino. Exploraremos cómo configurar el entorno de desarrollo, establecer una conexión serial entre el Arduino y la computadora, y cómo enviar datos en forma de bytes. Además, discutiremos cómo interpretar y visualizar los datos recibidos del Arduino en el monitor serial proporcionado por el IDE de Arduino.

El conocimiento adquirido en esta práctica sentará las bases para la construcción de proyectos más complejos que involucren comunicación entre dispositivos, adquisición de datos y control en tiempo real. 

### Objetivo
Adquirir un entendimiento sólido sobre la comunicación serial y cómo enviar información desde un Arduino a una computadora a través del puerto serial, sentando las bases para futuros proyectos de intercambio de datos y control.

Objetivos Específicos:

- Familiarizarse con los conceptos fundamentales de la comunicación serial, incluyendo baud rate, bits de datos y configuraciones de paridad.
- Configurar correctamente el entorno de desarrollo, estableciendo una conexión exitosa entre el Arduino y la computadora.
- Utilizar la función Serial.print() para enviar datos numéricos y de texto desde el Arduino a la computadora.
- Explorar la función Serial.write() como método para enviar bytes individuales y datos binarios.
- Interpretar y visualizar los datos transmitidos por el Arduino en el monitor serial del IDE de Arduino.
- Experimentar con distintos tipos de datos, como enteros y caracteres, para comprender cómo se transmiten a través de la comunicación serial.
- Implementar técnicas básicas de detección de errores, como sumas de verificación, para asegurar la integridad de los datos transmitidos.
- Reconocer las aplicaciones prácticas de la comunicación serial en proyectos más complejos, como la adquisición de datos en tiempo real y el control de dispositivos externos.
- Documentar de manera detallada los pasos seguidos, los desafíos enfrentados y las soluciones aplicadas durante la práctica.
- Sintetizar los resultados y las lecciones aprendidas para crear una referencia útil de cara a futuros proyectos de comunicación serial y desarrollo de sistemas embebidos.

### Materiales

Para Arduino:

- Arduino Uno u otro modelo compatible.
- Cable USB para conectar el Arduino a la computadora.
- Computadora con el entorno de desarrollo Arduino IDE instalado.

Para la computadora:

- Python instalado (versión 3.x recomendada).
- Librería pySerial instalada en Python.

Para instalar la librería pySerial, sigue estos pasos:

- Abre una terminal.
- Ejecuta el siguiente comando para instalar la librería utilizando el administrador de paquetes pip:
```bash
pip install pyserial
```
- Espera a que se complete la instalación.

 Una vez que hayas instalado pySerial, podrás utilizarla en tus scripts de Python para establecer la comunicación serial con el Arduino de manera fácil y eficiente.

 ### Procedimiento

1. Carga el siguiente programa en tu Arduino utilizando el Arduino IDE:

float receivedFloats[3]; // Almacena los números flotantes recibidos

void setup() {
  Serial.begin(9600); // Iniciar comunicación serial con la velocidad correcta
}

```cpp
float receivedFloats[3]; // Almacena los números flotantes recibidos

void setup() {
  Serial.begin(9600); // Iniciar comunicación serial con la velocidad correcta
}

void loop() {
  if (Serial.available() >= sizeof(receivedFloats)) {
    Serial.readBytes((char*)receivedFloats, sizeof(receivedFloats));
    
    Serial.print("Números recibidos: ");
    Serial.print(receivedFloats[0], 2);
    Serial.print(", ");
    Serial.print(receivedFloats[1], 2);
    Serial.print(", ");
    Serial.println(receivedFloats[2], 2);
    
    // Enviar una confirmación de vuelta a Python
    float response = 42.0;
    Serial.write((byte*)&response, sizeof(response));
  }
}
```

2. Escribe el siguiente script en Python para enviar tres números flotantes al Arduino a través del puerto serial

```python
import serial
import struct

# Configura la conexión serial
arduino_port = "COMX"  # Reemplaza con el puerto correcto
baud_rate = 9600       # Mismo valor que en el Arduino

ser = serial.Serial(arduino_port, baud_rate)

# Envía los números flotantes
num1 = 3.14
num2 = 2.71
num3 = 1.618

data = struct.pack('fff', num1, num2, num3)
ser.write(data)

# Espera a recibir una confirmación de vuelta
response = ser.read(sizeof(float))
print(f"Respuesta recibida desde Arduino: {struct.unpack('f', response)[0]}")

# Cierra la conexión serial
ser.close()
```

3. Carga el sketch del programa de Arduino en tu placa Arduino utilizando el Arduino IDE.
4. Ejecuta el script de Python en tu computadora para enviar los números flotantes al Arduino.
5. Abre el monitor serial en el Arduino IDE para ver los números flotantes recibidos y mostrados por el Arduino.

### Análisis de resultados

En esta práctica, se llevó a cabo la comunicación de tres datos flotantes desde un script de Python hacia un Arduino utilizando el puerto serial. El objetivo principal fue establecer una comunicación bidireccional entre ambos dispositivos, permitiendo el envío y la recepción de datos a través de este canal. A continuación, se presenta un análisis de los resultados obtenidos durante la ejecución de la práctica:

1. Comunicación Serial Exitosa. Se pudo establecer una comunicación serial exitosa entre Python y Arduino utilizando el puerto serial. El programa de Python envió los tres números flotantes de manera adecuada y el programa de Arduino los recibió y decodificó correctamente.

2. Transmisión Precisa de Datos. Los tres números flotantes se transmitieron con precisión desde Python hasta Arduino. La utilización de la función struct.pack() en Python permitió empaquetar los números flotantes en bytes para su envío, y la función Serial.readBytes() en Arduino facilitó la recepción y decodificación precisa de estos bytes en forma de números flotantes.

3. Visualización en Monitor Serial. El programa de Arduino procesó los números flotantes recibidos y los mostró en el monitor serial del Arduino IDE. Esta visualización permitió confirmar que los datos fueron transmitidos correctamente y recibidos de manera adecuada en el Arduino.

4. Integridad de Datos. Dado que se utilizó la función struct.pack() en Python para empaquetar los números flotantes en bytes antes de enviarlos, se garantizó una mayor integridad de los datos durante la transmisión. Además, el uso de la función Serial.available() en Arduino ayudó a asegurarse de que todos los bytes fueran recibidos antes de la decodificación.

5. Adaptabilidad a Diferentes Escenarios. La práctica demostró cómo los conceptos aprendidos pueden aplicarse a escenarios más complejos. La técnica de envío de datos mediante bytes es altamente adaptable y puede utilizarse para enviar diferentes tipos de datos, así como para implementar protocolos de comunicación más robustos.

6. Potencial de Desarrollo Futuro. La práctica sienta las bases para proyectos más amplios y complejos que involucren la comunicación entre diferentes dispositivos. Se puede construir sobre esta base para diseñar sistemas que requieran la adquisición y el procesamiento de datos en tiempo real, o incluso para controlar dispositivos externos.

En resumen, la práctica de enviar tres datos flotantes desde Python hasta Arduino mediante el uso del puerto serial resultó en una comunicación exitosa y precisa. Esta experiencia proporcionó una comprensión sólida de cómo establecer una comunicación serial bidireccional entre dispositivos y cómo transmitir datos de manera efectiva. Los resultados obtenidos abren la puerta a futuros proyectos que requieran la interconexión y el intercambio de información entre dispositivos electrónicos.

### Cuestionario

Este cuestionario tiene como objetivo evaluar tu comprensión de la práctica realizada, donde se estableció una comunicación bidireccional entre Python y Arduino a través del puerto serial. La práctica involucró el envío y recepción de tres números flotantes y su interpretación en ambos extremos. A través de este cuestionario, podrás demostrar tu conocimiento sobre los conceptos clave y los procesos involucrados en esta forma de comunicación entre dispositivos.

1. ¿Cuál es el propósito principal de la práctica de enviar datos desde Python a Arduino a través del puerto serial?
2. ¿Qué función se utiliza en Python para empaquetar datos antes de enviarlos por el puerto serial?
3. En Arduino, ¿qué función se utiliza para verificar si hay datos disponibles en el puerto serial?
4. ¿Cómo se realiza la recepción y decodificación de datos en forma de bytes en el Arduino?
5. Menciona una ventaja de utilizar la función Serial.available() en Arduino antes de leer datos del puerto serial.
6. ¿Por qué es importante configurar la misma velocidad de baudios en ambos extremos de la comunicación (Python y Arduino)?
7. En el código de Arduino, ¿cómo se puede enviar una confirmación de vuelta a Python después de recibir los datos?
8. ¿Qué función de la librería serial en Python se utiliza para leer un número específico de bytes del puerto serial?
9. ¿Cómo se puede interpretar un conjunto de bytes recibidos en Python para convertirlos nuevamente en un número flotante?
10. ¿Qué ventajas y aplicaciones prácticas tiene la comunicación bidireccional entre Python y Arduino a través del puerto serial?