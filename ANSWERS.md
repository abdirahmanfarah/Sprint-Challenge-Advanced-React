- [ ] Why would you use class component over function components (removing hooks from the question)?
  Because functional components don't have a setState and thus if you need state in your component, which seems to be all the time, you need to use class components because they have state. 

- [ ] Name three lifecycle methods and their purposes.
  
  ComponentDid Mount-- When a component is utlized in the beginning, ie it's being 'mounted'.

  render-- When the component renders into the browser, and whenever anything changes, it re-renders again. 

  ComponentWillUnmount---When a component is no longer utlized and thus is 'dead'. It's not being run, updated, or rendered. 

- [ ] What is the purpose of a custom hook?

    It produces dry, easy to read code and we can re-use it in as many components as we want. 

- [ ] Why is it important to test our apps?

  So that when launch day arrives, everything we have been working on doesn't bug out and crash on us. Also saves a company a lot of time and money. 