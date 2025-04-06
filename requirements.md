# Requirements

## User Needs

### User stories
TODO: Write brief user stories to explain how various actors would interact with the system to accomplish a goal.
    Express these in the form from agile development:- As a (role) I want (goal) so that (benefit).

    different actors would be: Business owner, general public residents, goverment and tech enthusaist. 
- As a parent, I would want alerts for high pollution levels so that I can protect my child’s health.
- As a resident, I want to view real-time air quality levels in my area so that I can plan outdoor activities - As a student, I want easy-to-understand visuals of pollution levels so that I can include them in my assignments.

### Actors
TODO: List and describe the actors/users for this product.
- People in Bristol such as mothers looking for air quality information to make safe decisions about their daily activities.
- programmers contributing to API or platform development
- Businesses that want to understand their impact on air quality and implement eco-friendly solutions.
### Use Cases
TODO: Describe each use case (at least one per team member).
    Give each use case a unique ID, e.g. UC1, UC2, ...
    Summarise these using the use-case template below.

| TODO: USE-CASE ID e.g. UC1, UC2, ... | TODO: USE-CASE NAME | 
| -------------------------------------- | ------------------- |
| **Description** | TODO: Goal to be achieved by use case and sources for requirement |
| **Actors** | TODO: List of actors involved in use case |
| **Assumptions** | TODO: Pre/post-conditions if any</td></tr>
| **Steps** | TODO: Interactions between actors and system necessary to achieve goal |
| **Variations** | TODO: OPTIONAL - Any variations in the steps of a use case |
| **Non-functional** | TODO: OPTIONAL - List of non-functional requirements that the use case must meet. |
| **Issues** | TODO: OPTIONAL - List of issues that remain to be resolved |
Use-Case ID	CS1
Use-Case Name:	View Air Quality Data
Description: This case allows residents, such as mothers in Bristol, to view current air quality information and forecasts to decide whether it is safe for outdoor activities.
Actors: The Residents of Bristol (  mothers, families)
Assumptions:The system receives accurate and timely air quality data from sensors and external sources. Pre-condition: User has internet access.
 Post-condition: User is informed of current air quality conditions.
Steps	1. User logs accesses the public dashboard.
2. System retrieves current air quality data.
3. Data is displayed in an easy-to-understand format
4. User reviews the information and decides on activities.
Variations:	If data is delayed or unavailable, the system displays the last available data 
Non-functional:	The dashboard should load within 2 seconds and be mobile-friendly.
Issues: Handling data outages and ensuring data accuracy in real-time.

Use-Case ID:	CS2
Use-Case Name:	Contribute to API/Platform Development
Description:	This enables programmers to contribute code, propose improvements, and integrate new features into the air quality data platform through a collaborative development environment.
Actors:	Programmers/Developer
Assumptions: The Contributors have access to the source and development tools. 
Pre-condition: User must have authentication credentials.
 Post-condition: Code changes are reviewed.
Steps: Developer forks or clones the repository.
1. programmer implements new features or fixes bugs.
2. The Changes are submitted via pull requests.
3. Code is reviewed by peers and changed by approval.
4. The system is updated with the new functions and changes.
Variations:	Emergency fixes
Non-functional: Code quality standards must be met; Continuous Integration run automated tests with a pass rate before merging.
Issues:	Coordinating contributions from multiple time zones and ensuring timely code reviews.


TODO: Your Use-Case diagram should include all use-cases.

![Insert your Use-Case Diagram Here](images/use-case.png)

## Software Requirements Specification
### Functional requirements
TODO: create a list of functional requirements. 
    e.g. "The system shall ..."
    Give each functional requirement a unique ID. e.g. FR1, FR2, ...
    Indicate which UC the requirement comes from.

FR1: The website should retrieve current air quality data from sensors and external sources and display it in an easy-to-understand, color-coded interface
FR2:The website should offer old air quality data as well as new and forecast trends so users can compare past and current conditions.
FR3: The website should support a collaborative development environment.

### Non-Functional Requirements
TODO: Consider one or more [quality attributes](https://en.wikipedia.org/wiki/ISO/IEC_9126) to suggest a small number of non-functional requirements.
Give each non-functional requirement a unique ID. e.g. NFR1, NFR2, ...

NFR1: Performance and Response Time
 The website should load the public dashboard within 2 seconds and generate business reports within 5 seconds to ensure a responsive user experience.

NFR2: Scalability and Maintainability
The website should be built to handle more data and users over time, while remaining easy to maintain by using modular code and following coding standards.

NFR3: Security and Data Privacy
The website should implement robust authentication and authorization measures, and ensure that all sensitive data is handled in compliance with industry-standard security practices.
