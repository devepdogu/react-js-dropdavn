import React, { createContext, useContext, useRef, useCallback, useState, useEffect } from "react";

const DropdownContext = createContext(null)
export function useCreateContext(initialState) {

    function useContextData() {
        const state = useRef(initialState);

        const get = useCallback(() => state.current, []);
        const subscribes = useRef(new Set());
        const set = useCallback((value) => {
            state.current = { ...state.current, ...value };
            subscribes.current.forEach((callback) => callback());
        }, []);
        const subscribe = useCallback((callback) => {
            subscribes.current.add(callback);
            return () => subscribes.current.delete(callback);
        }, []);
        return {
            get,
            set,
            subscribe
        }
    }

    const Provider = ({ children }) => {
        return (
            <DropdownContext.Provider value={useContextData()}>{children}</DropdownContext.Provider>
        )
    }

    return {
        Provider
    }

}

export function useDispatcher() {

    const [state, setState] = useDropdownContext((state) => state);

    const dispatch = ({ type, payload }) => {
        switch (type) {
            case "toggle":
                setState({ ["visibility"]: !state.visibility });
                break;
            case "close":
                setState({ ["visibility"]: false });
                break;
            case "select":
                setState({ ["visibility"]: false, ["selected"]: payload });
                break;

            case "clearSelected":
                setState({ ["selected"]: null });
                break;
            case "clearSearch":
                setState({ ["search"]: null });
                break;
            case 'search':
                setState({ ["search"]: payload.length === 0 ? null : payload });
                break;
        }
    }

    return {
        dispatch
    }

}
export const useDropdownContext = (selector) => {
    const store = useContext(DropdownContext);
    if (!store) throw new Error("Store not found");

    const data = typeof selector === "function" ? () => selector(store.get()) : store.get;
    const [state, setState] = useState(data);

    useEffect(() => {
        return store.subscribe(() => setState(data))
    }, [])

    return [state, store.set];
}