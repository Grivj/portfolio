import Code from '../components/App/Code'

const CodeContent = `
#My story...
*in 1.40min*


I'm __Griveau Jordan__ from France, and my journey as a developer began in 2012.

I first started learning about web development at school between 2012 and 2016.
I had the opportunity to work as an intern first,
then as an apprentice, and finally as an independent.
These experiences all confirmed my appeal for development.

But...
======
In late 2017, things took a turn for the unknown.
I decided to take a small break of ten days to travel to China.
As soon as I was out of the airport,
I knew that China would become a part of my story.
Even before the end of the trip,
I couldn't wait to be back again.

So, when I arrived back in Paris,
I continued working for a few months to save some money before resigning.
Money that I used to pay for a six-month learning Mandarin program that I found online.
So there I was, in China again for six months in Tianjin.

Life was good, and every day was about learning something new,
the language, the food, the people, etc.
During that time, I also took on some more freelance projects.
I guess that I started missing typing in VS code!

After six months of experiencing China,
I was even more determined to stay.
So, I started looking for other ways to come back.
I searched for a few weeks and landed some appealing jobs.
But, despite the agreements from the companies,
my visa applications were all rejected.
Work visa issuance from China can be a pain sometimes!

Seeing that this approach wasn't leading anywhere,
I dipped into my savings again and went back to China as a student one more time.
This time,
I enrolled in a one year Mandarin learning program at 湖南大学 (Hunan University).
I was determined to learn Chinese the right way,
which could be helpful to get a work visa in the future.

At the University,
I made new friends with bright MS. degree students studying deep learning.
My interest in A.I. grew after talking with them so,
at the end of my one-year program, I applied for the same MS. degree in C.S.
I got accepted and even awarded a full governmental scholarship (CSC).

Now...
======
With Covid, I am back in France and unable to go back to China.
In the meantime,
I am looking for new opportunities and see where life brings me. 

*To continue.*
`.trim()

const Bio = () => (
    <Code code={CodeContent} language="markdown" />
)

export default Bio