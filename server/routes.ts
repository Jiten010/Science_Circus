import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertRegistrationSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate the request body
      const validatedData = insertContactSchema.parse(req.body);
      
      // Store the contact message
      const contact = await storage.createContact(validatedData);
      
      res.status(200).json({
        message: "Thank you for contacting us! We'll get back to you soon.",
        contact
      });
    } catch (error: any) {
      if (error.name === 'ZodError') {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          message: "Validation error", 
          errors: validationError.message 
        });
      } else {
        res.status(500).json({ 
          message: "Something went wrong while submitting your message" 
        });
      }
    }
  });

  // Event registration endpoint
  app.post('/api/register', async (req, res) => {
    try {
      // Validate the request body
      const validatedData = insertRegistrationSchema.parse(req.body);
      
      // Store the registration
      const registration = await storage.createRegistration(validatedData);
      
      res.status(200).json({
        message: "You have successfully registered for the event!",
        registration
      });
    } catch (error: any) {
      if (error.name === 'ZodError') {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          message: "Validation error", 
          errors: validationError.message 
        });
      } else {
        res.status(500).json({ 
          message: "Something went wrong with your registration" 
        });
      }
    }
  });

  // Get all contacts (admin endpoint)
  app.get('/api/admin/contacts', async (_req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.status(200).json(contacts);
    } catch (error) {
      res.status(500).json({ 
        message: "Failed to retrieve contacts" 
      });
    }
  });

  // Get all registrations (admin endpoint)
  app.get('/api/admin/registrations', async (_req, res) => {
    try {
      const registrations = await storage.getRegistrations();
      res.status(200).json(registrations);
    } catch (error) {
      res.status(500).json({ 
        message: "Failed to retrieve registrations" 
      });
    }
  });

  // Get registrations by event (admin endpoint)
  app.get('/api/admin/registrations/event/:eventId', async (req, res) => {
    try {
      const eventId = req.params.eventId;
      const registrations = await storage.getRegistrationsByEvent(eventId);
      res.status(200).json(registrations);
    } catch (error) {
      res.status(500).json({ 
        message: "Failed to retrieve registrations for this event" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
