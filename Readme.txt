Steps to deploy on linux based server

1. Download the Source code as ZIP and extract using Winrar.

2. Open the project in any development studio, preferably Visual Studio.

3. Open the terminal and navigate to the folder with code.

4. Type command npm install (to download required modules and dependencies).

5. Run command: node server.js

6. Open Postman and import the Collections from collections folder(Present inside extracted Folder.)

7. test all the end points which are:

   7. a). Create Product(Enter details of product from body tab and selecting Raw data in JSON Format.)
   7. b). Update Product(Enter details of product from body tab and selecting Raw data in JSON Format.)
   7. c). Delete Product(Use id of any product to delete the particular product)
   7. d). Read Product(Use id of any product to get that product)
   7. e). Read all products

Steps to deploy on Heroku Server

1. Initalize an empty git repository. --git init 

2. Add files in the repsitory.  --git add .

3. Make commits. --git commit -m "m"

4. Create repository in your github and push the data. 
git remote add origin https://github.com/<username>/<Repository-Name>.git
>> git branch -M main
>> git push -u origin main

5. Login to heroku and create new app.

6. connect the repository with heroku.

7. Click on manual deploy and run the app.
