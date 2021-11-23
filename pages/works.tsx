import App from '../components/App/App'
import Code from '../components/App/Code'

const Works = () => (
    <App>
        <Code code={
`
import React, { useState } from "react";

function Example() {
const [count, setCount] = useState(0);

return (
<div>
    <p>You clicked {count} times</p>
    <button onClick={() => setCount(count + 1)}>
    Click me
    </button>
</div>
);
}
`.trim()
        } language="jsx"/>
    </App>
)

export default Works