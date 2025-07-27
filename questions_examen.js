const questions = [
  {
    "question": "1. Una de las tendencias actuales en la gestión de proyectos de software es el uso de herramientas ágiles y colaborativas como Jira o Trello.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": 0
  },
  {
    "question": "2. Seleccione cuales son las características de ideas con potencial:",
    "options": [
      "Relaciona nuestros intereses, ideas personales y experiencias con la idea de investigación.",
      "Las ideas son novedosas.",
      "Las ideas de investigación que producen conocimiento son necesariamente nuevas",
      "Temas que no sean demasiado generales.",
      "Las ideas pueden fomentar nuevas respuestas.",
      "Deben intrigar, alentar y motivar al investigador.",
      "Es importante que la idea sea atractiva, interesante o necesaria.",
      "Sirve para elaborar teorías y solucionar problemáticas."
    ],
    "answer": [
      0,
      1,
      3,
      4,
      5,
      6,
      7
    ],
    "multiple": true
  },
  {
    "question": "3. Relacione cada definición con su concepto correspondiente:",
    "type": "match",
    "leftColumn": [
      "En ocasiones puede resultar que haya fondos o recursos para investigar sobre cierto tópico.",
      "Requiere resolverse algo 'crítico' o deficiente.",
      "Se puede indagar sobre algún tema.",
      "El investigador al profundizar en algún campo de conocimiento detecta temas poco estudiados o no investigados en su contexto y decide adentrarse en estos.",
      "Detectar un fenómeno o problema de investigación que requiere indagarse a profundidad o aportar mayor conocimiento o evidencia para conocerlo, definirlo, describirlo y comprenderlo.",
      "Basada en los intereses personales del investigador, sus experiencias y capacidad creativa."
    ],
    "rightColumn": [
      "Oportunidad",
      "Solucionar una problemática",
      "Conceptualización o concepción",
      "Huecos de conocimiento",
      "Inspiración e imaginación"
    ],
    "answer": {
      "0": 0, // Definición 1 → Oportunidad
      "1": 1, // Definición 2 → Solucionar problemática
      "2": 2, // Definición 3 → Conceptualización
      "3": 3, // Definición 4 → Huecos conocimiento
      "4": 2,  // Definición 5 → Conceptualización
      "5": 4  // Definición 6 → Inspiración
    }
  },

  {
    "question": "4. Indique si las siguientes afirmaciones son verdaderas o falsas.",
    "type": "match",
    "leftColumn": [
      "Una de las características de la ruta cuantitativa son los instrumentos estandarizados.",
      "El proceso de la ruta cualitativa es orientado a múltiples realidades subjetivas.",
      "Una de las fortalezas del proceso de la ruta cuantitativa es la naturalidad de observaciones.",
      "Una de las características de la ruta cuantitativa son los diseños emergentes."
    ],
    "rightColumn": [
      "Verdadero",
      "Falso"
    ],
    "answer": {
      "0": 0,  // Verdadero
      "1": 0,  // Verdadero
      "2": 1,  // Falso
      "3": 1   // Falso
    }
  },

  {
    "question": "5. ¿Qué es Lambda?",
    "options": [
      "a. Un servicio de computación sin servidor que permite ejecutar código sin la necesidad de administrar servidores",
      "b. Un servicio de pago que envía mensajes y correos",
      "c. Un servicio computacional que requiere gran manejo de servidores y servicios",
      "d. Niguna de las anteriores"
    ],
    "answer": 0,
    "multiple": false
  },
  {
    "question": "6. Una organización quiere innovar mediante las tecnologías más recientes, pero también tiene necesidades de cumplimiento den las que se especifica que los datos se deben almacenar en ubicaciones deteminadas. ¿Cuál enfoque de nube debería satisfacer sus necesidades? La respuesta es Nube híbrida",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": 0
  },
  {
    "question": "7. ¿Quién introdujo el concepto de autómatas como base de la informática moderna?",
    "options": [
      "1. Marvin Minsky",
      "2. Alan Turing",
      "3. John McCarthy",
      "4. Claude Shannon"
    ],
    "answer": 1,
    "multiple": false
  },
  {
    "question": "8. El análisis estático de código permite detectar vulnerabilidades sin necesidad de ejecutar la aplicación.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": 0
  },
  {
    "question": "9. ¿Cuál de los siguientes es un objetivo de las pruebas de seguridad basadas en el riesgo?",
    "options": [
      "1. Verificar la operación confiable del software bajo condiciones hostiles de ataque",
      "2. Verificar la estética del software",
      "3. Mejorar la experiencia del usuario",
      "4. Aumentar la velocidad de ejecución del software"
    ],
    "answer": 0,
    "multiple": false
  },
  {
    "question": "10. Dado el siguiente conjunto de actividades con sus duraciones y dependencias, calcule la ruta crítica:",
    "columns": ["Actividad", "Predecesora(s)", "Duración (días)"],
    "rows": [
      ["A", "—", "3"],
      ["B", "A", "4"],
      ["C", "A", "5"],
      ["D", "B, C", "2"],
      ["E", "D", "3"]
    ],
    "options": [
      "a. C → D → E → FIN = 5 + 2 + 3 = 10 días",
      "b. A → C → D → E = 3 + 5 + 2 + 3 = 13 días",
      "c. A → B → D → E = 3 + 4 + 2 + 3 = 12 días"
    ],
    "answer": 1,
    "multiple": false
  },
  {
    "question": "11. Lea la descripción de cada fase de la gestión de proyectos según el PMBOK y escriba la palabra que corresponde en el espacio en blanco.",
    "type": "match",
    "leftColumn": [
      "Consiste en definir formalmente el proyecto, identificar a los interesados y aprobar el acta de constitución.",
      "Se determinan el alcance, cronograma, presupuesto, riesgos y calidad del proyecto.",
      "Implica coordinar personas y recursos para ejecutar el plan y producir los entregables.",
      "Se mide el rendimiento del proyecto, se comparan los resultados con el plan y se realizan ajustes.",
      "Se enfoca en entregar el proyecto, documentar lo aprendido y liberar recursos."
    ],
    "rightColumn": [
      "Inicio",
      "Planificación",
      "Ejecución",
      "Monitoreo y Control",
      "Cierre"
    ],
    "answer": {
      "0": 0,
      "1": 1,
      "2": 2,
      "3": 3,
      "4": 4
    }
  },
  {
    "question": "12. Marque lo correcto con respecto a las Ventajas de IaaS",
    "options": [
      "a. Capacidad de respuesta mejorada.- Los clientes pueden suministrar recursos en cuestión de minutos, además de probar y lanzar rápidamente nuevas ideas para más usuarios.",
      "b. Seguridad integral.- Con un alto nivel de seguridad en el sitio, en los centros de datos y mediante el cifrado, las organizaciones a menudo pueden aprovechar la seguridad y protección más avanzadas que podrían proporcionar si alojaran la infraestructura de la nube internamente.",
      "c. Menos latencia, rendimiento mejorado. - Dado que los proveedores de IaaS normalmente operan centros de datos en múltiples zonas geográficas, los clientes de IaaS pueden ubicar aplicaciones y servicios más cerca de los usuarios para minimizar la latencia y maximizar el rendimiento.",
      "d. Acceso más rápido a la mejor tecnología",
      "e. Mayor disponibilidad. - Con IaaS, una empresa puede crear     servidores redundantes fácilmente e incluso crearlos en otras zonas geográficas para garantizar la disponibilidad durante cortes locais o desastres físicos."
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "multiple": true
  },
  {
    "question": "13. El fuzzing testing se utiliza para descubrir errores inesperados enviando datos malformados al sistema.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": 0
  },
  {
    "question": "14. ¿Cuál de las siguientes opciones describe mejor qué es la gestión de proyectos?",
    "options": [
      "a. El diseño de productos digitales sin planificación previa.",
      "b. La aplicación de conocimientos, habilidades, herramientas y técnicas para ejecutar actividades de     un proyecto y cumplir con sus objetivos.",
      "c. Un conjunto de actividades para administrar recursos humanos únicamente.",
      "d. Un método para mantener ocupados a los empleados de una empresa."
    ],
    "answer": 1,
    "multiple": false
  },
  {
    "question": "15. Los objetivos deben ser:",
    "options": [
      "realistas",
      "claros",
      "medibles",
      "apropiados",
      "concretos"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "multiple": true
  },
  {
    "question": "16. Indique si es Verdadero o Falso las siguientes afirmaciones sobre las preguntas de investigación cuantitativa:",
    "type": "match",
    "leftColumn": [
      "Ser específicas, enfocadas o concretas, que sus respuestas sean conocidas.",
      "Contener conceptos (variables) que puedan ser observables o medibles.",
      "Contestarse utilizando medios electrónicos.",
      "Poder responderse recolectando y analizando datos que no sean empíricos."
    ],
    "rightColumn": [
      "Verdadero",
      "Falso"
    ],
    "answer": {
      "0": 1,  // Falso
      "1": 0,  // Verdadero
      "2": 1,  // Falso
      "3": 1   // Falso
    }
  },
  {
    "question": "17. Seleccione si es verdadero o falso los siguientes criterios para plantear un problema de investigación cuantitativa:",
    "type": "match",
    "leftColumn": [
      "El planteamiento debe implicar la posibilidad de ser investigado empíricamente.",
      "El problema debe estar formulado como pregunta, claramente y sin ambigüedad.",
      "El planteamiento debe ser estético. Por ejemplo, no es correcto bajo ninguna circunstancia trabajar algo que pueda dañar a seres humanos o implique racismo.",
      "Cuando el problema asocia variables, fenómenos, eventos, hechos, etc., la o las relaciones deben expresarse de manera general."
    ],
    "rightColumn": [
      "Verdadero",
      "Falso"
    ],
    "answer": {
      "0": 0,  // Verdadero
      "1": 0,  // Verdadero
      "2": 1,  // Falso
      "3": 1   // Falso
    }
  },

  {
    "question": "18. AWS Management Console.- Es una consola de administración de AWS, es una interfaz web para AWS y se utiliza para acceder a servicios de AWS como de Azurre.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": 1
  },
  {
    "question": "19. ¿Cuál es una de las aplicaciones del procesamiento de lenguaje natural?",
    "options": [
      "1. Simulación de vuelo",
      "2. Diseño gráfico",
      "3. Reconocimiento de voz",
      "4. Análisis financiero"
    ],
    "answer": 2,
    "multiple": false
  },
  {
    "question": "20. Relaciona cada función con su área correspondiente:",
    "type": "match",
    "leftColumn": [
      "Identificar, analizar y responder a incertidumbres",
      "Asegura que el proyecto y sus entregables cumplan con los requisitos planificados.",
      "Estima, asigna y controla los costos para que el proyecto se complete dentro del presupuesto",
      "Asegurar que el proyecto incluya solo el trabajo necesario para el éxito del proyecto."
    ],
    "rightColumn": [
      "Gestión de los Riesgos",
      "Gestión de la Calidad",
      "Gestión de los Costos",
      "Gestión del Alcance"
    ],
    "answer": {
      "0": 0,
      "1": 1,
      "2": 2,
      "3": 3
    }
  },

  {
    "question": "21. Una técnica que reduce la dimensionalidad del problema eliminando palabras irrelevantes es",
    "options": [
      "1. Stop words",
      "2. Normalización",
      "3. Stemming",
      "4. Tokenización"
    ],
    "answer": 0,
    "multiple": false
  },
  {
    "question": "22. ¿Qué significa API en el contexto de AWS? Interfaz de Programación de Aplicaciones, es un conjunto de reglas, protocolos y herramientas que permiten a diferentes aplicaciones comunicarse entre sí, especialmente para interactuar con los servicios en la nube de Amazon Web Services.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": 0
  },
  {
    "question": "23. Relaciona cada concepto con su definición correspondiente:",
    "type": "match",
    "leftColumn": [
      "VAN (Valor Actual Neto)",
      "VPN (Valor Presente Neto)",
      "TIR (Tasa Interna de Retorno)"
    ],
    "rightColumn": [
      "Permite analizar la rentabilidad de un proyecto",
      "Diferencia entre el valor presente de ingresos esperados y los costos del proyecto",
      "Tasa de descuento que hace que el valor actual neto sea igual a cero"
    ],
    "answer": {
      "0": 0,
      "1": 1,
      "2": 2
    }
  },
  {
    "question": "24. ¿Qué determina la resolución de una imagen?",
    "options": [
      "1. La profundidad de color",
      "2. El tamaño del archivo",
      "3. El tipo de cámara utilizada",
      "4. El número de píxeles"
    ],
    "answer": 3,
    "multiple": false
  },
  {
    "question": "25. Los falsos negativos son más peligrosos que los falsos positivos desde una perspectiva de seguridad.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": 0
  },
  {
    "question": "26. En la nube de AWS, una VPC es una Virtual Private Cloud,",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": 0
  },
  {
    "question": "27. La gestión de parches y actualizaciones de seguridad solo es necesaria para sistemas operativos, no para aplicaciones de software.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": 1
  },
  {
    "question": "28. ¿Qué operación morfológica es útil para rellenar agujeros en una imagen binaria?",
    "options": [
      "1. Cierre",
      "2. Dilatación",
      "3. Apertura",
      "4. Erosión"
    ],
    "answer": 1,
    "multiple": false
  },
  {
    "question": "29. ¿Qué métrica combina precisión y recall?",
    "options": [
      "1. Accuracy",
      "2. F1-score",
      "3. Especificidad",
      "4. Sensibilidad"
    ],
    "answer": 1,
    "multiple": false
  },
  {
    "question": "30. Relaciona cada fase con su característica correspondiente:",
    "type": "match",
    "leftColumn": [
      "Aceptación del proyecto",
      "Seguimiento y monitoreo",
      "Elaboración del proyecto"
    ],
    "rightColumn": [
      "Validación del cumplimiento con los requisitos",
      "Control del avance y cumplimiento de objetivos",
      "Definición de recursos, tareas y presupuesto"
    ],
    "answer": {
      "0": 0,
      "1": 1,
      "2": 2
    }
  },
  {
    "question": "31. Un bucket es un contenedor de almacenamiento en Amazon S3 donde se guardan archivos (objetos). Es similar a una carpeta o directorio, pero a nivel del sistema de almacenamiento en la nube.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": 0
  },
  {
    "question": "32. ¿Cuál fue un paradigma fundamental en los años 1940 y 1950 para el procesamiento de lenguaje?",
    "options": [
      "1. Algoritmos genéticos",
      "2. Redes neuronales profundas",
      "3. Algoritmos probabilísticos",
      "4. Sistemas expertos"
    ],
    "answer": 2,
    "multiple": false
  },
  {
    "question": "33. Las pruebas de seguridad deben ser diseñadas sin considerar los riesgos del sistema.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": 1
  },
  {
    "question": "34. El análisis dinámico evalúa el comportamiento del software en tiempo de ejecución para detectar problemas de seguridad.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": 0
  },
  {
    "question": "35. ¿Qué es un histograma en el contexto de una imagen?",
    "options": [
      "1. Un formato de archivo",
      "2. Una representación gráfica de la intensidad de los píxeles",
      "3. Un proceso de detección de bordes",
      "4. Un método para comprimir imágenes"
    ],
    "answer": 1,
    "multiple": false
  },
  {
    "question": "36. La autenticación de múltiples factores (MFA) requiere que el usuario verifique su identidad mediante al menos dos elementos diferentes.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": 0
  },
  {
    "question": "37. Relaciona cada componente con su propósito correspondiente:",
    "type": "match",
    "leftColumn": [
      "Aprender de la experiencia del proyecto",
      "Mantener informadas a las partes interesadas",
      "Identificar problemas potenciales y mitigarlos",
      "Verificar que los entregables cumplan los estándares",
      "Asegurar que el proyecto no se desvíe de los límites"
    ],
    "rightColumn": [
      "Evaluación",
      "Comunicación",
      "Riesgos",
      "Calidad",
      "Control del alcance"
    ],
    "answer": {
      "0": 0,
      "1": 1,
      "2": 2,
      "3": 3,
      "4": 4
    }
  },
  {
    "question": "38. Relaciona cada característica con su descripción correspondiente:",
    "type": "match",
    "leftColumn": [
      "Elasticidad",
      "Amplio acceso a la red",
      "Servicios bajo demanda",
      "Medición de servicios",
      "Conjunto de recursos"
    ],
    "rightColumn": [
      "A las aplicaciones se les permite solicitar\nlos recursos que necesitan usar de una forma\nrápida y cambiante (elástica).",
      "Los recursos están disponibles desde la red\ny se acceden a ellos a través de mecanismos\nestándares desde multitud de plataformas clientes.",
      "Una aplicación puede requerir ciertos servicios,\ncomo almacenamiento, computación o hosting,\ny los puede solicitar cuando los requiera.",
      "Las plataformas ofrecen herramientas para monitorizar\nel uso de estos recursos y que se puedan\ncontrolar por parte de los usuarios.",
      "Los recursos físicos (hardware) y los virtuales (software)\nse asignan y reasignan según los requisitos\nde los usuarios y sus aplicaciones."
    ],
    "answer": {
      "0": 0,
      "1": 1,
      "2": 2,
      "3": 3,
      "4": 4
    }
  },
  {
    "question": "39. Ordena correctamente las fases del proceso cuantitativo:",
    "type": "match",
    "leftColumn": [
      "Fase 1",
      "Fase 2",
      "Fase 3",
      "Fase 4",
      "Fase 5",
      "Fase 6",
      "Fase 7",
      "Fase 8",
      "Fase 9",
      "Fase 10"
    ],
    "rightColumn": [
      "Idea",
      "Visualización del alcance del estudio",
      "Definición y selección de la muestra",
      "Análisis de los datos",
      "Desarrollo del diseño de investigación",
      "Elaboración de hipótesis y definición de variables",
      "Datos",
      "Revisión de la literatura y desarrollo del marco o perspectiva teórica",
      "Planteamiento del problema",
      "Información",
      "Elaboración del reporte de resultados",
      "Procesos",
      "Recolección de los datos",
    ],
    "answer": {
      "0": 0,   // Idea
      "1": 8,   // Planteamiento del problema
      "2": 7,   // Revisión de la literatura...
      "3": 1,   // Visualización del alcance...
      "4": 5,   // Elaboración de hipótesis...
      "5": 4,   // Desarrollo del diseño...
      "6": 2,   // Definición y selección de la muestra
      "7": 12,   // Recolección de datos
      "8": 3,   //Análisis de los datos
      "9": 10    // Reporte de resultados
    }
  },
  {
    "question": "40. Ordena correctamente las fases del proceso cualitativo",
    "type": "match",
    "leftColumn": [
      "Fase 1",
      "Fase 2",
      "Fase (3a-3b)",
      "Fase 4",
      "Fase 5",
      "Fase 6",
      "Fase 7",
      "Fase 8",
      "Fase 9",
      "Centro"
    ],
    "rightColumn": [
      "Inmersión en el campo",
      "Interpretación de resultados",
      "Bibliografía",
      "Análisis de los datos",
      "Recolección de los datos",
      "Generación de conocimiento",
      "Definición de la muestra inicial del estudio y acceso a esta",
      "Planteamiento del problema",
      "Literatura existente (marco de referencia)",
      "Inmersión en el campus",
      "Dato",
      "Idea",
      "Elaboración del reporte de resultados",
      "Resultados",
      "Concepción del diseño o abordaje principal del estudio",
    ],
    "answer": {
      "0": 11,  // Idea
      "1": 7,   // Planteamiento del problema
      "2": 0,   // Inmersión en el campo
      "3": 14,  // Concepción del diseño...
      "4": 6,   // Definición de la muestra...
      "5": 4,   // Recolección de los datos
      "6": 3,   // Análisis de los datos
      "7": 1,   // Interpretación de resultados
      "8": 12,  // Elaboración del reporte...
      "9": 8    // Literatura existente (marco de referencia)
    }
  },
  {
    "question": "41. ¿Qué actividad es propia de la fase de seguimiento y monitoreo?",
    "options": [
      "a. Aprobar el acta de inicio",
      "b. Escribir el informe final",
      "c. Realizar auditoría externa",
      "d. Medir indicadores clave de avance"
    ],
    "answer": 3,
    "multiple": false
  },
  {
    "question": "42. ¿Qué caracteriza a los problemas de regresión en el aprendizaje automático?",
    "options": [
      "1. No requiere datos etiquetados",
      "2. Se centra en la detección de anomalías",
      "3. La variable respuesta es cuantitativa",
      "4. La variable respuesta es cualitativa"
    ],
    "answer": 2,
    "multiple": false
  },
  {
    "question": "43. Azure App Service es un servicio de computación en la nube de Microsoft Azure que permite crear, alojar y escalar aplicaciones web, API RESTful y backends móviles de forma sencilla y rápida.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": 0
  },
  {
    "question": "44. La revisión de código es una práctica que se realiza únicamente al final del ciclo de desarrollo de software.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": 1
  },
  {
    "question": "45. ¿Cuál es el efecto de un filtro pasa alto en una imagen?",
    "options": [
      "1. Convierte la imagen a escala de grises",
      "2. limina ruido de alta frecuencia",
      "3. Suaviza los bordes",
      "4. Aumenta la nitidez y resalta detalles finos"
    ],
    "answer": 3
  },
  {
    "question": "46. Durante la elaboración de un proyecto tecnológico, se definen actividades, recursos, cronograma y presupuesto.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": 0
  },
  {
    "question": "47. Dado el siguiente proyecto, ¿cuál es la conclusión más adecuada sobre su viabilidad financiera?",
    "columns": [
      "Inversión inicial",
      "Flujos netos de dinero en",
      "TIR estimada",
      "Tasa de descuento",
      "VAN calculado"
    ],
    "rows": [
      ["$50.000", "5 años", "5%", "3%", "$55.654,80"]
    ],
    "options": [
      "a. No se puede determinar la viabilidad con estos datos",
      "b. El proyecto no es viable porque la TIR es menor que la tasa de descuento",
      "c. El proyecto es viable porque el VAN es negativo",
      "d. El proyecto es viable porque el VAN es positivo y la TIR supera la tasa de descuento"
    ],
    "answer": 3,
  },
  {
    "question": "48. Otra forma de despleagar aplicaciones en Azure es a través de extensiones disponibles para Azure y App Service , las cuales se instalan para conectarse a la suscripción de Azure y luego al servicio de aplicación correcto y cargue el código fuente de la aplicación directamente desde el código.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": 0
  },
  {
    "question": "49. AWS Global Infraestrutura, La infraestructura global de AWS es masiva y está divida en regiones geográficas. Las regiones geográficas se dividen en zonas de disponibilidad separadas.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": 0
  },
  {
    "question": "50. Marque lo correcto con respecto a AWS.",
    "options": [
      "a. Los recursos se distribuyen en todo el mundo y el uso de esos recursos se comparten entre miles y miles de titulares de cuentas de AWS.",
      "b. Los recursos se distribuyen en todo el mundo y el uso de esos recursos se comparten entre miles y miles de titulares de cuentas de AWS.",
      "c. Es una colección de servicios de computación en la nube pública que en conjunto forman una plataforma de computación en la nube, ofrecidas a través de Internet por Amazon.com",
      "d. Las cuentas están completamente aisladas unas de otras en el nivel hipervisor, también tienen la opción de sus propios recursos"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "multiple": true
  },
  {
    "question": "51. Las herramientas de análisis de seguridad de código pueden generar falsositivos, lo que significa que pueden indicar problemas que en realidad no existen.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": 0
  },
  {
    "question": "52. El escaneo de vulnerabilidades automatiza la identificación de configuracioneseguras y debilidades conocidas.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": 0
  },
  {
    "question": "53. ¿Cuál de las siguientes actividades pertenece a la Gestión de los Riesgos del Proyecto?",
    "options": [
      "a. Gestionar las adquisiciones externas del proyecto",
      "b. Verificar que los entregables cumplen con requisitos técnicos",
      "c. Estimar la duración de las tareas del cronograma",
      "d. Identificar amenazas y oportunidades que puedan afectar el proyecto"
    ],
    "answer": 3
  },
  {
    "question": "54. ¿Qué técnica permite detectar vulnerabilidades y errores lógicos en el código fuente sin ejecutar la aplicación?",
    "options": [
      "1. Análisis dinámico",
      "2. Pruebas de penetración",
      "3. Análisis estático de código",
      "4. Fuzzing Testing"
    ],
    "answer": 2
  },
  {
    "question": "55. ¿Cuál de las siguientes técnicas se usa para cifrar datos almacenados en reposo?",
    "options": [
      "1. OAuth",
      "2. AES-256 y RSA",
      "3. Tokens TOTP",
      "4. TLS/SSL"
    ],
    "answer": 1
  },
  {
    "question": "56. Relacione las áreas de conocimiento con sus respectivas herramientas/técnicas y utilidades según el enfoque del PMBOK:",
    "columns": ["Área / Proceso", "Herramienta / Técnica", "Utilidad"],
    "rows": [
      ["Planificación del cronograma", "h1:", "u1:"],
      ["a2:", "Hojas de verificación, histogramas", "Control de calidad y detección de errores"],
      ["Gestión de riesgos", "h3:", "u3:"],
      ["Gestión de integración", "Acta de constitución del proyecto", "u4:"],
      ["a5:", "h5:", "Mide el rendimiento frente a lo planificado"]
    ],
    "options": [
      "a1: Gestión de calidad | a2: Monitoreo y control | h1: Diagrama de Gantt, cronogramas | h3: Análisis cualitativo y cuantitativo de riesgos | h5: Análisis de valor ganado (EVM) | u1: Visualiza el tiempo y las dependencias | u3: Priorizar y medir riesgos | u4: Inicia formalmente el proyecto",
      "a1: Visualiza el tiempo y las dependencias | a2: Análisis cualitativo y cuantitativo de riesgos | h1: Inicia formalmente el proyecto | h3: Gestión de calidad | h5: Análisis de valor ganado (EVM) | u1: Diagrama de Gantt, cronogramas | u3: Monitoreo y control | u4: Priorizar y medir riesgos"
    ],
    "answer": 0
  }
  ,

  {
    "question": "57. ¿Qué métrica se utiliza para calcular la pureza de una división en árboles de decisión?",
    "options": [
      "1. Entropía",
      "2. Media",
      "3. Varianza",
      "4. Desviación estándar"
    ],
    "answer": 0
  },
  {
    "question": "58. ¿Qué técnica se utiliza para dividir el espacio de las variables predictoras en árboles de decisión?",
    "options": [
      "1. Splitting basado en la moda",
      "2. Recursive binary splitting",
      "3. Splitting aleatorio",
      "4. Splitting basado en la media"
    ],
    "answer": 1
  },
  {
    "question": "59. ¿Cuál es la diferencia principal entre un clasificador binario y uno multiclase?",
    "options": [
      "1. La técnica de entrenamiento utilizada",
      "2. El número de clases que pueden predecir",
      "3. La velocidad de predicción",
      "4. La complejidad del modelo"
    ],
    "answer": 1
  },
  {
    "question": "60. ¿Qué técnica se utiliza para generar un sub-árbol después de crear un árbol de decisión grande?",
    "options": [
      "1. Bagging",
      "2. Post-pruning",
      "3. Cross-validation",
      "4. Pre-pruning"
    ],
    "answer": 1
  },
  {
    "question": "61. ¿Qué representa la 'precisión' en el contexto de la clasificación?",
    "options": [
      "1. La proporción de ejemplos predichos como positivos que son realmente positivos",
      "2. La proporción de ejemplos positivos correctamente clasificados",
      "3. La proporción de ejemplos negativos correctamente clasificados",
      "4. La proporción de ejemplos predichos como negativos que son realmente negativos"
    ],
    "answer": 0
  },
  {
    "question": "62. ¿DynamoDB utiliza el modelo de almacenamiento clave-valor y documentos?",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": 0
  },
  {
    "question": "63. ¿Qué es una subpredicción en el contexto de la regresión?",
    "options": [
      "1. Cuando un modelo no puede hacer una predicción.",
      "2. Cuando un modelo predice el valor exacto.",
      "3. Cuando un modelo predice un valor más alto que el valor real",
      "4. Cuando un modelo predice un valor más bajo que el valor real."
    ],
    "answer": 3
  },
  {
    "question": "64. ¿Qué es API Gateway? Gateway es un servicio de administración de API completamente automatizado que permite crear,licar, mantener, monitorear y proteger APIs RESTful",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": 0
  },
  {
    "question": "65. Análisis de Ocurrencia Temprana (TE)\n\nDado el siguiente diagrama PERT, ¿cuál es la ocurrencia temprana (TE) de la actividad D?",
    "type": "single",
    "options": [
      "a. 7 días",
      "b. 8 días",
      "c. 5 días"
    ],
    "answer": 1,
    "multiple": false
  },
  {
    "question": "66. Relaciona cada metodología con una de sus características clave:",
    "type": "match",
    "leftColumn": [
      "Waterfall",
      "Scrum",
      "Kanban"
    ],
    "rightColumn": [
      "Proceso secuencial y lineal",
      "Enfoque iterativo con roles definidos",
      "Flujo visual de tareas"
    ],
    "answer": {
      "0": 0, // Waterfall → Proceso secuencial y lineal
      "1": 1, // Scrum → Enfoque iterativo con roles definidos
      "2": 2  // Kanban → Flujo visual de tareas
    }
  }
  ,
  {
    "question": "67. La revisión de código y las pruebas de penetración son prácticas de seguridad se realizan solo después de que el software ha sido implantado.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": 1
  },
  {
    "question": "68. ¿Cuál de los siguientes roles desempeña un gerente de proyectos de software para contribuir al éxito del proyecto?",
    "options": [
      "a. Programar funcionalidades del backend",
      "b. Diseñar la arquitectura de software",
      "c. Facilitar la comunicación entre el equipo y los interesados",
      "d. Realizar pruebas unitarias de código"
    ],
    "answer": 2,
    "multiple": false
  },
  {
    "question": "69. ¿Cuál es la primera etapa del ciclo de vida del desarrollo seguro de aplicaciones (SDLC)?",
    "options": [
      "1. Planificación",
      "2. Implementación",
      "3. Diseño",
      "4. Análisis"
    ],
    "answer": 0
  },
  {
    "question": "70. El principio de privilegio mínimo implica otorgar a los usuarios el máximoel de acceso posible para facilitar su trabajo.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": 1
  },
  {
    "question": "71. ¿Para evitar el desbordamiento de búfer?",
    "options": [
      "1. Cifrado de datos",
      "2. Uso de contraseñas fuertes",
      "3. Validación de entradas",
      "4. Monitoreo de red"
    ],
    "answer": 2
  },
  {
    "question": "72. ¿Qué ocurre durante la fase de identificación y selección de proyectos?",
    "options": [
      "a. Se entrega el producto final al cliente",
      "b. Se ejecutan las tareas planificadas del proyecto",
      "c. Se revisan los entregables con criterios de calidad",
      "d. Se evalúan las necesidades y oportunidades para definir qué proyectos ejecutar"
    ],
    "answer": 3
  },
  {
    "question": "73. ¿Cuál es el propósito principal de la Gestión de la Integración del Proyecto?",
    "options": [
      "a. Controlar los gastos del proyecto",
      "b. Coordinar todos los elementos del proyecto para trabajar de forma conjunta",
      "c. Garantizar que los entregables cumplan con los estándares de calidad",
      "d. Supervisar el trabajo del equipo técnico"
    ],
    "answer": 1
  },
  {
    "question": "74. ¿Qué es un algoritmo de regresión?",
    "options": [
      "1. Un tipo de algoritmo de aprendizaje supervisado que predice variables cualitativas.",
      "2. Un tipo de algoritmo de aprendizaje no supervisado que predice variables cuantitativas",
      "3. Un tipo de algoritmo de aprendizaje supervisado que predice variables categóricas.",
      "4. Un tipo de algoritmo de aprendizaje supervisado que predice variables numéricas o cuantitativas"
    ],
    "answer": 3
  },
  {
    "question": "75. ¿Qué característica es crucial para el aprendizaje de modelos en PLN?",
    "options": [
      "1. Velocidad de procesamiento",
      "2. Elección del idioma",
      "3. Elección del hardware",
      "4. Volumen de datos"
    ],
    "answer": 3
  },
  {
    "question": "76. En una nube pública, los proveedores externos de servicios en la nube suministran los recursos como un servicio completamente administrado.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": 0
  },
  {
    "question": "77. Marque lo correcto con respecto a Amazon S3",
    "options": [
      "a. Guarda datos como archivos, imágenes, videos, backups, registros, etc., en forma de \"objetos\" dentro de tarjetas CD",
      "b. Su propósito principal es almacenar y recuperar cualquier cantidad de datos desde cualquier parte del mundo, en cualquier momento y a través de Internet.",
      "c. Es un servicio de almacenamiento de objetos en la nube proporcionado por Amazon Web Services (AWS)"
    ],
    "answer": [
      1,
      2
    ],
    "multiple": true
  },
  {
    "question": "78. ¿Cuál de las siguientes tareas corresponde al cierre del proyecto?",
    "options": [
      "a. Firmar el acta de entrega final",
      "b. Generar código fuente adicional",
      "c. Asignar tareas nuevas",
      "d. Ajustar el cronograma"
    ],
    "answer": 0
  },
  {
    "question": "79. Identifique ¿Cuáles de las siguientes son áreas de conocimiento según el PMBOK? (Seleccione todas las correctas)",
    "options": [
      "a. Control Administrativo",
      "b. Gestión de la Comunicación",
      "c. Gestión de recursos",
      "d. Gestión de los stakeholders",
      "e. Gestión del Talento",
      "f. Gestión del Cronograma"
    ],
    "answer": [
      1,
      2,
      3,
      5
    ],
    "multiple": true
  },
  {
    "question": "80. Marque las afirmaciones correctas respecto a Microsoft Azure:",
    "options": [
      "a. Una categoría son las aplicaciones web, los sistemas de bases     de     datos como SQL Server, MariaDB, Postgres y también NoSQL como Cosmos     DB.",
      "b. Otra categoría es IaaS donde están los servicios de     infraestructura como servicio, principalmente máquinas virtuales.",
      "c. Otra categoría es Servicios para comunicación, conexión y     seguridad en     redes.",
      "d. Azure es la plataforma en la nube para implementar     aplicaciones     empresariales que tienen múltiples servicios organizados en diferentes categorías.",
      "e. Otra categoría es Servicios para proteger datos, identidades     y     entornos."
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4,
    ],
    "multiple": true
  },
  {
    "question": "81. ¿Qué tipo de imagen tiene un único canal y utiliza un rango de valores entre 0 y 255?",
    "options": [
      "1. Imagen a color",
      "2. Imagen en escala de grises",
      "3. Imagen binaria",
      "4. Imagen HDR"
    ],
    "answer": 1
  },
  {
    "question": "82. El sistema MAC (Control de Acceso Basado en Políticas) permite modificar las reglas de acceso según las necesidades del usuario.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": 1
  },
  {
    "question": "83. ¿Qué es el procesamiento de lenguaje natural?",
    "options": [
      "1. Un campo del lenguaje simbólico",
      "2. Un campo de la inteligencia artificial",
      "3. Un tipo de hardware",
      "4. Un algoritmo de búsqueda"
    ],
    "answer": 1
  },
  {
    "question": "84. Las implementaciones en la nube publica son complejas y requieren mucho tiempo. Necesitan una importante inversión inicial en infraestructura y recursos humanos. Se tienen que contratar equipos con conocimientos avanzados de codificación e ingeniería para configurar el entorno de nube privada.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": 1
  },
  {
    "question": "85. ¿Qué técnica es utilizada para convertir palabras en números en un modelo vectorial?",
    "options": [
      "1. Bag of Words",
      "2. Deep Learning",
      "3. Modelos probabilísticos",
      "4. Redes neuronales convolucionales"
    ],
    "answer": 0
  },
  {
    "question": "86. En problemas de clasificación binaria, un ejemplo de aplicación sería:",
    "options": [
      "1. Determinación de si un correo es spam o no",
      "2. Estimación de ingresos personales",
      "3. Predicción del precio de un inmueble",
      "4. Agrupación de clientes según preferencias"
    ],
    "answer": 0
  },
  {
    "question": "87. Relaciona fase de la gestión de proyectos con su actividad principal correspondiente:",
    "type": "match",
    "leftColumn": [
      "Transferir productos o servicios finales",
      "Definir qué está dentro y fuera del proyecto",
      "Monitorear cronograma y presupuesto",
      "Elaborar el acta de constitución del proyecto",
      "Asignar tareas y responsabilidades"
    ],
    "rightColumn": [
      "Cierre",
      "Planificación",
      "Seguimiento y Control",
      "Inicio",
      "Ejecución"
    ],
    "answer": {
      "0": 0, // Transferir productos → Cierre
      "1": 1, // Definir qué está dentro/fuera → Planificación
      "2": 2, // Monitorear cronograma → Seguimiento y Control
      "3": 3, // Acta de constitución → Inicio
      "4": 4  // Asignar tareas → Ejecución
    }
  },
  {
    "question": "88. Una forma de desplegar aplicaciones en la nube de Azure es: Emplear el usuario de cliente FTP, para conectarse a Azure App Service a través de sus credenciales y luego a través del cliente FTP, y así poder ir a cargar los paquetes de la aplicación en el servicio de la aplicación.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": 0
  },
  {
    "question": "89. ¿Cuál de las siguientes afirmaciones es verdadera sobre la matriz de confusión?",
    "options": [
      "1. Sus filas representan las clases predichas y las columnas las clases reales",
      "2. No se puede utilizar para problemas multiclase",
      "3. Solo se utiliza para clasificación binaria",
      "4. Es útil para evaluar la precisión de un clasificador"
    ],
    "answer": 3
  },
  {
    "question": "90. ¿Cuál de las siguientes responsabilidades pertenece a un gerente de proyectos de software?",
    "options": [
      "a. Escribir código fuente en JavaScript",
      "b. Controlar el cumplimiento del cronograma y presupuesto del proyecto",
      "c. Ejecutar pruebas automatizadas",
      "d. Realizar diseño gráfico de interfaces"
    ],
    "answer": 1
  },
  {
    "question": "91. ¿Cuál es el objetivo principal de las pruebas de penetración?",
    "options": [
      "a. Documentar el código",
      "b. Mejorar el rendimiento del software",
      "c. Identificar vulnerabilidades explotables",
      "d. Verificar la usabilidad de la aplicación"
    ],
    "answer": 2
  },
  {
    "question": "92. ¿Qué es una ventaja del clasificador Näive Bayes?",
    "options": [
      "a. Siempre tiene un rendimiento superior a otros clasificadores",
      "b. Funciona bien incluso con la suposición de independencia entre     variables",
      "c. Considera todas las variables como dependientes",
      "d. No requiere datos de entrenamiento"
    ],
    "answer": 1
  },
  {
    "question": "93. ¿Qué práctica se recomienda para el manejo de errores en aplicaciones?",
    "options": [
      "a. Usar bloques try-catch",
      "b. Ignorar los errores menores",
      "c. Mostrar mensajes de error detallados al usuario",
      "d. No registrar errores"
    ],
    "answer": 0
  },
  {
    "question": "94. ¿Qué tipo de pruebas se centran en el comportamiento del software en tiempo de ejecución?",
    "options": [
      "a. Análisis estático",
      "b. Pruebas de penetración",
      "c. Fuzzing Testing",
      "d. Análisis dinámico"
    ],
    "answer": 3
  },
  {
    "question": "95. Marque los Modelos de Servicio que se manejan en la nube.",
    "options": [
      "a. IP",
      "b. DNS",
      "c. PaaS",
      "d. SaaS",
      "e. IaaS"
    ],
    "answer": [2, 3, 4],
    "multiple": true
  },
  {
    "question": "96. Cloud Privada.- En la Cloud Privada, la infraestructura se usa solo dentro de una única organización En una nube privada, una única organización controla y mantiene la infraestructura subyacente para suministrar los recursos de TI.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": 0
  },
  {
    "question": "97. El centro de implementación del portal de Azure es una de las formas de implementar aplicaciones, esta opción se habilita mediante el uso de acciones de GitHub.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": 0
  },
  {
    "question": "98. El gerente de proyectos de software debe dominar únicamente habilidades técnicas y no necesita desarrollar habilidades interpersonales.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": 1
  },
  {
    "question": "99. ¿En qué momento se considera que nace un proyecto?",
    "options": [
      "a. Cuando se asigna un presupuesto.",
      "b. Cuando se identifica una necesidad, oportunidad o demanda que requiere una solución específica.",
      "c. Cuando el cliente aprueba el producto final.",
      "d. Cuando se contrata al gerente del proyecto."
    ],
    "answer": 1
  },
  {
    "question": "100. ¿Qué técnica combina árboles de decisión utilizando Bagging y selección aleatoria de variables?",
    "options": [
      "1. Boosting",
      "2. Decision Trees",
      "3. Random Forests",
      "4. Gradient Boosting"
    ],
    "answer": 2
  },
  {
    "question": "101. El uso de bibliotecas y componentes de terceros no presenta riesgos de seguridad en el desarrollo de aplicaciones.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": 1
  },
  {
    "question": "102. ¿Qué se debe hacer para mitigar el riesgo de inyección SQL?",
    "options": [
      "1. Implementar firewalls",
      "2. Desplegar la aplicación en una red segura",
      "3. Escapar caracteres especiales",
      "4. Usar contraseñas complejas"
    ],
    "answer": 2
  }

  //AGREGAS MAS PREGUNTAS



];

/*
AGREGAR MÁS PREGUNTAS EN UNO DE LOS 3 FORMATOS JSON QUE HAY:

🟦 1. Pregunta de opción múltiple (una o varias respuestas)
{
  "question": "",           // Enunciado de la pregunta
  "options": [
    "", "", "", ""          // Lista de opciones (mínimo 2)
  ],
  "answer": 0,              // Índice de la respuesta correcta, o arreglo: [0, 2]
  "multiple": false         // true si hay más de una respuesta correcta
},

🟩 2. Pregunta de emparejamiento (tipo "match")
{
  "question": "",           // Enunciado de la pregunta
  "type": "match",          // Tipo debe ser "match"
  "leftColumn": [
    "", "", "", ""          // Elementos del lado izquierdo
  ],
  "rightColumn": [
    "", "", "", ""          // Elementos del lado derecho
  ],
  "answer": {
    "0": 0,                 // El 0 izquierdo se relaciona con el 0 derecho
    "1": 1,
    "2": 2,
    "3": 3
  }
},

🟨 3. Pregunta con tabla (por ejemplo, matriz RACI, cronograma, etc.)
{
  "question": "",           // Enunciado de la pregunta
  "columns": [
    "", "", ""              // Títulos de las columnas de la tabla
  ],
  "rows": [
    ["", "", ""],           // Cada subarreglo representa una fila de la tabla
    ["", "", ""]
  ],
  "options": [
    "", "", ""              // Opciones de respuesta
  ],
  "answer": 0               // Índice de la opción correcta
}
*/
