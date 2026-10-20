
export interface MassTime {
  days: string;
  times: string[];
  note?: string;
  icon?: string;
}

export interface ClergyMember {
  name: string;
  role: string;
  bio: string;
  quote?: string;
}

export interface Ministry {
  id: string;
  name: string;
  category: 'jovenes' | 'solidaridad' | 'liturgia' | 'formacion' | 'familia';
  categoryLabel: string;
  shortDesc: string;
  fullDesc: string;
  targetAudience: string;
  activities: string[];
  schedule: string;
  location: string;
  contactPerson: string;
  contactEmail?: string;
  image: string;
  icon: string;
}

export interface Experience {
  id: string;
  title: string;
  date: string;
  category: string;
  description: string;
  image: string;
  gallery?: string[];
  videoUrl?: string;
  relatedMinistry?: string;
}

export interface Announcement {
  id: string;
  title: string;
  date: string;
  time?: string;
  location: string;
  summary: string;
  badge: string;
  linkText?: string;
  linkHref?: string;
}

export interface PatronSaintInfo {
  name: string;
  title: string;
  century: string;
  image: string;
  feastDate: string;
  quote: string;
  birthplace: string;
  role: string;
  context: string;
  treasuresStory: string;
  martyrdom: string;
  patronage: string[];
  sources: string;
}

export interface ParishConfig {
  name: string;
  fullName: string;
  patronSaint: string;
  patronFeastDate: string;
  patronDetails?: PatronSaintInfo;
  diocese: string;
  motto: string;
  welcomeMessage: string;
  welcomeQuote: string;
  foundedYear: number;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    postalCode: string;
    country: string;
    googleMapsUrl: string;
    googleMapsEmbed: string;
  };
  contact: {
    phone: string;
    phoneDisplay: string;
    directPhone?: string;
    directPhoneDisplay?: string;
    whatsapp: string;
    whatsappMessage: string;
    email: string;
    officeHours: string;
  };
  social: {
    facebook: string;
    instagram: string;
    youtube: string;
  };
  schedules: {
    masses: MassTime[];
    confessions: MassTime[];
    adoration: MassTime[];
    office: MassTime[];
  };
  clergy: ClergyMember[];
  history: {
    summary: string;
    milestones: { year: string; title: string; description: string }[];
  };
  values: {
    mission: string;
    vision: string;
    pillars: { title: string; desc: string; icon: string }[];
  };
  ministries: Ministry[];
  experiences: Experience[];
  announcements: Announcement[];
}

export const parishData: ParishConfig = {
  name: "Parroquia San Lorenzo",
  fullName: "Parroquia San Lorenzo",
  patronSaint: "San Lorenzo Diácono y Mártir",
  patronFeastDate: "10 de Agosto",
  patronDetails: {
    name: "San Lorenzo Mártir",
    title: "Diácono y Mártir de la Iglesia de Roma",
    century: "Siglo III (m. 258 d. C.)",
    image: "/images/san-lorenzo-martir.png",
    feastDate: "10 de Agosto",
    quote: "«Estos son los verdaderos tesoros de la Iglesia: los pobres, los enfermos y los marginados.»",
    birthplace: "Hispania (posiblemente Huesca), trasladado luego a Roma",
    role: "Archidiácono nombrado por el Papa Sixto II; responsable de administrar los bienes eclesiásticos y asistir a pobres, huérfanos y viudas.",
    context: "Durante la sangrienta persecución del emperador Valeriano, el Papa Sixto II fue martirizado el 6 de agosto del año 258 d. C.",
    treasuresStory: "Al exigirle las autoridades romanas la entrega de las riquezas materiales, Lorenzo pidió unos días de plazo, repartió todo entre los más necesitados y, presentándose ante el prefecto romano junto a los pobres y enfermos, proclamó con valentía: «¡Estos son los verdaderos tesoros de la Iglesia!»",
    martyrdom: "Por su fidelidad y desafío al poder pagano, fue condenado a muerte y martirizado sobre una parrilla ardiente el 10 de agosto del año 258 d. C.",
    patronage: [
      "Diáconos",
      "Cocineros",
      "Bomberos",
      "Bibliotecarios",
      "Comediantes"
    ],
    sources: "Vatican News y ACI Prensa"
  },
  diocese: "Arquidiócesis de Santiago de los Caballeros",
  motto: "Un faro de fe viva, arte coral, esperanza y caridad fraternal en Santiago Oeste.",
  welcomeMessage: "La Parroquia San Lorenzo es un importante centro de vida espiritual, comunitaria y cultural situada en el sector de Cienfuegos / Monte Bonito, dentro del municipio de Santiago Oeste (Santiago de los Caballeros). Te damos la más cordial bienvenida a nuestra casa común.",
  welcomeQuote: "«Estos son los tesoros de la Iglesia: los pobres, los humildes y todos aquellos que sirven con corazón sincero.» (San Lorenzo)",
  foundedYear: 1988,
  address: {
    street: "Avenida 30 de Caballeros No. 7",
    neighborhood: "Monte Bonito / Cienfuegos",
    city: "Santiago Oeste (Santiago de los Caballeros)",
    postalCode: "51000",
    country: "República Dominicana",
    googleMapsUrl: "https://maps.google.com/?q=Parroquia+San+Lorenzo+Avenida+30+de+Caballeros+Santiago+Oeste+Cienfuegos",
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15045.2!2d-70.74!3d19.46!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDI3JzM2LjAiTiA3MMKwNDQnMjQuMCJX!5e0!3m2!1ses!2sdo!4v1700000000000!5m2!1ses!2sdo"
  },
  contact: {
    phone: "+18095705327",
    phoneDisplay: "809-570-5327",
    directPhone: "+18096916057",
    directPhoneDisplay: "809-691-6057",
    whatsapp: "18095705327",
    whatsappMessage: "Hola, me comunico desde el sitio web de la Parroquia San Lorenzo y deseo consultar sobre...",
    email: "contacto@parroquiasanlorenzo.org",
    officeHours: "Lunes a Viernes de 8:30 am a 12:30 pm y de 2:30 pm a 6:00 pm. Sábados de 9:00 am a 12:00 pm."
  },
  social: {
    // TODO: Replace with official parish page URLs once available
    facebook: "",
    instagram: "",
    youtube: ""
  },
  schedules: {
    masses: [
      {
        days: "Lunes a Viernes",
        times: ["7:00 am", "6:30 pm"],
        note: "Misa matutina y Misa comunitaria vespertina con rezo previo del Santo Rosario (6:00 pm)."
      },
      {
        days: "Sábados",
        times: ["6:30 pm"],
        note: "Misa comunitaria vespertina con bendición especial para familias, jóvenes y enfermos."
      },
      {
        days: "Domingos",
        times: ["8:00 am", "10:00 am", "6:30 pm"],
        note: "8:00 am Misa Parroquial | 10:00 am Misa con Niños y Familias | 6:30 pm Misa Juvenil Comunitaria."
      }
    ],
    confessions: [
      {
        days: "Martes a Sábados",
        times: ["6:00 pm a 6:30 pm"],
        note: "Media hora antes de la Santa Misa o al concluir la celebración eucarística."
      },
      {
        days: "Primeros Viernes de Mes",
        times: ["4:30 pm a 6:30 pm"],
        note: "Confesiones continuas durante la exposición y Adoración del Santísimo Sacramento."
      },
      {
        days: "Acompañamiento Espiritual",
        times: ["Horario de Despacho"],
        note: "Para confesión o dirección espiritual con el sacerdote, consultar en secretaría parroquial."
      }
    ],
    adoration: [
      {
        days: "Todos los Jueves",
        times: ["5:30 pm a 6:30 pm"],
        note: "Hora Santa comunitaria y bendición con el Santísimo Sacramento antes de la Santa Misa."
      },
      {
        days: "Primeros Viernes de Mes",
        times: ["8:00 am a 6:30 pm"],
        note: "Jornada de Adoración Eucarística y oración por las familias, vocaciones y la comunidad de Santiago Oeste."
      }
    ],
    office: [
      {
        days: "Lunes a Viernes",
        times: ["8:30 am - 12:30 pm", "2:30 pm - 6:00 pm"],
        note: "Trámites sacramentales (Bautismos, Bodas, Confirmaciones), intenciones de Misa y certificados."
      },
      {
        days: "Sábados",
        times: ["9:00 am - 12:00 pm"],
        note: "Atención exclusiva para consultas generales e intenciones de misa."
      }
    ]
  },
  clergy: [
    {
      name: "Rvdo. P. Roberto Escaño",
      role: "Administrador Parroquial",
      bio: "Sacerdote al frente de la administración pastoral de la Parroquia San Lorenzo en la Arquidiócesis de Santiago de los Caballeros. Con celo apostólico y cercanía a la comunidad, guía la vida espiritual, el trabajo pastoral con las familias y el compromiso social en Monte Bonito y Cienfuegos.",
      quote: "«Nuestra misión en Santiago Oeste es ser una Iglesia viva, servidora y de puertas abiertas, donde cada familia encuentre consuelo, dignidad y la luz del Evangelio.»"
    },
    {
      name: "Consejo Pastoral y Comunitario",
      role: "Animación y Liderazgo Pastoral",
      bio: "Equipo de laicos comprometidos, agentes de pastoral y delegados comunitarios que coordinan las diversas áreas de evangelización, caridad y servicio en Monte Bonito y Cienfuegos.",
      quote: "«Como comunidad parroquial caminamos juntos, compartiendo la fe y colaborando activamente por el bienestar de nuestros sectores populares.»"
    }
  ],
  history: {
    summary: "La historia de la Parroquia San Lorenzo está estrechamente ligada a la fundación y al desarrollo comunitario, social y humano de Cienfuegos (hoy cabecera del municipio Santiago Oeste). Nacida del dolor de un incendio y elevada como símbolo de resiliencia, esta comunidad parroquial ha sido faro espiritual, cívico y cultural para miles de familias santiagueras.",
    milestones: [
      {
        year: "1975",
        title: "El Incendio de El Ejido y el Nacimiento de Cienfuegos",
        description: "El 2 de agosto de 1975, un voraz incendio devastó el Callejón de El Ejido. Cientos de familias perdieron sus viviendas y fueron reubicadas por el Gobierno en terrenos al oeste de Santiago de los Caballeros, dando origen al sector de Cienfuegos. La Iglesia acompañó a los pobladores y encomendó el nuevo asentamiento a San Lorenzo Mártir — patrono de la prueba del fuego —, convirtiendo la tragedia en símbolo de resiliencia y esperanza."
      },
      {
        year: "1980 – 1990",
        title: "De Ermita a Parroquia: Crecimiento y Erección Canónica",
        description: "A medida que la población creció aceleradamente, la pequeña capilla comunitaria se transformó en un centro religioso formal. La Arquidiócesis de Santiago elevó la demarcación al rango de parroquia, dando respuesta a la creciente demanda de bautismos, matrimonios y catequesis. El templo principal quedó ubicado en la Avenida 30 de Caballeros, como sede de los sectores dependientes de Cienfuegos y Monte Bonito."
      },
      {
        year: "2000 – 2010",
        title: "Protagonismo Cívico: La Lucha por el Municipio Santiago Oeste",
        description: "La parroquia se convirtió en punto de encuentro cívico. Sacerdotes y líderes laicos de San Lorenzo participaron junto a organizaciones sociales en las demandas por agua potable, asfaltado, escuelas, seguridad y salud. La parroquia fue sede de asambleas y misas de acción de gracias promovidas por el Comité Santiago Oeste Municipio, apoyando las fiestas patronales que unían el aniversario de Cienfuegos con San Lorenzo cada agosto."
      },
      {
        year: "1 – 10 Agosto",
        title: "Fiestas Patronales de San Lorenzo Mártir",
        description: "Cada año, del 1 al 10 de agosto, la comunidad celebra sus patronales con novena, misas solemnes encabezadas por obispos o vicarios de la Arquidiócesis, procesiones por las calles principales de Cienfuegos y actividades culturales. Es el momento de mayor esplendor, donde el Coro Infantil, grupos juveniles y comunidades eclesiales muestran su vitalidad y arraigo."
      },
      {
        year: "Hoy",
        title: "Proyección Cultural y Pastoral Bajo el Rvdo. P. Roberto Escaño",
        description: "Bajo la administración pastoral del Rvdo. P. Roberto Escaño, la parroquia continúa su misión evangelizadora, caritativa y cultural. El Coro Infantil dirigido por el Mtro. Edward Grullón Tavares (Edward Gruta) es el más visible emblema de su arraigo en la expresión artística local, dinamizando festividades patronales y comunitarias de toda la demarcación."
      }
    ]
  },
  values: {
    mission: "Evangelizar con gozo bajo los lineamientos de la zona pastoral de la Arquidiócesis de Santiago de los Caballeros, coordinando la catequesis sacramental, las celebraciones litúrgicas, la proyección cultural y el apoyo social solidario para las familias de escasos recursos de Santiago Oeste.",
    vision: "Consolidarnos como un punto de referencia espiritual, cultural y social vivo en Santiago Oeste, donde la fe en Jesucristo, el arte coral y el desarrollo humano dignifiquen a cada persona de Cienfuegos y Monte Bonito.",
    pillars: [
      {
        title: "Liturgia y Oración",
        desc: "Centramos nuestra vida comunitaria en la Santa Eucaristía y la devoción viva a Dios bajo el testimonio valiente de San Lorenzo.",
        icon: "cross"
      },
      {
        title: "Educación y Valores",
        desc: "Colaboramos estrechamente con centros educativos y obras sociales para el desarrollo integral de los niños y jóvenes de Cienfuegos.",
        icon: "book"
      },
      {
        title: "Cultura y Arte Coral",
        desc: "Impulsamos el talento artístico infantil y juvenil a través del Coro Infantil y expresiones culturales que enriquecen la fe comunitaria.",
        icon: "music"
      },
      {
        title: "Solidaridad Fraterna",
        desc: "Promovemos el auxilio mutuo y la caridad activa con las familias más necesitadas de Monte Bonito y Santiago Oeste.",
        icon: "heart"
      }
    ]
  },
  ministries: [
    {
      id: "coro-infantil-san-lorenzo",
      name: "Coro Infantil de la Parroquia San Lorenzo",
      category: "liturgia",
      categoryLabel: "Música y Cultura",
      shortDesc: "Iniciativa artística y religiosa dirigida por el maestro Edward Grullón Tavares (Edward Gruta), orgullo de Santiago Oeste.",
      fullDesc: "Destacada agrupación coral que agrupa a niños y niñas de familias católicas de la zona de Cienfuegos y Monte Bonito. Bajo la experta dirección del maestro Edward Grullón Tavares (Edward Gruta), el coro es ampliamente reconocido en la Arquidiócesis por sus hermosas interpretaciones en festividades religiosas y sus tradicionales y esperados conciertos de Navidad.",
      targetAudience: "Niños y niñas de la comunidad (7 a 15 años) con vocación por el canto y la música litúrgica",
      activities: [
        "Formación vocal, respiración y técnica de canto coral infantil",
        "Ensayos semanales para el repertorio litúrgico, clásico y festivo",
        "Animación musical de solemnidades religiosas y fiestas patronales",
        "Presentación de los tradicionales Conciertos de Navidad en la comunidad"
      ],
      schedule: "Ensayos semanales (horarios por grupos corales)",
      location: "Templo Parroquial San Lorenzo / Salón Comunitario",
      contactPerson: "Mtro. Edward Grullón Tavares (Edward Gruta)",
      contactEmail: "coro@parroquiasanlorenzo.org",
      image: "/images/choir-liturgy.jpg",
      icon: "music"
    },
    {
      id: "pastoral-social-educativa",
      name: "Pastoral Social y Red Educativa Comunitaria",
      category: "solidaridad",
      categoryLabel: "Solidaridad",
      shortDesc: "Acción social, colaboración con centros educativos y formación en valores en Cienfuegos y Monte Bonito.",
      fullDesc: "Su radio de acción e influencia se entrelaza activamente con centros educativos y obras sociales de la demarcación de Cienfuegos, colaborando estrechamente con el desarrollo humano y la formación en valores de los sectores populares de Santiago Oeste.",
      targetAudience: "Comunidad educativa, voluntarios y familias de Santiago Oeste",
      activities: [
        "Articulación con escuelas y colegios para talleres de valores",
        "Acompañamiento a familias en condiciones de vulnerabilidad",
        "Campañas de útiles escolares, alimentos y apoyo solidario",
        "Proyectos de promoción humana e integración vecinal"
      ],
      schedule: "Miércoles y Sábados de 9:30 am a 12:00 pm",
      location: "Sede de Pastoral Social Parroquial",
      contactPerson: "Equipo de Pastoral Social",
      contactEmail: "social@parroquiasanlorenzo.org",
      image: "/images/caritas-community.jpg",
      icon: "heart-handshake"
    },
    {
      id: "pastoral-juvenil",
      name: "Pastoral Juvenil «Nueva Vida»",
      category: "jovenes",
      categoryLabel: "Jóvenes",
      shortDesc: "Espacio de amistad, formación cristiana y liderazgo para adolescentes y jóvenes de Santiago Oeste.",
      fullDesc: "Un grupo vibrante donde los jóvenes comparten sus inquietudes, profundizan en el Evangelio, realizan jornadas comunitarias, campamentos y dinámicas de servicio en favor de sus propios barrios.",
      targetAudience: "Jóvenes y adolescentes (14 a 25 años)",
      activities: [
        "Campamento anual «Enciéndete» y retiros espirituales",
        "Jornadas de Senderismo ecológico y vida en la naturaleza",
        "Grupo de Baile Folclórico y expresiones de arte popular",
        "Fiesta comunitaria pro-fondos «Enciende Tus Pasos»",
        "Encuentros semanales de debate bíblico, oración y liderazgo"
      ],
      schedule: "Sábados de 4:30 pm a 6:15 pm",
      location: "Salón Parroquial San Lorenzo",
      contactPerson: "Coordinación Juvenil Parroquial",
      contactEmail: "jovenes@parroquiasanlorenzo.org",
      image: "/images/35.jpeg",
      icon: "sparkles"
    },
    {
      id: "catequesis-familiar",
      name: "Catequesis de Iniciación Cristiana y Familiar",
      category: "formacion",
      categoryLabel: "Formación",
      shortDesc: "Itinerario de formación en la fe para Bautismo, Comunión y Confirmación con activa participación de los padres.",
      fullDesc: "Acompañamos a niños, niñas y jóvenes a vivir un encuentro personal y transformador con Jesús. Nuestro proceso integra charlas para padres y padrinos, fortaleciendo el rol del hogar como primera escuela de la fe.",
      targetAudience: "Niños desde los 7 años, adolescentes y padres de familia",
      activities: [
        "Encuentros catequísticos semanales por etapas",
        "Talleres periódicos y reflexiones para padres y tutores",
        "Misa dominical familiar con niños a las 10:00 am",
        "Celebraciones de entregas de la Biblia, el Rosario y el Credo"
      ],
      schedule: "Sábados de 9:30 am a 11:30 am",
      location: "Aulas Parroquiales / Salón Comunitario",
      contactPerson: "Equipo de Catequistas Parroquiales",
      contactEmail: "catequesis@parroquiasanlorenzo.org",
      image: "/images/interior-mass.jpg",
      icon: "book-open"
    },
    {
      id: "pastoral-familiar",
      name: "Pastoral Familiar y Matrimonios",
      category: "familia",
      categoryLabel: "Familia",
      shortDesc: "Acompañamiento integral a novios, matrimonios y familias en todas las etapas de la vida comunitaria.",
      fullDesc: "Ofrece talleres prematrimoniales, encuentros de diálogo para parejas, charlas sobre crianza con valores cristianos y bendición especial en aniversarios de bodas para las familias de Santiago Oeste.",
      targetAudience: "Novios, matrimonios y familias de la comunidad",
      activities: [
        "Encuentros mensuales de diálogo y oración conyugal",
        "Cursos y talleres de preparación al Sacramento del Matrimonio",
        "Misa anual de renovación de promesas matrimoniales",
        "Jornadas familiares de convivencia comunitaria"
      ],
      schedule: "2° y 4° Viernes de cada mes a las 7:30 pm",
      location: "Salón Parroquial",
      contactPerson: "Coordinación de Pastoral Familiar",
      contactEmail: "familia@parroquiasanlorenzo.org",
      image: "/images/hero-sanctuary.jpg",
      icon: "home"
    },
    {
      id: "liturgia-y-servidores",
      name: "Equipo de Liturgia y Servidores del Altar",
      category: "liturgia",
      categoryLabel: "Liturgia",
      shortDesc: "Servicio en el altar, lectores, acólitos y ministros para la belleza y reverencia de las celebraciones sagradas.",
      fullDesc: "Integrado por servidores, lectores y ministros que prestan su servicio para guiar la oración de la asamblea y llevar la Sagrada Comunión a los hermanos enfermos y ancianos de Monte Bonito y Cienfuegos.",
      targetAudience: "Adultos y jóvenes con vocación de servicio litúrgico",
      activities: [
        "Preparación litúrgica de las Misas dominicales y festivas",
        "Servicio de acólitos y lectores de la Palabra",
        "Visitas y comunión a los enfermos del sector",
        "Formación bíblica y litúrgica comunitaria"
      ],
      schedule: "Reunión de coordinación: 1° Martes de mes a las 7:30 pm",
      location: "Templo Parroquial San Lorenzo",
      contactPerson: "Equipo de Liturgia Parroquial",
      contactEmail: "liturgia@parroquiasanlorenzo.org",
      image: "/images/interior-mass.jpg",
      icon: "cross"
    }
  ],
  experiences: [
    {
      id: "senderismo-juvenil-2026",
      title: "Senderismo Juvenil 2026",
      date: "2026",
      category: "Pastoral Juvenil",
      description: "Aventura, fraternidad y contemplación de la naturaleza durante nuestra jornada de senderismo ecológico 2026. Los jóvenes recorrieron senderos montañosos, fortaleciendo el espíritu de equipo y el agradecimiento por la creación de Dios.",
      image: "/images/61.jpeg",
      gallery: [
        "/images/53.jpeg",
        "/images/54.jpeg",
        "/images/55.jpeg",
        "/images/56.jpeg",
        "/images/57.jpeg",
        "/images/58.jpeg",
        "/images/59.jpeg",
        "/images/60.jpeg",
        "/images/61.jpeg"
      ],
      relatedMinistry: "Pastoral Juvenil «Nueva Vida»"
    },
    {
      id: "campamento-enciendete-2025",
      title: "Campamento Enciéndete 2025",
      date: "Verano 2025",
      category: "Pastoral Juvenil",
      description: "Nuestra experiencia cumbre de fe, liderazgo y comunión fraterna. Días llenos de procesión y adoración eucarística, testimonios, dinámicas en la naturaleza, velada campestre y entrega de reconocimientos al compromiso de nuestros jóvenes.",
      image: "/images/35.jpeg",
      gallery: [
        "/images/25.jpeg",
        "/images/26.jpeg",
        "/images/27.jpeg",
        "/images/28.jpeg",
        "/images/29.jpeg",
        "/images/30.jpeg",
        "/images/31.jpeg",
        "/images/32.jpeg",
        "/images/33.jpeg",
        "/images/34.jpeg",
        "/images/35.jpeg",
        "/images/36.jpeg",
        "/images/37.jpeg",
        "/images/38.jpeg",
        "/images/39.jpeg"
      ],
      relatedMinistry: "Pastoral Juvenil «Nueva Vida»"
    },
    {
      id: "fiesta-enciende-tus-pasos",
      title: "Fiesta «Enciende Tus Pasos»",
      date: "2025",
      category: "Pastoral Juvenil",
      description: "Jornada festiva y de integración comunitaria organizada por la Pastoral Juvenil como evento pro-fondo campamento. Una velada de sana diversión con música, baile, fraternidad y alegría compartida en el salón parroquial.",
      image: "/images/44.jpeg",
      gallery: [
        "/images/44.jpeg",
        "/images/45.jpeg",
        "/images/46.jpeg",
        "/images/47.jpeg",
        "/images/48.jpeg",
        "/images/49.jpeg",
        "/images/50.jpeg",
        "/images/51.jpeg",
        "/images/52.jpeg"
      ],
      relatedMinistry: "Pastoral Juvenil «Nueva Vida»"
    },
    {
      id: "baile-folclorico",
      title: "Baile Folclórico de la Pastoral Juvenil",
      date: "2025",
      category: "Pastoral Juvenil",
      description: "Homenaje a nuestra identidad y folclore dominicano. Los jóvenes de la pastoral vistieron trajes típicos tricolor para deleitar a la comunidad con danzas autóctonas llenas de colorido, ritmo y orgullo de nuestras raíces.",
      image: "/images/40.jpeg",
      gallery: [
        "/images/40.jpeg",
        "/images/41.jpeg",
        "/images/42.jpeg",
        "/images/43.jpeg"
      ],
      relatedMinistry: "Pastoral Juvenil «Nueva Vida»"
    },
    {
      id: "fiesta-patronal-san-lorenzo",
      title: "Solemne Fiesta Patronal en Honor a San Lorenzo",
      date: "10 de Agosto",
      category: "Celebración Litúrgica",
      description: "Cientos de feligreses de Monte Bonito, Cienfuegos y todo Santiago Oeste se unen con fervor en la procesión por la Avenida 30 de Caballeros y la solemne Eucaristía en honor a nuestro patrono San Lorenzo Diácono y Mártir.",
      image: "/images/6.jpeg",
      gallery: [
        "/images/6.jpeg",
        "/images/7.jpeg",
        "/images/8.jpeg",
        "/images/9.jpeg"
      ],
      relatedMinistry: "Comunidad General"
    },
    {
      id: "encuentros-pastoral-juvenil-nueva-vida",
      title: "Jornadas y Retiros de la Pastoral Juvenil «Nueva Vida»",
      date: "Encuentros Continuos",
      category: "Pastoral Juvenil",
      description: "Nuestros jóvenes se reúnen cada sábado para crecer en la fe, apoyarse mutuamente, realizar dinámicas formativas y proyectar el amor de Dios en sus familias y barrios.",
      image: "/images/2.jpeg",
      gallery: [
        "/images/1.jpeg",
        "/images/2.jpeg",
        "/images/3.jpeg",
        "/images/4.jpeg",
        "/images/5.jpeg"
      ],
      relatedMinistry: "Pastoral Juvenil Nueva Vida"
    },
    {
      id: "alianza-educativa-social",
      title: "Jornada Comunitaria de Formación en Valores y Acción Social",
      date: "Octubre",
      category: "Acción Social y Educación",
      description: "En estrecha articulación con las escuelas y obras sociales de Cienfuegos, la parroquia lleva a cabo jornadas de formación en valores, apoyo escolar y ayuda solidaria para el desarrollo humano en Santiago Oeste.",
      image: "/images/10.jpeg",
      gallery: [
        "/images/10.jpeg",
        "/images/11.jpeg",
        "/images/12.jpeg",
        "/images/13.jpeg"
      ],
      relatedMinistry: "Pastoral Social y Red Educativa"
    },
    {
      id: "primeras-comuniones-confirmaciones",
      title: "Celebración Comunitaria de Bautismos, Comuniones y Confirmaciones",
      date: "Mayo y Noviembre",
      category: "Sacramentos",
      description: "Niños y jóvenes de familias de la zona reciben los sacramentos de la Iglesia en emotivas celebraciones presididas por sacerdotes de la Arquidiócesis de Santiago de los Caballeros.",
      image: "/images/15.jpeg",
      gallery: [
        "/images/15.jpeg",
        "/images/16.jpeg",
        "/images/17.jpeg",
        "/images/18.jpeg",
        "/images/19.jpeg"
      ],
      relatedMinistry: "Catequesis de Iniciación Cristiana"
    },
    {
      id: "concierto-navidad-coro-infantil",
      title: "Tradicional Concierto de Navidad del Coro Infantil de San Lorenzo",
      date: "Diciembre",
      category: "Arte Coral y Cultura",
      description: "El prestigioso Coro Infantil de la Parroquia San Lorenzo, bajo la dirección del maestro Edward Grullón Tavares (Edward Gruta), deleita a las familias de Santiago Oeste con un memorable concierto navideño que llena de gozo y espíritu cristiano a toda la comunidad.",
      image: "/images/20.jpeg",
      gallery: [
        "/images/20.jpeg",
        "/images/21.jpeg",
        "/images/22.jpeg",
        "/images/23.jpeg"
      ],
      relatedMinistry: "Coro Infantil de San Lorenzo"
    }
  ],
  announcements: [
    {
      id: "anuncio-audiciones-coro-infantil",
      title: "Convocatoria y Audiciones para el Coro Infantil de San Lorenzo",
      date: "Próximos Sábados",
      time: "10:00 am a 12:00 pm",
      location: "Templo Parroquial (Av. 30 de Caballeros No. 7)",
      summary: "El maestro Edward Grullón Tavares (Edward Gruta) invita a niños y niñas de la zona con gusto por el canto a unirse a los ensayos de nuestra prestigiosa agrupación coral.",
      badge: "Música y Cultura",
      linkText: "Conocer más del coro",
      linkHref: "/pastorales#coro-infantil-san-lorenzo"
    },
    {
      id: "anuncio-fiesta-patronal-san-lorenzo",
      title: "Preparación para las Fiestas Patronales de San Lorenzo",
      date: "1 al 10 de Agosto",
      time: "6:00 pm Rosario | 6:30 pm Misa",
      location: "Templo Parroquial San Lorenzo",
      summary: "Acompáñanos a celebrar la novena y fiesta solemne de San Lorenzo, mártir de la fe y protector de los humildes.",
      badge: "Liturgia"
    },
    {
      id: "anuncio-inscripciones-catequesis-valores",
      title: "Inscripciones Abiertas para Catequesis y Formación en Valores",
      date: "Horario de Despacho",
      location: "Secretaría Parroquial",
      summary: "Inscripciones disponibles para Comunión, Confirmación y programas de apoyo a familias y centros educativos de Cienfuegos.",
      badge: "Formación",
      linkText: "Ver pastorales",
      linkHref: "/pastorales#catequesis-familiar"
    }
  ]
};
