import { Code, CodeLine } from "../AppCode"

export const TCSkills = () => (
    <Code>
        <CodeLine code="from enum import Enum" language="python" />
        <CodeLine />
        <CodeLine />

        <CodeLine code='deep_learning = {' language="python" />
        <CodeLine code='"Python": "~ 2 years",' language="python" indent={1} />
        <CodeLine code='"PyTorch": "~ 2 years",' language="python" indent={1} />
        <CodeLine code='}' language="python" />
        <CodeLine />

        <CodeLine code='web_development = {' language="python" />
        <CodeLine code='"React": "< 1 year"' language="python" indent={1} />
        <CodeLine code='"Next.js": "< 1 year"' language="python" indent={1} />
        <CodeLine code='"PHP": "< 1 year"' language="python" indent={1} />
        <CodeLine code='"HTML": "< 1 year"' language="python" indent={1} />
        <CodeLine code='"CSS": "< 1 year"' language="python" indent={1} />
        <CodeLine code='}' language="python" />
        <CodeLine />

        <CodeLine code='softwares_libraries = [' language="python" />
        <CodeLine code='"GitHub", "Figma"' language="python" indent={1} />
        <CodeLine code='"FastAI", "LaTeX"' language="python" indent={1} />
        <CodeLine code='"Pandas", "Seaborn"' language="python" indent={1} />
        <CodeLine code='"NumPy", "Matplotlib"' language="python" indent={1} />
        <CodeLine code='"Google Colaboratory "' language="python" indent={1} />
        <CodeLine code='"Jupyter Notebook "' language="python" indent={1} />
        <CodeLine code=']' language="python" />
        <CodeLine />

        <CodeLine code='languages = {' language="python" />
        <CodeLine code='"French": PROFICIENCY.NATIVE' language="python" indent={1} />
        <CodeLine code='"English": PROFICIENCY.PROFESSIONAL' language="python" indent={1} />
        <CodeLine code='"Mandarin": PROFICIENCY.INTERMEDIATE' language="python" indent={1} />
        <CodeLine code='}' language="python" />
        <CodeLine />
    </Code>
)

export const TCInterests = () => (
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

)

export const TCEducation = () => (
    <Code>
        <CodeLine code='# MS Computer Science' language="markdown" />
        <CodeLine code='## Hunan University - China, Changsha' language="markdown" />
        <CodeLine code='> Research on the detection of adversarial examples,' language="markdown" indent={1} />
        <CodeLine code='* Note: Studying under the CSC Scholarship' language="markdown" indent={1} fontStyle="italic" />
        <CodeLine />

        <CodeLine code='# Mandarin language courses' language="markdown" />
        <CodeLine code='## Hunan University - China, Changsha' language="markdown" />
        <CodeLine code='> Studying Mandarin while exploring Hunan, China.' language="markdown" indent={1} />
        <CodeLine code='* Note: Obtained the HSK3 certification' language="markdown" indent={1} fontStyle="italic" />
        <CodeLine />

        <CodeLine code='# Bachelor digital project manager' language="markdown" />
        <CodeLine code='## IESA - France, Paris' language="markdown" />
        <CodeLine code='* Note: Certified title level II (FR) 6 (EU) (NSF320p-326p)' language="markdown" indent={1} fontStyle="italic" />
        <CodeLine />
    </Code>
)

export const TCExperience = () => (
    <Code>
        <CodeLine code='# Fullstack web developer' language="markdown" />
        <CodeLine code='## Freelance - China, Tianjin' language="markdown" />
        <CodeLine code='> Various projects from conception to development.' language="markdown" indent={1} />
        <CodeLine code='* stack: PHP, HTML, CSS, JS, MySQL, SQL' language="markdown" indent={1} fontStyle="italic" />
        <CodeLine />

        <CodeLine code='# Back-end developer' language="markdown" />
        <CodeLine code='## ViaAduc - France, Paris / La Defense' language="markdown" />
        <CodeLine code='> Conception and development of PHP web applications,' language="markdown" indent={1} />
        <CodeLine code='Development from scratch of:' language="markdown" indent={1} />
        <CodeLine code='• MOOC (Massive Open Online Course)' language="markdown" indent={2} />
        <CodeLine code='• LMS (Learning Management System)' language="markdown" indent={2} />
        <CodeLine code='• Applications to generate surveys and/or quizzes' language="markdown" indent={2} />
        <CodeLine code='* stack: PHP, Symfony3, HTML/CSS, SQLServer' language="markdown" indent={1} fontStyle="italic" />
        <CodeLine />

        <CodeLine code='# Front-end developer' language="markdown" />
        <CodeLine code='## CompareAgences - France, Paris' language="markdown" />
        <CodeLine code='Internship in a real-estate startup.' language="markdown" indent={1} />
        <CodeLine code='> Front development on the main web-app' language="markdown" indent={1} />
        <CodeLine code='> Creation and maintenance of a blog for SEO boost' language="markdown" indent={1} />
        <CodeLine code='* stack: HTML/CSS/JS, Wordpress, Photoshop, SEO' language="markdown" indent={1} fontStyle="italic" />
        <CodeLine />

        <CodeLine code='# Front-end developer' language="markdown" />
        <CodeLine code='## Freelance - France, Cachan' language="markdown" />
        <CodeLine code='First developer experience.' language="markdown" indent={1} />
        <CodeLine code='Creation of custom Wordpress websites:' language="markdown" indent={1} />
        <CodeLine code='> For: University, Restaurant, Photographers.' language="markdown" indent={2} />
        <CodeLine code='* stack: HTML/CSS/JS, Wordpress, Photoshop' language="markdown" indent={1} fontStyle="italic" />
        <CodeLine />
    </Code>
)