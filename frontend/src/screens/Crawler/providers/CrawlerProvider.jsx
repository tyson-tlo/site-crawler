import React from "react";

const CrawlerContext = React.createContext();

function crawlerReducer(state, action) {
    switch(action.type) {
        case "setQueryData": {
            return { ...state, queryData: action.queryData }
        }
        default: {
            throw new Error(`Action type: ${action.type} not recognized as a valid type. Accepted types are: 'setQueryData'`)
        }
    }
}

function CrawlerProvider({ children }) {
    const [state, dispatch] = React.useReducer(crawlerReducer, {
        queryData: {
            url: "",
            pagesDeep: null
        }
    })

    return <CrawlerContext.Provider value={{state, dispatch}}>{children}</CrawlerContext.Provider>
}

export function useCrawlerProvider() {
    const context = React.useContext(CrawlerContext);

    if (context === undefined) {
        throw new Error('useCrawlerProvider must be used within CrawlerProvider');
    }

    return context;
}

export default CrawlerProvider;