import { StyledContainer } from "../../styles/index";
import Categories from "../../components/categories/Categories";
import LatestUploaded from "./LatestUploaded";
import ProductsHistory from "./ProductsHistory";

const Home = () => {
  return (
    <div>
      <StyledContainer>
        <Categories />
        <LatestUploaded />
        <ProductsHistory />
      </StyledContainer>
    </div>
  );
};

export default Home;
