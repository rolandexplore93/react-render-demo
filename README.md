# Upskilling | React Render
> This documentation focuses on upskilling one's knowledge on React Render

* Mutability - (ObjectUseState): [ObjectUseState.js](https://github.com/rolandexplore93/react-render-demo/blob/master/src/Components/ImmutableState/ObjectUseState.js)
* Mutability - (ArrayUseState): [ObjectUseState.js](https://github.com/rolandexplore93/react-render-demo/blob/master/src/Components/ImmutableState/ArrayUseState.js)


### Parent, Child & Render
- When a parent component renders, React automatically renders all its child components
- When New State are the same as Old State, React will not render both the parent and child components
- If the parent component has been rendered before and if a setter function or dispatch function is called and the New State is the same as the Old State, the Parent re-renders once but the child will not re-render

### Optimization Techniques - preventing unnecessary rent in Parent and Child component
Optimization techniques can be done either through Same Element Reference or React Memoized
> Same Element Reference
* Invoke the child component as a child element under the parent component in App.js. [Parent][ChildOne /][/Parent]... (NB: [] was used to let Github display the componentname. So, replace [] with <>)
* Pass the child component as a props to the parent. ({children})
* Render the {children} props in the Parent component JSX

Things to know about Same Element Reference
-Component can change its state but not its props
-React automatically provides the optimization

> React memo
* In the ChildOneComponent, create additional export to re-export the component using React.memo(). For instance, export default memoizedComponent = React.memo(ChildOneComponent)
* Import [memoizedComponent /] in the parent component. (NB: [] was used to let Github display the componentname. So, replace [] with <>)
