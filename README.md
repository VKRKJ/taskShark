# VKRKJ-First-Project
1) The database updates state. State then updates itself as the database response .
2) States data should look like -
<!-- [
  {
    "_id": 1,
    "details": "Wireframe",
    "person": "Vicki",
    "phases": "2"
  },
  {
    "_id": 2,
    "details": "Schema",
    "person": "Reuben",
    "phases": "2"
  },
  {
    "_id": 3,
    "details": "hello",
    "person": "goodbye",
    "phases": "1"
  },
  {
    "_id": 4,
    "details": "4th Object",
    "person": "Test",
    "phases": "4"
  }
] -->
3) Then each object within the data array gets seperated into six different arrays depending on their phases value. Totalling 6 different arrays. Each array is then passed on through props to 1 specific component. For example the sprint component with have within its props an array, called newData of all the objects with the phases value of 2.
4) Within each column component we will iterate through the finalData. For the length of the array there will be one component created per element which will be a EachTask component with the propsObject called finalData. The finalData will display the name of each person and the details of each task.