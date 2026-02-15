

# Plataforma Digital de Apoyo Psicoemocional para Jóvenes

## Visión General
Una plataforma web con diseño cálido y amigable donde jóvenes pueden acceder a recursos de bienestar emocional y comunicarse con profesionales de salud mental. Incluye un panel administrativo para gestionar contenido.

---

## Fase 1: Diseño y Estructura Base

### Identidad Visual
- Paleta de colores suaves y cálidos (tonos lavanda, verde menta, melocotón)
- Esquinas redondeadas, sombras suaves, tipografía amigable
- Ilustraciones/iconos relacionados con bienestar emocional
- Diseño responsive (mobile-first, ya que los jóvenes usan mayormente celular)

### Estructura de Navegación
- **Vista Jóvenes**: Navbar inferior en móvil con: Inicio, Recursos, Chat, Perfil
- **Vista Admin**: Sidebar con: Dashboard, Contenido, Configuración

---

## Fase 2: Vista de Jóvenes

### Pantalla de Inicio (Landing/Login)
- Página de bienvenida con mensaje motivacional
- Formularios de registro e inicio de sesión (con datos mock por ahora)

### Página Principal (Home)
- Saludo personalizado ("Hola, ¿cómo te sientes hoy?")
- Selector rápido de estado emocional (emojis/iconos)
- Recursos destacados del día
- Acceso rápido al chat con profesionales

### Biblioteca de Recursos
- Listado de artículos, ejercicios de respiración, técnicas de relajación
- Categorías (ansiedad, estrés, autoestima, relaciones, etc.)
- Vista detalle de cada recurso con contenido enriquecido
- Buscador y filtros por categoría

### Chat con Profesionales
- Lista de profesionales disponibles (nombre, especialidad, foto)
- Interfaz de mensajería (estilo WhatsApp/Telegram)
- Indicador de estado (disponible/no disponible)
- Historial de conversaciones
- *Nota: funcionará con datos mock hasta conectar el backend*

### Perfil del Joven
- Datos personales básicos
- Historial de estados emocionales (mini gráfica)
- Configuración de notificaciones

---

## Fase 3: Panel de Administración

### Dashboard de Contenido
- Vista general: cantidad de artículos publicados, borradores
- Acceso rápido a crear nuevo contenido

### Gestión de Contenido
- Lista de artículos/recursos con estado (publicado, borrador)
- Editor para crear y editar artículos (título, categoría, contenido, imagen)
- Publicar/despublicar contenido
- Organización por categorías

---

## Fase 4: Preparación para Backend

- Capa de servicios/API separada con datos mock
- Estructura lista para reemplazar mocks por llamadas HTTP al backend Node.js/Express
- Interfaces TypeScript definidas para todos los modelos de datos (usuarios, recursos, mensajes, estados emocionales)

---

## Notas Técnicas
- Todo el frontend se construirá con datos simulados (mock data)
- La arquitectura estará preparada para conectar fácilmente al backend Express cuando esté listo
- No se necesita Supabase ni base de datos por ahora

