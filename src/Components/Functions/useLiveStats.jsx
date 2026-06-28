import { useState, useEffect } from 'react';

/**
 * A hook to manage real-time-like statistics (Views & Likes).
 * Currently uses localStorage for persistence and simulates a "live" environment.
 */
export const useLiveStats = () => {
    const [views, setViews] = useState(0);
    const [likes, setLikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        // 1. Initial Load from LocalStorage
        const savedViews = parseInt(localStorage.getItem('portfolio_views') || '1450');
        const savedLikes = parseInt(localStorage.getItem('portfolio_likes') || '124');
        const userLiked = localStorage.getItem('portfolio_user_liked') === 'true';

        setViews(savedViews);
        setLikes(savedLikes);
        setIsLiked(userLiked);

        // 2. Increment view count for the current session (simulated)
        const newTotalViews = savedViews + 1;
        setViews(newTotalViews);
        localStorage.setItem('portfolio_views', newTotalViews.toString());

        // 3. Simulated "Real-Time" Activity
        // Randomly "others" view or like the page while the user stays on it
        const interval = setInterval(() => {
            const chance = Math.random();
            if (chance > 0.95) { // 5% chance of a "new view" every few seconds
                setViews(prev => {
                    const updated = prev + 1;
                    localStorage.setItem('portfolio_views', updated.toString());
                    return updated;
                });
            }
            if (chance > 0.98) { // 2% chance of a "new like" from someone else
                setLikes(prev => {
                    const updated = prev + 1;
                    localStorage.setItem('portfolio_likes', updated.toString());
                    return updated;
                });
            }
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const toggleLike = () => {
        const nextLikedState = !isLiked;
        setIsLiked(nextLikedState);
        localStorage.setItem('portfolio_user_liked', nextLikedState.toString());

        setLikes(prev => {
            const updated = nextLikedState ? prev + 1 : prev - 1;
            localStorage.setItem('portfolio_likes', updated.toString());
            return updated;
        });
    };

    return { views, likes, isLiked, toggleLike };
};
