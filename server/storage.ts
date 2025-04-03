import { 
  users, type User, type InsertUser,
  contacts, type Contact, type InsertContact,
  registrations, type Registration, type InsertRegistration 
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact methods
  getContacts(): Promise<Contact[]>;
  getContact(id: number): Promise<Contact | undefined>;
  createContact(contact: InsertContact): Promise<Contact>;
  
  // Registration methods
  getRegistrations(): Promise<Registration[]>;
  getRegistrationsByEvent(eventId: string): Promise<Registration[]>;
  getRegistration(id: number): Promise<Registration | undefined>;
  createRegistration(registration: InsertRegistration): Promise<Registration>;
}

// Implementation with database storage
export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const results = await db.select().from(users).where(eq(users.id, id));
    return results.length > 0 ? results[0] : undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const results = await db.select().from(users).where(eq(users.username, username));
    return results.length > 0 ? results[0] : undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const results = await db.insert(users).values(insertUser).returning();
    return results[0];
  }
  
  // Contact methods
  async getContacts(): Promise<Contact[]> {
    return await db.select().from(contacts);
  }
  
  async getContact(id: number): Promise<Contact | undefined> {
    const results = await db.select().from(contacts).where(eq(contacts.id, id));
    return results.length > 0 ? results[0] : undefined;
  }
  
  async createContact(insertContact: InsertContact): Promise<Contact> {
    const created_at = new Date().toISOString();
    const contactToInsert = {
      ...insertContact,
      created_at
    };
    
    const results = await db.insert(contacts).values(contactToInsert).returning();
    return results[0];
  }
  
  // Registration methods
  async getRegistrations(): Promise<Registration[]> {
    return await db.select().from(registrations);
  }
  
  async getRegistrationsByEvent(eventId: string): Promise<Registration[]> {
    return await db.select().from(registrations).where(eq(registrations.event_id, eventId));
  }
  
  async getRegistration(id: number): Promise<Registration | undefined> {
    const results = await db.select().from(registrations).where(eq(registrations.id, id));
    return results.length > 0 ? results[0] : undefined;
  }
  
  async createRegistration(insertRegistration: InsertRegistration): Promise<Registration> {
    const created_at = new Date().toISOString();
    const registrationToInsert = {
      ...insertRegistration,
      created_at,
      phone: insertRegistration.phone ?? null // Use nullish coalescing to handle undefined
    };
    
    const results = await db.insert(registrations).values(registrationToInsert).returning();
    return results[0];
  }
}

// Use DatabaseStorage instead of MemStorage
export const storage = new DatabaseStorage();
