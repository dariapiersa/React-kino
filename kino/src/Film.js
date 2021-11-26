import React from "react";
import PropTypes from "prop-types";
import * as Icon from "react-bootstrap-icons";

const Film = props =>{
    return(
        <tr> 
            <td style={{verticalAlign: "middle" }}>{props.tytul}</td>
            <td className="justifyView" style={{borderBottom: "none"}}>{props.kategoria}
                {
                    props.kategoria === "bajka" ? (
                        <Icon.Palette size={30} />
                    ) : (
                        <Icon.CameraReels size={30} />
                        )}
            </td>
            <td style={{ verticalAlign: "middle"}}>{props.opis}</td>
            {
                props.status === undefined ? (
                    <td>
                        <div classsName = "justifyRow">
                            <div className = "justifyColumn">
                                <div>
                                    <Icon.List size={30} color="green" className="item" />
                                    <i>Detail </i>
                                </div>
                                <div style={{ display: "block"}}>
                                    <Icon.Bell size={32} color="#999988" className="item" />
                                    <i>Remaind </i>
                                </div>
                            </div>
                        <div className="justifyColumn">
                            <div>
                                <Icon.Pencil size={30} color="blue" className="item" />
                                <i>Edytuj</i>
                            </div>
                            <div>
                               <Icon.Trash size={30} color="black" className="item" />
                               <i>Usun</i> 
                            </div>
                        </div>
                    </div>
                </td>
                ) : (
                    <td>
                        {
                            props.status ? (
                                <div className="justifyRow">
                                    <div className="justifyColumn">
                                        <div style={{ display: "block", verticalAlign: "middle"}}>
                                            <Icon.XCircle size={32} color="red" className="item"/>
                                            <i>Undone</i>
                                        </div>
                                        <div>
                                            <Icon.List size={30} color="green" className="item" />
                                            <i>Detail </i>
                                        </div>
                                    </div>
                                    <div className="justifyColumn">
                                        <div style={{ display: "block"}}>
                                            <Icon.Bell size={32} color="#999988" className="item" />
                                            <i>Remaind </i>
                                        </div>
                                        <div style={{ display: "block"}}>
                                            <Icon.Pencil size={30} color="blue" className="item" />
                                             <i>Edytuj</i>
                                        </div>
                                    </div>
                                    <div className="justifyColumn">
                                        <div>
                                        <Icon.Trash size={30} color="black" className="item" />
                                        <i>Usun</i> 
                                        </div>
                                    </div>
                                </div>
                        ): (

                            <div className="justifyRow">
                                <div className="justufyColumn">
                                    <div style={{ display: "block"}}>
                                        <Icon.CheckCircle size={32} color="green" className="item" />
                                        <i>Done</i>
                                    </div>
                                    <div>
                                        <Icon.List size={30} color="green" className="item" />
                                        <i>Detail </i>
                                    </div>
                                </div>
                                <div className="justifyColumn">
                                    <div style={{ display: "block"}}>
                                        <Icon.Bell size={32} color="#999988" className="item" />
                                        <i>Remaind </i>
                                    </div>
                                    <div style={{display: "block"}}>
                                        <Icon.Pencil size={30} color="blue" className="item" />
                                        <i>Edytuj</i>
                                    </div>
                                </div>
                                <div>
                                    <Icon.Trash size={30} color="black" className="item" />
                                    <i>Usun</i> 
                                </div>
                            </div>
                        )
                        }
                    </td>
              )
         }
            
        </tr>
    );
};


Film.propTypes = {
    tytul(props, propName){
        if(props[propName].length < 2){
            return new Error(propName + "nazwa jest za krótka")
        }
    },
    kategoria: PropTypes.string,
    opis: PropTypes.string,
};



export default Film;