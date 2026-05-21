import { Outlet } from "react-router-dom";
import TopNav from "../TopNav/TopNav";
import styles from "./AppLayout.module.css";

export default function AppLayout() {
  return (
    <div className={styles.shell}>
      <TopNav />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}
