# 🧬 Portafolio — Gabriel Rojas

Portafolio personal con temática **bioinformática**, construido como una página estática
lista para desplegarse en **GitHub Pages**.

> Ingeniería Civil en Bioinformática · Universidad de Talca

## ✨ Características

- **Diseño de laboratorio genómico**: paleta oscura con acentos verde/cian, tipografía
  monoespaciada y una grilla sutil tipo placa de secuenciación.
- **Hélice de ADN animada** (CSS puro) como preloader y elemento decorativo del hero.
- **Efecto de tipeo** en el título con distintos roles.
- **Grafo interactivo Druggraph** con [Cytoscape.js](https://js.cytoscape.org/): red de
  interacción fármaco–diana basada en datos de DrugBank, con selector de disposición
  (`cose`, `concentric`, `circle`, `breadthfirst`) y descarga a PNG.
- **Reveal on scroll** y diseño **responsive** (menú móvil incluido).

## 📁 Estructura

```
portfolio/
├── index.html              # Página principal
├── dna.html                # Animación de ADN (usada en iframe)
├── css/
│   ├── main_page.css       # Estilos del portafolio
│   └── dna_animate.css     # Animación de la hélice
├── js/
│   ├── main.js             # Preloader, tipeo, reveal, menú
│   ├── cytoscapeGraph.js   # Grafo de interacción fármaco-diana
│   └── colorMap.js         # Mapa de colores de interacciones
└── imgs/                   # Logotipo e íconos
```

## 🚀 Ver en local

Al usar rutas relativas e `iframe`, conviene servirlo con un servidor local:

```bash
# Con Python
python3 -m http.server 8000
# luego abre http://localhost:8000
```

## 🌐 Publicar en GitHub Pages

1. Sube el repositorio a GitHub.
2. Ve a **Settings → Pages**.
3. En *Source* selecciona la rama `main` y la carpeta `/ (root)`.
4. Tu portafolio quedará disponible en `https://<usuario>.github.io/portfolio/`.

## 🛠️ Stack

`HTML` · `CSS` · `JavaScript` · `Cytoscape.js` · `Python/Django` (proyectos)

## 📫 Contacto

- ✉️ grojas18@alumnos.utalca.cl
- 🐙 [github.com/gaos180](https://github.com/gaos180)

---

<sub>Créditos de la animación de ADN: [ysosu en CodePen](https://codepen.io/ysosu/pen/vYLvaqX).</sub>
