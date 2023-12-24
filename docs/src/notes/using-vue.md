# Using Vue in Markdown

## Browser API Access Restrictions

Because VuePress applications are server-rendered in Node.js when generating static builds, any Vue usage must conform to the [universal code requirements](https://ssr.vuejs.org/en/universal.html). In short, make sure to only access Browser / DOM APIs in `beforeMount` or `mounted` hooks.

If you are using or demoing components that are not SSR friendly (for example containing custom directives), you can wrap them inside the built-in `<ClientOnly>` component:

##

 ```mermaid
graph TD
 1([Bottom of the Staircase])--+1--> 2([1 out of 3]);
 1--+2--> 3([2 out of 3]);
 2--+1--> 4([2 out of 3]);
 2--+2--> 5([3 out of 3]);
 3--+1--> 6([3 out of 3]);
 3--+2--> 7([4 out of 3]);
 4--+1--> 8([3 out of 3]);
 4--+2--> 9([4 out of 3]);
```
 