# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage - using serve to serve static files
FROM node:18-alpine AS production

WORKDIR /app

# Install serve globally
RUN npm install -g serve

# Copy built files from builder stage
COPY --from=builder /app/build ./build

# Expose port 3000
EXPOSE 3000

# Start serve
CMD ["serve", "-s", "build", "-l", "3000"]
