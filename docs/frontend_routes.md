# User-facing routes (frontend routes)


Homepage

This page displays Exams , as well as a navigation bar with login/signup or logout buttons.

All users get navigation bar access to ________

Logged in users get navigation bar access to _______ that ______



- `GET /exams`
- `POST /MVP1`


## `/mvp1/:id`

This page displays individual question with associated answers and votes, as well as a navigation bar with login/signup or logout buttons. If the logged in user owns the question, this page also displays an update and delete button. Logged in users can upvote or downvote the answers on this page. The logged in owners of those answers can update or delete them.

--MVP1--
- `GET /mvp1/:id`
- `PUT /mvp1/:id`
- `DELETE /mvp1/:id`

