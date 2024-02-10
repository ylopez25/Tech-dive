# DOCUMENTING DEVELOPMENT PROGRESS - FE
## 1.28.24
* Looked at a some dev portfolios and found these font types to be extremely appealing and slick, saving for future FE development
    - font-family: var(--font-inter),ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    - font-family: Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";

* potential idea for logo/styling for platform
    - ![logo](potential_logo.png)
        * bigger font: josefin slab
        * smaller font: comfortaa

- I have prior familiarity with (styling, components)chakraui, framermotion (animation), three.js (three-d models) but as it is a new project, I am opting to try out: mantine ui (styling, components), gsap + react transition group (animation) with three.js
- Changed current sentence on `index.html`

* performed these installs
    - [mantine getting-started](https://mantine.dev/getting-started/)
    * Installed MantineUI (core, hooks):
        1. `npm install @mantine/core @mantine/hooks`
        2. `npm install --save-dev postcss postcss-preset-mantine postcss-simple-vars`

    - [gsap instalation](https://gsap.com/docs/v3/Installation)
        1. `npm install gsap`
    - [react-transition-group' install](https://reactcommunity.org/react-transition-group/)
        1.  `npm install react-transition-group --save`

    - [three.js install](https://threejs.org/docs/#manual/en/introduction/Installation)
        1. `npm install --save three`

## 1.29.24
- My initial idea is to map over exams in get all exams and store in array to act as a pseduo-db to allow for testing of CRUD operations
    * primitive: just map over values in dictionary like structure and display all in a react chart

### Performed Steps
1. `npm install react-router-dom` (install react router)
### After Meeting
- Going with chakraUI and framermotion for team
- going to experiment with mantine and gsap in spare time

## 02.01.24
- Main branch has mantineUi, so i created an experimentation branch that will instead serve for experimenting and then a chakra branch that will now have the current close to fe team dev cycle

- Going to proceed with getting some initial design in C branch: priority on designated pages, going to flesh out some ideas on others:
    * Admin page
        - update -> redirect to update page (update last_updated key)
        - for each record in dummy data, add new key-value pair for instances of deletion
            * (default) isDeleted = false -> (user presses delete button) -> isDeleted = true (boolean for instances on chart will be shown, if !object[isDeleted] / if object[isDeleted]===true)
            * refresh page automatically when record becomes deleted
    * Nav Bar Search
        - most likely using qps, or match useContext with both button click for search or key word press enter using t3 tutorial hooks

- Day
    * installed autoprefix `npm install autoprefixer@latest cross-env --save-dev`
    * edited client/package.json based on instructions of css autoprefixer -> [repo](https://github.com/postcss/autoprefixer)

### 02.09.24
- imported dayjs
    * `npm install dayjs`
    * `dayjs().toNow()`

### DS to implement
- Admin Page
    * implement useContext and add admin page with buttons that u/d

0. perform data cleaning, examId is going to be exam_type_id

1. Dictionary called ExamTypes - (1) iterate through all records, (2) insatiate a key for each exam_type_id in dict ExamTypes, (3) append at examTypes[exam_type_id] for all records that match that particular examType, (4) add a random report_id to each record
    - ExamTypes: {
        "Exam-1": [
            {report_id: <random_int>, _id:2, patientId:2,...},
            {report_id: <random_int>, _id:3, patientId:3,...}
        ],
        "Exam-2":[
            {report_id: <random_int>, _id:4, patientId:4,...},
            ...
        ]
    }
    * (no be) in order to get to a page of single report after clicking on report_id would be to pass it via props through qPs
        1. either use qps, with path parameters
        2. use useContext to pass information to child props through handleOnClick
        3. prop drilling

2. (sg)Reports Page/Table, includes report_id, (patient results's id) _id, reviewer name (find a js name generator package), keyFindings
    - Report: {'report_id':...,'_id':...,}

    *_id links back to patient assessment
3. (Patient Assessments) Exams - _id, patient_id, examId, ....
    - going to try for useContext for get all exams page/endpoint

4. Landing Page
5. Create Exam Form
6. Create Patient Form
7. Table Sorting/Filtering
<!--  -->
