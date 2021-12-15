import Code from "../components/App/Code"


const CodeContent = `
#About Me

Bonjour, I’m Griveau Jordan.

I’m a french guy who enjoys spending nights typing on his mechanical keyboard.
Life is dull when not learning new stuff, so I make sure I keep learning, whatever it may be, new cultures, Mandarin, design patterns, deep learning, chess openings, etc.

My goal is to perfect the craft, and I aim to write clean, maintainable, and scalable code.

I've recently been playing with these technologies:
    - [Python](https://www.python.org/)
    - [PyTorch](https://pytorch.org/)
    - [React.js](https://reactjs.org/)
    - [Next.js](https://nextjs.org/)
    - [TypeScript](https://www.typescriptlang.org/)

I ❤️:
    - music
    - chess ♘
    - the aesthetic of code
    - traveling in deep rural China
    - Stock market 📈
    - Crypto ₿
`.trim()

const Contact = () => (
    <Code code={CodeContent} language="markdown" />
)

export default Contact