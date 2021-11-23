import App from '../components/App/App'
import { Code, CodeLine } from '../components/App/Code'


const Skills = () => (
    <App>
        <Code>
            <CodeLine code='{' language="json" />
            <CodeLine code='"includes": [' language="json" indent={1} />
            <CodeLine code='"Chess", "Chess tactics",' language="json" indent={2} />
            <CodeLine code='"Mandarin",' language="json" indent={2} />
            <CodeLine code='"Aesthetic of code",' language="json" indent={2} />
            <CodeLine code='"Uncle Bob",' language="json" indent={2} />
            <CodeLine code='"Backpacking",' language="json" indent={2} />
            <CodeLine code='"Visiting minorities in deep rural China"' language="json" indent={2} />
            <CodeLine code=']' language="json" indent={1} />
            <CodeLine code='}' language="json" />
            <CodeLine />
        </Code>
    </App>
)

export default Skills