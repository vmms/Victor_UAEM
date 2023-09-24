# Pendulo invertido 

Programa de ejemplo en python para graficar el atractor de un pendulo invertido

\\[ \theta''(t) + \sin(\theta(t)) = 0 \\]

```python
import numpy as np
from scipy.integrate import odeint
import matplotlib.pyplot as plt

# Función que representa la ecuación diferencial del péndulo no lineal
def pendulo_no_lineal(y, t):
    theta, theta_dot = y
    L = 1.0  # Longitud del péndulo
    g = 9.81  # Aceleración debido a la gravedad
    dydt = [theta_dot, -g/L * np.sin(theta)]
    return dydt

# Condiciones iniciales
theta0 = np.pi/4  # Ángulo inicial (rad)
theta_dot0 = 5.0  # Velocidad angular inicial (rad/s)
y0 = [theta0, theta_dot0]

# Tiempo de simulación
t = np.linspace(0, 100, 10000)

# Resolución de la ecuación diferencial
sol = odeint(pendulo_no_lineal, y0, t)

# Gráfico del ángulo en función del tiempo
plt.figure(figsize=(12, 4))
plt.subplot(1, 2, 1)
plt.plot(t, sol[:, 0])
plt.xlabel('Tiempo (s)')
plt.ylabel('Ángulo (rad)')
plt.title('Comportamiento del Péndulo No Lineal')
plt.grid(True)

# Gráfico del espacio de fase
plt.subplot(1, 2, 2)
plt.plot(sol[:, 0], sol[:, 1])
plt.xlabel('Ángulo (rad)')
plt.ylabel('Velocidad Angular (rad/s)')
plt.title('Espacio de Fase del Péndulo No Lineal')
plt.grid(True)

plt.tight_layout()
plt.show()
```

El resultado es una grafica del comportamiento del pendulo invertido 

![Imagen de muestra](Images/web/Programas/NoLineal/Python/atractor_pendulo.png)