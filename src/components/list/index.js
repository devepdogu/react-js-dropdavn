import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import styles from './../../styles/style.module.scss'
import { useDispatcher, useDropdownContext } from './../../context';
import Search from '../search';


function NotResult({ notResultLabel }) {
    return (
        <div className={styles.noResult}>
            {notResultLabel ?? 'There is no result here.'}
        </div>
    )
}
export function List({ options, searchable, notResultLabel, onSearchTyping, labels }) {
    const { dispatch } = useDispatcher();
    const [state, _] = useDropdownContext((state) => state);
    const { selected, search } = state;
    const listRef = useRef();
    function isEqualSelected({ value, label }) {
        return value.toString().toLowerCase() === selected?.value?.toString()?.toLowerCase() &&
            label.toString().toLowerCase() === selected?.label?.toString()?.toLowerCase()
    }



    const handleSearchTyping = useCallback((search, filteredOptions) => {
        typeof onSearchTyping === 'function' && onSearchTyping({ search, filteredOptions })
    }, [])


    const filteredOptions = useMemo(() => {
        if (!search) return options;
        const filtered = options.filter(
            ({ value, label }) =>
                value
                    ?.toString()
                    ?.toLocaleLowerCase()
                    .replace(/\s/, '')
                    .includes(search ?? '') ||
                label
                    .toString()
                    ?.toLocaleLowerCase()
                    .replace(/\s/, '')
                    .includes(search ?? ''),
        );
        if (search) handleSearchTyping(search, filtered)
        return filtered;
    }, [search, options.length])


    useEffect(() => {
        if (!selected) return
        const selectedValue = filteredOptions.findIndex(isEqualSelected);
        if (selectedValue < 0) return
        const listHeight = listRef.current.offsetHeight;
        listRef.current.scrollTop = listRef.current.children[selectedValue].offsetTop -
            (listHeight / 3.6);
    }, [listRef.current, filteredOptions]);

    return (
        <div className={styles.ListContainer}>
            {searchable && (<Search labels={labels} />)}
            {filteredOptions.length > 0 ? (
                <div className={styles.ListWrapper} ref={listRef}>
                    {filteredOptions.map((item, i) => {
                        const checkIsEqual = isEqualSelected({ value: item.value, label: item.label });
                        return (
                            <button key={i} className={`${checkIsEqual ? styles.ListActiveItem : ''}`}
                                onClick={(e) =>
                                    !checkIsEqual && dispatch({ type: 'select', payload: { ...item, index: i } })}>{item.label}</button>
                        )
                    })}
                </div>
            ) : <NotResult notResultLabel={labels?.notFoundSearch} />}
        </div>
    )
}

export default List
