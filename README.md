# Config Analyzer

## Project Overview

Config Analyzer is a React web UI application that allows users to input a JSON blob via a textarea. The application formats the JSON for better readability and saves it in local storage, indexed by a GUID. 

The UI also features:
- A data table that displays the number of occurrences of each element in the set of JSON blobs.
- Visualization of the data using pie charts, implemented with a simple JavaScript graphing library.

## Features

- Input JSON blobs
- Pretty print JSON for readability
- Save JSON blobs in local storage
- Display occurrences of elements in a data table
- Visualize data with pie charts

## Implementation Steps

1. **Set up the React application**:
   - Use Create React App to bootstrap the project.
   - Run `npx create-react-app config-analyzer`.

2. **Create the main components**:
   - Create a `Textarea` component for JSON input.
   - Create a `PrettyPrint` component to format and display the JSON.
   - Create a `DataTable` component to show occurrences of elements.
   - Create a `PieChart` component to visualize the data.

3. **Implement local storage functionality**:
   - Use the `localStorage` API to save and retrieve JSON blobs indexed by GUID.

4. **Add data processing logic**:
   - Write functions to count occurrences of elements in the JSON blobs.
   - Integrate a graphing library (e.g., Chart.js) to create pie charts.

5. **Style the application**:
   - Use CSS or a UI framework (e.g., Bootstrap) for styling the components.

6. **Deploy to GitHub Pages**:
   - Configure the project for deployment on GitHub Pages.
   - Run `npm run build` and follow GitHub Pages deployment instructions.

## License

This project is licensed under the MIT License.
