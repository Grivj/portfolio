import { Box } from "@chakra-ui/react";
import { Code, CodeLine } from "./AppCode";


const TabContentSkills = () => (
    // <Flex flexDir="column">
    //     <Code line={1} indent={0} code="deep_learning = {" type="python" />
    //     <Code line={2} indent={1} code='"Python": "~ 2 years",' type="python" />
    //     <Code line={3} indent={1} code='"Pytorch": "~ 2 years",' type="python" />
    //     <Code line={4} indent={0} code="}" type="python" />
    //     <Code line={5} indent={0} code="" type="python" />
    //     <Code line={6} indent={0} code="web_development = {" type="python" />
    //     <Code line={7} indent={1} code='"React": "< 1 years"' type="python" />
    //     <Code line={8} indent={1} code='"Next.js": "< 1 years"' type="python" />
    //     <Code line={9} indent={1} code='"PHP": "~ 5 years"' type="python" />
    //     <Code line={10} indent={1} code='"HTML": "~ 5 years"' type="python" />
    //     <Code line={11} indent={1} code='"CSS": "~ 5 years"' type="python" />
    //     <Code line={12} indent={0} code="}" type="python" />
    //     <Code line={13} indent={0} code="" type="python" />
    // </Flex>
    // <Code
    //     language="python"
    //     code={`
    // deep_learning = {
    //     "Python": "~ 2 years",
    // }
    // `}
    // />
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

const TabContentInterests = () => (
    // <Flex flexDir="column">
    //     <Code line={1} indent={0} code="{" type="json" />
    //     <Code line={2} indent={1} code='"include": [' type="json" />
    //     <Code line={3} indent={2} code='"Something, Something",' type="json" />
    //     <Code line={4} indent={2} code='"Something else",' type="json" />
    //     <Code line={5} indent={1} code="]" type="json" />
    //     <Code line={6} indent={0} code="}" type="json" />
    // </Flex>
    // <Code
    //     language="json"
    //     code={`
    // {
    //     "include": [
    //         "something", "something",
    //         "something else"
    //     ]
    // }
    // `} />
    <Code>
        <CodeLine code='{' language="json" />
        <CodeLine code='"include": [' language="json" indent={1} />
        <CodeLine code='"something"' language="json" indent={2} />
        <CodeLine code=']' language="json" indent={1} />
        <CodeLine code='}' language="json" />
    </Code>
)

// const TabContentEducation = () => (
//     <Flex flexDir="column">
//         <Code line={1} indent={0} code="# MS Computer Science erfierjoiergjioejioerjgoe" type="md" />
//         <Code line={2} indent={0} code='## Hunan University - China, Changsha' type="md" />
//         <Code line={3} indent={1} code='> Research on the detection of adversarial examples' type="md" />
//         <Code line={4} indent={1} code='in deep learning, computer vision.' type="md" />
//         <Code line={5} indent={1} code="* Note: Studying under the CSC Scholarship" type="md" />
//         <Code line={6} indent={0} code="" type="" />

//         <Code line={7} indent={0} code="# Mandarin language courses" type="md" />
//         <Code line={8} indent={0} code='## Hunan University - China, Changsha' type="md" />
//         <Code line={9} indent={1} code='> Studying Mandarin while exploring Hunan, China.' type="md" />
//         <Code line={10} indent={1} code="* Note: Obtained the HSK3 certification" type="md" />
//         <Code line={11} indent={0} code="" type="" />

//         <Code line={12} indent={0} code="# Bachelor digital project manager" type="md" />
//         <Code line={13} indent={0} code='## IESA - France, Paris' type="md" />
//         <Code line={14} indent={1} code="* Note: Certified title level II (FR) 6 (EU) (NSF320p-326p)" type="md" />
//         <Code line={15} indent={0} code="" type="" />
//     </Flex>
// )

// const TabContentExperience = () => (
//     <Flex flexDir="column">
//         <Code line={1} indent={0} code="# Fullstack web developer" type="md" />
//         <Code line={2} indent={0} code='## Freelance - China, Tianjin' type="md" />
//         <Code line={3} indent={1} code='> Various projects from conception to development.' type="md" />
//         <Code line={4} indent={1} code='* stack: PHP, HTML, CSS, JS, MySQL, SQ' type="md" />
//         <Code line={6} indent={0} code="" type="" />

//         <Code line={1} indent={0} code="# Back-end developer" type="md" />
//         <Code line={2} indent={0} code='## ViaAduc - France, Paris / La Defense' type="md" />
//         <Code line={3} indent={1} code='> Conception and development of PHP web applications,' type="md" />
//         <Code line={4} indent={1} code='mostly in the e-learning domain.' type="md" />
//         <Code line={4} indent={1} code='Development from scratch of:' type="md" />
//         <Code line={4} indent={2} code='• MOOC (Massive Open Online Course)' type="md" />
//         <Code line={4} indent={2} code='•  LMS (Learning Management System)' type="md" />
//         <Code line={4} indent={2} code='• Applications to generate surveys and/or quizzes' type="md" />
//         <Code line={4} indent={1} code='* stack: PHP, Symfony3, HTML/CSS, SQLServe' type="md" />
//         <Code line={6} indent={0} code="" type="" />

//         <Code line={1} indent={0} code="# Front-end developer" type="md" />
//         <Code line={2} indent={0} code='## CompareAgences - France, Paris' type="md" />
//         <Code line={3} indent={1} code='Internship in a real-estate startup.' type="md" />
//         <Code line={4} indent={1} code='> Front development on the main web-app' type="md" />
//         <Code line={4} indent={1} code='> Creation and maintenance of a blog for SEO boost' type="md" />
//         <Code line={4} indent={1} code='stack: HTML/CSS/JS, Wordpress, Photoshop, SEO' type="md" />
//         <Code line={6} indent={0} code="" type="" />

//         <Code line={1} indent={0} code="# Front-end developer" type="md" />
//         <Code line={2} indent={0} code='## Freelance - France, Cachan' type="md" />
//         <Code line={3} indent={1} code='First developer experience.' type="md" />
//         <Code line={4} indent={1} code='Creation of custom Wordpress websites:' type="md" />
//         <Code line={4} indent={2} code='• For: University, Restaurant, Photographers.' type="md" />
//         <Code line={4} indent={1} code='* stack: HTML/CSS/JS, Wordpress, Photosho' type="md" />
//         <Code line={6} indent={0} code="" type="" />

//     </Flex>
// )




const AppBody = ({ tabIndex }: { tabIndex: number }) => {

    const contentSwitch = (contentId: number): JSX.Element => {
        switch (contentId) {
            case 0:
                return <TabContentSkills />
            case 1:
                return <TabContentInterests />
            // case 2:
            //     return <TabContentEducation />
            // case 3:
            //     return <TabContentExperience />

            default:
                return <>Content not found</>;
        }
    }

    return (
        <Box p="5">
            {contentSwitch(tabIndex)}
        </Box>
    )
}



export default AppBody