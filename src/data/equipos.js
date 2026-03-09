// src/data/equipos.js

import imgParlantes from "../assets/AlquilerSistemasdeParlantes.jpg";
import imgSubwoofers from "../assets/AlquilerSubwoofersBajos.jpg";
import imgConsolas from "../assets/AlquilerConsolasMezcladorasdeAudio.jpg";
import imgInalambricos from "../assets/AlquilerMicrófonosInalámbricosProfesionales.jpg";
import imgAlambricos from "../assets/AlquilerMicrófonosAlámbricos.jpg";
import imgPowers from "../assets/AlquilerAmplificadoresdePotenciaPowers.jpg";
import imgLucesRitmicas from "../assets/AlquilerSetdeLucesLEDRítmicas.jpg";
import imgCabezasMoviles from "../assets/AlquilerCabezasMóviles.jpg";
import imgHumo from "../assets/AlquilerMáquinasdeHumoyEfectos.jpg";
import imgTruss from "../assets/AlquilerEstructurasMetálicasTruss.jpg";
import imgRetornos from "../assets/AlquilerRetornosMonitores de Escenario.jpg";
import imgPedestales from "../assets/AlquilerPedestalesyAccesorios.png";
import imgReflectores from "../assets/ReflectoresLED.png";
import imgGeneradores from "../assets/GeneradorElectrico.png";

export const equipos = [
  {
    id: 1,
    slug: "sistemas-parlantes",
    nombre: "Sistemas de Parlantes (Activos/Pasivos)",
    categoria: "parlantes",
    descripcion: "Sonido principal potente y de alta fidelidad para música estruendosa o claridad en voces.",
    descripcionLarga: "Sonido principal potente y de alta fidelidad. Desde pequeños parlantes portátiles hasta altas columnas con trípodes, ideales para música estruendosa o claridad extrema en conferencias y voces.",
    imagen: imgParlantes,
    especificaciones: [
      { label: "Tipo", value: "Activos (autoamplificados) y Pasivos" },
      { label: "Uso Ideal", value: "Fiestas, Bodas, Conferencias, Bandas en vivo" },
      { label: "Opciones", value: "Configuraciones en pedestales o volados" }
    ],
  },
  {
    id: 2,
    slug: "subwoofers",
    nombre: "Subwoofers (Bajos)",
    categoria: "parlantes",
    descripcion: "El golpe de pecho profundo, completamente esencial para fiestas, bodas y DJs.",
    descripcionLarga: "El golpe de pecho profundo, completamente esencial para fiestas, bodas y DJs que requieren sentir la música tanto como escucharla. Añade la dimensión de graves acústicos.",
    imagen: imgSubwoofers,
    especificaciones: [
      { label: "Propósito", value: "Extensión de potentes frecuencias bajas" },
      { label: "Impacto Visual", value: "Gabinetes ubicados al nivel del piso" },
    ],
  },
  {
    id: 3,
    slug: "consolas-audio",
    nombre: "Consolas Mezcladoras de Audio",
    categoria: "consolas",
    descripcion: "El cerebro del sonido, donde se conectan bandas, instrumentos, DJs y micrófonos.",
    descripcionLarga: "El cerebro del sonido de tu evento. Aquí se conectan las orquestas, DJs y todos los micrófonos para equilibrar volumen, ecualización y efectos con nitidez cristalina.",
    imagen: imgConsolas,
    especificaciones: [
      { label: "Tipos", value: "Analógicas y Digitales controladas por iPad" },
      { label: "Capacidad", value: "Desde 4 hasta 32+ canales simultáneos" },
    ],
  },
  {
    id: 4,
    slug: "microfonos-inalambricos",
    nombre: "Micrófonos Inalámbricos Profesionales",
    categoria: "microfonos",
    descripcion: "Libertad de movimiento total para cantantes, animadores o presentadores sin cortes de señal.",
    descripcionLarga: "Libertad de movimiento total para cantantes, animadores o presentadores sin riesgo de cortes de señal ni acoples, gracias a nuestros sistemas sincronizados en banda limpia UHF.",
    imagen: imgInalambricos,
    especificaciones: [
      { label: "Alcance", value: "Largo alcance (hasta 100m libres)" },
      { label: "Kit Básico", value: "Micrófono de mano, receptor base y pedestales extras" },
    ],
  },
  {
    id: 5,
    slug: "microfonos-alambricos",
    nombre: "Micrófonos Alámbricos (Con Cable)",
    categoria: "microfonos",
    descripcion: "Solución clásica e infalible, ideales para músicos, bateristas y coristas de orquesta.",
    descripcionLarga: "Solución clásica e infalible. Ideales para el podio de oradores estáticos, bandas en movimiento reducido, baterías acústicas y coristas de orquesta. Respuesta fiel y cero latencia.",
    imagen: imgAlambricos,
    especificaciones: [
      { label: "Patrón", value: "Cardioide (Rechazan acoples de feedback)" },
      { label: "Conectividad", value: "Cables XLR resistentes y de amplia longitud" },
    ],
  },
  {
    id: 6,
    slug: "amplificadores-potencia",
    nombre: "Amplificadores de Potencia (Powers)",
    categoria: "parlantes",
    descripcion: "La fuerza bruta necesaria para dar potencia a sistemas pasivos en grandes explanadas.",
    descripcionLarga: "La fuerza bruta eléctrica requerida para dar vida y potencia sonora a sistemas gigantes de parlantes pasivos en grandes explanadas, discotecas al aire libre o escenarios.",
    imagen: imgPowers,
    especificaciones: [
      { label: "Desempeño", value: "Alto rendimiento de horas continuas" },
      { label: "Protecciones", value: "Tecnología térmica anti picos de voltaje" },
    ],
  },
  {
    id: 7,
    slug: "luces-led-ritmicas",
    nombre: "Set de Luces LED Rítmicas",
    categoria: "luces",
    descripcion: "Iluminación colorida para la pista de baile que reacciona de forma inteligente a la música.",
    descripcionLarga: "Iluminación colorida para tu pista de baile que reacciona inteligentemente a los ritmos y subidas de la música (audiorítmica). Tiñen paredes lisas creando una atmósfera inmersiva festiva.",
    imagen: imgLucesRitmicas,
    especificaciones: [
      { label: "Modos de uso", value: "Audiorítmico, o centralizadas por controlador DMX" },
      { label: "Paleta", value: "Millones de combinaciones RGBW cálidas y frías" },
    ],
  },
  {
    id: 8,
    slug: "cabezas-moviles",
    nombre: "Cabezas Móviles (Luces Robóticas)",
    categoria: "luces",
    descripcion: "Efectos visuales dinámicos de haz concentrado nivel 'concierto' para sorprender a tus invitados.",
    descripcionLarga: "Efectos visuales dinámicos de movimiento giratorio veloz 360 y haz de luz tipo sable. Nivel 'concierto' para enloquecer a los asistentes con proyecciones y figuras pintadas en el techo.",
    imagen: imgCabezasMoviles,
    especificaciones: [
      { label: "Control", value: "Ingeniero de luces asignado o de giro automático libre" },
      { label: "Nivel de Show", value: "Impacto altísimo que embellecerá tus fotografías finales" },
    ],
  },
  {
    id: 9,
    slug: "maquinas-humo-efectos",
    nombre: "Máquinas de Humo y Efectos Especiales",
    categoria: "luces",
    descripcion: "Para resaltar los rayos láser y darle cuerpo y atmósfera a la iluminación general.",
    descripcionLarga: "El secreto para que la iluminación logre el ansiado nivel club o disco. La neblina dispersa resalta en 3D volumétrico los rayos de las cabezas móviles y el láser sobre la pista de baile.",
    imagen: imgHumo,
    especificaciones: [
      { label: "Cobertura", value: "Disparo controlado para salones medianos y carpas grandes" },
      { label: "Líquido Base", value: "Fluido homologado no-tóxico y sin residuo graso u olores fuertes" },
    ],
  },
  {
    id: 10,
    slug: "estructuras-metalicas",
    nombre: "Estructuras Metálicas (Truss)",
    categoria: "estructuras",
    descripcion: "Armazones seguros y modulares para colgar de forma segura luces y elevar parlantes aéreos.",
    descripcionLarga: "Armazones visualmente modernos, seguros, y modulares donde amarramos y elevamos de forma segura las luces robóticas o clusters colgantes y pantallas publicitarias del alcance del público.",
    imagen: imgTruss,
    especificaciones: [
      { label: "Composición", value: "Soldaduras en aluminio de grado aviación de alta resistencia" },
      { label: "Formatos", value: "Arco clásico, porterías rectas o cruces perimetrales, se arman al gusto" },
    ],
  },
  {
    id: 11,
    slug: "monitores-escenario",
    nombre: "Retornos / Monitores de Escenario",
    categoria: "parlantes",
    descripcion: "Parlantes en forma de cuña para que los músicos y cantantes se escuchen a sí mismos nítidamente.",
    descripcionLarga: "Parlantes tipo 'wedge' fabricados en forma de cuña que se sitúan sobre nivel del piso disparando sonido directo para la banda, no para el público.",
    imagen: imgRetornos,
    especificaciones: [
      { label: "Función", value: "El músico o speaker se escucha libremente en tiempo real a sí mismo" },
      { label: "Beneficios", value: "Previene pérdida del tono del cantante y ritmo del presentador" },
    ],
  },
  {
    id: 12,
    slug: "pedestales-accesorios",
    nombre: "Pedestales y Accesorios",
    categoria: "accesorios",
    descripcion: "Soportes metálicos y trípodes firmes para una instalación segura de luces y parlantes perimetrales.",
    descripcionLarga: "Desde trípodes para elevar estratégicamente parlantes por sobre cabezas, a bases para micrófonos elegantes. Accesorios que ocultan cables, brindan estética pulcra y evitan desastres en bodas formales.",
    imagen: imgPedestales,
    especificaciones: [
      { label: "Disponibilidad", value: "Se incluyen por obligación con el kit cotizado u optimizados a petición extra" },
      { label: "Ergonomía", value: "Regulables según estaturas y antideslizantes para suelos resbalosos" },
    ],
  },
  {
    id: 13,
    slug: "reflectores-led-potencia",
    nombre: "Reflectores LED de Alta Potencia",
    categoria: "luces",
    descripcion: "Iluminación arquitectónica y perimetral de inmensa potencia luminosa para estadios, fachadas y toldos masivos.",
    descripcionLarga: "Proyectores de luz tipo reflector (bañadores) pensados para campos abiertos y estructuras inmensas. Desplegan un haz súper amplio garantizando máxima visibilidad en plena oscuridad de la noche.",
    imagen: imgReflectores,
    especificaciones: [
      { label: "Potencia Nominal", value: "Opciones desde 300W, 400W hasta 1000W LED" },
      { label: "Protección Climática", value: "Exterior Nivel IP65 (Soporta lluvia y polvo intenso)" },
    ],
  },
  {
    id: 14,
    slug: "generadores-electricos",
    nombre: "Generadores Eléctricos",
    categoria: "infraestructura",
    descripcion: "Plantas de energía portátiles industriales para respaldar audio e iluminación en locaciones sin suministro.",
    descripcionLarga: "Indispensables para bodas al aire libre, conciertos campestres o prevención ante cortes municipales. Brindan de forma insonorizada toda la electricidad requerida por racks de potencias gigantes.",
    imagen: imgGeneradores,
    especificaciones: [
      { label: "Combustible y Duración", value: "Diésel o Gasolina optimizado para horas de uso ininterrumpido" },
      { label: "Control de Flujo", value: "Tecnología AVR (Salida estable para no quemar equipos sensibles)" },
    ],
  }
];
