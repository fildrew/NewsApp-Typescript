import { Col, Card } from "react-bootstrap";
import { Result } from "../interfaces/Article";
import { Link } from 'react-router-dom';


interface ArticleProps {
    articleData: Result;
}

const Article = ({ articleData }: ArticleProps) => {
    return (
        <Col xs={12} sm={6} md={4} lg={3}>
            <Link to={`/articles/${articleData.id}`}>
                <Card>
                    <Card.Img variant="top" src={articleData.image_url} />
                    <Card.Body className="mb-4">
                        <Card.Title>{articleData.title}</Card.Title>
                        <Card.Text>{articleData.published_at}</Card.Text>
                        <a href={articleData.url} className="btn btn-primary">Read more</a>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    );
};

export default Article;