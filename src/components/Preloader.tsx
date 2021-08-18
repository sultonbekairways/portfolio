import Loader from "react-loader-spinner";

export const Preloader = () => {
  return (
    <Loader
      type="Oval"
      color="#90d9fe"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  );
};
