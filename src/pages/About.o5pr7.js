import { getCurrentLanguage } from 'public/language';

const translations = {
    es: {
        '#Section1RegularTitle1': 'Biografía de la Fundadora',
        '#Section1RegularSubtitle1': 'Wendy Rodriguez',
        '#Section1RegularLongtext1': 'Wendy Rodriguez es la visionaria fundadora de Fearless Footsteps, una líder comunitaria guatemalteco-americana cuya vida y trabajo reflejan un profundo compromiso con el servicio, el empoderamiento y el desarrollo de las comunidades de Long Island.\n\nSu historia es una de resiliencia y esperanza. Convertirse en madre a los 15 años no detuvo su propósito; en cambio, fortaleció su determinación para transformar la adversidad en oportunidad y demostrar que, a través de la fe, el valor y el esfuerzo constante, un futuro significativo y digno es posible.\n\nEl viaje empresarial de Wendy comenzó a los 21 años con la adquisición de la franquicia de fitness Curves. Años después, fundó Ultimate Sweat Zone (USZ), un espacio dedicado al bienestar físico, emocional y espiritual de las mujeres, así como al desarrollo artístico y personal de niños y jóvenes.\n\nEn 2016, Wendy fundó Fearless Footsteps, una organización sin fines de lucro que se ha convertido en un pilar de apoyo y un faro de esperanza para jóvenes y familias en Brentwood y en todo Long Island. Bajo su liderazgo, se han recaudado miles de dólares para apoyar programas enfocados en la autoestima, la salud mental y emocional, el crecimiento espiritual, el liderazgo juvenil y el acceso a oportunidades educativas.\n\nApasionada por el bienestar y el desarrollo humano, Wendy posee más de 12 certificaciones en áreas que incluyen fitness, nutrición, comunicación, marketing y branding. Su trayectoria profesional fortalece su misión de educar, empoderar y guiar a individuos y familias hacia vidas más saludables, estables y llenas de propósito.\n\nEl impacto y liderazgo de Wendy han sido reconocidos por numerosas organizaciones, entre ellas el título de Mujer Empresaria del Año por la Cámara de Comercio de Long Island, así como honores de la Revista Mujer Actual, Latina Exitosa, Latino Star, Queens Courier y Mujeres Sin Límites, entre otros.\n\nMás allá de su trabajo comunitario, Wendy ha llegado a miles de hogares a través de programas de televisión y radio como Empowering Women TV & Radio, El Rescate del Día, Brillando Sin Límites y actualmente Wendy Rodriguez Live en 98.5 FM La Fiesta, compartiendo mensajes de fe, motivación y liderazgo.\n\nSu dedicación a la estabilidad familiar y el empoderamiento a largo plazo también se refleja en Operation Get Informed, una iniciativa educativa que guía a los residentes de Long Island a través del proceso de adquisición de vivienda, educación financiera y el camino hacia la construcción de riqueza generacional.\n\nHoy, Wendy Rodriguez continúa liderando con propósito y compasión. Su misión como fundadora de Fearless Footsteps es clara: crear espacios seguros de oportunidad, elevar el potencial humano y fortalecer las comunidades vulnerables, sembrando esperanza y construyendo un futuro más equitativo para la próxima generación de familias de Long Island.',
        '#text21': 'Acerca de Fearless Footsteps',
        '#text42': 'Fearless Footsteps: Abriendo el camino hacia la propiedad de vivienda y el empoderamiento financiero',
        '#text47': 'Nuestra Misión',
        '#text48': 'Nuestro enfoque holístico ayuda a las personas a comprar viviendas, manejar las finanzas y superar desafíos como la ejecución hipotecaria. Al promover la educación financiera, buscamos romper ciclos de inestabilidad financiera, mejorar la salud mental y crear cambios duraderos en nuestras comunidades.\n\nEl brazo caritativo de Fearless está dedicado a mejorar la educación y estabilidad financiera en adultos y jóvenes a través de nuestro programa integral, Operation Get Informed. Nuestra misión es empoderar a las personas para lograr el sueño americano de ser propietarios de vivienda, fomentando la riqueza generacional y la estabilidad financiera. Ofrecemos talleres educativos gratuitos, nos asociamos con diversas entidades para proporcionar incentivos y subsidios para compradores de vivienda por primera vez, y reunimos a asesores financieros, especialistas en reparación de crédito y prestamistas.',
        '#text78': 'Nuestra Visión',
        '#text79': 'Nuestra visión es crear un futuro donde las personas reconozcan la importancia de la educación financiera para lograr y mantener la propiedad de vivienda, conduciendo a la riqueza y estabilidad intergeneracional.\n\nNos esforzamos por empoderar a los miembros de la comunidad con el conocimiento, los recursos y el apoyo necesarios para tomar decisiones financieras informadas, asegurar y sostener la propiedad de vivienda, y construir un futuro financiero estable para ellos y sus familias.\n\nA través de Operation Get Informed, buscamos fomentar una comunidad donde todos tengan la oportunidad de lograr estabilidad financiera, contribuyendo al bienestar mental general y un legado de prosperidad.',
        '#text76': 'Lo Que Hacemos',
        '#text77': 'Nuestra organización está profundamente arraigada en la creencia de que el verdadero progreso comienza levantando a nuestra comunidad. Estamos comprometidos a proporcionar herramientas esenciales, orientación y recursos que empoderen a individuos y familias para prosperar.\n\nEn septiembre de 2024, celebramos un evento histórico que reunió a más de 800 miembros de la comunidad. Esta reunión no fue solo una celebración: fue un reflejo de nuestra misión en acción, ofreciendo apoyo real, fomentando la unidad y construyendo conexiones significativas entre líderes locales, familias e individuos.\n\nTodo lo que hacemos está guiado por un propósito: servir, apoyar y fortalecer nuestra comunidad. A través de iniciativas continuas, alianzas impactantes y alcance dedicado, permanecemos enfocados en garantizar que todos tengan acceso a la ayuda, información y oportunidades que necesitan para tener éxito.'
    }
};

const buttonTranslations = {
    es: {
        '#button13': 'Lleva Operation Get Informed a tu comunidad'
    }
};

$w.onReady(function () {
    const lang = getCurrentLanguage();
    if (lang === 'es') {
        applyTextTranslations(translations.es);
        applyButtonTranslations(buttonTranslations.es);
    }
});

function applyTextTranslations(texts) {
    Object.keys(texts).forEach(id => {
        try {
            $w(id).text = texts[id];
        } catch (e) {}
    });
}

function applyButtonTranslations(buttons) {
    Object.keys(buttons).forEach(id => {
        try {
            $w(id).label = buttons[id];
        } catch (e) {}
    });
}
