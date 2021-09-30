import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import { useLocation } from "react-router-dom";

export const Layout = ({children}: React.PropsWithChildren<{}>) => {
    const location = useLocation();

    const isShort = location.pathname === '/short';
    const menuLinkName = (isShort ? 'Длинно' : 'Кратко')
    const menuLink = (isShort ? '/' : '/short')

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
                <Nav className="ms-auto">
                    <LinkContainer to={menuLink}>
                        <Nav.Link>{menuLinkName}</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Container>
        </Navbar>

        {children}

        <Container className="legal">
            <Row className="pt-2">
                <Col>
                    <img className="hr-img d-block" src="img/hr.png" alt="hr"/>

                    <p className="text-center">
                        <a href="https://github.com/YogurtTheHorse/elections">
                            Исходный код сайта.
                        </a> Данный информационный ресурс безвозмездно изготовлен
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