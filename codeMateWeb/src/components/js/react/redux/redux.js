/*

Name out an important feature of Redux workflow features

    Important features of Redux workflow are:

    Reset: Helps you to reset the State of the Store
    Revert: Allows you to roll back to the last committed State
    Sweep: All disable action that you might fire by mistake will be removed
    Commit: Helps you to make the current State the initial State.

// 18 Diving into Redux (An Alternative To The Context API) 
    Video -01

- What is redux?
    - It is a state management system for cross component or app wise.

    Video -02

State
    - Local State 
        - showing data
        - State that belongs to a single component
    - Cross Component State 
        - like modal
        - State that affects multiple components 
        - we need to pass props around which is call prop drilling or prop chaining
    - App Wide State - 
        - like user authentication
        - state that affects entire app

We can use either use Context API or redux to share data across component or ap wide. 

    Video -03

Redux vs Context
    - Some disadvantages of Context API :-
        - Complex setup and management
        - Deeply nested ContextAPIProvider chains
            return (
                <AuthContextProvider>
                    <ThemedContextProvider>
                        <UIInteractionContextProvider>
                            <MultiStepFormContextProvider>
                                <RegistrationForm />
                            </MultiStepFormContextProvider>
                        </UIInteractionContextProvider>
                    </ThemedContextProvider>
                </AuthContextProvider>
            )
        - A generic context provider file will be also very big
        - Performance can be bad depending on how we use it as its not optimized for high frequency state changes


Components never directly manipulate data store or central state 
For that we do have reducer functions.

Reducer Functions :-
    These are the functions that are responsible for mutating store data.In general transform inputs and spits out a new output.
    Inputs of a reducer function are :- Old state, Dispatched Action and it outputs a new state object
    So reducer functions should always be pure function i.e same set of inputs should always be giving same output and no side effects should be there.  

- So with reducer functions we are able to manipulate or updating store data and we do have components that subscribe to that store. 
- Components dispatch or trigger actions [ it is just a simple JS object that describes the kind of operation reducer should perform ] which describes what actions needs to be done to the reducer functions and then reducer function changes accordingly and then notifies the components that are subscribing to that data. 
- 



*/