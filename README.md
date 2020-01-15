## Intro
This project is a continuation of the last Angular Flix project. If you noticed, that project had a problem. Any movie that you added to your list was added to the list of everyone else using the app. That would be like adding a Facebook friend, but then they become everyone's friend. We need data to be associated with a specific user. This requires authentication so that we know who each user is. Let's add sign up and log in to our app.

<img src="demo.gif">

### Setup
* Sign up for [themoviedb.org](https://www.themoviedb.org/documentation/api)
* Fork, Clone, npm install, npm start
* [Get your api key](https://www.themoviedb.org/settings/api)
* [Read the instructions](https://developers.themoviedb.org/3/getting-started/introduction)


## Services
* Make sure to import your services into ngModule and add to the providers

### Create an Authentication Service
* This is the service to handle signing up and logging in
* The class needs a property for the token
* Create the signup and login methods
    * signup(username, password)
        * This method should call the `ApiService` post method passing in a path `auth/signup` and data `{username, password}`
    * login(username, password)
        * This method should call the `ApiService` post method passing in a path `auth/login` and data `{username, password}`
        * Extract the token from the response and save it in the token property
    * getToken()
        * return `this.token`

### Components
* Create a dual-use SignUpLogin component.
* Create an input for username and password.
* There should be a button for SignUp and Login.
* Import and inject the AuthenticationService to use the methods.
* There should be a class property for `user` to store the username and password.
* Use ngModel to syncronize the inputs to the `user`
* If the SignUp button is clicked, do the signup process.
* If the Login button is clicked, do the login process.
* The signup process should automatically login the user.
* Display any error messages received
* If login is a successful redirect to the `main` route

### Routes
* Create two Angular routes `/` and `/main`
* `/` will show the SignUpLogin component.
* `/main` will show the Main component


### AuthInterceptor
* Create an HttpInterceptor called `AuthInterceptor`. 
* Add this to the providers array in ngModule
* Import and inject our Authentication Service so that you are able to get the token to add to the header.

