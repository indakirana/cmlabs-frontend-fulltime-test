import React, {createContext, useCallback, useState} from "react";
import axios from 'axios';

export const myContext = createContext();

export const AppContext = ({children }) => {
    const [meals,setMeals] = useState([]);
    const [categories,setCategories] = useState([]);
    const [randomMeal,setrandomMeal] = useState([]);
    const [listMeal,setlistMeal] = useState([]);

    const fetchHomePageMeals = useCallback((searchTerm)=> {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
        .then(res=>{
            console.log(res.data.meals);
            setMeals(res.data.meals);
        })
        
    },[]);

    const fetchCategories= useCallback(()=> {
        axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        .then(res=>{
            console.log(res.data.categories);
            setCategories(res.data.categories);
        })
        
    },[]);

    const fetchRandomMeal= useCallback(()=> {
        axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then(res=>{
            console.log(res.data.meals);
            setrandomMeal(res.data.meals);
        })
        
    },[]);

    const fetchListMeal = useCallback(()=>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
        .then(res=>{
            console.log(res.data.meals);
            setlistMeal(res.data.meals);
        })
    });

    return <myContext.Provider value={{fetchHomePageMeals, meals, fetchCategories, categories, fetchRandomMeal, randomMeal, fetchListMeal, listMeal}}> {children} </myContext.Provider>
};