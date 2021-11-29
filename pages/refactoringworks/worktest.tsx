import WorkLayout from "../../components/RefactoringApp/WorkLayout"
import { WorkHeader } from "../../components/RefactoringApp/Work"

const WorkTest = () => (
    <WorkLayout>
        <WorkHeader
            title="Adversarial examples detection"
            intro="Augue tempus, sagittis viverra egestas ornare semper massa quis. Pretium eu augue adipiscing volutpat et fames quisque et. Senectus varius ut imperdiet tristique ut blandit ipsum ut. Dictumst suspendisse egestas eu aliquet facilisi cum feugiat dictum scelerisque. Pellentesque aliquet ut est in sed morbi."
            thumbnailPath="/files_logos/file_type_image.svg"
            tags={["Python", "PyTorch"]}
            links={
                [
                    { href: "https://github.com/", title: "GitHub" },
                ]
            }
        />
    </WorkLayout>
)

export default WorkTest