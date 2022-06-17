import styles from "./styles";

const {
  appStyle: { CONTAINER },
} = styles;

const APP = () => {
  console.log(styles)
  return <CONTAINER>hello</CONTAINER>;
};

export default APP;
