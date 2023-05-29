import Header from "./Header/Header";
import ItemList from "./FoodItems/ItemList";
import NoteState from "./ContextAPI/NoteState";
import Footer from "./Footer/Footer";



const items=[
  { id:Math.random(),
    dish: 'White Sauce Pasta' ,
    ingredients: 'finest cheese, wheat pasta & veggies'  ,
    price: 800.00,
    quantity:1
  },
  { id:Math.random(),
    dish: 'Barbecue Burgur',
    ingredients: 'american, raw & meaty',
    price: 200.00,
    quantity:1
  },
  { id:Math.random(),
    dish: 'French Fries' ,
    ingredients: 'potatos & peri peri masala',
    price: 150.00,
    quantity:1
  }
]

function App() {

  return (
    <div className="bg-dark">
      <NoteState>
      <Header />
      <ItemList items={items} /> 
      </NoteState>
      <Footer/>
    </div>
  );
}

export default App;