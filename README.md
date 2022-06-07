# employee-review-system
## Description 
  A greate project which is use to submit review against each other for employees. And there is an admin
  who can see all employees, he can delete any of employee and he can create any employee. An admin can 
  create any employee to admin
  
## Tech stack used
  MongoDB is used for database, nodejs express as a server and ejs for views templates, javacript for coding
  and html, css for designing.
  
# How to setup the project on local system
  1. Clone this project
  2. Start by installing npm if you don't have it already.
  3. Navigate to Project Directory by : Using
  ```
  cd employee-review-system
  
  ```
  
  After reaching to the this preoject directory yo have to run this following command :
  ```
  $ npm install
  $ nodemon index.js 
  ```
  
  To create admin go to user controller and make ``` isAdmin : true ```
  and run Project and signup Now.
  
  Keep Mind make it ``` isAdmin : false ``` then run again for employee
  
  ## Features
  * Admin View
  	*Add/ remove/ update/ view employees
  	*Add/update/view performance reviews
  	*Assign employees to participate in another employee's performance review
  	
  * Employee View
    * List of performance review requiring feedback
    * Submit feedback
  * Login
  * Register
  
  ## Directory Structure
  * ```/assets/css``` - all css code
  * ```/assets/img``` - all the images
  * ```/config``` - MongooDB Atlas Configuration
  * ```/controllers``` - questions & option controllers code
  * ```/model``` - review and users. 
  * ```/routes``` - all routes according to admin and employee is here
  * ```/views``` - all ejs files
  * ```index.js``` - entry file
