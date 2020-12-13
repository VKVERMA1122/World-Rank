import { Search } from "@material-ui/icons";
import SearchRounded from "@material-ui/icons/SearchRounded";
import styles from "./Searchinput.module.css";

export default function Searchinput  ({ ...rest }){
  return (
    <div className={styles.wrapper}>
      <SearchRounded color="inherit" />
      <input className={styles.input} {...rest} />
    </div>
  );
};
