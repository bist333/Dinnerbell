This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Desription
Dinnerbell is a prototype of a system designed to aid users in the scheduling, planning and coordination of group meals. The system currently supports takeout, homecooked, and restauraunt meals.

Dinnerbell was developed using React JS and Node Package Manager. The prototype was designed to be run locally for demoing purposes.

## Prerequisites
* This project assumes you have `node` and `npm` installed
* [Node Installation Instructions](https://nodejs.org/en/download/)

## Running the Project
### Windows
1. Download the project files to a new directory
2. Run the run.bat file by either command line or by double clicking it
3. Open a browser and navigate to [http://localhost:3000](http://localhost:3000)

### Unix/Linux/MacOS
1. Download the project files to a new directory
2. Navigate to that directory and type `bash run.sh`
3. Open a browser and navigate to [http://localhost:3000](http://localhost:3000)

## Other Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload automatically if you make and save edits.<br>
You will also see any lint errors in the console.

## Operations
### Creating Group

1) Navigate to the Peeps section using the side nav bar
2) Clink "Create Group" button that is under the list of already created groups
3) Choose a friend who you would like to add to your new group
4) Click on the Add button while your desired friend is selected
5) Repeat steps 3 and 4 until all desired friends are in the new group.
6) Click on the Save button at the bottom of the new group 

### Scheduling Meals

1) Navigate to the peeps section using the side nav bar or click the "Create a meal" button on the home screen.
2) Select the group you would like to dine with
3) Click the "Start a meal" button
4) Select the type of meal that you wish to invite yor group to
5) Choose the location using the map
6) Set the time you would like everyone to be there
7) Click on the button with the time to invite all group members

### Responding to Invites

1) Navigate to the Pending Meals section using the side nav bar
2) Locate which meal you would like to respond to
3) Click the green button to accept as is
4) Click the red button to decline the meal invite
5) Click the middle Grey button to request the meal master change the meal to a new time

## Unsupported features and bugs
### Unsupported features
Requesting a new time form the meal master is currently unsopported

The use of a map to select dinging location is currently mocked and not functional

### Bugs

There is a bug that does not let the user change the group name while making a new group

Some screen sizes have weird efects with the buttons on the pending meals view


