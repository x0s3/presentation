import React, {PureComponent} from 'react';
import {Grid, Image, List, Icon} from 'semantic-ui-react'

const mern = [
    {
        "titulo": "React",
        "link": "https://facebook.github.io/react",
        "imagen": "https://blog.zingchart.com/content/images/2016/06/react-1.png"
    },
    {
        "titulo": "React-Native",
        "link": "https://facebook.github.io/react-native/",
        "imagen": "http://tecnobitt.com/wp-content/uploads/2015/09/React-Android.jpg"
    },
    {
        "titulo": "Redux",
        "link": "http://redux.js.org/docs/introduction/",
        "imagen": "https://cdn.zapier.com/storage/blog/4ec8fc7dc3a75758a3913bab9e5a4fd8_2.500x278.png"
    },
    {
        "titulo": "Node",
        "link": "http://nodejs.org",
        "imagen": "https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2015/07/1436439824nodejs-logo.png"
    },
    {"titulo": "Express", "link": "http://expressjs.com/es/", "imagen": "http://wwwhere.io/img/thumbs/express.jpg"},
    {
        "titulo": "MongoDB",
        "link": "https://www.mongodb.com/es",
        "imagen": "https://serverdensity-wpengine.netdna-ssl.com/wp-content/themes/onecol/images/random/mongodb.png"
    }
];

const contacto = [
    {
        "nombre": "Perfil de Linkedin",
        "tipo": "https://www.linkedin.com/in/jose-m%C3%A1rquez-979717142/",
        "icono": "linkedin square"
    },
    {
        "nombre": "Correo electrónico",
        "tipo": "mailto:josemarquezbravo@gmail.com",
        "icono": "mail outline"
    },
    {
        "nombre": "699 65 13 21",
        "tipo": "",
        "icono": "phone square"
    }
];


class SobreMi extends PureComponent {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <Grid>
                    <Grid.Row>
                        <Grid.Column
                            width={6}
                            style={{margin: 10}}
                        >
                            <Image
                                src='https://sd.keepcalm-o-matic.co.uk/i-w600/keep-calm-and-trust-the-javascript-programmer-.jpg'
                                height={400}
                                style={{paddingLeft: 50}}
                            />
                        </Grid.Column>
                        <Grid.Column
                            width={9}
                            style={{margin: 10}}
                        >
                            <h1><u>Un poco sobre mí</u></h1>
                            Me gusta considerarme un desarrollador full-stack ya que siempre me gusta
                            saber como funciona cada parte.<br/>

                            Tengo formación y experiencia en múltiples disciplinas del desarrollo web
                            y el desarrollo en móviles como por ejemplo JavaScript, desde que comencé con el
                            cada día me gusta más hasta tal punto que decidí intentar conseguir desarrollar todo con él.
                            Considero que uno de mis puntos fuertes es el stack <b>MERN</b>
                            <List divided horizontal size={'small'}>
                                {
                                    mern.map((valor, key) => {
                                        return <List.Item key={key} style={{fontSize: 15}}>
                                            <Image
                                                avatar
                                                src={valor.imagen}
                                            />
                                            <List.Content>
                                                <List.Header
                                                    as={'a'}
                                                    href={`${valor.link}`}
                                                    target={'_blank'}
                                                >
                                                    {valor.titulo}
                                                </List.Header>
                                            </List.Content>
                                        </List.Item>
                                    })
                                }
                            </List>
                            <br/>
                            Grácias a estas tecnologías puedo abarcar todos los campos del desarrollo tanto web como
                            móvil.
                            <br/>
                            Pero no todo es este lenguaje, también uso otros como Java, PHP y .NET(ASP y VBasic).<br/>
                            Si alguna vez necesito realizar un proyecto en un lenguaje que no he tocado lo aprendo, y
                            rápido. Y lo mejor de todo, en mi tiempo libre ya que uno de mis hobbies favoritos es
                            programar. Por eso mismo siempre estoy en continuo aprendizaje en el mundo de la
                            programación, ya que vivo en un "periodo de prueba" constante y me esfuerzo cada día como si
                            fuese el último.<br/>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row style={{marginTop: '10%', marginLeft: '0%'}}>
                        <Grid.Column width={9}>
                            <h1><u>Contáctame en:</u></h1>
                            <List divided horizontal size={'small'}>
                                {
                                    contacto.map((tipo, key) => {
                                        return <List.Item key={key}>
                                            <List.Content>
                                                <List.Header style={{fontSize: 15}}>
                                                    <a
                                                        href={`${tipo.tipo}`}
                                                        target={key === 0 ? '_blank' : null}
                                                    >
                                                        <Icon name={`${tipo.icono}`}/>
                                                        {`${tipo.nombre}`}
                                                    </a>
                                                </List.Header>
                                            </List.Content>
                                        </List.Item>
                                    })
                                }
                            </List>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default SobreMi;