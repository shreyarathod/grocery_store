dockerfile
# Use a multi-stage build to optimize image size

# --- Stage 1: Build the Frontend ---
FROM node:18-alpine AS frontend-builder

WORKDIR /app/frontend

# Copy frontend package.json and package-lock.json
COPY FreshMart-main/frontend/package*.json ./

# Install frontend dependencies
RUN npm install

# Copy the frontend source code
COPY FreshMart-main/frontend/ ./

# Build the frontend
RUN npm run build

# --- Stage 2: Build the Backend ---
FROM node:18-alpine AS backend-builder

WORKDIR /app/backend

# Copy backend package.json and package-lock.json
COPY FreshMart-main/backend/package*.json ./

# Install backend dependencies
RUN npm install

# Copy the backend source code
COPY FreshMart-main/backend/ ./

# --- Stage 3: Production Image ---
FROM node:18-alpine AS production

WORKDIR /app

# Copy the built frontend from the frontend-builder stage
COPY --from=frontend-builder /app/frontend/dist ./frontend/dist

# Copy the backend from the backend-builder stage
COPY --from=backend-builder /app/backend ./backend

# Install only production dependencies for the backend
WORKDIR /app/backend
RUN npm install --only=production

# Expose the backend port (adjust as needed)
EXPOSE 5000

# Set environment variables (adjust as needed)
ENV NODE_ENV production

# Command to start the backend application
CMD ["node", "app.js"]
```