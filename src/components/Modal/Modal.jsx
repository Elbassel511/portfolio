
import classes from "./Modal.module.scss";
import React from 'react';
import ReactDOM from "react-dom";
import 'glider-js/glider.min.css';
import Glider from 'react-glider';

function Backdrop(props) {
    return <div className={classes.backdrop} onClick={props.onClick} />;
}

function ModalOverlay(props) {
    return (
        <div className={classes.modal}>
            <div className={classes.title}>{props.project.name}</div>
            {/* // Title */}
            {/* // Carousel */}
            <div>


                <div className={classes.carousel}>
                    <Glider
                        slidesToShow={1}
                        slidesToScroll={1}
                        hasDots={true}
                        hasArrows={true}

                    >
                        {props.project.images.map((image, index) => {
                            return (
                                <div key={index} className={classes.image}>
                                    <img src={image} alt={props.project.name} />
                                </div>
                            );
                        })}
                    </Glider>
                </div>

                {/* // Description */}
                <div className={classes.description}>
                    <div className={classes.descriptionText}>{props.project.description}</div>
                </div>
                {/* // Links */}
                <div className={classes.links}>
                    {props.project.url.code && <a href={props.project.url.code} target='_blank'>Code</a>}
                    {props.project.url.live && <a href={props.project.url.live} target='_blank'>Live preview</a>}

                </div>
            </div>
        </div >
    );
}

const portalEl = document.getElementById('overlays');

function Modal(props) {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, portalEl)}
            {ReactDOM.createPortal(<ModalOverlay project={props.project}></ModalOverlay>, portalEl)}
        </React.Fragment>
    );
}

export default Modal;