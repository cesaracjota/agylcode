import React from 'react';
import Layout from '../components/layout/Layout';
import { Home } from '../components/home/home';

const HomePage = () => {
  return (
    <Layout children={<Home />} image={'https://cdn.fs.teachablecdn.com/GcPERZ8PT3GpHalAhUYC'} />
  )
}

export default HomePage;