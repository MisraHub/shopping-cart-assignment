import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import BannerCarousel from './bannerCarousel';
import CategoryList from './categoryList';
import Banners from "../asset/data/banners.json";
import Categories from "../asset/data/categories.json";

const Home = () => {
  const [bannerList, setBannerList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  useEffect(()=>{
    setBannerList(Banners);
    const sortedCategory = Categories.sort((a, b) => a.order - b.order);
    setCategoryList(sortedCategory);
  }, [])

  return (
    <Container className="home-container">
      <BannerCarousel bannerList={bannerList} />
      <CategoryList categoryList={categoryList} />
    </Container>
  )
}

export default Home;
