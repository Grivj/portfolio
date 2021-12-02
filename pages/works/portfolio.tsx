import Work, { WorkBody, WorkHeader, WorkSectionTitle } from "../../components/App/Work"
import Code from "../../components/App/Code"
import { Text } from "@chakra-ui/react"

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
                    { href: "https://github.com/", title: "GitHub" },
                    // { href: "https://github.com/", title: "arXiv" },
                ]
            }
        />
        <WorkBody>
            <Text>
                I made this portfolio first to well... have a portfolio and secondly to get some exposure to Node/React.
                I chose Next.js, a framework built on top of Node to get that first exposure.
            </Text>
            <br />
            <Text>I tried to do a <b>VS Code-like</b> interface, designing all the components on Figma and later implementing them in React.</Text>
            <Text>Learned about Hooks, states, ... </Text>

            <WorkSectionTitle>Structure</WorkSectionTitle>
            <Code code={ProjectRootCode} language="markdown" />
        </WorkBody>
    </Work>
)

export default WorkPortfolio