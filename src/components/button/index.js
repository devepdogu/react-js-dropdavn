import React, { Fragment } from 'react'
import styles from './../../styles/style.module.scss'
import { ReactComponent as Arrow } from './../../assets/arrow.svg'
import { useDispatcher, useDropdownContext } from './../../context';

export function Button({ labels, clearable }) {
    const { dispatch } = useDispatcher();
    const [state, _] = useDropdownContext((state) => state);
    return (
        <div className={`${styles.LabelWrapper} ${state.selected && clearable ? styles.LabelWrapperToRight : ''}`}
            onClick={() => dispatch({ type: 'toggle' })}>
            <button className={styles.DropdownLabel}>{state.selected ?
                (
                    <Fragment>
                        {labels?.selectedPrefix && (<span className={styles.DropdownPrefixLabel}>{labels?.selectedPrefix}</span>)}
                        <b>{state.selected.label}</b>
                    </Fragment>
                ) : (labels?.notSelected ?? 'Select any choose')}
            </button>
            <Arrow className={`${styles.DropdownLabelIcon}`} />
        </div>
    )
}

export default Button
