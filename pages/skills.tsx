import App from '../components/App/App'
import Code from '../components/App/Code'

const Skills = () => (
    <App>
        <Code code={`
from enums import EXPERIENCE, PROFICIENCY

deep_learning: dict[str, EXPERIENCE] = {
    "Python": EXPERIENCE.TwoYears,
    "PyTorch": EXPERIENCE.TwoYears
}

web_development: dict[str, EXPERIENCE] = {
    "React": EXPERIENCE.OneYear,
    "Next.js": EXPERIENCE.OneYear,
    "PHP": EXPERIENCE.FiveYears,
    "HTML": EXPERIENCE.FiveYears,
    "CSS": EXPERIENCE.FiveYears
}

softwares_libraries = [
    "GitHub", "Figma",
    "FastAI", "LaTeX",
    "Pandas", "Seaborn",
    "NumPy", "Matplotlib",
    "Google Colaboratory",
    "Jupyter Notebook"
]

languages = {
    "French": PROFICIENCY.NATIVE,
    "English": PROFICIENCY.PROFESSIONAL,
    "Mandarin": PROFICIENCY.INTERMEDIATE
}

        `.trim()}
            language="python"
        />
    </App>
)

export default Skills