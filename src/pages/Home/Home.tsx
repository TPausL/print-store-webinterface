import { Typography, Stack, Container, Card } from '@mui/joy';
import { Product } from '@/providers/models';
import { useEffect, useState } from 'react';

const Home = () => {
  let [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    Product.findAll().then(setProducts);
  }, []);
  return (
    <Container sx={{ py: 2, position: 'relative' }}>
      <Card />
      {products.join(' ')}
    </Container>
  );
};

export default Home;
