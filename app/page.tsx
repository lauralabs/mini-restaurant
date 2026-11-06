import {getCategories, getDishes} from './lib/data'

export default async function Home() {


  const categories = await getCategories();
  const dishes = await getDishes();


  return(
    <main>
      <h1>Mini Restaurant</h1>

      <h2>Categories</h2>
      <pre>{JSON.stringify(categories, null, 2)}</pre>

      <h2>Dishes</h2>
      <pre>{JSON.stringify(dishes, null, 2)}</pre>

    </main>



  );
}