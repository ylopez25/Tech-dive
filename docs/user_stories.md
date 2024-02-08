# User Stories

## Users

### Demo Admin User

- As an unregistered and unauthorized user, I would like an easy to find and clear button on both the `/signup` and `/login` pages to allow me to visit the site as a guest without signing up or logging in.
  - I can click on a Demo User button to log me in and allow me to access as a normal user.
    - So that I can test the site's features and functionality without needing to stop and enter credentials.

### Log Out

- As a logged in user, I want to log-out via an easy to find log out button on the navigation bar.
  - While on any page of the site:
    - I can log out of my account and be redirected to a page.
      - So that I can easily log out to keep my information secure.

# Exams

### Create Exams

- As a logged in user, I want to be able to post new Exams.
  - When I'm on the '/exams' page:
    - I can submit a new Exams.

### Viewing Exams

- As a logged in Admin _or_ logged out user, I want to be able to view  ______.

  - When I'm on the `/` page:
    - I can view all posted Exams.

### Updating Exams

- As a logged in user, I want to be able to edit my Exams by clicking an Edit button associated with the Exams.
  - When I'm on the `/exams/:id` page:
    - I can click "Edit" to make permanent changes to MVP I have posted.
      - So that I can fix any errors I make in my MVP.

### Deleting Exams

- As a logged in user, I want to be able to delete an Exam by clicking a Delete button associated with the Exam.

  - When I'm on the `/exams/:id` page:
    - I can click "Delete" to permanently delete an Exam that I have posted

    
# Strech Goals

### Sign Up

- As an unregistered and unauthorized user, I want to be able to sign up for the website via a sign-up form.
  - When I'm on the `/signup` page:
    - I would like to be able to enter my email, username, and preferred password on a clearly laid out form.
    - I would like the website to log me in upon successful completion of the sign-up form.
      - So that I can seamlessly access the site's functionality
  - When I enter invalid data on the sign-up form:
    - I would like the website to inform me of the validations I failed to pass, and repopulate the form with my valid entries (except my password).
    - So that I can try again without needing to refill forms I entered valid data into.

### Log in

- As a registered and unauthorized user, I want to be able to log in to the website via a log-in form.
  - When I'm on the `/login` page:
    - I would like to be able to enter my email and password on a clearly laid out form.
    - I would like the website to log me in upon successful completion of the log-in form.
      - So that I can seamlessly access the site's functionality
  - When I enter invalid data on the log-in form:
    - I would like the website to inform me of the validations I failed to pass, and repopulate the form with my valid entries (except my password).
      - So that I can try again without needing to refill forms I entered valid data into.

   - I can click "Delete" to permanently delete an Exam that I have posted and all associated Assessments of that Exam
