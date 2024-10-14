import express from 'express';
import { findById, findPopular, findLatest, postNewReview } from './services.js';


// console.log(sampleData);
const app = express();
app.use(express.json());

// async function to listen for connections on this port
const PORT = 8080 || process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

/*********************Homepage API endpoints****************************************/ 
// Get Popular Recipes
app.get('/api/food-blog/homepage/popular-recipes', async(req, res) => {
    const popularRecipes = await findPopular();
    res.json(popularRecipes);
});

// Get Latest Recipes
app.get('/api/food-blog/homepage/latest-recipes', async (req, res) => {
    const latestRecipes = await findLatest();
    res.json(latestRecipes);
});

/*********************RecipePage API endpoints****************************************/ 
// Get Recipe By ID or Name
app.get('/api/food-blog/recipePage/:id', async (req, res) => {
    const article = await findById(req.params.id);
    res.json(article);
});

// Post a New Review (Form Data)
app.post('/api/food-blog/recipePage/:id/review', async (req, res) => {
    // const newReview = { ...review, date: new Date() };
    const response = await postNewReview(req.params.id, req.body);
    res.json(response);
});

