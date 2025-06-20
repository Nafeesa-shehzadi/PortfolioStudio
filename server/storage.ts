import { contacts, type Contact, type InsertContact } from "@shared/schema";
import { db } from "./db";

export interface IStorage {
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
}

export class DatabaseStorage implements IStorage {
  async createContact(insertContact: InsertContact): Promise<Contact> {
    const [contact] = await db
      .insert(contacts)
      .values(insertContact)
      .returning();
    
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    const allContacts = await db
      .select()
      .from(contacts)
      .orderBy(contacts.createdAt);
    
    return allContacts;
  }
}

export const storage = new DatabaseStorage();
