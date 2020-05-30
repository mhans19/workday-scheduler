# Module 5: Weekly Challenge<br><br>
<b>Deployment</b><br>
<b>Website URL:</b> https://mhans19.github.io/workday-scheduler/<br>
<b>github URL for Repository:</b> https://github.com/mhans19/workday-scheduler<br>
<br>
<b>This application was build with the following:</b><br>
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Bootstrap</li>
        <li>Moment.js</li>
    </ul><br>
<br>    
<b>Contributor & Maintainer:</b><br>
    Morgan Hansen<br>
    (208) 807-4913<br>
    mdhansen19@gmail.com<br>
<br>
<b>Purpose</b><br>
    The purpose of this challenge was to create a daily planner scheduled during standard business hours. The application would not only allow users to input and modify events for each hour block of the planner, but it would also store the information in local storage and retrieve it upon loading the webpage. The planner was to be color coordinated, according the past, current, and future time blocks. For full functionality with screenshots, please see below.<br>
<br>
<b>User Story</b><br>
    AS AN employee with a busy schedule<br>
    I WANT to add important events to a daily planner<br>
    SO THAT I can manage my time effectively<br>
<br>
<b>Acceptance Criteria</b><br>
    GIVEN I am using a daily planner to create a schedule<br>
    WHEN I open the planner<br>
    THEN the current day is displayed at the top of the calendar<br>
    WHEN I scroll down<br>
    THEN I am presented with time blocks for standard business hours<br>
    WHEN I view the time blocks for that day<br>
    THEN each time block is color-coded to indicate whether it is in the past, present, or future<br>
    WHEN I click into a time block<br>
    THEN I can enter an event<br>
    WHEN I click the save button for that time block<br>
    THEN the text for that event is saved in local storage<br>
    WHEN I refresh the page<br>
    THEN the saved events persist<br>
<br>
<b>Functionality of Application</b> <br>
    <ol>
        <li>When the application loads, the user first sees the jumbotron at the top of the page, detailing the current date and last update time. The last update time reflects the last time the webpage was refreshed. If a user leaves the page open in the browser, the webpage will update every 10 minutes, allowing for the most recent information to be linked. If a user manually refreshes the page, it will restart the 10 minutes and update at the time of refresh.</li>
        <li>When the user scrolls down, they are presented with the planner block for standard business hours. Each row represents a one-hour time block, from 9AM to 5PM. The time block is detailed in the left-most column while the middle column allows for users to input events or tasks. The right-most button is a 'save' button that will trigger saving the event to the local storage. The rows are color coded according to their past, present, and future status. For time blocks that have passed, the center column will appear with a grey background. Future time blocks will have a green background and the present time block will have a red background. Events can be added or modified, regardless if the time block is in the past.</li>
        <li>Users can add text entries detailing events occuring throughout the day.</li>
        <li>User entries can be modified at any time.</li>
        <li>When an event is detailed and the user is ready to save, they will click on the blue save button with a checkmark to save the infrmation. A user should do this anytime they add or modify an event's details if they would like the information to be retained.</li>
        <li>When the user clicks the save button, the information is stored in local storage and will automatically be retrieved when the browser is refreshed (manually or after the 10 minute refresh is triggered).</li>
        <li>The user can continue to add, modify, and save events throughout the day, even on their mobile device as the application is mobile-responsive.</li>
        <li>When the user views the browser the next day, the local storage is clear and the planner is ready for a fresh day of events.</li>
    </ol>