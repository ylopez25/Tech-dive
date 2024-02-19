<!-- # User-facing routes (frontend routes)


Homepage

This page displays Exams , as well as a navigation bar with login/signup or logout buttons.

All users get navigation bar access to ________

Logged in users get navigation bar ac cess to _______ that ______



- `GET /exams`
- `POST /MVP1`


## `/mvp1/:id`

This page displays individual question with associated answers and votes, as well as a navigation bar with login/signup or logout buttons. If the logged in user owns the question, this page also displays an update and delete button. Logged in users can upvote or downvote the answers on this page. The logged in owners of those answers can update or delete them.

--MVP1--
- `GET /mvp1/:id`
- `PUT /mvp1/:id`
- `DELETE /mvp1/:id` -->

# Frontend Routes

This web app uses the following routes to dynamically navigate the app to create a single-page-app-like feel for the user for specific features.

## Admin
- A logged in Admin user may read, delete, update or create Exams, from a page of all posted Exams.

  - `GET /api/admin/exams` 
  - `POST /api/admin/exams/create`
  - `PUT /api/admin/exams/:id/update`
  - `DELETE /api/admin/exams/:id`


## Exams

- Every user can view all Exams or a specific Exam, logged in or not. 

  - `GET ALL /api/exams`
  - `GET ONE /api/exams/:id`
- ### Patient Page (MVP friendly)
  - View Every exam associated with a patient by clicking the patients ID
  
  - `GET ONE /api/exams/patient/:patientId/exams`




<!-- ## Patients

- Every user can view Patient details, along with the list of all their exams and a specific Exam of that Patient, logged in or not.

  - `GET /api/patient/:id` -->



# Stretch Goals
  ## Search

- Every user may search for Exams through a search bar with the use of a filter. Key Findings matched in the included keywords will populate those exams on browser.

## 

### Patient Portal (After Model Implementation)
- View Every exam associated with a patient
  
  - `GET ALL /api/patient/:id/exams`
