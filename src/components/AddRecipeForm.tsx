// src/components/AddRecipeForm.tsx
import React, { useState } from 'react';
import './AddRecipeForm.css';

const AddRecipeForm: React.FC = () => {
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [ingredientInput, setIngredientInput] = useState('');
    const [steps, setSteps] = useState<string[]>([]);
    const [stepInput, setStepInput] = useState('');
    const [image, setImage] = useState<File | null>(null);

    const handleAddIngredient = () => {
        setIngredients([...ingredients, ingredientInput]);
        setIngredientInput('');
    };

    const handleAddStep = () => {
        setSteps([...steps, stepInput]);
        setStepInput('');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to API
    };

    return (
        <div className="add-recipe-form">
            <h1>Add a New Recipe</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Recipe Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="ingredients">Ingredients</label>
                    <input
                        type="text"
                        id="ingredients"
                        value={ingredientInput}
                        onChange={(e) => setIngredientInput(e.target.value)}
                    />
                    <button type="button" onClick={handleAddIngredient}>Add Ingredient</button>
                    <ul>
                        {ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <label htmlFor="steps">Steps</label>
                    <input
                        type="text"
                        id="steps"
                        value={stepInput}
                        onChange={(e) => setStepInput(e.target.value)}
                    />
                    <button type="button" onClick={handleAddStep}>Add Step</button>
                    <ul>
                        {steps.map((step, index) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <label htmlFor="image">Image</label>
                    <input
                        type="file"
                        id="image"
                        onChange={(e) => setImage(e.target.files?.[0] || null)}
                    />
                </div>
                <button type="submit">Add Recipe</button>
            </form>
        </div>
    );
};

export default AddRecipeForm;
