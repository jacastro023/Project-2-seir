# Proud Creations
In this website the users are able to post whatever they are proud of. They can create a new post by adding an image, a name for the image and a description of the image or an explenation as to what it is they are posting. In the navbar there is a link called explore, which leads to all of the posts by all of the users. This project uses google login authentication, upon loging in the user is redirected to their profile page where they can see all of their own posts. On their profile, they can edit or delete their own posts. Each post also has a detail page in which users can like on comment on the posts. Only the user who commented can delete their comment. Everyone can see the home page without having to login, this page contains a desription and examples of what users can post about.

## Screenshots
#### This is how the home page look like:
![Home Page](/public/images/home.png)
#### Profile Page:
![Profile Page](/public/images/profile.png)
#### New Post Page:
![Home Page](/public/images/new-post.png)
#### Explore Page:
![Home Page](/public/images/all-posts.png)
#### Details Page:
![Home Page](/public/images/comment.png)

## Technologies Used:
* HTLM: This was used to set-up the views of each page.
* JS:  Javascript was used to be able to display the preview of the image being uploaded.
* CSS: CSS was used throughout the project to align and adjust all pages.
* Mongodb/Mongoose: This was the database that was used to store all of out data. users/posts
* Express: was used to set-up the framework for node.js
* Multer: was used to store and upload the images the user was selecting for their posts
* Passport: Passport was used together with passport-google-auth to let users sign in with google
* Bootstrap: was used throught the pages to help design and create the containers, such as the cards created for each post.

## Getting Started:
   If opening on mobile, make sure to zoom out. Not sure why it zooms in at every refresh.
* [Proud Creations](https://proud-creations.herokuapp.com/)
* [TrelloBoard](https://trello.com/b/aSNI4uhi/project-2)

## Next Steps:
* In the future I want users to be able to interact with other users.
* Users should be able to follow or friend other users.
* Filtering system for all the posts
* A user should be able to select a certain theme they want their post in.
* A user should be able to serach for a certain post
