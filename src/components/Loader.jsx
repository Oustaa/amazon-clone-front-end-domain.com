import { StyledLoader } from "../styles";
import { ClipLoader } from "react-spinners";

const Loader = ({ height, loaderExtraStyles }) => {
  return (
    <StyledLoader loaderExtraStyles={loaderExtraStyles} height={height}>
      <ClipLoader size={120} color={"var(--primary)"} />
      {/* <p>Loading....</p> */}
    </StyledLoader>
  );
};

export default Loader;
