Blog Application

- users can create and view blog posts

Features
- Users should be able to create new posts
- the homepage should allow user to view all their posts
- users should be able to edit and delete posts as needed


Planning

- pages:
  - homepage - list of all blog posts [also has the option to edit/delete blog]
  - create blog page - where user can write their blog
  - edit button - should direct to create blog page with blog to edit
  
  
  
  
Need a way to keep track of posts

posts object -  id [to keep track of]
		title
		content



Application structure
- Routes
- views
- static files

Routes
- get - homepage -> [list of all blogs]
- get (blogs/id) -> view blog by id

- get - create blog - form -> write blog title and content
- post - submit blog - [adds blog to the list of blogs]

- put - edit blog content [open the form with current content]
- put - updates the blog content

- delete [blogs/id] - remove a blog from the list of blogs and returns the homepage with all other blogs

HomePage

- lists of all blogs
- button to create new blog
- list of all blogs  [each blog has option to VIEW, EDIT, DELETE]

- When to use get/post method
