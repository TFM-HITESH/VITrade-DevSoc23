# Getting Started with build environment

1. Open VSCode. Make sure you have the `Github Pull Requests and Issues` Extension installed. Also make sure that you have Git installed : https://git-scm.com/downloads
2. Use Ctrl + Shift + P and type in Git Clone. In the search bar, Paste the GitHub clone link of this repository.
3. Choose a file location and hit Enter.
4. Delete .firebasesrc and firebase.json. These are unique for each system and need to be built from scratch
5. Setup a Firebase project along with a Web-App in it. 
6. As you are initialising the Web-App, make sure you update src\firebase\config.json with the new values specific to your webapp. 

Note : Before Running the commands, run the command `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`. This will make your VSCode Terminal have the same rights as Administrator. 

7. To begin, run `npm install react@17.0.2 react-dom@17.0.2`
8. Run `npm install bootstrap` (use `--force` if needed)
9. Run `npm install firebase` (use `--force` if needed)
10. Run `npm install -g firebase-tools`
11. Run the commmand `firebase login`. Follow the steps to login.
12. You will now have to change the project root file. So that firebase init hosting (next command) chooses the right project to deploy to.
13. Create a new file at the root level called `.firebaserc`. In that, paste
```
{
  "projects": {
    "default": "testhp-d2c81" //use your own project ID here from Firebase
  }
}
```
. Save this file
14. Run the command `firebase init hosting`. Use (y, Use existing project, Choose Project, public, n, n)
15. Now to make 2 changes to handle Firebase logins and Firebase Image uploading.
16. For firebase login, go to Build->Authentication. Choose Email and Password Authentication and Enable it.
17. To create an image bucket (to store images), go to Build->Storage. Then create a new Storage Bucket. Buckets store data online in Firebase.
18. Set it to Development Mode. DO NOT CHOOSE Production Mode. Copy paste and keep the Database rules.
19. Once the bucket is created, go to Rules at the top and copy paste the rules into there :
```
rules_version = '2';
// Craft rules based on data in your Firestore database
// allow write: if firestore.get(
// /databases/(default)/documents/users/$(request.auth.uid)).data.isAdmin;
service firebase.storage {
  match /b/{bucket}/o {
    // This rule allows anyone with your Storage bucket reference to view, edit,
    // and delete all data in your Storage bucket. It is useful for getting
    // started, but it is configured to expire after 30 days because it
    // leaves your app open to attackers. At that time, all client
    // requests to your Storage bucket will be denied.
    //
    // Make sure to write security rules for your app before that time, or else
    // all client requests to your Storage bucket will be denied until you Update
    // your rules
    match /{allPaths=**} {
      allow read, write: if request.time < timestamp.date(2023, 7, 3);
    }
  }
}
```
20. Go to firestore.rules file in VSCode and set the code to this :
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```
21. To run the local server, use the command `npm start`

## Some additional notes :

You will have to create a Firebase webapp. <br>
You will have to create a Firestore database. <br>
You will have to resolve all the permissions required to make Firebase and Firestore to work with the development server.  <br>

# After setup instructions :

Make sure you install this image : https://drive.google.com/file/d/12CvKAst6VdrApZAPfklOnQgbxsHtHpJw/view?usp=share_link into ./public/Images/banner copy.png

# Deployment :
There is already a deployment running at https://vi-trade-dev-soc23.vercel.app/
To run your own deployment follow the steps :

1. Go to vercel and login. Follow all the steps till you are able to deploy using Github Deployment
2. In the place to put the Github link, use the Repo link (same one which you used for cloning)
3. In the special build commands, we need to update them by going to Install Command. Click on the override button and then paste this command in `npm install react@17.0.2 react-dom@17.0.2`
4. Click on the Deploy Button, it will create the required deployment with Vercel Link


# Screenshots of Implementation 

Home Page : 
![image](https://github.com/TFM-HITESH/VITrade-DevSoc23/assets/92721993/6bb3ce65-e38c-40c9-aeb2-d54cc48ec62c)

Search Implementation :
![image](https://github.com/TFM-HITESH/VITrade-DevSoc23/assets/92721993/595f9b21-8607-4efb-ab6c-4a41d4c8f772)

Implementation of Filters in Category Bar (Note that only 'Electronic Gadgets' are displayed) :
![image](https://github.com/TFM-HITESH/VITrade-DevSoc23/assets/92721993/2811e6c0-decf-435b-8f09-237522d9f267)

Page Implementation :
![image](https://github.com/TFM-HITESH/VITrade-DevSoc23/assets/92721993/7d2d9ee8-1823-4a90-814b-92a83ecdbee0)

Login Screen :
![image](https://github.com/TFM-HITESH/VITrade-DevSoc23/assets/92721993/fe5c8e8a-79cf-4fa5-99b3-f41feec5190d)

Sign Up Screen : 
![image](https://github.com/TFM-HITESH/VITrade-DevSoc23/assets/92721993/adafeb09-338c-4fb7-a7e6-75d150c3eca6)

Implementation of Sell (Creating Listing) :
![image](https://github.com/TFM-HITESH/VITrade-DevSoc23/assets/92721993/9bfba606-0dee-4c7e-afcb-4e98b5a6b3a5)

Working of File Upload in Sell :
![image](https://github.com/TFM-HITESH/VITrade-DevSoc23/assets/92721993/82e57704-437a-4a10-a66e-e220bda2da00)

Test Sale Working :
![image](https://github.com/TFM-HITESH/VITrade-DevSoc23/assets/92721993/6b151a5b-7a1c-412f-bf6b-1bacb3ca0e1e)

Information of Listing seen by users : 
![image](https://github.com/TFM-HITESH/VITrade-DevSoc23/assets/92721993/c8f093dd-e817-44b5-b459-21c267b79273)


