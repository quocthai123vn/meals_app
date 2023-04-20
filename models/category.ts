class Category {
  constructor(
    private id: string,
    private title: string,
    private color: string
  ) {
    this.id = id;
    this.title = title;
    this.color = color;
  }
  public getId() {
    return this.id;
  }
  public getTitle() {
    return this.title;
  }
  public getColor() {
    return this.color;
  }
}

export default Category;
