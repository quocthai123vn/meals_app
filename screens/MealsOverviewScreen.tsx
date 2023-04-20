import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "../components/MealItem";
import { CATEGORIES, MEALS } from "../data/dummy_data";
import { useLayoutEffect } from "react";

function MealsOverviewScreen({ route, navigation }: any) {
  const { categoryId } = route.params;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.getCategoryIds().includes(categoryId);
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      title: CATEGORIES.find((x) => x.getId() === categoryId)?.getTitle(),
    });
  }, [categoryId, navigation]);

  function renderMealItem(itemData: any) {
    return <MealItem meal={itemData.item} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.getId()}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
