import Header from "./Header/Header";
import ItemList from "./FoodItems/ItemList";

const items=[
  {
    dish: 'Sushi' ,
    ingredients: 'finest fish & veggies'  ,
    price: '700'
  },
  {
    dish: 'Barbecue Burgur',
    ingredients: 'american, raw, meaty',
    price: '500'
  },
  {
    dish: 'Green Bowl' ,
    ingredients: 'mixed green veggies',
    price: '350'
  }
]

function App() {
  return (
    <div>
      <Header />
      <ItemList items={items} />
    </div>
  );
}

export default App;
