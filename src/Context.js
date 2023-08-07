import React, { createContext, useState } from 'react';

export const MediaContext = createContext();

export const MediaProvider = ({ children }) => {
    const [currentSong, setCurrentSong] = useState(null);

    return (
        <MediaContext.Provider value={{ currentSong, setCurrentSong }}>
            {children}
        </MediaContext.Provider>
    );
};