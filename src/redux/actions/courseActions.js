

/*
We have a form that's set up and ready to send data. 
So it's time to wire up Redux. 
To begin setting up our Redux flow, let's create a few folders where we'll keep our Redux-related files. 
First, I'm going to place Redux-related files under a folder called Redux. 
So let's create a new folder under src called Redux. 
This is handy since we tend to work with multiple Redux-related files at the same time. 
But totally optional. 
Redux doesn't have any opinions about how you structure your folders. 
Inside this Redux folder, let's create a new folder called actions. 
This is where we'll store all our actions, such as saving a course, deleting a course, or loading courses. 
Inside this folder, let's create a new file. 
And we'll call it courseActions.js. 
This file will hold our course-related action creators. 
And since we're creating a course, let's call our first action creator createCourse. 
We will export a function, and that function will be called createCourse, and it will accept a course as an argument. 
Our action creator returns a plain object, and it must have a type property. 
We're going to set the type to CREATE_COURSE. 
And since this is a constant, I'm going to put it in all caps. 
Again, that's not required. 
It's just a common convention. 
Then for our payload, we're going to pass along the course that is passed in as an argument. 
Remember, this function is called an action creator because that's just what it does. 
It creates an action. 
The type property specifies the action's type. 
And for now, I'm just hard-coding a string here for CREATE_COURSE. 
And remember, the only requirement for an action is that it has a type property. 
The rest of its shape can be whatever works best for you. 
For this action, we're going to pass our course data. 
Now again, I can shorten this call a bit by removing the right-hand side here because the left and right-hand side match, and that is called the object shorthand syntax. 
We've created our first action and action creator. 
So next, let's create our first reducer.
*/

import * as types from "./actionTypes";

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}
