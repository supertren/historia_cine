import { Injectable } from '@angular/core';

export interface ContentSection {
  id: string;
  title: string;
  content: string;
  route: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private sections: ContentSection[] = [
    {
      id: 'introduction',
      title: 'Historia del Cine: Un Recorrido por su Evolución',
      route: '/introduction',
      content: `
        <p>El cine, considerado el séptimo arte, ha evolucionado desde sus humildes comienzos a finales del siglo XIX hasta convertirse en una de las formas más influyentes de expresión artística y entretenimiento en el mundo moderno.</p>
        
        <p>A lo largo de su historia, el cine ha reflejado y moldeado la sociedad, impulsado avances tecnológicos y creado un lenguaje visual universal que trasciende fronteras culturales y lingüísticas.</p>
        
        <p>Este recorrido por la historia del cine explora su extraordinaria evolución: desde las primeras proyecciones de imágenes en movimiento hasta las complejas producciones digitales de hoy, examinando los momentos clave, las figuras influyentes y las innovaciones tecnológicas que han definido este arte en constante transformación.</p>
      `
    },
    {
      id: 'origins',
      title: 'Los Orígenes del Cine',
      route: '/origins',
      content: `
        <h3>Precursores Tempranos</h3>
        <p>El cine no surgió de la nada, sino que fue el resultado de siglos de experimentación con la luz, la óptica y la percepción visual. Dispositivos como la cámara oscura (conocida desde la antigüedad), la linterna mágica (siglo XVII), el taumatropo (1824) y otros juguetes ópticos prepararon el terreno para la eventual invención del cine al establecer principios fundamentales de proyección de imágenes y persistencia de la visión.</p>
        
        <h3>El Nacimiento de la Fotografía</h3>
        <p>La invención de la fotografía a mediados del siglo XIX representó un paso crucial hacia el cine. Louis Daguerre presentó el daguerrotipo en 1839, y posteriormente, los experimentos de Eadweard Muybridge con la cronofotografía en la década de 1870 demostraron la capacidad de capturar el movimiento en secuencias fotográficas, como su famoso estudio "El caballo en movimiento" (1878).</p>
        
        <h3>Edison y los Hermanos Lumière</h3>
        <p>En la década de 1890, Thomas Edison desarrolló el Kinetoscopio, un dispositivo que permitía la visualización individual de imágenes en movimiento. Sin embargo, fueron los hermanos Auguste y Louis Lumière quienes crearon el Cinematógrafo, un aparato que podía filmar, revelar y proyectar imágenes, permitiendo por primera vez la proyección pública de películas.</p>
        
        <p>El 28 de diciembre de 1895, los Lumière realizaron la primera proyección pública comercial en el Grand Café de París, mostrando diez cortometrajes de aproximadamente 50 segundos cada uno, incluyendo "La salida de los obreros de la fábrica Lumière" y "La llegada de un tren a la estación de La Ciotat". Esta fecha es considerada oficialmente como el nacimiento del cine.</p>
        
        <h3>Georges Méliès: Del Documental a la Ficción</h3>
        <p>Mientras los Lumière se concentraban en documentar la realidad, Georges Méliès, un ilusionista francés, descubrió accidentalmente el potencial narrativo y fantástico del cine. Su obra maestra "Viaje a la Luna" (1902) introdujo efectos especiales, narrativas de ficción y técnicas cinematográficas innovadoras, estableciendo el cine como medio de expresión artística y no solo como registro documental.</p>
      `
    },
    {
      id: 'silentCinema',
      title: 'La Era del Cine Mudo (1895-1927)',
      route: '/silent-cinema',
      content: `
        <h3>Expansión Global</h3>
        <p>Tras su nacimiento en Europa, el cine se expandió rápidamente por todo el mundo. En Estados Unidos, pioneros como Edwin S. Porter ("El gran robo del tren", 1903) desarrollaron técnicas narrativas fundamentales como el montaje paralelo. La industria cinematográfica comenzó a establecerse en lugares como Fort Lee, Nueva Jersey, antes de su eventual migración a Hollywood, California, atraída por el clima favorable y los terrenos económicos.</p>
        
        <h3>El Lenguaje Cinematográfico</h3>
        <p>Durante este período, directores como D.W. Griffith revolucionaron el lenguaje cinematográfico. Su controvertida pero técnicamente innovadora "El nacimiento de una nación" (1915) y "Intolerancia" (1916) establecieron técnicas como el primer plano, el flashback y el montaje cruzado, creando un vocabulario visual que sigue siendo fundamental en el cine actual.</p>
        
        <h3>Estrellas y Estudios</h3>
        <p>El sistema de estudios comenzó a tomar forma, con nombres como Paramount, Universal y Fox estableciéndose como potencias. Simultáneamente, surgió el concepto de estrella de cine, con figuras como Charlie Chaplin, Buster Keaton, Harold Lloyd, Mary Pickford y Douglas Fairbanks convirtiéndose en celebridades mundiales y demostrando el poder comercial del carisma personal en la gran pantalla.</p>
        
        <h3>Expresionismo Alemán y Vanguardia Soviética</h3>
        <p>En Europa, movimientos artísticos como el Expresionismo Alemán ("El gabinete del Dr. Caligari", 1920) y la vanguardia soviética (las teorías de montaje de Eisenstein en "El acorazado Potemkin", 1925) expandieron las posibilidades artísticas del medio, utilizando técnicas visuales innovadoras para expresar estados psicológicos y mensajes ideológicos.</p>
        
        <h3>El Ocaso de una Era</h3>
        <p>A medida que la tecnología avanzaba, experimentos con el sonido sincronizado culminaron en el estreno de "El cantante de jazz" (1927), la primera película con diálogos sincronizados que marcó el comienzo del fin para el cine mudo. Aunque la transición al sonoro fue gradual, para 1930 la era del cine mudo había concluido efectivamente, transformando fundamentalmente el arte cinematográfico.</p>
      `
    },
    {
      id: 'goldenAge',
      title: 'La Edad de Oro de Hollywood (1927-1960)',
      route: '/golden-age',
      content: `
        <h3>La Revolución del Sonido</h3>
        <p>La introducción del sonido sincronizado transformó todos los aspectos de la producción cinematográfica. Géneros como el musical florecieron con clásicos como "42nd Street" (1933) y "Cantando bajo la lluvia" (1952), mientras que el diálogo ingenioso se convirtió en el sello distintivo de comedias sofisticadas como "Sucedió una noche" (1934) y "La fiera de mi niña" (1938).</p>
        
        <h3>El Sistema de Estudios</h3>
        <p>Los "Big Five" (MGM, Paramount, Warner Bros., RKO y Fox) y los "Little Three" (Universal, Columbia y United Artists) dominaban la industria a través de un sistema de integración vertical que controlaba la producción, distribución y exhibición. Este sistema de estudios creó una "fábrica de sueños" eficiente que producía aproximadamente 400 películas al año durante su apogeo, con actores, directores y técnicos bajo contratos exclusivos.</p>
        
        <h3>Códigos y Censura</h3>
        <p>Tras un período de contenido relativamente atrevido en el "Pre-Code Hollywood" (1930-1934), la estricta aplicación del Código Hays impuso severas restricciones morales sobre el contenido cinematográfico. Esto llevó a los cineastas a desarrollar formas creativas de insinuar temas adultos, como se evidencia en el doble sentido del film noir y las comedias sofisticadas.</p>
        
        <h3>Innovaciones Técnicas</h3>
        <p>El período vio avances significativos con la introducción del Technicolor de tres tiras en largometrajes como "Lo que el viento se llevó" (1939), formatos de pantalla ancha como CinemaScope en respuesta a la amenaza de la televisión, y experimentos con efectos especiales cada vez más sofisticados.</p>
        
        <h3>La Influencia de la Guerra y la Posguerra</h3>
        <p>La Segunda Guerra Mundial influyó profundamente en el cine, desde la propaganda explícita hasta exploraciones más sutiles de temas patrióticos. La posguerra trajo el realismo de películas como "Los mejores años de nuestra vida" (1946) y el surgimiento del film noir, que reflejaba la ansiedad de la era atómica y la Guerra Fría con su visión pesimista y estética de sombras pronunciadas.</p>
        
        <h3>El Declive del Sistema</h3>
        <p>Una combinación de factores, incluyendo el caso antimonopolio "United States v. Paramount Pictures, Inc." (1948), el auge de la televisión, el macartismo y los cambios en los gustos del público, llevó al declive gradual del sistema de estudios. Para finales de los años 50, el modelo clásico de Hollywood había sido fundamentalmente alterado, preparando el terreno para las transformaciones de las décadas siguientes.</p>
      `
    },
    {
      id: 'modernEra',
      title: 'La Era Moderna (1960-1990)',
      route: '/modern-era',
      content: `
        <h3>Nuevas Olas Globales</h3>
        <p>Los años 60 vieron el surgimiento de movimientos cinematográficos revolucionarios en todo el mundo. La Nouvelle Vague francesa, liderada por críticos convertidos en directores como François Truffaut y Jean-Luc Godard, desafió las convenciones narrativas y estilísticas con películas como "Los 400 golpes" (1959) y "Sin aliento" (1960). Simultáneamente, el Free Cinema británico, el Cinema Novo brasileño y el Nuevo Cine Alemán expandieron las posibilidades del medio con enfoques frescos y a menudo politizados.</p>
        
        <h3>El Nuevo Hollywood</h3>
        <p>En Estados Unidos, una nueva generación de directores con formación cinematográfica como Francis Ford Coppola, Martin Scorsese, Steven Spielberg y George Lucas revolucionó el cine americano. Influenciados por las nuevas olas europeas y la contracultura, crearon obras personales y artísticamente ambiciosas como "El Padrino" (1972), "Taxi Driver" (1976), y "La guerra de las galaxias" (1977), esta última iniciando la era del blockbuster moderno.</p>
        
        <h3>Cine de Autor Internacional</h3>
        <p>Directores visionarios como Ingmar Bergman, Federico Fellini, Akira Kurosawa, Satyajit Ray y Andrei Tarkovsky alcanzaron la cima de su influencia artística, creando obras profundamente personales que expandieron las posibilidades expresivas del cine y establecieron firmemente el medio como una forma de arte capaz de explorar las cuestiones más profundas de la existencia humana.</p>
        
        <h3>Evolución Tecnológica</h3>
        <p>Avances como cámaras más ligeras, grabación de sonido sincronizado portátil y película más sensible permitieron nuevos estilos como el cinéma vérité y el documental directo. Mientras tanto, los efectos especiales dieron saltos gigantescos con innovaciones como el motion control para "La guerra de las galaxias" y los primeros experimentos con CGI en películas como "Tron" (1982).</p>
        
        <h3>Blockbusters y Consolidación Corporativa</h3>
        <p>El éxito sin precedentes de películas como "Tiburón" (1975) y "La guerra de las galaxias" estableció el modelo del blockbuster de verano, cambiando fundamentalmente las estrategias de producción y marketing de Hollywood. Simultáneamente, los estudios comenzaron a ser absorbidos por conglomerados corporativos más grandes, priorizando la previsibilidad de beneficios sobre la experimentación.</p>
      `
    },
    {
      id: 'digitalEra',
      title: 'La Era Digital (1990-Presente)',
      route: '/digital-era',
      content: `
        <h3>La Transición Digital</h3>
        <p>A partir de finales de los años 90, las tecnologías digitales transformaron todos los aspectos de la producción, distribución y exhibición cinematográfica. Cámaras digitales de alta definición democratizaron la producción, mientras que la edición no lineal revolucionó la postproducción. Para la década de 2010, la proyección digital había reemplazado casi completamente al celuloide en las salas comerciales, marcando el fin de la era fotoquímica que había definido el medio durante más de un siglo.</p>
        
        <h3>La Revolución del CGI</h3>
        <p>Desde los primeros experimentos en películas como "Terminator 2" (1991) hasta el hito de "Jurassic Park" (1993) y más allá, los efectos generados por computadora transformaron lo visualmente posible en el cine. Películas como "Avatar" (2009) llevaron esta tecnología a nuevas alturas, mientras que la captura de movimiento permitió interpretaciones digitales revolucionarias, planteando nuevas preguntas sobre la naturaleza de la imagen cinematográfica.</p>
        
        <h3>Blockbusters y Franquicias</h3>
        <p>El siglo XXI ha visto un dominio sin precedentes de películas de alto presupuesto basadas en propiedad intelectual preexistente, con el Universo Cinematográfico de Marvel como ejemplo paradigmático. Estas franquicias interconectadas han redefinido las estrategias de los estudios y las expectativas de la audiencia, creando narrativas expansivas que se extienden a través de múltiples películas y plataformas mediáticas.</p>
        
        <h3>Plataformas de Streaming</h3>
        <p>Netflix, Amazon, Disney+ y otros servicios de streaming han transformado fundamentalmente la distribución cinematográfica y se han convertido en importantes productores de contenido por derecho propio. La pandemia de COVID-19 aceleró esta tendencia, desafiando el modelo tradicional de estreno en salas y potencialmente alterando permanentemente el panorama de la exhibición cinematográfica.</p>
        
        <h3>La IA en el Cine</h3>
        <p>Las tecnologías emergentes de inteligencia artificial están comenzando a transformar la producción cinematográfica, con capacidades para generar texturas realistas, simulaciones complejas, restauración de películas antiguas y aplicaciones más controvertidas como los deepfakes. Estas herramientas plantean tanto oportunidades creativas como desafíos éticos significativos para el futuro del medio.</p>
      `
    },
    {
      id: 'conclusion',
      title: 'Conclusión: El Futuro del Cine',
      route: '/conclusion',
      content: `
        <p>El viaje del cine desde las simples imágenes en movimiento de los Lumière hasta las complejas producciones digitales de hoy representa uno de los desarrollos artísticos y tecnológicos más extraordinarios de la historia moderna. A lo largo de este recorrido, el cine ha demostrado una notable capacidad para reinventarse continuamente, absorbiendo nuevas tecnologías y respondiendo a los cambios sociales y culturales.</p>
        
        <p>A pesar de las numerosas "muertes del cine" proclamadas a lo largo de las décadas —con la llegada del sonido, la televisión, el video doméstico, internet y ahora el streaming— el medio ha persistido y evolucionado. Esta resiliencia sugiere que, independientemente de los cambios tecnológicos y económicos que puedan venir, el impulso humano fundamental de contar historias a través de imágenes en movimiento continuará encontrando expresión en formas que quizás aún no podemos imaginar.</p>
        
        <p>Mientras miramos hacia el futuro, tecnologías como la realidad virtual, la inteligencia artificial y nuevas formas de narración interactiva prometen expandir aún más las fronteras de lo que consideramos "cine". Sin embargo, la esencia del medio —su capacidad única para combinar elementos visuales, sonoros, performativos y narrativos en una experiencia inmersiva— probablemente seguirá siendo el núcleo de su poder cultural y artístico en las décadas venideras.</p>
      `
    }
  ];

  constructor() { }

  getAllSections(): ContentSection[] {
    return this.sections;
  }

  getContent(id: string): ContentSection | undefined {
    return this.sections.find(section => section.id === id);
  }
}
