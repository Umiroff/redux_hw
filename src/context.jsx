import { createContext, useContext, useEffect, useReducer } from "react";
import Loading from "./Loading";
import reducer from "./reducer";





const AppContext = createContext();

const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchData = async () => {
        dispatch({type: 'LOADING'});
        const resp = await fetch(url);
        const items = await resp.json();
        dispatch({type: 'DISPLAY_ITEMS', payload: items});
    }

    const removeTour = (id) => {
        dispatch({type: 'REMOVE', payload: id})
    }

    const readMore = () => {
        dispatch({type: 'READMORE'})
    }

    
  

  


  useEffect(() => {
    fetchData()
  }, [])
  if (state.loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if (state.data.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchData()}>
            refresh
          </button>
        </div>
      </main>
    )
  }

    return (
        <AppContext.Provider 
        value={{
            readMore,
            ...state,
            removeTour
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export {AppContext, AppProvider};