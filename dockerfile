# Step 1: Setup the backend
# We will use a Python-based image to run Flask
FROM python:3.12-slim AS backend

# Set working directory for backend
WORKDIR /app

# Install system dependencies for Flask and other Python libraries
RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Copy the backend files
COPY app.py /app/
COPY backend /app/backend

# Install Python dependencies (Assuming you have a requirements.txt file)
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Step 2: Copy the frontend 'dist' folder into the backend image
# Here, we assume you've already pushed your 'dist' folder to GitHub, and we can just copy it from there
COPY frontend/dist /app/frontend/dist

# Expose the Flask app port
EXPOSE 5000

# Command to run Flask application
CMD ["python", "app.py"]
