import { Text } from "@chakra-ui/react"
import Code from "../../components/App/Code"
import Work, { WorkBody, WorkHeader, WorkSectionTitle } from "../../components/App/Work"

const ProjectRootCode = `
$ROOT
├── pages
├───── pages/works
│   # React component files
├── components
│   # Non-react modules
├── lib
│   # Static files for images
└── public
`.trim()

const WorkPortfolio = () => (
    <Work>
        <WorkHeader
            title="My portfolio"
            intro="My personal homepage made with Next.js"
            thumbnailPath="/works/portfolio/thumbnail.png"
            tags={["React.js", "Next.js", "Chackra UI", "TypeScript", "JavaScript", "Figma"]}
            links={
                [
                    { href: "https://github.com/Grivj/portfolio", title: "GitHub" },
                    // { href: "https://github.com/", title: "arXiv" },
                ]
            }
        />
        <WorkBody>
            <Text>
                I built this portfolio to, ... well, have a portfolio but also to try React.js for the first time. It was also my first time using TS or even JS, which I tried my best to avoid previously.
            </Text>
            <br />
            <Text>
                I designed this portfolio trying to emulate VS Code&apos;s interface (Dark theme, I&apos;m no psycho).
            </Text>
            <br />
            <Text>
                It took some time, but I had a lot of fun learning about Hooks, Components states (struggled a bit with sharing states between parents/children btw), etc.
            </Text>
            <WorkSectionTitle>Structure</WorkSectionTitle>
            <Code code={ProjectRootCode} language="markdown" />
        </WorkBody>
    </Work >
)

export default WorkPortfolio