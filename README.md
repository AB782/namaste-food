#Namaste React

# Basic Rules

- By diving the code into different components, we make the code more
  - testable
  - reusable
  - maintainable
- This is called Single Responsibility Principle:
  i.e each page has ONE single responsibilty

# parcel

- Dev build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - faster builds
- Image Optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Code Splitting
- differential Bundling - support old browsers
- Diagnostics
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- different dev and prod bundles

...
#Namaste Food

/\_-
1.HEADER

- Logo
- Nav Items
  2.BODY
- Search
- Restaurant Container - Restaurant Card - Image - Name of res, Rating, cuisine, delivery time 3. FOOTER
- Copyright
- Links
- Address
- Contact
  \_/

Two types of Export/Import

1. Default Export/Import

export default Components;
import Components from "path";

2. Named Export/Import

export const Component
import {Components} from "path";

# React Hooks

(Normal JS functions ) - written by Facebook developers

- useState() - Superpowerful React Variables

- call on top when function starts
- used to create Local state variables inside functional components
- never create inside if-Else conditions

* Always use useState outside the body component

# UseEffect()

- useEffect() - used when we have to call a function after rendering the file
  syntax -

useEffect(() =>{
console.log("useEffect Called)
},[])

- uses a dependancy array(optional)

3 Conditions of useEffect()

1. if NO dependancy array - useEffect will be called everytime the component renders
2. if EMPTY dependancy array - useEffect called once at the beginning
3. if Dependancy array - it will be called everytime the dependancy updates

# 2 Types of Routing in React Apps

- Client Side Routing : like this site we are developing, there are no network calls,
  everything we need is already loaded into the site

- Server Side Routing : when there's a network call, whenever a new page loads, a network call is made and data is fetched from there

# Custon Hooks
