import Code from "../components/App/Code"


const CodeContent = `
#About Me


Hey there, I’m Griveau Jordan.

I’m a french guy who’s interested in learning new things, 
design-patterns, machine learning, chess, mandarin…
I aim to write clean, maintainable, and scalable code and to perfect the craft as much as I can.
I’m interested in deep learning but also and mainly interested in software engineering in general.

Recently I’ve been playing with those technologies:
    - [React.js](https://reactjs.org/)
    - [Next.js](https://nextjs.org/)
    - [TypeScript](https://www.typescriptlang.org/)
    - [Python](https://www.python.org/)
    - [PyTorch](https://pytorch.org/)

I ❤️:
    - music
    - chess ♘
    - the aesthetic of code
    - traveling in deep rural China
    - working on stuff
`.trim()

const Contact = () => (
    <Code code={CodeContent} language="markdown" />
)

export default Contact