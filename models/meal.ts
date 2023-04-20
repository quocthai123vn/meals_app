class Meal {
  constructor(
    private id: string,
    private categoryIds: string[],
    private title: string,
    private affordability: string,
    private complexity: string,
    private imageUrl: string,
    private duration: number,
    private ingredients: string[],
    private steps: string[],
    private isGlutenFree: boolean,
    private isVegan: boolean,
    private isVegetarian: boolean,
    private isLactoseFree: boolean
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
    this.steps = steps;
    this.duration = duration;
    this.complexity = complexity;
    this.affordability = affordability;
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isVegetarian = isVegetarian;
    this.isLactoseFree = isLactoseFree;
  }
  public getId() {
    return this.id;
  }
  public getCategoryIds() {
    return this.categoryIds;
  }
  public getTitle() {
    return this.title;
  }
  public getImageUrl() {
    return this.imageUrl;
  }
  public getDuration() {
    return this.duration;
  }
  public getAffordability() {
    return this.affordability;
  }
  public getComplexity() {
    return this.complexity;
  }
  public getIngredients() {
    return this.ingredients;
  }
  public getSteps() {
    return this.steps;
  }
}

export default Meal;
