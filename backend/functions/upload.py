import os

# Define a folder where uploaded files will be saved (directly in the backend folder)
UPLOAD_FOLDER = os.path.join(os.path.dirname(os.path.abspath(__file__)), '../upload_images')
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

# Function to check allowed file extensions
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# Function to handle file upload and unzip
def handle_file_upload(file, question_id):
    if file and allowed_file(file.filename):
        # Create a unique filename based on the question_id and the file extension
        file_extension = file.filename.rsplit('.', 1)[1].lower()  # Get the file extension
        filename = f"{question_id}.{file_extension}"  # Use question_id as the filename
        print(UPLOAD_FOLDER)
        file_path = os.path.join(UPLOAD_FOLDER, filename)

        # Save the file in the UPLOAD_FOLDER
        file_path = os.path.join(UPLOAD_FOLDER, filename)
        file.save(file_path)  # Save the file to the server

        # Construct the relative URL for accessing the image
        image_url = f"/upload_images/{filename}"
        return image_url  # Return the constructed image URL

    else:
        raise ValueError("Invalid file format. Only .png, .jpg, .jpeg, .gif files are allowed.")

