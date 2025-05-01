# Image Metadata Cleaner

A privacy-focused web app that allows users to upload an image and remove all embedded metadata (like location, device info) before sharing.

## Features

- Upload and preview images.
- Automatically strips EXIF metadata.
- Preserves original image quality.
- Download the cleaned image directly.
- Professional UI with navigation and footer.

## Tech Stack

- **Frontend**: React (with Vite), Axios, Vanilla CSS
- **Backend**: Node.js, Express, `exiftool-vendored`

## Getting Started

### Prerequisites

- Node.js and npm

### Clone the Repository

```bash
git clone https://github.com/yourusername/image-metadata-cleaner.git
cd image-metadata-cleaner
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

### Backend Setup

```bash
cd server
npm install
node index.js
```

## Project Structure

```
image-metadata-cleaner/
├── client/           # React frontend (Vite)
├── server/           # Express backend
└── README.md
```

## Usage

1. Upload an image using the file input.
2. The app will strip metadata and return a cleaned image.
3. Click **Download Clean Image** to get the result.
