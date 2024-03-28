import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Card } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';
import { Result } from "../interfaces/Article";


const SingleArticle = () => {
    const { id } = useParams<{ id: string }>();
    const [article, setArticle] = useState< Result| null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`);
                if (response.ok) {
                    const articleData = await response.json();
                    setArticle(articleData);
                } else {
                    throw new Error('Error fetching article');
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchArticle();
    }, [id]);

    if (loading) {
        return <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>;
    }

    
    if (!article) {
        return (
            <div>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        ); 
    }

    return (
        <Col xs={12} md={4} className="text-center">
            <Card>
                <Card.Img variant="top" src={article.image_url} />
                <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Text>{article.published_at}</Card.Text>
                    <Card.Text>{article.featured}</Card.Text>
                    <Card.Text>{article.news_site}</Card.Text>
                    <Card.Text>{article.summary}</Card.Text>
                    <Card.Text>{article.updated_at}</Card.Text>
                    <Card.Text>{article.url}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleArticle;