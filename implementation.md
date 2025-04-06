# Implementation

## Introduction
TODO: Describe the system implemented (Describe the dataset. Are there any known issues? Describe any configuration data).
This project implements an air pollution monitoring system designed to retrieve, visualize, and analyze air quality data in Bristol. The system integrates features like real-time pollutant tracking, and user-friendly interfaces, empowering individuals and researchers to make informed decisions.
Geographic Data: Locations like North Bristol, City Center, etc.
Pollutant Types:Particulate matter (PM2.5)

## Project Structure
TODO: Provide an outline of the project folder structure and the role of each file within it.
provide a table listing the number of jslint warnings/reports for each module.
ProjectRoot
-index.html          Entry point for the web application.
-styles.css         Contains all CSS styling for the project.
-scripts.js          Main JavaScript file for app functionality.
-apiHandler.js       Handles interactions with the Bristol Open Data API.
-chartGenerator.js  Handles graph creation using Chart.js.
   └── mapGenerator.js     Contains functions for interactive map creation using Leaflet.js.
-/assets
-/images             Contains images or icons used in the application.

  ── /data           Sample datasets for testing.
-README.md            Documentation explaining the project purpose and usage instructions.
─package.json          Metadata and dependencies for the project (if using npm).
└── .gitignore          Specifies files to ignore in the Git repository.
## Software Architecture
TODO: Describe the major components of your architecture. Are any particular architectural styles being used?

![Insert your component Diagram here](https://share.balsamiq.com/c/vZveMjcGPmeSTkTCyzjYF1.jpg)

## Bristol Open Data API
TODO: Document each query to Bristol Open Data
Query ID	Description	Parameters	Output	Issues
Q1	Retrieve real-time NO2 data	location=City Center, pollutant=NO2, date=today	JSON with pollutant levels	Occasional API downtime
Q2	Fetch historical PM2.5 data	location=North Bristol, pollutant=PM2.5, start_date=2025-01-01, end_date=2025-01-31	JSON with trend data	Incomplete historical data
Q3	Get all pollutants for City Center	location=City Center, pollutant=ALL, date=today	JSON listing all pollutants	Slow response at peak hours

![UML Class diagrams representing JSON query results](images/class1.png)
TODO: Repeat as necessary

# User guide
TODO: Explain how each use-case works by providing step-by-step screenshots for each use-case. This should be based on a tested scenario.