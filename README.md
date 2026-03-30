# 🚀 TigMotors - Sistema de Gestión de Usuarios, Solicitudes, Tickets y Comprobantes (Frontend)

Este proyecto es la interfaz de usuario del sistema **TigMotors**, desarrollado con **React + Vite**. Permite a los usuarios interactuar con la plataforma, gestionar solicitudes, tickets y comprobantes de pago, con un diseño responsivo y una navegación fluida.

---

## 📂 Estructura del Proyecto

```
src/
├── assets/               # Archivos estáticos como imágenes y estilos
├── components/           # Componentes reutilizables en toda la aplicación
├── routes/               # Configuración de rutas para la navegación
├── store/                
├── views/                # Vistas divididas en privadas y públicas
│   ├── private/          # Sección de paneles para usuarios autenticados
│   │   ├── Dashboard-ADMIN/
│   │   ├── Dashboard-PERSONAL_CENTRO_DE_SERVICIOS/
│   │   ├── Dashboard-USER/
│   │   ├── HeaderCierre.jsx
│   │   ├── LayoutCierre.jsx
│   │   └── SoloDesktop.jsx
│   ├── public/           # Vistas accesibles sin autenticación
│   │   ├── Endpoint no encontrado/
│   │   ├── Landing/
│   │   ├── Login/
│   │   ├── Nueva Contraseña/
│   │   ├── Pagina no Autorizada/
│   │   ├── RecuperarContraseña/
│   │   ├── Register/
│   │   ├── Terminos y Politicas/
│   │   ├── Header.jsx
│   │   └── Layout.jsx
├── App.jsx               # Componente principal que integra toda la aplicación
├── index.css             # Estilos globales
├── main.jsx              # Punto de entrada de la aplicación
├── .env                  # Variables de entorno para configuración
```

---

## 🛠️ Características Técnicas

- **Framework Frontend:** React con Vite.
- **Estilos:** TailwindCSS para diseño moderno y adaptable.
- **Autenticación:** Implementación con JWT.
- **Rutas Protegidas:** Control de acceso según roles de usuario.

---

## 🚀 Cómo Iniciar el Proyecto

Para ejecutar este proyecto en tu entorno local, sigue estos pasos:

1. **Clonar el repositorio:**
   ```bash
   git clone URL
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar la aplicación en modo desarrollo:**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador:**
   La aplicación se ejecutará en `http://localhost:5173/` (puede variar según la configuración de Vite).


## 📌 Notas Adicionales

- Asegúrate de configurar las variables de entorno en el archivo **.env** para el correcto funcionamiento del sistema.
- Se recomienda utilizar **Node.js** en su versión más reciente compatible con React y Vite.

---

Este **frontend** es parte del ecosistema **TigMotors**, diseñado solo visualizacion de detalles de la empresa y conocer terminos y politicas de la empresa

