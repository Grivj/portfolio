import App from '../components/App/App'
import Code from '../components/App/Code'


const Readme = () => (
    <App>
        <Code code={`
# Welcome to my portfolio!

http://localhost:3000/readme
        `.trim()}
            language="markdown"
        />

    </App>
)

export default Readme