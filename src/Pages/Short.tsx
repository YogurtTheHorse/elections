import {Container, Row} from "react-bootstrap";

export const ShortPage = () => {
    return <Container className="page-content">
        <Row className="">
            <img className="w-50 mx-auto" src="img/brief.png" alt="Картинкагде щит ИС защищает студентов"/>
            <ul>
                <li>
                    Хотим сделать IS более открытым
                    <ul>
                        <li>
                            Публиковать все документы, с которыми работает IS
                        </li>
                        <li>
                            Ежемесячно отчитываться о работе
                        </li>
                        <li>
                            Публиковать исходный код всех разработок IS
                        </li>
                        <li>
                            Не допускать цензуры
                        </li>    
                    </ul>
                </li>
                <li>
                    Хотим, чтобы IS представлял интересы студентов
                    <ul>
                        <li>
                            Провести выборы председателей мега-факультетов и включить их вместе с председателями общежитий в состав IS
                        </li>
                        <li>
                            Создать систему обращений (включая обратную связь)
                        </li>
                        <li>
                            Создать сервис петиций
                        </li>
                    </ul>
                </li>
            </ul>

            <p>
                Следить за новостями <a href="https://t.me/yogurttheelections">тут</a>.
            </p>
            <p>
                Что мы уже делаем можно смотреть в <a href="https://trello.com/b/roi9Vk37">трелло</a>.
            </p>
            <p>
                Для связи со мной: <a href="https://t.me/yogurtthehorse">телеграм</a>, <a
                    href="https://vk.com/yogurtthehorse">вк</a> и <a href="mailto:yegor@yogurtthehor.se">почта</a> (???).
            </p>
            <p className="text-center">
                Расскажите о нас своим друзьям :)
            </p>
        </Row>
    </Container>;
}
