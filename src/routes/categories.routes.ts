import { Router } from 'express';
import { CategoryRepository } from '../repositories/CategoryRepository';

const categoriesRoutes = Router();

const categoriesRepository = new CategoryRepository();

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const categoryFind = categoriesRepository.findByName(name);

    if (categoryFind) {
        return response.status(400).json({ error: "Categoria já existe" });
    }

    categoriesRepository.create({ name, description });

    return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
    const categories = categoriesRepository.list();

    return response.json(categories);
});

export { categoriesRoutes };