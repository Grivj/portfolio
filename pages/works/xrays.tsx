import { Link, ListItem, Text, UnorderedList } from "@chakra-ui/react"
import Image from "next/image"
import Work, { WorkBody, WorkHeader, WorkSectionTitle } from "../../components/App/Work"


const WorkXrays = () => (
    <Work>
        <WorkHeader
            title="Covid detection via X-Rays chest scans"
            intro="[Proof of concept] Using chest scans to identify if a patient has Covid-19"
            thumbnailPath="/works/xrays/thumbnail.webp"
            tags={["PyTorch", "Python", "Jupyter Notebook", "FastAI"]}

        />
        <WorkBody>
            <Text>That was my first project using deep learning.</Text>
            <Text>I started this project at the beginning of Covid-19 when the US had about 400.000 cases and France 80.000 cases.</Text>

            <WorkSectionTitle>What I did</WorkSectionTitle>
            <Text>I first combined three datasets that I found online, which contained images of x-ray chest scans of patients with either:</Text>
            <UnorderedList>
                <ListItem>Covid-19</ListItem>
                <ListItem>Pneumonia</ListItem>
                <ListItem>Benign</ListItem>
            </UnorderedList>
            <br />
            <Text>Because it was the beginning of the epidemic, finding scans of patients with Covid was not easy and, I had to contact hospitals directly to get access to scans.</Text>
            <Text>In the end, my training set contained 5k images whereas the validation set was 2k images.</Text>

            <WorkSectionTitle>Training</WorkSectionTitle>
            <Text>Once my training set was composed, I started training and fine-tuning a few pre-trained (on Imagenet) ResNets using the FastAI library.</Text>
            <Text>I fine-tuned with various hyperparameters, modifying learning rates, batch sizes, optimizers, etc.</Text>

            <WorkSectionTitle>Implementing Grad-CAM</WorkSectionTitle>

            <Text>I implemented Grad-CAM (<Link isExternal href="https://arxiv.org/abs/1610.02391">See paper on arXiv</Link>) to visualize important decision regions of the images.</Text>
            <Text>
                You can see it on a few samples:
            </Text>
            <Image
                width="950px"
                height="871px"
                src="/works/xrays/grad-cam.webp"
                alt="Consistency b"
            />

            <WorkSectionTitle>Results and Limitations</WorkSectionTitle>
            <Text>After training for a few epochs, the model achieved a high (94%+) accuracy.</Text>
            <Text>Despite limited training data and some potential overfitting, what I found interesting was the clear separation between pneumonia patients and Covid-19 patients. We can observe the differences in the Grad-CAM: Covid-19 seems to affect a smaller area than pneumonia.</Text>
        </WorkBody>
    </Work>
)

export default WorkXrays