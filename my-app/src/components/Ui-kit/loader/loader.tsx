import preloader from "../../../assets/preloader.svg";
import styles from "./loader.module.scss";
const Loader  = ({
  
}) => {
  
  return (
    <div className={styles.loader}>
      <img alt="Preloader" src={preloader}/>
    </div>
  );
};

export default Loader;
