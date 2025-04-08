# GitHub Profile Search App

A React application that allows users to search for GitHub profiles using the GitHub API.

## Features

- Search for GitHub users by username
- Display user profile information including:
  - Profile picture
  - Name
  - Bio
  - Location
  - Public repositories count
- Loading state indication
- Error handling for failed requests

## Components

### GitProfileSearch
The main component that handles:
- API calls to GitHub
- State management for search results
- Loading states
- Error handling

### GitProfileForm
A form component that:
- Captures user input
- Handles form submission
- Provides search functionality

## Technologies Used

- React + Vite
- GitHub REST API
- CSS for styling
- React Hooks (useState, useEffect)

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/Sachin-Sati/GitHub-Profile-Search.git
```
3. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm run dev
```

## API Rate Limiting

The GitHub API has rate limiting for unauthenticated requests. To increase the rate limit:
1. Create a GitHub Personal Access Token
2. Add it to your environment variables
3. Use it in your API requests

## Contributing

Feel free to submit issues and enhancement requests.
