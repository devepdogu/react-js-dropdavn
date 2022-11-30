import React from 'react'
import styles from './../../styles/style.module.scss'
import { useDispatcher, useDropdownContext } from './../../context';

export default function Search({ labels }) {
    const { dispatch } = useDispatcher();
    const [search, _] = useDropdownContext((state) => state["search"]);
    return (
        <div className={styles.ListSearchWrapper}>
            <span>{labels?.search ?? 'Search'}</span>
            <input
                placeholder={labels?.seachInputPlaceholder ?? 'Search start typing'}
                value={search ?? ''}
                type={"search"}
                spellCheck={false}
                onChange={(e) =>
                    dispatch({ type: 'search', payload: e.target.value.toLocaleLowerCase() })
                } />
        </div>
    )
}
