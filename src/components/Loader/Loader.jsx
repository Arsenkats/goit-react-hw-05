import { InfinitySpin } from "react-loader-spinner";
import css from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={css.loaderContainer}>
      <InfinitySpin
        visible={true}
        width='200'
        color='rgb(0, 0, 172)'
        ariaLabel='infinity-spin-loading'
      />
    </div>
  );
};

export default Loader;
