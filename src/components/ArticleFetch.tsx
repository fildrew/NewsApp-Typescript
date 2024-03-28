import { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import Article from './Article'
import { Result } from '../interfaces/Article'


const ArticleFetch = () => {
    const [articles, setArticles] = useState<Result[]>([])
    const fetchArticles = async () => {
        try {
            const response = await fetch(
                'https://api.spaceflightnewsapi.net/v4/articles'
            )
            if (response.ok) {
                const arrayOfArticles = await response.json()
                console.log(arrayOfArticles)
                // salviamo l'array degli articoli nello state
                setArticles(arrayOfArticles.results)
            } else {
            throw new Error('errore nel recupero degli articoli')
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchArticles()
    }, [])

    return (
        <Container className='py-5'>
            <h2 className='fw-bold text-center'>Latest News</h2>
            <Row className="row row-cols-1 row-cols-md-3 g-4 py-5">
                {articles.map((singleArticle) => (
                <Article articleData={singleArticle} key={singleArticle.id} />
                ))}
            </Row>
        </Container>
    )
}

export default ArticleFetch;