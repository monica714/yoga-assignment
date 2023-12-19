# Yoga Classes Admission Form Assignment by Flexmoney

## Table of Contents
- [Introduction](#introduction)
- [Requirements](#requirements)
- [Features](#features)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Assumptions](#Test-Cases)
- [Additional Documents](#Additional-Documents)


## Introduction
1-Welcome to the Yoga Classes Admission Form project! This application facilitates the registration process for monthly yoga classes. 
2-It enforces age restrictions.
3-Handles monthly payments allows batch selection.
4-Provides a seamless user experience.

## Requirements
- Node.js
- MongoDB
- Other dependencies
- (For Frontend)
-    @reduxjs/toolkit": "^2.0.1",
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "autoprefixer": "^10.4.16",
    "axios": "^1.6.2",
    "postcss": "^8.4.32",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-redux": "^9.0.4",
    "react-router-dom": "^6.21.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4")
- (For Backend)
-   "body-parser": "^1.19.0",
    "colors": "^1.4.0",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.17.1",
    "mongoose": "^8.0.3"

  

## Features
1. **Age Restriction:** Only individuals aged between 18-65 can enroll.
2. **Monthly Payments:** Users must pay the monthly fee of 500 INR.
3. **Batch Selection:** Choose from four batches per day.
4. **Batch Editing:** Participants can shift batches monthly.


## Project Structure
- `/yoga-from-frontend`: Frontend React application.
- `/yoga-form-backend`: Backend Node.js application.


## 1> INSTALL DEPENDENCIES AND USAGE
- Start the frontend:
  cd yoga-form-frontend
  `npm start`
- Start the backend:
  cd yoga-form-backend
  `npm run dev`
  
## 2> Open the application in your browser: `http://localhost:3000`

## 3> ASSUMPTIONS MADE WHILE WORKING ON THIS PROJECT 
- This Project contains First Page wgich is `./login` Page (Where existing user can make changes if they want to edit the batch on monthly basis).
- Also New Registeration Page `./register` (Where new user select their Age, Email, Batch, Password).
- After succesful Login it redirects to the `./check-events` Page where user can edit their batch and proceed to the Payment section.
- For existing user `./billing-form` will appear only after a month if they already in a batch and wish to change the event they can only do so after a  month.
- For new user there will be the option to change batch anytime but only if they are'nt enrolled in any batch.
- Exisitng user can check their current batch at `./check-event`.

## 4>ADDITIONAL DOCUMENTS 
- ASSIGNMENT DOCUMENTAION
   **Please go through the documentation for smooth evaluation, here's the drive link : https://drive.google.com/file/d/1ht147T7WaoVrNemKp4IIpp6NpZA-XyOU/view?usp=drive_link **
- ER DIAGRAM
   **Google Drive Link Attached : https://drive.google.com/file/d/1gup3tXjcp3WYGdFaqxbr7bpFOAJGaRLc/view?usp=drive_link **
  




