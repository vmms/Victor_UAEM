function changeLanguage(language) {
  var greeting = document.getElementById("greeting");
  var content = document.getElementById("content");

  if (language === "es") {
    greeting.textContent = "¡Hola!";
    content.textContent = "¡Bienvenido a mi página web!";
    description.textContent = "Profesor en la Universidad Autónoma del Estado de México. Estudiante de Doctorado en Ciencias de la Ingeniería. Soy Ingeniero en Computación especializado en el estudio de la Robótica, Interacción Hombre-Robot y Robótica Educativa." 
    work.textContent = "He formado parte de equipos multidisiplinarios para el desarrollo de robot, análisis de plataformas robóticas para la enseñanza e interacción mediante visión por computadora. Mi investigación actual se centra en la interacción humano-robot para desarrollar asistentes para personas con MCI."
    develop.textContent = "Además, soy desarrollador independiente de aplicaciones multiplataforma como páginas web, aplicaciones móviles y software. Así como desarrollo de kits de robótica y tarjetas pcb para niños."
  } else if (language === "en") {
    greeting.textContent = "Hello!";
    content.textContent = "Welcome to my website!";
    description.textContent = "Professor at the Autonomous University of the State of Mexico. PhD student in Engineering Sciences. I am a Computer Engineer specialized in the study of Robotics, Human-Robot Interaction and Educational Robotics."
    work.textContent = "I have been part of multidisciplinary teams for robot development, analysis of robotic platforms for teaching and interaction through computer vision. My current research is focused on human-robot interaction to develop assistants for people with MCI."
    develop.textContent = "In addition, I am an independent developer of cross-platform applications such as web pages, mobile applications and software. As well as development of robotics kits and pcb cards for children."
  }
}

// Establecer el idioma inicial
changeLanguage("es");
