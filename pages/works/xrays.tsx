import { UnorderedList, ListItem, Text, Link, Image } from "@chakra-ui/react"
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

const WorkXrays = () => (
    <Work>
        <WorkHeader
            title="Covid detection via X-Rays chest scans"
            intro="Proof of concept: using chest scans to identify if a patient has Covid-19"
            thumbnailPath="/works/xrays/thumbnail.png"
            tags={["PyTorch", "Python", "Jupyter Notebook", "FastAI"]}

        />
        <WorkBody>
            <Text>This was my first project using Machine Learning.</Text>
            <Text>I started this project at the beginning of Covid-19, when US had about 400.000 cases and France 80.000 cases.</Text>

            <WorkSectionTitle>What I did</WorkSectionTitle>
            <Text>
                I first combined three datasets found online which contained images of
                x-ray chest scans of patients with either <b>pneumonia</b>, <b>Covid-19</b> or no condition.
            </Text>
            <br />
            <Text>
                Because it was the beginning of the epidemic, finding scans of patients with Covid was not easy and I had to directly look or contact hospitals to get access to scans.
            </Text>
            <Text>In the end my training set was containing 5k images and the validation set contained 2k images, both containing three classes : </Text>
            <UnorderedList>
                <ListItem>Covid-19</ListItem>
                <ListItem>Pneumonia</ListItem>
                <ListItem>Benign</ListItem>
            </UnorderedList>
        </WorkBody>

        <WorkSectionTitle>Training</WorkSectionTitle>
        <Text>Once my training set was composed, I started training and fine-tuning few pre-trained (on Imagenet) ResNets using the FastAI PyTorch library.</Text>
        <Text>I fine-tuned with various hyper parameters, modifying learning rates, batch sizes, optimizers, etc.</Text>

        <WorkSectionTitle>Implementing Grad-CAM</WorkSectionTitle>

        <Text>I implemented Grad-CAM (<Link externalLink href="https://arxiv.org/abs/1610.02391">See paper on arXiv</Link>) to visualize important decision regions of the images.</Text>
        <Text>
            You can see it on a few samples:
        </Text>
        <Image
            w="100%"
            src="/works/xrays/grad-cam.png"
            alt="Consistency b"
            cursor="pointer"
        />

        <WorkSectionTitle>Results and Limitations</WorkSectionTitle>
        <Text>Because of the very limited number of training data, the high classification accuracy is not too meaningful and shows overfitting.</Text>
        <Text>Despite the overfitting, the clear separation between pneumonia patients and Covid-19 patients for the models was impressive to observe as for a specialist, the difference between the two classes might not be as obvious.</Text>

    </Work>
)

export default WorkXrays