import React,  {Component} from "react";
import {Table, Button} from 'react-bootstrap';
import Film from "./Film";
import {confirmAlert} from 'react-confirm-alert';
//import 'react-confirm-alert/src/react-confrim-alert.css';



class Filmy extends Component{

    constructor(props){
        super(props)
        this.state = {
            listaFilmow : [
                {
                    tytul: "kubus puchatek",
                    kategoria: "Horror",
                    opis: "super film",
                    data: new Date("2020-07-06"),
                    status: undefined,
                    time: ''
                },
            
                {
                    tytul: "lola",
                    kategoria: "Dramat",
                    opis: "słaby",
                    data: '',
                    status: undefined,
                    time: ''
                },
                {
                    tytul: "kupa",
                    kategoria: "bajka",
                    opis: "słaby",
                    data: '',
                    status: false,
                    time: ''
                }
            ],
            tytul: '',
            kategoria: '',
            opis: '',
            data: undefined,
            time: undefined,
        };
    }

    onChange (e) {
        var name = e.target.id;
        this.setState({
            [name]: e.target.value
        })
    }

    onClick(){
        confirmAlert({
            customUI: ({ onClose}) => {
                return (
                    <div>
                        <h1>Dodaj opis do filmu</h1>
                        <p><textarea cols="50" rows="10" id="opis" defaultValue={this.state.opis} onChange={(e) => this.onChange(e)}></textarea></p>
                        <Button style={{float:"right"}} variant="danger" onClick={onClose}>Zamknij Okno</Button>
                    </div>
                );
            }
        });
    }

    dodajFilm(){
        this.setState(state => {
            var filmy = state.listaFilmow;
            var data = state.data === undefined ? "" : new Date(state.data);
            var time = state.time === undefined ? "" : state.time;
            if(state.kategoria === "bajka"){
                filmy.push({
                    tytul: state.tytul,
                    kategoria: state.kategoria,
                    opis: state.opis,
                    data : data,
                    time : time,
                    status: false
                })
            } else {
                filmy.push({
                    tytul: state.tytul,
                    kategoria: state.kategoria,
                    opis: state.opis,
                    data: data,
                    time: time,
                    status: undefined
                })
            }
            return { listaFilmow: filmy }
        })
    }

    filter(opis){
        return opis.length > 10 ? opis.substring(0,10) + "..." : opis;
    }

    render(){
    return(
        <div>
            <h3>Lista filmow </h3>
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>Tytuł</th>
                        <th>Kategoria</th>
                        <th>OPIS filmu</th>
                        <th>Action</th>
                    </tr>
                    <Film
                    tytul= "kubus puchatek"
                    kategoria = "bajka"
                    opis = "super film"
                    data = {new Date("2020-07-06")}
                    />
                    {this.state.listaFilmow.map((film, key) => {
                        return(
                            <Film
                            key = {key}
                            tytul ={film.tytul}
                            kategoria = {film.kategoria}
                            opis = {this.filter(film.opis)}
                            status = {film.status}
                            />
                        );
                    })}
                </thead>
                <tbody>
                </tbody>
            </Table>
            <Table striped bordered >
        <tbody>
            <tr>
                <td colSpan= "S" style={{textAlign: "center"}}><i><b>Dodaj nowy film</b></i></td>
            </tr>
            <tr>
                <td><input type="text" placeholder="tytul filmu" id="tytul" onChange={(e) => this.onChange(e)} /></td>
                <td><input type="text" list="listaKategorii" id="kategoria" placeholder="Kategoria filmu" onChange={(e) => this.onChange(e)} />
                <dataList id="listaKategorii">
                    <option>Bajka</option>
                    <option>Horror</option>
                    <option>Science-Fiction</option>
                    <option>Dramat</option>
                </dataList>
                </td>
                <td>
                    {
                        this.state.opis !== '' ?
                        <Button variant="primary" onClick={() => this.onClick()}> Edytuj opis</Button> :
                        <Button variant="succes" onClick={() => this.onClick()}> Edytuj opis</Button>
                    }
                </td>
                <td><input type="date" id="data" onChange={(e) => this.onChange(e)} /><input type="time" id="time" onChange={(e) => this.onChange(e)} /></td>
                <td><Button variant="secondary" onClick={() => this.dodajFilm()}> Dodaj Film</Button></td>
            </tr>
        </tbody>
            </Table>
        </div>
    );
                 }
}

export default Filmy;