# API-Routes (backend routes)

This web app uses the following API routes to dynamically update the page to create a single-page-app-like feel for the user for specific features.

## Admin
- A logged in Admin user may delete, update or create Exams, from a page of all posted Exams.

  - `GET /admin` 


## Exams

- Every user can view all Exams or a specific Exam, logged in or not. 

  - `GET ALL /exams`
  - `GET ONE /exam/:id`
- View Every exam associated with a patient
  
  - OR `GET ONE /patient/:id/exams`

- Admin use 
  - `POST /exam/create`
  - `PUT /exam/:id/update`
  - `DELETE /exam/:id`



<!-- ## Patients

- Every user can view Patient details, along with the list of all their exams and a specific Exam of that Patient, logged in or not.

  - `GET /patient/:id` -->




# Stretch Goals
  ## Search

- Every user may search for Exams through a search bar with the use of a filter. Key Findings matched in the included keywords will populate those exams on browser.

## 

### Patient Portal
- View Every exam associated with a patient
  
  - `GET ALL /patient/:id/exams`
