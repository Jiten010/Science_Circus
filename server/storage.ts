import { 
  users, type User, type InsertUser,
  contacts, type Contact, type InsertContact,
  registrations, type Registration, type InsertRegistration 
} from "@shared/schema";

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

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, Contact>;
  private registrations: Map<number, Registration>;
  private userCurrentId: number;
  private contactCurrentId: number;
  private registrationCurrentId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.registrations = new Map();
    this.userCurrentId = 1;
    this.contactCurrentId = 1;
    this.registrationCurrentId = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Contact methods
  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }
  
  async getContact(id: number): Promise<Contact | undefined> {
    return this.contacts.get(id);
  }
  
  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.contactCurrentId++;
    const created_at = new Date().toISOString();
    
    // Create contact object explicitly without spreading to avoid potential type issues
    const contact: Contact = { 
      id,
      created_at,
      name: insertContact.name,
      email: insertContact.email,
      subject: insertContact.subject,
      message: insertContact.message
    };
    
    this.contacts.set(id, contact);
    return contact;
  }
  
  // Registration methods
  async getRegistrations(): Promise<Registration[]> {
    return Array.from(this.registrations.values());
  }
  
  async getRegistrationsByEvent(eventId: string): Promise<Registration[]> {
    return Array.from(this.registrations.values())
      .filter(registration => registration.event_id === eventId);
  }
  
  async getRegistration(id: number): Promise<Registration | undefined> {
    return this.registrations.get(id);
  }
  
  async createRegistration(insertRegistration: InsertRegistration): Promise<Registration> {
    const id = this.registrationCurrentId++;
    const created_at = new Date().toISOString();
    
    // Create registration object explicitly without spreading to avoid type issues
    const registration: Registration = { 
      id,
      created_at,
      name: insertRegistration.name,
      email: insertRegistration.email,
      event_id: insertRegistration.event_id,
      phone: insertRegistration.phone ?? null // Use nullish coalescing to handle undefined
    };
    
    this.registrations.set(id, registration);
    return registration;
  }
}

export const storage = new MemStorage();
