# USER STORIES

## Distilled Plan
1. Create FE w/ fake data
2. Connect FE to BE for real data
3. Write BE and connect to FE
4. Deploy and review site

<details>
<summary>TECH.DIVE NOTES (only FE)</summary>

### Goal
- Design and build platform allowing for doctors to easily record info about what they discovered in order to take a look back at it
    - CRUD structured radiology reports, which are assessments of x-ray images for COVID-19 patient exams
    * Home page: view exams, click on single exam, click on patient
    * Admin: add, delete, update, view exams, click on single exam, click on single patient

### MILESTONES
1. [x] set up code repo w/ skeleton
2. [ ] create all 3 pages
3. [ ] add interaction with api, each done separately
4. [ ] create data models, build endpoints

#### STEPS
0. Call fake data using api endpoints provided
    - get all exams: `https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams`
    - get one patient id: `https://czi-covid-lypkrzry4q-uc.a.run.app/api/patient/COVID-19-AR-16406504`
    - image url example: `https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16406504_XR_CHEST_AP_PORTABLE_2.png`
1. Start with index page displaying all exams with key information pieces in chart (hardcode data and display on page)
    - Use functional comps to display data

</details>


<details>
<summary>Focused on Front End</summary>

### Required for MVP
#### Required 7 Pages
- Main page (index.js): Users can view exam records in db
- Admin page (admin.js): Allow users to add new exam records, edit values, delete exam records
- Detail page (Exam) (list_single_exam.js or single_exam.js): Display all info of given exam including large image of chest x-ray
- Detail page (Patient) (list_single_patient.js or single_patient.js): Display all info of given patient including past exams and id
- In order to Create:
    * Create Exam Page (create_exam.js)
    * Create Patient Page (create_patient.js)
- In order to Update:
    * Update Exam Page (update_exam.js)

#### REGULAR USERS
- On main page, Users can view all exams taken by patients and their corresponding information + use nav bar to navigate between exams and admin pages
- On the main page and individual pages, Users can click on exam id, to go to a single report (patient's exam results) and click on patient id to go to a single patient's profile

##### Regular User Stretch Goals
- Users are able to perform searches on exams (based on video it is on terms in key findings)
- Users are able to perform sorting of exams based on age, sex, bmi, zip code

#### ADMINS
- On Admin page, Admins are able to view details of exams taken by patients
- On Admin page, Admins are able to create, update, and delete exams
- On the admin page and individual pages, Admins are able to go to a single report and click on patient id to go to a single patient's profile

##### Admin Stretch Goals
- Admins are able to perform searches on exams (based on video it is on terms in key findings)
- Admins are able to perform sorting of exams based on age, sex, bmi, zip code
- Admins are able to create patients when creating exams

### GENERAL STRETCH GOALS
0. design
    - include a separate landing page
1. ui/ux
    - update ui
        * using chakra or mantine ui combined with transitions at bare minimum
        * can decide to implement animation, three.js if there is time
    - add charts for data visualization
        * matplotlib
    - add FE js automated testing
        * jest as a possibility
    - with FE chart for exams:
        * allow for searching/filtering exams
        * sort exams on main page by column
    - provide a method for users to compare multiple assessments of the same exam type
        - reports table section (reports.js based on miro)
            * [report table](https://miro.com/app/board/uXjVNzO7qrM=/)
        * each exam has a type distinguished by their id, provide a way for a radiologist to view all assessments that fall under said type
            i.e examId: Exam-2 vs examId: Exam-4
            - exam-2 has 3 patients who have taken said test whereas exam-4 has 5 patients who have taken said test
        * Each report includes exam link , reviewer name, key findings
        * REPORTS Table vs EXAMS table (?)
            - One patient can have different exam-ids
                * Example: patientId of x888888, has examIds of Exam-105695, Exam-4 proving the point above
            - reports are defined by _id and exam type is examId
    - maybe for comparing reports include a component/separate page that allows for comparisons based on desired reports one wants to compare
        - doctor wants to compare three exams, click on three exams -> press compare -> go to compare screen
2. full stack
    - page for viewing all exams for given patient, users should edit, delete exams from page
    - allow users to create new patients in line with new exam report i.e if new exam is created, then allow for creation of new patient in same form it not existing already
