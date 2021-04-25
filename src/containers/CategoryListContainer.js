import CategoryList from '../components/home/CategoryList';

const CategoryListContainer = () => {
  const logout = () => {
    sessionStorage.clear();
  };
  return <CategoryList logout={logout} />;
};

export default CategoryListContainer;
