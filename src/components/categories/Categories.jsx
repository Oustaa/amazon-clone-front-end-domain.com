import { StyledCategoriesContainer } from "../../styles/styled-categories";
import Category from "./Category";
import Loader from "../Loader";
import { useSelector } from "react-redux";

const Categories = () => {
  const { value: categories, loading } = useSelector(
    (state) => state.categories
  );

  if (loading) return <Loader />;

  return (
    <StyledCategoriesContainer>
      {categories.map((category) => (
        <Category key={category._id} {...category} />
      ))}
    </StyledCategoriesContainer>
  );
};

export default Categories;
