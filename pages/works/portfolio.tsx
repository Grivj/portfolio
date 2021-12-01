import Work, { WorkBody, WorkHeader } from "../../components/App/Work"


const WorkPortfolio = () => (
    <Work>
        <WorkHeader
            title="My portfolio"
            intro="My personal homepage."
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

        </WorkBody>
    </Work>
)

export default WorkPortfolio