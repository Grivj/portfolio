import App from '../components/App/App'
import Code from '../components/App/Code'


const Skills = () => (
    <App>
        <Code code={`
{
    "includes": [
        "Chess", "Chess tactics",
        "Mandarin",
        "Aesthetic of code",
        "Uncle Bob",
        "Backpacking",
        "Visiting minorities in deep rural China"
    ]
}
        `.trim()}
            language="json"
        />

    </App>
)

export default Skills