This Project guides to integrate react app with redux 

Notes ::
Notes for React-Redux

React-Redux is used to connect react with redux

Provider and connect are components of react-redux we pass props to them

connect component is special component connects with the provider tag , it communicates with the provider with (  context  )  system

context system = Allows any parent component to communicate  to child component even if there are other components in between them

provider = Any app in our component gets access to store 

Steps to take care of 

1 ) actions or action-creators ( functions which return action ) are plain objects that has type = "" ( used to switch through reducer) ,
payload = ""                                                                                            
2 ) store    => has the state of entire application is made by combining reducers if many
3 ) Reducers => again a function which has 2 args (action , payload) ,  work of reducer is to store initial state , and return new state based on actions , keep in mind the original state should not change ( make a copy of it and than return a new object)
4) Component Re-renders on mapStatetoProps returns new state from store

