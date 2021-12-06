import Code from '../components/App/Code'

const CodeContent = `
#My story...

I'm Griveau Jordan from France, and my journey as a developer began in 2012.
I first started learning about web development at school between 2012 and 2016.
I had the opportunity to work as an intern first, then as an apprentice, and finally as an independent.

But...
======
In late 2017, things took a welcomed turn!
I took a small break of ten days to travel to China.
As soon as I was out of the airport, I knew that those ten days in China wouldn't be the last.

And so, after being back in Paris, working and saving some money, I enrolled in a six months program to learn Mandarin in Tianjin.
Life was good, and every day was about learning something new.

After these six months of experimenting with life in China, I was even more determined to come again...

**So ...** I searched for a few weeks and landed some appealing jobs.
But despite the agreements from the companies, my visa applications were all rejected 🥲.
Seeing that this approach wasn't leading anywhere and that getting a working visa would require me to get at least an MS. degree, I dipped into my savings once again to apply for a one-year Mandarin learning program at Hunan University.
I wanted to learn Chinese the right way and then continue with a Master's degree once more acclimated to the culture and language.

During this year of studying, I met new friends who sparked my interest in *A.I.*.
So, I applied for an MS. degree in Computer Science at the same University and received a full governmental scholarship (CSC).

Now that there is Covid, I am back in France and unable to go back to China for the foreseeable future.
In the meantime, I am looking for new opportunities and see where life brings me.

*To continue.*
`.trim()

const Bio = () => (
    <Code code={CodeContent} language="markdown" />
)

export default Bio