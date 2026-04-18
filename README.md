# CRUD_ASSIGNMENT1

Notes Management REST API built with Node.js, Express, and MongoDB.

## Features

- Create single and bulk notes
- Read all notes or get by ID
- Update notes (partial update with PATCH, full replace with PUT)
- Delete single and bulk notes

## Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)

## Installation

```bash
npm install
```

## Running the App

```bash
# Development
npm run dev

# Production
npm start
```

## Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

## API Endpoints

### Create Note
- **POST** `/api/notes`
- Body: `{ title, content, category, isPinned }`

### Create Bulk Notes
- **POST** `/api/notes/bulk`
- Body: `{ notes: [{ title, content, category, isPinned }, ...] }`

### Get All Notes
- **GET** `/api/notes`

### Get Note by ID
- **GET** `/api/notes/:id`

### Replace Note (PUT)
- **PUT** `/api/notes/:id`
- Body: `{ title, content, category, isPinned }`

### Update Note (PATCH)
- **PATCH** `/api/notes/:id`
- Body: `{ title?, content?, category?, isPinned? }`

### Delete Note
- **DELETE** `/api/notes/:id`

### Delete Bulk Notes
- **DELETE** `/api/notes/bulk`
- Body: `{ ids: [...] }`

## Data Model

### Note Schema
| Field | Type | Required | Enum |
|-------|------|----------|------|
| title | String | Yes | - |
| content | String | Yes | - |
| category | String | No | work, personal, study |
| isPinned | Boolean | No | - |
| createdAt | Date | Auto | - |
| updatedAt | Date | Auto | - |

## Sample Requests

### Create Note
```json
{
  "title": "My First Note",
  "content": "This is the content",
  "category": "work",
  "isPinned": true
}
```

### Update Note
```json
{
  "title": "Updated Title"
}
```

### Delete Bulk
```json
{
  "ids": ["id1", "id2", "id3"]
}
```

## Deploy (Render)

- **Start Command:** `node src/app.js`
- **Environment:** `MONGODB_URI` (your MongoDB Atlas connection string)