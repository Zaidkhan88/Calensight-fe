# Calendar App - 📅 Frontend 📅

Calendar app is a web application for manage your life **private** events using a Calendar. Create an account and start organizing your days.

You are the only admin of your events, being able to:

- [x] Create events
  - Title, notes (optional), start date, end date
- [x] Update events
- [x] Delete events
- [ ] View other people events (now only private events from march 2023)

Check the backend code and tech stack at [Calendar Back github repository](https://github.com/Zaidkhan88/Calensight-be))

## What is this repository ?

It's the source code for the frontend of the calendar app.

### Tech stack

This project was created using the **M.E.R.N.** stack that stands for MongoDB, Express.js, React.js and Node.js

#### Frontend

- **Frontend library -** [react.js](https://reactjs.org/)
- **State container -** [Redux.js](https://redux.js.org/) with [Redux Toolkit](https://redux-toolkit.js.org/)
- **Routes -** [React Router](https://reactrouter.com/en/main)
- **Tests -** [React testing library](https://testing-library.com/) and [Jest](https://jestjs.io/)
- **Continuous Integration -** [GitHub Actions](https://github.com/features/actions), check [calendar.yml](.github/workflows/calendar.yml) file
- **Build tool -** [Vite.js](https://vitejs.dev/)
- **Main programming languaje -** [javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

##### Dependencies

Read other project dependencies and versions in the [package.json](package.json) file.

#### Backend

Check the backend code and tech stack at [Calendar Back github repository](https://github.com/Zaidkhan88/Calensight-be)

## How to use this project

There are four ways you can use this project.
 
If you are going to use it for development, testing or your own production, first follow these steps for any of the modes:

1. Configure the backend project, in order to consume that api from this frontend project.
2. Clone the frontend project 


### Development

4. Install the project dependencies using [npm install](#npm-install)
5. Rename the [.env.template](.env.template) file to ***.env***
6. Start the project using [npm run dev](#npm-run-dev)


## Available scripts

### ```npm run dev```

Runs react app , uses the ".env" file.

