import { TimerIcon } from "lucide-react";
import styles from "./styles.module.scss";


export function Logo() {
  return (
    <div>
      <a href="" className={styles.logo}>
        <TimerIcon/>
        <span>Chronos</span>
      </a>
    </div>
  );
}
