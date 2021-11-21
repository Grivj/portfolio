import { Code, CodeLine } from "../AppCode"

export const TCSkills = () => (
    <Code>
        <CodeLine code="from enum import Enum" language="python" />
        <CodeLine language="python" />
        <CodeLine language="python" />


        <CodeLine code='deep_learning = {' language="python" />
        <CodeLine code='"Python": "~ 2 years",' language="python" indent={1} />
        <CodeLine code='"PyTorch": "~ 2 years",' language="python" indent={1} />
        <CodeLine code='}' language="python" />
        <CodeLine language="python" />

        <CodeLine code='web_development = {' language="python" />
        <CodeLine code='"React": "< 1 year"' language="python" indent={1} />
        <CodeLine code='"Next.js": "< 1 year"' language="python" indent={1} />
        <CodeLine code='"PHP": "< 1 year"' language="python" indent={1} />
        <CodeLine code='"HTML": "< 1 year"' language="python" indent={1} />
        <CodeLine code='"CSS": "< 1 year"' language="python" indent={1} />
        <CodeLine code='}' language="python" />
        <CodeLine language="python" />

        <CodeLine code='softwares_libraries = [' language="python" />
        <CodeLine code='"GitHub", "Figma"' language="python" indent={1} />
        <CodeLine code='"FastAI", "LaTeX"' language="python" indent={1} />
        <CodeLine code='"Pandas", "Seaborn"' language="python" indent={1} />
        <CodeLine code='"NumPy", "Matplotlib"' language="python" indent={1} />
        <CodeLine code='"Google Colaboratory "' language="python" indent={1} />
        <CodeLine code='"Jupyter Notebook "' language="python" indent={1} />
        <CodeLine code=']' language="python" />
        <CodeLine language="python" />


        <CodeLine code='languages = {' language="python" />
        <CodeLine code='"French": PROFICIENCY.NATIVE' language="python" indent={1} />
        <CodeLine code='"English": PROFICIENCY.PROFESSIONAL' language="python" indent={1} />
        <CodeLine code='"Mandarin": PROFICIENCY.INTERMEDIATE' language="python" indent={1} />
        <CodeLine code='}' language="python" />

    </Code>
)