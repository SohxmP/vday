'use client'

import "./styles.css";
import styles from "./main.module.css";
import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

export default function Main() {

    const [display, setDisplay] = useState(false);
    const [envp, setEnvp] = useState(false);
    const [fadetext, setFadetext] = useState({fade: 'fade-out'});
    const [vq, setVq] = useState({vq: 'vq-hidden'});
    const [vc, setVc] = useState({vc: 'vc-hidden'});

    useEffect(() => {
        setFadetext({fade: 'fade-out'});
        setTimeout(() => {
            setDisplay(true);
            setEnvp(true);
        }, 500);
    }, []);

    function start(){
        setEnvp(false);
        setTimeout(() => {
            setFadetext({fade: 'fade-in'});
            setTimeout(() => {
                setFadetext({fade: 'fade-out'})
                setVq({vq: 'vq'});
            }, 4000);
        }, 1000);
    }

    function vday(){
        setVq({vq: 'vq-hidden'});
        setTimeout(() => {
            setVc({vc: 'vc'});
            confetti({
                    particleCount: 200,
                    spread: 100,
                    origin: {y: 0.8},
                    gravity: 0.9,
                });
        }, 1000);
    }


    return (
        <div className={styles.main} style={{backgroundColor: display ? "#FF85A1" : "#000000", opacity: 1}}>
            {
                envp ? 
                <div className={styles.wrapper} onClick={start} style={{opacity: envp ? 1 : 0}}>
                    <div className={styles.heart}></div>
                    <div className={styles.envelope}></div>
                    <div className={styles.letter}><p>click me</p></div>
                </div>
                :
                <div className={styles.vday}>
                    <h1 className={fadetext.fade}>Helo</h1>
                </div>
            }
            <div className={vq.vq}>
                <p>Will you be my <span>Valentine</span> ?</p>
                <div>
                    <button onClick={vday}>No</button>
                    <button onClick={vday}>Yes</button>
                </div>
            </div>
            <div className={vc.vc}>
                <h1>Happy <span>Valentines</span> Day!</h1>
            </div>
        </div>
    )

}