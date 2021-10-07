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
                            Ежемесячные отчеты о работе с описанием выложенных документов
                        </li>
                        <li>
                            Публиковать исходники всех разработок IS
                        </li>
                    </ul>
                </li>
                <li>
                    Хотим, чтобы ИС представлял интересы студентов
                    <ul>
                        <li>
                            Сбор обратной связи о деятельности IS
                        </li>
                        <li>
                            Создание сайта с петициями
                        </li>
                        <li>
                            Возвращение председателей мега-факультетов и включение их в состав ИС
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
