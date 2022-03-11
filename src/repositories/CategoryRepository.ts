import { Category } from "../models/Category";

interface ICreateCategory {
    name: string,
    description: string
}

class CategoryRepository {
    private categories: Category[];

    constructor() {
        this.categories = [];
    }

    create({ name, description }: ICreateCategory): void {
        const category = new Category();
        Object.assign(category, {
            name,
            description,
            created_at: new Date()
        });

        this.categories.push(category);
    }
}

export { CategoryRepository };