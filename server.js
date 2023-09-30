const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para configurar los encabezados HTTP
app.use((req, res, next) => {
  // No configurar la política 'interest-cohort'
  // res.setHeader('Permissions-Policy', 'interest-cohort=()');

  // Continuar con la solicitud
  next();
});

// Servir archivos estáticos desde la carpeta "build" (asegúrate de que coincida con tu configuración de Vite)
app.use(express.static('build'));

// Ruta para manejar todas las demás solicitudes (asegúrate de que coincida con tu configuración de React Router)
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/build/index.html');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
