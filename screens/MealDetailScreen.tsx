import { Text, View, Image, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy_data";
import MealDetail from "../components/MealDetail";
import Subtitle from "../components/MealDetail/Subtitle";

function MealDetailScreen({ route }: any) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((x) => x.getId() === mealId);

  console.log(selectedMeal?.getIngredients());
  return (
    <View>
      <Image
        style={styles.image}
        source={{ uri: selectedMeal?.getImageUrl() }}
      />
      <Text style={styles.title}>{selectedMeal?.getTitle()}</Text>
      <MealDetail
        duration={selectedMeal?.getDuration()}
        complexity={selectedMeal?.getComplexity()}
        affordability={selectedMeal?.getAffordability()}
        textStyle={styles.detailText}
      />
      <Subtitle>Ingredients</Subtitle>
      {selectedMeal?.getIngredients().map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <Subtitle>Steps</Subtitle>
      {selectedMeal?.getSteps().map((step) => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
});
