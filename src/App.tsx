import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useMutation, useQuery } from "convex/react";
import { useState } from "react";
import { api } from "../convex/_generated/api";
import { Link } from "@/components/typography/link";

function App() {
  const addIngredients = useMutation(api.myFunctions.addIngredients);
  const [ingredientsValue, setIngredientsValue] = useState("Potatoes");
  const [instructionsValue, setInstructionsValue] = useState("Boil Potatoes in Water");

  const onChangeInstructionsHandler = event => {
    setInstructionsValue(event.target.value);
  };
  const onChangeIngredientsHandler = event => {
    setIngredientsValue(event.target.value);
  };
  
  return (
    <main className="container max-w-2xl flex flex-col gap-2">
      <h1 className="text-4xl font-extrabold my-8 text-center">
        Cooklang Converter
      </h1>
      <p>Ingredients</p>
      <Textarea className="h-40" onChange={onChangeIngredientsHandler} value={ingredientsValue}/>
      <p>Instructions</p>
      <Textarea className="h-40" onChange={onChangeInstructionsHandler} value={instructionsValue}/>
      <p>
        <Button
          className="w-full mt-4"
          onClick={() => {
            void addIngredients({ value: instructionsValue });
            setIngredientsValue("");
            setInstructionsValue("");
          }}
        >
          Submit Your Recipe
        </Button>
      </p>
    </main>
  );
}

export default App;
