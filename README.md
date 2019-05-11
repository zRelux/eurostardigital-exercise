# Graduate Exercise

## Implementation

I decided to implement the todo app using reactjs since it is my favorite js library.
To use react I decided to setup babel and webpack to render the development experience faster and smoother.

## Changes

On the server part of the app I decided to add Cross-Origin Resource Sharing (cors) headers to allow the frontend to access the api and the list of the todo items.

## Tasks

1.  All the items get fetched inside the use effect and then reordered in descending order to achieve the task using the sort function provided by js.
    Then I render all the todos using the map function.

2.  The total number of todos gets displayed using the length of the array.

3. The total of the completed todos is achieved using the filter function, clearing out all the elements that are not completed and then getting the total length of the            remaining items.

## Extra

I decided to add a button to allow the user to choose the ordering of the elements (Ascending, Descending)
