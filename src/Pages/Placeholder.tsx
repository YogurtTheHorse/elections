import {Container, Row} from "react-bootstrap";

export const Placeholder = () => {
    return <Container className="page-content">
        <Row className="hello">
            На данный момент, в регламенте есть намек на то, что анитацию нельзя вести до появления
            списка кандидтов, поэтому сайт находится в заморозке. Ждите следующей недели.
        </Row>
    </Container>;
}