// ===== User Models =====
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'youth' | 'professional' | 'admin';
  createdAt: string;
}

export interface Professional extends User {
  role: 'professional';
  specialty: string;
  bio: string;
  available: boolean;
}

// ===== Emotional State =====
export type MoodType = 'great' | 'good' | 'okay' | 'bad' | 'terrible';

export interface MoodEntry {
  id: string;
  userId: string;
  mood: MoodType;
  note?: string;
  createdAt: string;
}

// ===== Resources =====
export type ResourceCategory = 'ansiedad' | 'estres' | 'autoestima' | 'relaciones' | 'mindfulness' | 'general';

export interface Resource {
  id: string;
  title: string;
  description: string;
  content: string;
  category: ResourceCategory;
  imageUrl?: string;
  readTime: number; // minutes
  status: 'published' | 'draft';
  createdAt: string;
  updatedAt: string;
}

// ===== Chat =====
export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  content: string;
  createdAt: string;
  read: boolean;
}

export interface Conversation {
  id: string;
  participants: string[];
  lastMessage?: Message;
  updatedAt: string;
}
