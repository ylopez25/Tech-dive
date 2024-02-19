# API-Routes (backend routes)

This web app uses the following API routes to dynamically update the page to create a single-page-app-like feel for the user for specific features.

## Admin
- A logged in Admin user may delete, update or create Exams, from a page of all posted Exams.

  - `GET /api/admin` 


## Exams

- Every user can view all Exams or a specific Exam, logged in or not. 

  - `GET ALL /api/exams`
  - `GET ONE /api/exams/:id`
- View Every exam associated with a patient
  
  - OR `GET ONE /api/exams/patient/:id`

- Admin use 
  - `POST /api/exams/create`
  - `PUT /api/exams/:id/update`
  - `DELETE /api/exam/:id`



<!-- ## Patients

- Every user can view Patient details, along with the list of all their exams and a specific Exam of that Patient, logged in or not.

  - `GET /api/patient/:id` -->




# Stretch Goals
  ## Search

- Every user may search for Exams through a search bar with the use of a filter. Key Findings matched in the included keywords will populate those exams on browser.

## 

### Patient Portal
- View Every exam associated with a patient
  
  - `GET ALL /api/patient/:id/exams`
