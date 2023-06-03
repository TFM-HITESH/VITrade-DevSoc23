# Getting Started with build environment

1. Open VSCode. Make sure you have the `Github Pull Requests and Issues` Extension installed. Also make sure that you have Git installed : https://git-scm.com/downloads
2. Use Ctrl + Shift + P and type in Git Clone. In the search bar, Paste the GitHub clone link of this repository.
3. Choose a file location and hit Enter.
4. Delete .firebasesrc and firebase.json. These are unique for each system and need to be built from scratch
5. Setup a Firebase project along with a Web-App in it. 
6. As you are initialising the Web-App, make sure you update src\irebase\config.json with the new values specific to your webapp. 

Note : Before Running the commands, run the command `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`. This will make your VSCode Terminal have the same rights as Administrator. 

7. To begin, run `npm install react@17.0.2 react-dom@17.0.2`
8. Run `npm install bootstrap`
9. Run `npm install firebase`
10. Run `npm install -g firebase-tools`
11. Run the commmand `firebase login`. Follow the steps to login. 
12. Run the command `firebase init hosting`. Use (y, Use existing project, Choose Project, public, n, n)
13. To run the local server, use the command `npm start`

## Some additional notes :

You will have to create a Firebase webapp. <br>
You will have to create a Firestore database. <br>
You will have to resolve all the permissions required to make Firebase and Firestore to work with the development server.  <br>