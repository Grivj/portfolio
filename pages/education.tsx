import App from '../components/App/App'
import { Code, CodeLine } from '../components/App/Code'


const Education = () => (
    <App>
        <Code>
            <CodeLine code='# MS Computer Science' language="markdown" />
            <CodeLine code='## Hunan University - China, Changsha' language="markdown" />
            <CodeLine code='> Research on the detection of adversarial examples,' language="markdown" indent={1} />
            <CodeLine code='* Note: Studying under the CSC Scholarship' language="markdown" indent={1} fontStyle="italic" style={{ color: "#C591E8" }} />
            <CodeLine />

            <CodeLine code='# Mandarin language courses' language="markdown" />
            <CodeLine code='## Hunan University - China, Changsha' language="markdown" />
            <CodeLine code='> Studying Mandarin while exploring Hunan, China.' language="markdown" indent={1} />
            <CodeLine code='* Note: Obtained the HSK3 certification' language="markdown" indent={1} fontStyle="italic" style={{ color: "#C591E8" }} />
            <CodeLine />

            <CodeLine code='# Bachelor digital project manager' language="markdown" />
            <CodeLine code='## IESA - France, Paris' language="markdown" />
            <CodeLine code='* Note: Certified title level II (FR) 6 (EU) (NSF320p-326p)' language="markdown" indent={1} fontStyle="italic" style={{ color: "#C591E8" }} />
            <CodeLine />
        </Code>
    </App>
)

export default Education