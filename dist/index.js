var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// shared/schema.ts
var schema_exports = {};
__export(schema_exports, {
  contacts: () => contacts,
  insertContactSchema: () => insertContactSchema,
  insertRegistrationSchema: () => insertRegistrationSchema,
  insertUserSchema: () => insertUserSchema,
  registrations: () => registrations,
  users: () => users
});
import { pgTable, text, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull()
});
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true
});
var contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  created_at: text("created_at").notNull().$defaultFn(() => (/* @__PURE__ */ new Date()).toISOString())
});
var insertContactSchema = createInsertSchema(contacts).pick({
  name: true,
  email: true,
  subject: true,
  message: true
});
var registrations = pgTable("registrations", {
  id: serial("id").primaryKey(),
  event_id: text("event_id").notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  created_at: text("created_at").notNull().$defaultFn(() => (/* @__PURE__ */ new Date()).toISOString())
});
var insertRegistrationSchema = createInsertSchema(registrations).pick({
  event_id: true,
  name: true,
  email: true,
  phone: true
});

// server/db.ts
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
var connection = postgres(process.env.DATABASE_URL);
var db = drizzle(connection, { schema: schema_exports });

// server/storage.ts
import { eq } from "drizzle-orm";
var DatabaseStorage = class {
  // User methods
  async getUser(id) {
    const results = await db.select().from(users).where(eq(users.id, id));
    return results.length > 0 ? results[0] : void 0;
  }
  async getUserByUsername(username) {
    const results = await db.select().from(users).where(eq(users.username, username));
    return results.length > 0 ? results[0] : void 0;
  }
  async createUser(insertUser) {
    const results = await db.insert(users).values(insertUser).returning();
    return results[0];
  }
  // Contact methods
  async getContacts() {
    return await db.select().from(contacts);
  }
  async getContact(id) {
    const results = await db.select().from(contacts).where(eq(contacts.id, id));
    return results.length > 0 ? results[0] : void 0;
  }
  async createContact(insertContact) {
    const created_at = (/* @__PURE__ */ new Date()).toISOString();
    const contactToInsert = {
      ...insertContact,
      created_at
    };
    const results = await db.insert(contacts).values(contactToInsert).returning();
    return results[0];
  }
  // Registration methods
  async getRegistrations() {
    return await db.select().from(registrations);
  }
  async getRegistrationsByEvent(eventId) {
    return await db.select().from(registrations).where(eq(registrations.event_id, eventId));
  }
  async getRegistration(id) {
    const results = await db.select().from(registrations).where(eq(registrations.id, id));
    return results.length > 0 ? results[0] : void 0;
  }
  async createRegistration(insertRegistration) {
    const created_at = (/* @__PURE__ */ new Date()).toISOString();
    const registrationToInsert = {
      ...insertRegistration,
      created_at,
      phone: insertRegistration.phone ?? null
      // Use nullish coalescing to handle undefined
    };
    const results = await db.insert(registrations).values(registrationToInsert).returning();
    return results[0];
  }
};
var storage = new DatabaseStorage();

// server/routes.ts
import { fromZodError } from "zod-validation-error";
async function registerRoutes(app2) {
  app2.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.status(200).json({
        message: "Thank you for contacting us! We'll get back to you soon.",
        contact
      });
    } catch (error) {
      if (error.name === "ZodError") {
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
  app2.post("/api/register", async (req, res) => {
    try {
      const validatedData = insertRegistrationSchema.parse(req.body);
      const registration = await storage.createRegistration(validatedData);
      res.status(200).json({
        message: "You have successfully registered for the event!",
        registration
      });
    } catch (error) {
      if (error.name === "ZodError") {
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
  app2.get("/api/admin/contacts", async (_req, res) => {
    try {
      const contacts2 = await storage.getContacts();
      res.status(200).json(contacts2);
    } catch (error) {
      res.status(500).json({
        message: "Failed to retrieve contacts"
      });
    }
  });
  app2.get("/api/admin/registrations", async (_req, res) => {
    try {
      const registrations2 = await storage.getRegistrations();
      res.status(200).json(registrations2);
    } catch (error) {
      res.status(500).json({
        message: "Failed to retrieve registrations"
      });
    }
  });
  app2.get("/api/admin/registrations/event/:eventId", async (req, res) => {
    try {
      const eventId = req.params.eventId;
      const registrations2 = await storage.getRegistrationsByEvent(eventId);
      res.status(200).json(registrations2);
    } catch (error) {
      res.status(500).json({
        message: "Failed to retrieve registrations for this event"
      });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    themePlugin(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
(async () => {
  try {
    log("Initializing database...", "db");
    await Promise.all([
      db.execute(
        /* sql */
        `CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username TEXT NOT NULL,
        password TEXT NOT NULL
      )`
      ),
      db.execute(
        /* sql */
        `CREATE TABLE IF NOT EXISTS contacts (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        subject TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at TEXT NOT NULL
      )`
      ),
      db.execute(
        /* sql */
        `CREATE TABLE IF NOT EXISTS registrations (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        event_id TEXT NOT NULL,
        phone TEXT,
        created_at TEXT NOT NULL
      )`
      )
    ]);
    log("Database tables created successfully", "db");
  } catch (error) {
    log(`Database initialization error: ${error.message}`, "db");
  }
})();
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 5e3;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
