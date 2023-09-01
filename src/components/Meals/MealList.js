import { useEffect, useState } from 'react';
import styles from './MealList.module.css';
import Card from "../UI/Card";
import MealItem from './MealItem/MealItem';

// const DUMMY_MEALS = [
//     {
//       id: "m1",
//       name: 'Maki "Naomi"',
//       description: "Philadelphia, chicken fillet, masago, tomato, cucumber, sesame",
//       price: 11.99,
//     },
//     {
//       id: "m2",
//       name: "Spice in salmon",
//       description: "Rice, salmon, spice sauce",
//       price: 3.99,
//     },
//     {
//       id: "m3",
//       name: "Maki with eel",
//       description: "Smoked eel, unagi sauce, sesame",
//       price: 4.99,
//     },
//     {
//       id: "m4",
//       name: "Salad with salmon",
//       description:
//         "Rice, salmon, cucumber, nori, tuna chips, nut sauce",
//       price: 7.99,
//     },
//   ];


const MealList = () => {

  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      const response = await fetch("https://joke-fcdf0-default-rtdb.europe-west1.firebasedatabase.app/meals.json");
      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals();
  }, []);

  if (isLoading) {
    return (
      <section className={styles.loading}>
        <p>Loading...</p>
      </section>
    );
  }

  const mealList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
      <section className={styles.meals}>
        <Card>
          <ul>
              {mealList}
          </ul>
        </Card>
      </section>
  );

};

export default MealList;