import {Container, Row} from "react-bootstrap";

export const Placeholder = () => {
    return <Container className="page-content">
        <Row className="hello">
            На данный момент, в регламенте есть намек на то, что агитацию нельзя вести до появления
            списка кандидтов, поэтому сайт находится в заморозке. Ждем следующей недели.
        </Row>
    </Container>;
}