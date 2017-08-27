import React, {Component} from 'react';
import Carousel from 'nuka-carousel';
import {Item} from 'semantic-ui-react'
import merak1 from './images/meraki/meraki1.png';
import merak2 from './images/meraki/meraki2.png';
import merak3 from './images/meraki/meraki3.png';
import merak4 from './images/meraki/meraki4.jpg';
import gohelp1 from './images/gohelp/gohelp1.png';
import gohelp2 from './images/gohelp/gohelp2.png';
import gohelp3 from './images/gohelp/gohelp3.png';
import animal1 from './images/animalXosing/animal1.png';
import animal2 from './images/animalXosing/animal2.png';
import animal3 from './images/animalXosing/animal3.png';
import animal4 from './images/animalXosing/animal4.png';
import app1 from './images/appNew/app1.jpg';
import app2 from './images/appNew/app2.jpg';

const imagenes = [merak1, merak2, merak3, merak4, gohelp1,
    gohelp2, gohelp3, animal1, animal2, animal3, animal4, app1, app2];

const proyectos = [
    {
        "nombre": "Meraki",
        "descripcion": `Sistema de gestión (ERP) a nivel comarcal.
                        Desarrollo de una aplicación para centralizar la información de los 
                        trabajadores y los clientes, con el fin de poder monitorear continuamente 
                        a estos clientes y conocer en todo momento las necesidades que tienen.
                        Uno de los principales desafíos para llevar a cabo este proyecto fue la 
                        creación de redes entre las otras organizaciones.
                        El principal objetivo de esta plataforma es tener información sobre esos centros de ayuda
                        para la gente sin hogar y tener siempre un punto de referéncia de ellos para poder así de 
                        esta manera ayudarlos mucho más fácil.(Laravel, MySql, React-Native)`
    },
    {
        "nombre": "GoHelp",
        "descripcion": `Foro de auto-ayuda para cualquier índole de problemas,siempre desde el anonimato con ayuda de 
                        otras personas que han vivido lo mismo y han conseguido seguir adelante o con ayuda de
                        profesionales.(PHP, MVC, MySql)`
    },
    {
        "nombre": "AnimalHelping",
        "descripcion": `Sistema de gestión a nivel comarcal.
                        La intención de este proyecto fue aportar herramientas para la gestión de las protectoras
                        de animales y la comunicación entre todas ellas, por desgracia el proyecto se quedó a las
                        puertas de ser utilizado por las entidades ya que no todos estaban de acuerdo de usar este
                        gran recurso que ofrecí gratuitamente y fuera de intereses económicos.(React, React-Native,
                        Node.js, MongoDB)`
    },
    {
        "nombre": "???",
        "descripcion": `Aquí es en el actual proyecto donde estoy metido, poca información puedo dar de ella ya que aún
                       estamos trabajando para poder lanzarla y promocionarla, pero de momento ya hemos conseguido 
                       financiación para seguir adelante con el proyecto. En este proyecto me encargo de realizar
                       íntegramente la aplicación móvil para cualquier dispositivo con capacidad de usarla sin internet.
                       \n(React, React-Native, Node.js, Realm)`
    }
];

class MisProyectos extends Component {

    state = {
        index: 0,
    };

    decorators = [{
        component: React.createClass({
            render() {
                return (
                    <div>
                        <button
                            style={{
                                backgroundColor: 'transparent',
                                border: 'none',
                                color: 'red',
                                fontSize: 20
                            }}
                            onClick={this.props.previousSlide}>
                            {'<'}
                        </button>
                        <button
                            style={{
                                backgroundColor: 'transparent',
                                flex: 1,
                                position:'absolute',
                                marginLeft: '900',
                                border: 'none',
                                color: 'red',
                                fontSize: 20
                            }}
                            onClick={this.props.nextSlide}>
                            {'>'}
                        </button>
                    </div>
                )
            }
        }),
        position: 'CenterLeft',
        style: {
            padding: 1
        }
    }];

    render() {
        return (
            <div style={{margin: 'auto'}}>
                <small>
                    Estos solo són algunos de mi proyectos, en mi tiempo libre desarrollo herramientas para mi día a
                    día.
                </small>
                <Carousel
                    decorators={this.decorators}
                    slidesToScroll={true}
                    afterSlide={newSlideIndex => {
                        switch (newSlideIndex) {
                            case 3:
                                this.setState({index: 0});
                                break;
                            case 4:
                                this.setState({index: 1});
                                break;
                            case 6:
                                this.setState({index: 1});
                                break;
                            case 7:
                                this.setState({index: 2});
                                break;
                            case 10:
                                this.setState({index: 2});
                                break;
                            case 11:
                                this.setState({index: 3});
                                break;
                            default:
                                break;
                        }
                    }}
                    width={'1000'}
                    style={{marginLeft: 200}}
                >
                    {
                        imagenes.map((actual, key) => {
                            return <img key={key} src={actual} alt={''}/>
                        })
                    }
                </Carousel>
                <Item.Group style={{marginLeft: 10}}>
                    <Item>
                        <Item.Content>
                            <Item.Header as='a'>
                                {proyectos[this.state.index].nombre}
                            </Item.Header>
                            <Item.Description>
                                <p>
                                    {
                                        proyectos[this.state.index].descripcion
                                    }
                                </p>
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </div>
        )
    }
}

export default MisProyectos;