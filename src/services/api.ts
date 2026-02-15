/**
 * Service layer with mock data.
 * Replace implementations with HTTP calls when backend is ready.
 * Example: return fetch(`${API_BASE}/resources`).then(r => r.json());
 */

import { resources, professionals, conversations, messages, moodHistory, currentUser } from '@/data/mock';
import type { Resource, Professional, Conversation, Message, MoodEntry, MoodType, User } from '@/types';

// const API_BASE = 'http://localhost:3001/api'; // uncomment when backend is ready

export const api = {
  // Auth
  getCurrentUser: async (): Promise<User> => currentUser,
  login: async (_email: string, _password: string): Promise<User> => currentUser,
  register: async (_name: string, _email: string, _password: string): Promise<User> => currentUser,

  // Resources
  getResources: async (category?: string): Promise<Resource[]> => {
    if (category && category !== 'all') return resources.filter(r => r.category === category && r.status === 'published');
    return resources.filter(r => r.status === 'published');
  },
  getAllResources: async (): Promise<Resource[]> => resources,
  getResource: async (id: string): Promise<Resource | undefined> => resources.find(r => r.id === id),
  createResource: async (data: Partial<Resource>): Promise<Resource> => ({ ...data, id: `res-${Date.now()}`, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), status: 'draft' } as Resource),
  updateResource: async (id: string, data: Partial<Resource>): Promise<Resource> => ({ ...resources.find(r => r.id === id)!, ...data, updatedAt: new Date().toISOString() }),

  // Professionals
  getProfessionals: async (): Promise<Professional[]> => professionals,

  // Chat
  getConversations: async (): Promise<Conversation[]> => conversations,
  getMessages: async (conversationId: string): Promise<Message[]> => messages[conversationId] || [],
  sendMessage: async (conversationId: string, content: string): Promise<Message> => ({
    id: `msg-${Date.now()}`,
    conversationId,
    senderId: currentUser.id,
    content,
    createdAt: new Date().toISOString(),
    read: false,
  }),

  // Mood
  getMoodHistory: async (): Promise<MoodEntry[]> => moodHistory,
  addMoodEntry: async (mood: MoodType, note?: string): Promise<MoodEntry> => ({
    id: `m-${Date.now()}`,
    userId: currentUser.id,
    mood,
    note,
    createdAt: new Date().toISOString(),
  }),
};
