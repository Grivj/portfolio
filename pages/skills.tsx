import App from '../components/App/App'
import { Code, CodeLine } from '../components/App/Code'

const Skills = () => (
    <App>
        <Code>
            <CodeLine code="from enums import PROFICIENCY, EXPERIENCE" language="python" />
            <CodeLine />
            <CodeLine />

            <CodeLine code='deep_learning: dict[str, EXPERIENCE] = {' language="python" />
            <CodeLine code='"Python": EXPERIENCE.TwoYears,' language="python" indent={1} />
            <CodeLine code='"PyTorch": EXPERIENCE.TwoYears,' language="python" indent={1} />
            <CodeLine code='}' language="python" />
            <CodeLine />

            <CodeLine code='web_development: dict[str, EXPERIENCE] = {' language="python" />
            <CodeLine code='"React": EXPERIENCE.OneYear' language="python" indent={1} />
            <CodeLine code='"Next.js": EXPERIENCE.OneYear' language="python" indent={1} />
            <CodeLine code='"PHP": EXPERIENCE.FiveYears' language="python" indent={1} />
            <CodeLine code='"HTML": EXPERIENCE.FiveYears' language="python" indent={1} />
            <CodeLine code='"CSS": EXPERIENCE.FiveYears' language="python" indent={1} />
            <CodeLine code='}' language="python" />
            <CodeLine />

            <CodeLine code='softwares_libraries = [' language="python" />
            <CodeLine code='"GitHub", "Figma"' language="python" indent={1} />
            <CodeLine code='"FastAI", "LaTeX"' language="python" indent={1} />
            <CodeLine code='"Pandas", "Seaborn"' language="python" indent={1} />
            <CodeLine code='"NumPy", "Matplotlib"' language="python" indent={1} />
            <CodeLine code='"Google Colaboratory"' language="python" indent={1} />
            <CodeLine code='"Jupyter Notebook"' language="python" indent={1} />
            <CodeLine code=']' language="python" />
            <CodeLine />

            <CodeLine code='languages = {' language="python" />
            <CodeLine code='"French": PROFICIENCY.NATIVE' language="python" indent={1} />
            <CodeLine code='"English": PROFICIENCY.PROFESSIONAL' language="python" indent={1} />
            <CodeLine code='"Mandarin": PROFICIENCY.INTERMEDIATE' language="python" indent={1} />
            <CodeLine code='}' language="python" />
            <CodeLine />
        </Code>
    </App>
)

export default Skills