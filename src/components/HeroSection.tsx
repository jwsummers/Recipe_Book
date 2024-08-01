// src/components/HeroSection.tsx
import React from 'react';
import AddRecipeForm from './AddRecipeForm';
import './HeroSection.css';

const HeroSection: React.FC = () => {
    return (
        <section className="hero-section">
            <AddRecipeForm />
        </section>
    );
};

export default HeroSection;
