# Demo Full Stack App - Setup Guide

A simple full stack app with **AdonisJS backend** and **React
frontend**.

------------------------------------------------------------------------

## Quick Start

### Backend Setup

``` bash
cd backend
npm install
cp .env.example .env
# Edit .env with your MySQL details
node ace migration:run
node ace db:seed
npm run dev
```

> Server runs on **http://localhost:3333**

------------------------------------------------------------------------

### Frontend Setup

``` bash
cd frontend
npm install
npm run dev
```

> App runs on **http://localhost:3000**

------------------------------------------------------------------------

## Test Login

  - **Email**      `test@example.com`
  - **Password**   `password`

------------------------------------------------------------------------

## What's Included

-   User login/register
-   JWT authentication
-   Protected dashboard
-   MySQL database
-   Modern React UI

------------------------------------------------------------------------

## API Routes

  - **POST**   `/api/login`       User login
  - **POST**   `/api/register`    User registration
  - **GET**    `/api/dashboard`   Protected dashboard data
  - **GET**    `/api/user`        Fetch user info
  - **POST**   `/api/logout`      User logout
  - **POST**   `/api/test`        Test Request
  - **GET**    `/api/health`      Health Check

------------------------------------------------------------------------

## Database

Run the included SQL schema to create users and sample data tables.

------------------------------------------------------------------------

That's it! The app should be ready to use.
