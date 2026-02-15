import { User, Professional, Resource, MoodEntry, Message, Conversation } from '@/types';

export const currentUser: User = {
  id: 'user-1',
  name: 'María García',
  email: 'maria@example.com',
  avatar: '',
  role: 'youth',
  createdAt: '2025-01-15',
};

export const professionals: Professional[] = [
  {
    id: 'pro-1',
    name: 'Dra. Ana López',
    email: 'ana@example.com',
    avatar: '',
    role: 'professional',
    specialty: 'Ansiedad y estrés',
    bio: 'Psicóloga clínica con 10 años de experiencia en atención a jóvenes.',
    available: true,
    createdAt: '2024-06-01',
  },
  {
    id: 'pro-2',
    name: 'Dr. Carlos Mendoza',
    email: 'carlos@example.com',
    avatar: '',
    role: 'professional',
    specialty: 'Autoestima y relaciones',
    bio: 'Especialista en terapia cognitivo-conductual para adolescentes.',
    available: true,
    createdAt: '2024-07-01',
  },
  {
    id: 'pro-3',
    name: 'Lic. Sofía Ramírez',
    email: 'sofia@example.com',
    avatar: '',
    role: 'professional',
    specialty: 'Mindfulness y bienestar',
    bio: 'Orientadora educativa certificada en mindfulness juvenil.',
    available: false,
    createdAt: '2024-08-01',
  },
];

export const resources: Resource[] = [
  {
    id: 'res-1',
    title: '5 técnicas de respiración para calmar la ansiedad',
    description: 'Aprende ejercicios simples de respiración que puedes practicar en cualquier momento.',
    content: `La ansiedad puede sentirse abrumadora, pero hay técnicas simples que pueden ayudarte a recuperar la calma.\n\n## 1. Respiración 4-7-8\nInhala por 4 segundos, mantén por 7, exhala por 8.\n\n## 2. Respiración diafragmática\nColoca una mano en tu pecho y otra en tu abdomen. Respira profundamente asegurándote de que tu abdomen se expanda.\n\n## 3. Respiración cuadrada\nInhala 4 seg, mantén 4 seg, exhala 4 seg, mantén 4 seg.\n\n## 4. Respiración alterna\nTapa una fosa nasal, inhala, cambia, exhala.\n\n## 5. Suspiro fisiológico\nDos inhalaciones cortas por la nariz seguidas de una exhalación larga por la boca.`,
    category: 'ansiedad',
    readTime: 5,
    status: 'published',
    createdAt: '2025-01-20',
    updatedAt: '2025-01-20',
  },
  {
    id: 'res-2',
    title: 'Cómo manejar el estrés en época de exámenes',
    description: 'Estrategias prácticas para mantener la calma durante periodos de alta presión académica.',
    content: `Los exámenes pueden generar mucha presión. Aquí te compartimos estrategias que realmente funcionan.\n\n## Planifica tu tiempo\nCrea un horario de estudio realista.\n\n## Toma descansos\nEstudia 25 min, descansa 5 (técnica Pomodoro).\n\n## Cuida tu cuerpo\nDuerme bien, come saludable, haz ejercicio.\n\n## Habla con alguien\nNo guardes tu estrés. Compártelo con amigos o un profesional.`,
    category: 'estres',
    readTime: 4,
    status: 'published',
    createdAt: '2025-01-22',
    updatedAt: '2025-01-22',
  },
  {
    id: 'res-3',
    title: 'Construyendo una autoestima saludable',
    description: 'Ejercicios diarios para fortalecer tu relación contigo mismo/a.',
    content: `Tu autoestima es la base de tu bienestar emocional.\n\n## Diario de gratitud\nEscribe 3 cosas positivas sobre ti cada día.\n\n## Afirmaciones positivas\nRepite frases que refuercen tu valor.\n\n## Establece límites\nAprender a decir "no" es un acto de amor propio.\n\n## Celebra tus logros\nPor pequeños que sean, reconoce tus avances.`,
    category: 'autoestima',
    readTime: 6,
    status: 'published',
    createdAt: '2025-01-25',
    updatedAt: '2025-01-25',
  },
  {
    id: 'res-4',
    title: 'Introducción al Mindfulness para jóvenes',
    description: 'Descubre cómo la atención plena puede transformar tu día a día.',
    content: `El mindfulness es la práctica de prestar atención al momento presente sin juzgar.\n\n## ¿Qué es?\nEs estar aquí y ahora, observando tus pensamientos sin engancharte.\n\n## Ejercicio básico\nSiéntate cómodamente, cierra los ojos, enfócate en tu respiración por 3 minutos.\n\n## Beneficios\nReduce ansiedad, mejora concentración, aumenta bienestar general.`,
    category: 'mindfulness',
    readTime: 3,
    status: 'published',
    createdAt: '2025-02-01',
    updatedAt: '2025-02-01',
  },
  {
    id: 'res-5',
    title: 'Relaciones saludables: señales y límites',
    description: 'Aprende a identificar relaciones sanas y a establecer límites saludables.',
    content: `Las relaciones son parte fundamental de nuestra vida.\n\n## Señales de una relación sana\n- Respeto mutuo\n- Comunicación abierta\n- Apoyo sin control\n\n## Señales de alerta\n- Manipulación emocional\n- Aislamiento de amigos/familia\n- Presión constante\n\n## Cómo poner límites\n1. Identifica qué te incomoda\n2. Comunícalo con claridad\n3. Mantente firme con respeto`,
    category: 'relaciones',
    readTime: 5,
    status: 'published',
    createdAt: '2025-02-05',
    updatedAt: '2025-02-05',
  },
  {
    id: 'res-6',
    title: 'Guía de meditación guiada (borrador)',
    description: 'Una serie de meditaciones guiadas para diferentes momentos del día.',
    content: 'Contenido en desarrollo...',
    category: 'mindfulness',
    readTime: 10,
    status: 'draft',
    createdAt: '2025-02-10',
    updatedAt: '2025-02-10',
  },
];

export const moodHistory: MoodEntry[] = [
  { id: 'm1', userId: 'user-1', mood: 'good', createdAt: '2025-02-09' },
  { id: 'm2', userId: 'user-1', mood: 'okay', createdAt: '2025-02-10' },
  { id: 'm3', userId: 'user-1', mood: 'great', createdAt: '2025-02-11' },
  { id: 'm4', userId: 'user-1', mood: 'bad', createdAt: '2025-02-12' },
  { id: 'm5', userId: 'user-1', mood: 'good', createdAt: '2025-02-13' },
  { id: 'm6', userId: 'user-1', mood: 'okay', createdAt: '2025-02-14' },
  { id: 'm7', userId: 'user-1', mood: 'great', createdAt: '2025-02-15' },
];

export const conversations: Conversation[] = [
  {
    id: 'conv-1',
    participants: ['user-1', 'pro-1'],
    lastMessage: {
      id: 'msg-3',
      conversationId: 'conv-1',
      senderId: 'pro-1',
      content: '¡Me alegra saber que las técnicas te están ayudando! Recuerda practicarlas diariamente.',
      createdAt: '2025-02-14T15:30:00',
      read: false,
    },
    updatedAt: '2025-02-14T15:30:00',
  },
  {
    id: 'conv-2',
    participants: ['user-1', 'pro-2'],
    lastMessage: {
      id: 'msg-5',
      conversationId: 'conv-2',
      senderId: 'user-1',
      content: 'Gracias por los consejos, doctor. Los pondré en práctica.',
      createdAt: '2025-02-13T10:00:00',
      read: true,
    },
    updatedAt: '2025-02-13T10:00:00',
  },
];

export const messages: Record<string, Message[]> = {
  'conv-1': [
    { id: 'msg-1', conversationId: 'conv-1', senderId: 'user-1', content: 'Hola Dra. López, he estado sintiéndome muy ansiosa últimamente.', createdAt: '2025-02-14T14:00:00', read: true },
    { id: 'msg-2', conversationId: 'conv-1', senderId: 'pro-1', content: 'Hola María, gracias por compartirlo. ¿Puedes contarme más sobre qué situaciones te generan más ansiedad?', createdAt: '2025-02-14T14:15:00', read: true },
    { id: 'msg-3', conversationId: 'conv-1', senderId: 'pro-1', content: '¡Me alegra saber que las técnicas te están ayudando! Recuerda practicarlas diariamente.', createdAt: '2025-02-14T15:30:00', read: false },
  ],
  'conv-2': [
    { id: 'msg-4', conversationId: 'conv-2', senderId: 'pro-2', content: 'Hola María, ¿cómo has estado con los ejercicios de autoestima que platicamos?', createdAt: '2025-02-13T09:30:00', read: true },
    { id: 'msg-5', conversationId: 'conv-2', senderId: 'user-1', content: 'Gracias por los consejos, doctor. Los pondré en práctica.', createdAt: '2025-02-13T10:00:00', read: true },
  ],
};

export const moodEmojis: Record<string, { emoji: string; label: string; color: string }> = {
  great: { emoji: '😄', label: 'Genial', color: 'text-mint' },
  good: { emoji: '🙂', label: 'Bien', color: 'text-sunshine' },
  okay: { emoji: '😐', label: 'Regular', color: 'text-muted-foreground' },
  bad: { emoji: '😔', label: 'Mal', color: 'text-peach' },
  terrible: { emoji: '😢', label: 'Muy mal', color: 'text-destructive' },
};
