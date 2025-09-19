# Portfolio Personal - Mauricio Abel Cuellar

Portfolio profesional desarrollado con React, diseñado con una arquitectura modular y moderna.

## 🚀 Características

- **React 18** con hooks modernos
- **Arquitectura modular** con componentes reutilizables
- **Modo oscuro/claro** con persistencia en localStorage
- **Diseño responsive** optimizado para todos los dispositivos
- **Animaciones suaves** con Framer Motion
- **Carga dinámica** de contenido desde JSON
- **Iconos modernos** con React Icons
- **Estilos con Tailwind CSS**
- **Código limpio** sin manipulaciones directas del DOM

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── WorkExperience.jsx
│   │   └── Contact.jsx
│   └── ui/
│       ├── Button.jsx
│       ├── Card.jsx
│       ├── Badge.jsx
│       └── SocialLinks.jsx
├── context/
│   └── ThemeContext.jsx
├── hooks/
│   ├── useScrollToSection.js
│   ├── useActiveSection.js
│   └── useScrolled.js
├── utils/
│   ├── dataLoader.js
│   └── downloadUtils.js
├── styles/
│   └── globals.css
└── App.jsx

public/
├── assets/
│   ├── images/
│   │   └── icons/          # Iconos SVG
│   └── documents/
└── data/
    └── portfolio.json
```

## 🛠️ Instalación y Configuración

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/portfolio-mauricio.git
cd portfolio-mauricio
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las imágenes:
   - Coloca tu foto de perfil en `public/assets/images/profile.jpg`
   - Agrega las imágenes de proyectos en `public/assets/images/`
   - **IMPORTANTE**: Agrega los iconos SVG en `public/assets/images/icons/`:
     - mail.svg, download.svg, arrow-down.svg
     - sun.svg, moon.svg, menu.svg, close.svg
     - github.svg, linkedin.svg, twitter.svg
     - code.svg, globe.svg, handshake.svg
     - phone.svg, map-pin.svg, whatsapp.svg
     - send.svg, calendar.svg, building.svg
     - eye.svg, external-link.svg, heart.svg
   - Coloca tu CV en `public/assets/documents/cv-mauricio-cuellar.pdf`

4. Personaliza el contenido:
   - Edita `public/data/portfolio.json` con tu información personal
   - Actualiza los datos de proyectos, experiencia y habilidades

### Desarrollo

Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

### Construcción para Producción

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`

## 🚀 Despliegue

### Vercel (Recomendado)

1. Instala Vercel CLI:
```bash
npm i -g vercel
```

2. Despliega:
```bash
vercel
```

3. Sigue las instrucciones en pantalla

### Netlify

1. Construye el proyecto:
```bash
npm run build
```

2. Arrastra la carpeta `dist/` a [Netlify Drop](https://app.netlify.com/drop)

### GitHub Pages

1. Instala gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Agrega scripts en `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Despliega:
```bash
npm run deploy
```

## 📝 Personalización

### Contenido

Edita `public/data/portfolio.json` para personalizar:
- Información personal
- Proyectos
- Experiencia laboral
- Habilidades técnicas
- Enlaces sociales

### Estilos

Los estilos están en `src/styles/globals.css` usando:
- Variables CSS para temas consistentes
- Tailwind CSS para utilidades
- Animaciones personalizadas

### Componentes

Todos los componentes son modulares y reutilizables:
- `Button`: Botón personalizable con variantes
- `Card`: Tarjeta con efectos hover
- `Badge`: Etiquetas para habilidades
- `SocialLinks`: Enlaces a redes sociales

## 🔧 Tecnologías Utilizadas

- **Frontend**: React 18, JavaScript ES6+
- **Estilos**: Tailwind CSS, CSS Variables
- **Animaciones**: Framer Motion
- **Iconos**: React Icons
- **Build Tool**: Vite
- **Deployment**: Vercel/Netlify

## 📱 Responsive Design

El sitio está optimizado para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1200px+)

## ⚡ Optimizaciones

- **Lazy loading** de imágenes
- **Code splitting** automático
- **Minificación** de assets
- **Compresión** de imágenes
- **SEO optimizado**

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Contacto

Mauricio Abel Cuellar - [mauricioabelcuellar@gmail.com](mailto:mauricioabelcuellar@gmail.com)

Proyecto: [https://github.com/Mubel77/portfolio-react](https://github.com/Mubel77/portfolio-react)

---

⭐ ¡No olvides dar una estrella al proyecto si te fue útil!