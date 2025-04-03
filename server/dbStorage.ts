import { db } from "./db";
import { eq } from "drizzle-orm";
import { 
  users, type User, type InsertUser,
  contacts, type Contact, type InsertContact,
  registrations, type Registration, type InsertRegistration 
} from "@shared/schema";
import { IStorage } from "./storage";

export class DbStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username));
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }
  
  // Contact methods
  async getContacts(): Promise<Contact[]> {
    return await db.select().from(contacts);
  }
  
  async getContact(id: number): Promise<Contact | undefined> {
    const result = await db.select().from(contacts).where(eq(contacts.id, id));
    return result[0];
  }
  
  async createContact(insertContact: InsertContact): Promise<Contact> {
    // Set the created_at timestamp
    const data = {
      ...insertContact,
      created_at: new Date().toISOString()
    };
    
    const result = await db.insert(contacts).values(data).returning();
    return result[0];
  }
  
  // Registration methods
  async getRegistrations(): Promise<Registration[]> {
    return await db.select().from(registrations);
  }
  
  async getRegistrationsByEvent(eventId: string): Promise<Registration[]> {
    return await db.select().from(registrations).where(eq(registrations.event_id, eventId));
  }
  
  async getRegistration(id: number): Promise<Registration | undefined> {
    const result = await db.select().from(registrations).where(eq(registrations.id, id));
    return result[0];
  }
  
  async createRegistration(insertRegistration: InsertRegistration): Promise<Registration> {
    // Set the created_at timestamp and ensure phone is null if not provided
    const data = {
      ...insertRegistration,
      phone: insertRegistration.phone ?? null,
      created_at: new Date().toISOString()
    };
    
    const result = await db.insert(registrations).values(data).returning();
    return result[0];
  }
}