# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: The foreign key would be on the Student model, the cohort has many students.

Researched answer:

The foreign key is used to identify which cohort the student belongs to- it is not the same as the student id but specifically identifies which cohort the student is in.

Which RESTful routes must always be passed params? Why?

Your answer: The Restful routes must always passed params because it defines the actions available in the applications and the type of action such as get, post, and patch.

Researched answer:
Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the req.params object, with the name of the route parameter specified in the path as
their respective keys.


Name three rails generator commands. What is created by each?

Your answer:  Rails Generate will generate a new code, rails s: will start the application model, rails c will generate a new code (new input).

Researched answer:

 rails COMMAND [ARGS] The most common rails commands are: generate Generate new code (short-cut alias: "g") console Start the Rails console (short-cut alias: "c") server Start the Rails server (short-cut alias: "s") ... All commands can be run with -h (or --help) for more information.





Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" route: /students

The controller method for this route is "index". This method is looking to retrieve all of the instances in the table.

action: "POST" route: /students

The controller method for this route is "create". This method adds a new instance of the model to the db table.

action: "GET" route: /students/new

The controller method for this route is "new". New generates a form with expected inputs for each of the columns in the table.

action: "GET" route: /students/2

The controller method for this route is "show". Show retrieves a single instance of the table.

action: "GET" route: /students/2/edit

The controller method for this route is "edit". Edit generates a form with expected inputs for each of the columns in the table.

action: "PATCH" route: /students/2

The controller method for this route is "update". Update renders any changes made to the data of a specific instance within the table.

action: "DELETE" route: /students/2

The controller method for this route is "destroy". Destroy deletes the specific instance in the table.

As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about user stories.

 Story: 1: As a user I can see all the cats in the database. 2: As a user I can update cats in the database. 3: As a user I can destroy a cat in the database. 4: As a user I can create a new animal in the database. 5: As a user I can create a sighting of a cat in the database. 6: As a user I can update a cat sighting in the database. 7: As a user I can destroy a cat sighting in the database. 8: As a user I can run a report to list all sightings during a given time period. 9: As a user I want to see a picture for each animal. 10: As a user I can update each cat bio.
