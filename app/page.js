'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();
  const [dt, setDt] = useState(0);

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [pass, setPass] = useState([]);
  
  useEffect(() => {
    const target = new Date("February 14, 2025 00:00:02");

    const interval = setInterval(() => {
      const now = new Date();
      setDt(now.getDate());
      const difference = target.getTime() - now.getTime();

      setDays(Math.floor(difference / (86400000)));
      setHours(Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      setMinutes(Math.floor(difference % (1000 * 60 * 60) / (1000 * 60)));
      setSeconds(Math.floor(difference % (1000 * 60) / (1000)));

    }, 1000)

    
    return () => clearInterval(interval);
  }, []);


  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {dt == 14 ? 
          <div>
            <input type="text" maxLength={6} className={styles.input} placeholder="enter the code" value={pass} onChange={(e) => {
              if(e.target.value.length == 6){
                setPass(e.target.value);
                if(e.target.value == '070524'){
                  router.push('/main');
                }
              }else{
                setPass(e.target.value);
              }
            }}></input>
          </div>
          :
          <div className={styles.wait}>
            <div className={styles.time}>
              <div>{days}</div>
              <p>Days</p>
            </div>
            <div className={styles.divider}>:</div>
            <div className={styles.time}>
              <div>{hours}</div>
              <p>Hours</p>
            </div>
            <div className={styles.divider}>:</div>
            <div className={styles.time}>
              <div>{minutes}</div>
              <p>Minutes</p>
            </div>
            <div className={styles.divider}>:</div>
            <div className={styles.time}>
              <div>{seconds}</div>
              <p>Seconds</p>
            </div>
          </div>
        }

        
      </main>
    </div>
  );
}
