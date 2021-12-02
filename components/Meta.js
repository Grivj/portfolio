import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content={description} />
            <meta name='keywords' content={keywords} />
            <meta name="author" content="Griveau Jordan" />
            <link rel="apple-touch-icon" href="apple-touch-icon.png" />
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            <title>Griveau Jordan</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Homepage',
    keywords: 'Software Engineer, Web development, Machine Learning',
    description: "Griveau Jordan's portfolio"
}

export default Meta