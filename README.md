## Requirements

- Python 3
- React
- Typescript

## Run the backend

```bash
$ ./run_server
```

# Student Management System

A web application to manage a database of students using React, TypeScript, Redux, React Router, Styled Components, and react-hook-form.

## Features

- **Student Grid**: Displays a list of students with options to add, update, and delete records.
- **Student Lookup**: Allows searching for students by UUID and displays the student information in a card-like UI.
- **State Management**: Uses Redux for state management.
- **Styling**: Utilizes Styled Components for styling with support for theme-based customization.

## Project Structure

student-management/
├── public/
│ ├── favicon.ico
│ ├── index.html
│ ├── manifest.json
│ └── robots.txt
├── src/
│ ├── assets/
│ │ └── Safepay-logo_white.svg
│ ├── components/
│ │ ├── Footer.tsx
│ │ ├── Navbar.tsx
│ │ ├── StudentForm.tsx
│ │ ├── StudentGrid.tsx
│ │ ├── StyledComponents/
│ │ │ ├── Button.tsx
│ │ │ ├── Card.tsx
│ │ │ ├── Common.tsx
│ │ │ ├── DropDown.tsx
│ │ │ ├── FixedCenterContainer.tsx
│ │ │ ├── Form.tsx
│ │ │ ├── GridContainer.tsx
│ │ │ ├── Lookup.tsx
│ │ │ ├── SearchStudents.tsx
│ │ │ ├── StudentCard.tsx
│ │ │ └── StudentDescriptionCard.tsx
│ ├── pages/
│ │ ├── GridPage.tsx
│ │ ├── LookupPage.tsx
│ ├── redux/
│ │ ├── store.ts
│ │ └── student/
│ │ ├── reducer.ts
│ │ ├── studentService.ts
│ ├── styles/
│ │ └── GlobalStyles.ts
│ ├── App.tsx
│ ├── index.css
│ ├── index.tsx
│ ├── react-app-env.d.ts
│ ├── reportWebVitals.ts
│ └── setupTests.ts
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (>=14.x)
- npm (>=6.x)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/student-management-system.git
   cd student-management-system
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Application

To start the development server, run:

    ```bash
    npm start
    ```

This will start the application at [http://localhost:3000](http://localhost:3000).

## Components

- **Navbar**: `src/components/Navbar.tsx`  
  Provides navigation links to the different pages in the application.

- **Footer**: `src/components/Footer.tsx`  
  Simple footer component for the application.

- **StudentForm**: `src/components/StudentForm.tsx`  
  Form for adding new students. Uses react-hook-form for form handling and dispatches an action to add a student to the Redux store.

- **StudentGrid**: `src/components/StudentGrid.tsx`  
  Displays a grid of students and allows for deletion of students. Connected to the Redux store to fetch student data.

- **StudentLookup**: `src/components/StudentLookup.tsx`  
  Allows users to lookup a student by UUID and displays the student's information in a card format.

- **StudentCard**: `src/components/StyledComponents/StudentCard.tsx`  
  Displays student information in a card format and shows the most recently looked up student.

## Pages

- **GridPage**: `src/pages/GridPage.tsx`  
  The main page displaying the student grid. Contains the `StudentForm` and `StudentGrid` components.

- **LookupPage**: `src/pages/LookupPage.tsx`  
  The page for looking up a student by UUID. Contains the `StudentLookup` and `StudentCard` components.

## Redux

- **Store**: `src/redux/store.ts`  
  Configures the Redux store and combines all reducers.

- **Student Slice**: `src/redux/student/reducer.ts`  
  Manages the state related to students. Actions include adding, deleting, and setting the recent lookup student.

## Styling

- **Styled Components**  
  Styled components are used for consistent and modular styling. They are located in the `StyledComponents` directory and are used across various components.

- **Global Styles**: `src/styles/GlobalStyles.ts`  
  Global styles are defined to maintain a consistent look and feel across the application.

## API Endpoints

The backend endpoints are defined in the included Postman file. Ensure your backend is running and configured correctly to handle these endpoints.

## Improvements

- Component Organization: Group related components into subdirectories.
- Consistent Naming: Use consistent naming conventions.
- TypeScript Types: Define and use TypeScript types for props and state management.
- Testing: Add unit and integration tests.
- Documentation: Keep the README.md up to date with detailed instructions.
- Code Splitting: Use React’s lazy loading and code splitting features.
- Error Handling: Implement proper error handling in forms and API calls.

## License

This project is licensed under the MIT License.
