import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Loading from "./components/Loading/Loading";
import AllCocktailsIngredients from "./components/AllCocktailsIngredients/AllCocktailsIngredients";
import CocktailRecipe from "./components/CocktailRecipe/CocktailRecipe";
import FormIngredients from "./components/FormIngredients/FormIngredients";
import Homepage from "./components/Homepage/Homepage";
import ButtonList from "./components/Buttonlist/ButtonList";
import AllCocktails from "./components/AllCocktails/AllCocktails";
import Error from "./components/Error/Error";
import LegalNotice from "./components/Footer/LegalNotice";
import "./App.css";

const App = () => {
  const [search, setSearch] = useState();
  const [userInput, setUserInput] = useState("");

  const handleChange = (event) => {
    if (!search) {
      axios
        .get(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${event.target.value.charAt(
            0
          )}`
        )
        .then((response) => setSearch(response.data.drinks));
    } else {
      axios
        .get(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${event.target.value.charAt(
            0
          )}`
        )
        .then((response) => setSearch(response.data.drinks));
    }
    setUserInput(event.target.value);
  };

  const [ingredient, setIngredient] = useState([]);
  const [fetche, setFetche] = useState();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/ButtonList"
            element={
              <ButtonList
                setSearch={setSearch}
                userInput={userInput}
                search={search}
                handleChange={handleChange}
              />
            }
          />
          <Route
            path="/FormIngredients"
            element={
              <FormIngredients
                propsIngredient={ingredient}
                propsSetIngredient={setIngredient}
                propsFetche={fetche}
                propsSetFetche={setFetche}
              />
            }
          />
          <Route
            path="/CocktailRecipe/:id"
            element={
              <CocktailRecipe
                setSearch={setSearch}
                userInput={userInput}
                search={search}
                handleChange={handleChange}
                setUserInput={setUserInput}
              />
            }
          />

          <Route
            path="/AllCocktails"
            element={
              <AllCocktails
                propsFetche={fetche}
                setSearch={setSearch}
                userInput={userInput}
                search={search}
                handleChange={handleChange}
                setUserInput={setUserInput}
              />
            }
          />
          <Route
            path="/AllCocktailsIngredients/:propsIngredient"
            element={
              <AllCocktailsIngredients
                propsFetche={fetche}
                propsSetFetche={setFetche}
                setSearch={setSearch} // à partir d'ici searchbar test greg
                userInput={userInput}
                search={search}
                handleChange={handleChange}
                setUserInput={setUserInput}
              />
            }
          />
          <Route path="/*" element={<Error />} />
          <Route path="/LegalNotice" element={<LegalNotice />} />
          <Route path="/load" element={<Loading />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
