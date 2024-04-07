## Todo using Recoil State Management Library 

1. Create 2 input boxes : title and description 
2. Button to add Todo
3. Filter input box where you write something and then it filters out the todo list depending upon the input
4. Display the complete list if filter is empty
5. Store both todo list and filter in state.


## Things to learn

1. We dont need to store Filter list in a state only the filter input needs to be stored in a state


## CSS Related Understanding : 

1. Create 3 sections on your page.
2. First section contains a todo List form
3. Second Section contains all the todo List
4. Third section renders the filtered List.


# Issues

1. If there is a change in input box buttons still re render (Avoid this change...Buttons need not re render)
2. On click of Filter list , even though filterState hasn't really changed it re renders the filterList component
3. 
