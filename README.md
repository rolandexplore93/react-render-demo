# Upskilling | React Render
> This documentation focuses on upskilling one's knowledge on React Render

* Mutability - (ObjectUseState): [ObjectUseState.js](https://github.com/rolandexplore93/react-render-demo/blob/master/src/Components/ImmutableState/ObjectUseState.js)
* Mutability - (ArrayUseState): [ObjectUseState.js](https://github.com/rolandexplore93/react-render-demo/blob/master/src/Components/ImmutableState/ArrayUseState.js)


### Parent Child & Render
- When a parent component renders, React automatically renders all its child components
- When New State are the same as Old State, React will not render both the parent and child components
- If the parent component has been rendered before and if a setter function or dispatch function is called and the New State is the same as the Old State, the Parent re-renders once but the child will not re-render.