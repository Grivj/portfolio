import App from '../components/App/App'
import { Code, CodeLine } from '../components/App/Code'


const Experience = () => (
    <App>
        <Code>
            <CodeLine code='# Fullstack web developer' language="markdown" />
            <CodeLine code='## Freelance - China, Tianjin' language="markdown" />
            <CodeLine code='> Various projects from conception to development.' language="markdown" indent={1} />
            <CodeLine code='* stack: PHP, HTML, CSS, JS, MySQL, SQL' language="markdown" indent={1} fontStyle="italic" style={{ color: "#C591E8" }} />
            <CodeLine />

            <CodeLine code='# Back-end developer' language="markdown" />
            <CodeLine code='## ViaAduc - France, Paris / La Defense' language="markdown" />
            <CodeLine code='> Conception and development of PHP web applications,' language="markdown" indent={1} />
            <CodeLine code='mostly in the e-learning domain.' language="markdown" indent={1} />
            <CodeLine code='Development from scratch of:' language="markdown" indent={1} />
            <CodeLine code='• MOOC (Massive Open Online Course)' language="markdown" indent={2} />
            <CodeLine code='• LMS (Learning Management System)' language="markdown" indent={2} />
            <CodeLine code='• Applications to generate surveys and/or quizzes' language="markdown" indent={2} />
            <CodeLine code='* stack: PHP, Symfony3, HTML/CSS, SQLServer' language="markdown" indent={1} fontStyle="italic" style={{ color: "#C591E8" }} />
            <CodeLine />

            <CodeLine code='# Front-end developer' language="markdown" />
            <CodeLine code='## CompareAgences - France, Paris' language="markdown" />
            <CodeLine code='Internship in a real-estate startup.' language="markdown" indent={1} />
            <CodeLine code='> Front development on the main web-app' language="markdown" indent={1} />
            <CodeLine code='> Creation and maintenance of a blog for SEO boost' language="markdown" indent={1} />
            <CodeLine code='* stack: HTML/CSS/JS, Wordpress, Photoshop, SEO' language="markdown" indent={1} fontStyle="italic" style={{ color: "#C591E8" }} />
            <CodeLine />

            <CodeLine code='# Front-end developer' language="markdown" />
            <CodeLine code='## Freelance - France, Cachan' language="markdown" />
            <CodeLine code='First developer experience.' language="markdown" indent={1} />
            <CodeLine code='Creation of custom Wordpress websites:' language="markdown" indent={1} />
            <CodeLine code='> For: University, Restaurant, Photographers.' language="markdown" indent={2} />
            <CodeLine code='* stack: HTML/CSS/JS, Wordpress, Photoshop' language="markdown" indent={1} fontStyle="italic" style={{ color: "#C591E8" }} />
            <CodeLine />
        </Code>
    </App>
)

export default Experience