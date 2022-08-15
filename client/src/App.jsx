import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <ul>
        {products &&
          products.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
