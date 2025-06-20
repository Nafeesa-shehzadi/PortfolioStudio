import express, { type Express } from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { type Server } from "http";
import viteConfig from "../vite.config";

// Simple development server setup for Vite
export async function setupVite(app: Express, server: Server) {
  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    server: {
      middlewareMode: true,
      hmr: {
        server,
        // Reduce HMR aggressiveness
        timeout: 1000,
        overlay: true,
      },
      watch: {
        // Lower file system watching sensitivity
        usePolling: false, // Set to false to reduce CPU usage
        interval: 1000,    // Increase interval to reduce frequency
        binaryInterval: 3000,
      },
    },
    appType: "custom",
  });

  app.use(vite.middlewares);
  
  // Serve index.html for all other routes (SPA fallback)
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      // Get the absolute path to the index.html file
      const indexHtml = path.resolve(process.cwd(), "index.html");
      
      // Read the index.html file
      const template = await fs.promises.readFile(indexHtml, "utf-8");
      
      // Let Vite transform the HTML
      const transformedHtml = await vite.transformIndexHtml(url, template);
      
      res.status(200).set({ "Content-Type": "text/html" }).end(transformedHtml);
    } catch (e) {
      const err = e as Error;
      vite.ssrFixStacktrace(err);
      next(err);
    }
  });
}

// For production, serve static files
export function serveStatic(app: Express) {
  const clientDist = path.resolve(process.cwd(), "dist");
  app.use(express.static(clientDist));
  
  // SPA fallback
  app.get("*", (req, res) => {
    res.sendFile(path.join(clientDist, "index.html"));
  });
}
