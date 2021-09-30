import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

export const Layout = ({children}: React.PropsWithChildren<{}>) => {
    return <>
        <Navbar bg="transparent" expand="lg" fixed="top" className="">
            <Container fluid>
                <LinkContainer to="/" className="nav-logo">
                    <Navbar.Brand>
                        <img
                            src="img/shield_banner_small.png"
                            width="50"
                            className="nav-logo d-inline-block align-top"
                            alt="Лого"
                        />
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <LinkContainer to="/short">
                            <Nav.Link>Кратко</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        {children}

        <Container className="page-content legal">
            <Row>
                <Col>
                    <img className="hr-img d-block" src="img/hr.png" alt="hr"/>

                    <p className="text-center">
                        Данный информационный ресурс безвозмездно изготовлен
                        командой кандидата в председатели совета обучающихся университета ИТМО Егора Жумикова.
                        Ответственным за публикацию и распространение материалов с информационного ресурса является Егор
                        Жумиков. Это произведение доступно по <a rel="license"
                                                                 href="http://creativecommons.org/licenses/by-nc/4.0/">лицензии
                        Creative Commons «Attribution-NonCommercial» («Атрибуция-Некоммерчески») 4.0 Всемирная</a>.
                        <br/>
                        <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img
                            alt="Лицензия Creative Commons" style={{"borderWidth": 0}}
                            src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png"/></a>
                    </p>
                </Col>
            </Row>
        </Container>
    </>;
}