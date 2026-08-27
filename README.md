# Sala de Eventos Sovegastro

Prototipo interactivo de la sala de eventos virtual para el **47° Congreso Nacional de Gastroenterología** (Sovegastro). Implementado a partir del diseño creado en Claude Design.

## Pantallas

- **Inicio** — hero con banner del congreso, cuenta regresiva en vivo y accesos a las demás salas.
- **Sala de Conferencias** — panel de patrocinantes, reproductor de streaming (play/pausa) y widget de Slido.
- **Exposición Comercial** — vitrina de patrocinantes por nivel (Platino / Oro / Bronce) con carrusel de logos.
- **Conferencistas** — tarjetas de speakers con selector de día y modal de biografía.

## Stack

- React 18 + TypeScript
- Vite

## Desarrollo local

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview
```

## Despliegue

Desplegado en Vercel como sitio estático (build de Vite).

## Nota sobre assets

Los dos assets de imagen del diseño original (banner del congreso y foto del doctor) se recrearon como gráficos SVG equivalentes, ya que los archivos fuente superaban el límite de lectura de la herramienta de sincronización de diseño. El resto de la maquetación, textos, colores, tipografía e interactividad replican fielmente el diseño original.
