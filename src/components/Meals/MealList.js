import styles from './MealList.module.css';

const DUMMY_MEALS = [
    {
      id: "m1",
      name: 'Maki "Naomi"',
      description:
        "Philadelphia, chicken fillet, masago, tomato, cucumber, sesame",
      price: 11.99,
    },
    {
      id: "m2",
      name: "Spice in salmon",
      description: "Rice, salmon, spice sauce",
      price: 3.99,
    },
    {
      id: "m3",
      name: "Maki with eel",
      description: "Smoked eel, unagi sauce, sesame",
      price: 4.99,
    },
    {
      id: "m4",
      name: "Salad with salmon",
      description:
        "Rice, salmon, cucumber, nori, tuna chips, nut sauce",
      price: 7.99,
    },
  ];


const MealList = () => {

    const mealList = DUMMY_MEALS.map(meal => <li>{meal.name}</li>);

    return (
        <section className={styles.meals}>
            <ul>
                {mealList}
            </ul>
        </section>
    );

};

export default MealList;