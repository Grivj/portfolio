import App from '../components/App/App'
import Code from '../components/App/Code'


const Experience = () => (
    <App>
        <Code code={`
Fullstack web developer
=======================
## Freelance - China, Tianjin
    > Various projects from conception to development
    *stack: PHP, HTML, CSS, JS, MySQL, SQL*

Back-end developer
==================
## ViaAduc - France, Paris / La Defense
    > Conception and development of PHP web applications
    mostly in the e-learning domain.
    Development from scratch of:
        • MOOC (Massive Open Online Course)
        • LMS (Learning Management System)
        • Applications to generate surveys and/or quizzes
    *stack: PHP, Symfony3, HTML/CSS, SQLServer*

Front-end developer
===================
## CompareAgences - France, Paris
Internship in a real-estate startup.
    > Front development on the main web-app
    > Creation and maintenance of a blog for SEO boost
    *stack: HTML/CSS/JS, Wordpress, Photoshop, SEO*

Front-end developer
===================
## Freelance - France, Cachan
First developer experience.
Creation of custom Wordpress websites:
    > For: University, Restaurant, Photographers
    *stack: HTML/CSS/JS, Wordpress, Photoshop*
        `.trim()}
            language="markdown"
        />
    </App>
)

export default Experience