# Netflix-backend
By using nodejs and mongodb i have created netflix backend.
This project consist of 15 api in this project i have written the logic of all apis and how it works

--------------------------------------------------------------

# MODELS:

------------------------------------------------------------------------------------------------------------------------------------------------------------------
### AUTH ROUTER

1) `post api` : A profile created for the netflix mainly usename, email and password is mandatory field. in password field I have used validation like more than 8 character and less than 15 character must used. here for password encryption i have used CryptoJS package which encrypt password using  AES algorithm.

2) `login Api`: In this api Bacially if user have already account then they can abke to enter by using email and password for email verification we check that is this email is valid and already present in my database.
and for password decreption we are using CryptoJS as well as we have used Jwt (jsonwebtoken) to check for authentication. using jwt.sign() method here token will be create.


------------------------------------------------------------------------------------------------------------------------------------------------------------------
### USERS ROUTER

<h5>update profile data</h5>

1) `update api` : user can able to update user data like username, password, email anything user can able to do. either user(owner) or Admin can able to update profile. for that we have used authentication that the persons id is present in database that that password which match to the tokens password. user id and params id need to be match then old they can able to update profile

<h5>delete profile from database</h5>
2.`delete api` : it works exactly same as update here they check that user id and which id come from params both need to be same then only they can able to delete profile.

<h5>we can get any user </h5>
3.`get api`: using get method if I want to see someone else profile I can able to get it.In get i dont want that I can see others password so that I only return the info portion. and password I am not able to see. for that destructure method help me to do that.

<h5>see all the users </h5>
4. `get api`: see all users if you are not admin then you are not need to see all users to see profile. to see all profile you need to verify (Authentication and Authorization ) if you are fetching millions of data for that I have used limit so that only 5 profile you can able to see at a time and it fetch last 5 users so that new registed Profile Admin can able to fetch.If Admin dont want new user then it show the all users. The main thing here is that if You are Admin then only you can able to see profile otherwise you can't.


<h5>get All new users in this month</h5>
5) `get stat api`: in this api Admin can able to see how many users are registers in this month. for that I have used addregation method $project and $group.($group is used to group input documents by the specified _id expression and for each distinct grouping, outputs a document. $project is used to pass along the documents with the requested fields to the next stage in the pipeline.). to find month we are using $project (it help me to get current month)
$group help me to get all the total new users



------------------------------------------------------------------------------------------------------------------------------------------------------------------
### MOVIE ROUTER

//create new movie
1.`post api` : create movie In which Admin can able to add the movie.If you are not admin you cant able to Add movie. to check authentication we have used middleware function between req and res cycle.[to verify authentication and autorization]. 

//admin can able to update movie.
2. `update api`: admin can able to update movie. like new name or descrption about movie inpy admin can able to do that so authorization is checked over here.

3.`get api`: use to get perticular movie

//delete movie
4.`delete api` : admin can able to delete the movie.whatever movie is selected this movie is deleted by Admin.


// choose random movie to delete
5.`delete api` : Here Admin can able to delete random movies but if type is series it return all series if Admin type movies it return movies. to find the type we have used 2 aggregation function $match and $sample. it return all the data in Array format.in Model I have used isSeries keyword if that true then return series else movies

$match- The MongoDB $match operator filters the documents to pass only those documents that match the specified condition(s) to the next pipeline stage

$sample - Randomly selects the specified number of documents from the input documents.

------------------------------------------------------------------------------------------------------------------------------------------------------------------
### LIST ROUTER

//when i visit the home page i can able to see the list of movies, serie,homepage. when i click series button it can able to able 10 series.
when I click the movies it can able to fetch 10 movies.

//set all 10 movies
1. `post api` : which 10 movies user can see is set by Admin so admin can able to set all this 10 movies in any order. in which all the list id we are getting in the foem of array.

//delete the list
2. `delete api` : here we can able to delete all the list

//get all the list
3. `get api`:get all the list according to type we want.like if you want horror then all horror movies list will able to see. either you can able to fetch by type or genre.





