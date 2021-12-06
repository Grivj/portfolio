import Code from "../components/App/Code"
import { HStack, Link, Button } from "@chakra-ui/react"
import { ExternalLinkIcon } from '@chakra-ui/icons'

const CodeContent = `
#About Me

Bonjour, I’m Griveau Jordan.

I’m a french guy who enjoys spending nights typing on his mechanical keyboard.
Life is dull when not learning new stuff, so I make sure I keep learning, whatever it may be, new cultures, Mandarin, design patterns, deep learning, chess openings, etc.

My goal is to perfect the craft, and I aim to write clean, maintainable, and scalable code.

I've recently been playing with those technologies:
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
    - Stock market 📈
    - Crypto ₿

Where to find me:
`.trim()

const Contact = () => (
    <>
        <Code code={CodeContent} language="markdown" />
        <HStack ml="3em" mb="1em">
            <Link isExternal href="https://www.linkedin.com/in/griveau-jordan/">
                <Button fontFamily="Cascadia Code" color="rgb(255, 204, 153)">
                    LinkedIn
                    <ExternalLinkIcon mx='2px' />
                </Button>
            </Link>
            <Link href="mailto:griveau.jordan@gmail.com">
                <Button fontFamily="Cascadia Code" color="rgb(255, 204, 153)">
                    Gmail
                </Button>
            </Link>
        </HStack>
    </>
)

export default Contact