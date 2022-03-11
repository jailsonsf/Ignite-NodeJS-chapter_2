import { ICategoriesRepository } from "../repositories/ICategoriesRespository";

interface IRequest {
    name: string,
    description: string
}

class CreateCategoryService {
    constructor(private categoriesRepository: ICategoriesRepository) { }

    execute({ name, description }: IRequest): void {
        const categoryFind = this.categoriesRepository.findByName(name);

        if (categoryFind) {
            throw new Error("Categoria já existe");
        }

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryService }