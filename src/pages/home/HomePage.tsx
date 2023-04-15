// src/pages/home/HomePage.tsx
  
import "./HomePage.css";
import { useFetch } from "../../hooks/useFetch";
import RecipeList,  {type Recipe} from "../../components/RecipeList/RecipeList"

  
  
export default function HomePage() {
  const { data, error } = useFetch<Recipe[]>(process.env.REACT_APP_DB_URL);
  if (error)
      return (
          <p aria-live="polite" role="status">
              {error.message}
          </p>
      );
  if (!data)
      return (
          <p aria-live="polite" role="status">
              Loading...
          </p>
      );
  
  
  
      return <RecipeList recipes={data}/>;
}

