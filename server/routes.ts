import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: 'All fields are required' });
      }
      
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Invalid email address' });
      }
      
      // In a real implementation, you would send an email or store in a database
      console.log('Contact form submission:', { name, email, subject, message });
      
      return res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      console.error('Error in contact form submission:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });

  // Newsletter subscription endpoint
  app.post('/api/newsletter', async (req, res) => {
    try {
      const { email } = req.body;
      
      // Validate email
      if (!email) {
        return res.status(400).json({ message: 'Email is required' });
      }
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Invalid email address' });
      }
      
      // In a real implementation, you would add to a newsletter service
      console.log('Newsletter subscription:', email);
      
      return res.status(200).json({ message: 'Subscribed successfully' });
    } catch (error) {
      console.error('Error in newsletter subscription:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
