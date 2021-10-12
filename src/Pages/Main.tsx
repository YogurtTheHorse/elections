import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import './Main.scss'

type TeamMemberProps = {
    image: string;
    link: string;
    sub?: string;
}

const TeamMember = ({image, sub, link}: TeamMemberProps) => <a className="team-member" href={link}>
    <img src={image} alt={sub}/>
    {sub && <p className="text-center">{sub}</p>}
</a>;

export const MainPage = () => {
    return <Container className="page-content">
        <Row className="hello">
            <Col className="m-auto justify-content-center d-flex flex-column">
                <img id="yogurt-main" className="mx-auto d-block" src="img/portraits/yogurt.png" alt="Егор Жумиков"/>
            </Col>
            <Col className="my-auto text-center">
                Привет, меня зовут Егор. <br/>
                Я хочу быть председателем ITMO.STUDENTS
            </Col>
        </Row>
        <Row className="mt-5">
            <p>
                Эти выборы могут сильно поменять то, как работает Совет обучающихся. Если большой текст не для вас —
                прочтите <Link to="/short">краткие тезисы</Link>. Если вы хотите
                весь рассказ — приступим.
            </p>

        </Row>
        <Row className="title">
            <p className="show-you text-center mb-0">Откроем для вас</p>
            <p className="itmo-students text-center">ITMO.STUDENTS</p>
        </Row>

        <Row>
            <p>Вот вы, студенты, аспиранты, часто успешно обращались к ITMO.STUDENTS? Он защищает ваши права, доносит
                ваше мнение до администрации? Вы знали о том, что это обязанности Совета обучающихся? Что если
                преподаватель творит дичь, то IS — адвокат, который должен вам помочь? Что когда ломается запись на
                дисциплины, это IS должен первым узнавать, что произошло, а не ждать обсуждений в ИТМЕМе этой смешной,
                но грустной ситуации?</p>
            <p>Но ведь это задумывалось именно так, и должно так работать. Сейчас этим занимается не IS, а единичные
                люди, которым не все равно, которые по какой-то, неизвестной никому причине хотят делать мир вокруг себя
                лучше. И я один из таких людей. Во всяком случае, хочу так думать, и я надеюсь, что эта банальщина
                сейчас не вызовет у вас подозрений.</p>
            <p>Не поймите неправильно. Я не считаю, что наш IS тотальное беспросветное разочарование. Он делает
                множество классных вещей, но мы с моей командой придумали шаги, которые бы сделали ITMO.STUDENTS еще
                лучше. Их мы разделили на два направления. </p>


            <h1 id="-span-style-font-size-16px-font-weight-400-span-">
                Во-первых, это открытость
            </h1>
            <p>Все совещания и документы, с которым нам придется работать, мы собираемся выкладывать в открытый доступ,
                чтобы любой желающий понимал, что вообще происходит в главной студенческой организации ИТМО.</p>
            <p>Каждый месяц на основе этих документов будет делаться отчет с человеческим описанием, статистикой
                обращений и курсом на ближайшее время.</p>
            <p>Вместе с тем мы считаем, что все исходники проектов, приложений и сайтов IS должны быть доступны любому
                студенту. Не только для ознакомления, но и для активного участия в их разработке. Ведь помощь друг другу
                это и значит быть семьей, о которой ИТМО постоянно нам рассказывает. Так что вот вам вариант.</p>

            <img className="mw-100" src="img/debates.png" alt="Картинка где Егор дебатирует"/>

            <h1 id="-span-style-font-size-16px-font-weight-400-span-">
                Во-вторых, представительство
            </h1>
            <p>Мы надеемся, что наша открытость и добросовестность сможет разжечь в вас интерес к той жизни ИТМО,
                которую никто никогда не видел.</p>
            <p>Но чтобы быть представителями студентов, нам нужна <strong>обратная связь</strong>. Мы будем ждать ее под
                каждым отчетом. И чтобы не просто отмахиваться бессмысленным стикером, а получать конструктив и замечать
                проблемы.</p>
            <p>Обратную связь мы собираемся получать не только из комментраиев ВК (хотя и оттуда, конечно, тоже), но и
                создать <strong>сайт с петициями</strong>, чтобы передавать их администрации
                и <strong>публично</strong> вести с ней диалог.</p>
            <p>Помимо этого, чтобы совет обучающихся был объективнее, мы планируем вернуть должность <strong>председателей
                мега-факультетов</strong> и включить их в состав совета.</p>

            <img className="mw-100" src="img/shield.png" alt="Картинкагде щит ИС защищает студентов"/>

            <p>Все это то, каким я хочу видеть ITMO.STUDENTS. И, к сожалению, я не могу обещать, что это то, каким
                он станет, если вы выберите меня председателем. Решение части вопросов требует работы с
                администрацией, согласования юристов, никто не может знать, какие возникнут проблемы. </p>
            <p>Но я могу пообещать, что все, что мы делаем и будем делать, будет максимально прозрачно. Весь
                процесс <strong>уже</strong> открыто публикуется на <a
                    href="https://trello.com/b/roi9Vk37">Trello</a> для всех заинтересованных.</p>
            <p>Там даже можно найти нашу команду, вот они слева направо:</p>
        </Row>
        <Row className="d-flex justify-content-center">
            <TeamMember image="img/portraits/fredikats.png" sub="Леша Ивницкий" link="https://github.com/fredikats"/>
            <TeamMember image="img/portraits/nikita.png" sub="Никита Черняк" link="https://t.me/chernyaknikita"/>
            <TeamMember image="img/portraits/sasha.png" sub="Саша Блашенков" link="https://trall.co"/>
            <TeamMember image="img/portraits/arseniy_1.png" sub="Сеня Молодецкий" link="https://vk.com/orfac"/>
            <TeamMember image="img/portraits/annchouss.png" sub="Аня Хохлова" link="https://t.me/annchouss"/>
            <TeamMember image="img/portraits/nastya.png" sub="Настя Тушканова" link="https://vk.com/staszw"/>
            <TeamMember image="img/portraits/lisa.png" sub="Лиза Кузенкова" link="https://vk.com/e1izabeth"/>
            <TeamMember image="img/portraits/vika.png" sub="Вика Яковлева" link="https://t.me/viktoriya_yve"/>
            <TeamMember image="img/portraits/yogurt.png" sub="Егор Жумиков" link="https://yogurtthehor.se"/>
        </Row>
        <Row>
            <p>
                Если вам все это интересно, интересна наша команда и вы думаете, что все это важно – мы будем ждать ваш
                решающий голос за меня (Егора) и мою команду на выборах с 19 по 21 октября. А еще очень важно
                рассказывать
                о нас своим знакомым.
            </p>

            <p>
                Все подробности кампании будут в специальном <a href="https://t.me/yogurttheelections">телеграм
                канале</a>.
            </p>

            <p>
                Если вы хотите у меня что-то узнать, то напишите мне в <a
                href="https://t.me/yogurtthehorse">телеграме</a>, <a
                href="https://vk.com/yogurtthehorse">вк</a> и <a href="mailto:yegor@yogurtthehor.se">на почту</a> (???).
            </p>
        </Row>
    </Container>;
}
