# News-App

## Introduction

The React News App is a web application that allows users to browse and read the latest news articles from various sources using the News API (https://newsapi.org). This documentation provides a comprehensive overview of the app's features, components, and how to set it up and run locally.

### Features

- News Categories: Users can select from a variety of news categories, such as business, technology, sports, entertainment, health, etc.

- Read More: Users can click on an article to read the full content on the source website.

- Responsive Design: The app is designed to be responsive and work well on various devices, including desktops, tablets, and mobile phones.

### Setup

To set up and run the React News App on your local machine, follow these steps:

Clone the repository:

bash

```
git clone https://github.com/Nikhil-13/News-App.git
cd News-App
```

### Install dependencies:

```
npm install
```

Obtain an API key from News API (https://newsapi.org) by signing up for a free account. The API key is required to fetch news data.

Create a .env file in the root of the project and add your API key:

```
VITE_API_KEY=YOUR_API_KEY_HERE
```

### Running the App

To start the development server and run the app, use the following command:

```
npm run dev
```

