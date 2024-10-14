// import sampleData from '../sampleData.json' with { type: 'json'};
import { connectToDb, db } from './db.js';

connectToDb();
// console.log('Hello very good morning');

const findPopular = () => {
    const popularMeals = db.collection('recipes').find({}).sort({rating: -1}).limit(4);
    return popularMeals.toArray();
};

const findLatest = () => {
    const latestMeals = db.collection('recipes').find({}).sort({date_published: -1}).limit(4);
    return latestMeals.toArray();
};

const findById = (id) => {
    // return sampleData.find((article) => article.id === id);
    const recipe = db.collection('recipes').findOne({id: id});
    return recipe;
};

const postNewReview = (id, review) => {
    // const recipe = sampleData.find((recipe) => recipe.id === id);
    const response = db.collection('recipes').updateOne({id: id}, {$push: {reviews: review}});
    return response;
};

export { findPopular, findLatest, findById, postNewReview };