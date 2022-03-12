import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
    constructor(private createCatedoryUseCase: CreateCategoryUseCase) { }

    handle(request: Request, response: Response): Response {
        const { name, description } = request.body;

        this.createCatedoryUseCase.execute({ name, description });

        return response.status(201).send();
    }
}

export { CreateCategoryController }