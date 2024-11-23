# useState()
**useState()**
--------------

dynamic variables for the component. Changing the state signals to react this component has to re-render

**Creating a state**

```text-plain
const [datas, setData] = useState({initialValue});
```

**The setState() function**

To change the state you call the state's set function

```text-plain
setData({new State})
```

Best to not edit the state variable directly. But use this to replace the current state with a new state.

Note that setState is an async function.

**Passing the setState(functions)**

you can pass the \`setState()\` function throughout the app via react context or prop-drilling. This allows other components to trigger a re-render or change state

**"console.log()-ing" state**

due to it being an async state. you need the below [useEffect](useEffect().md) to get current state.

```text-plain
useEffect(()=>{console.log(state)}, [state])
```