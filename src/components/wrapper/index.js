import React, { useEffect, memo, useRef, useMemo } from 'react'
import styles from './../../styles/style.module.scss'
import List from '../list';
import { ReactComponent as Close } from './../../assets/close.svg'

import Button from '../button';
import { useDropdownContext, useDispatcher } from './../../context';
export function Wrapper({ ...props }) {
    const [state, _] = useDropdownContext((state) => state);
    const { visibility, selected, search } = state;
    const wrapperStatus = useRef({ defaultValue: props?.defaultValue ? false : true, isInit: true })
    const { dispatch } = useDispatcher();
    const divRef = useRef(null);

    useEffect(() => {
        if (!selected) return
        if (typeof props?.onChange === "function" && wrapperStatus.current.defaultValue)
            props.onChange(selected)
        wrapperStatus.current.defaultValue = true;
    }, [selected])

    const memoizedDefault = useMemo(() => {
        if (!props?.defaultValue || !props?.options) return;
        const defaultValue = props.options.find(({ value }) => value.toString().toLowerCase() === props?.defaultValue?.toString()?.toLowerCase());
        if (!defaultValue?.value) return
        return defaultValue
    }, [props?.defaultValue]);

    useEffect(() => {
        if (!memoizedDefault) return
        dispatch({ type: 'select', payload: memoizedDefault })
    }, [])


    const handleCloseDropdown = () => {
        typeof props?.onDropdownClosed === 'function' && props.onDropdownClosed()
    }

    const handleOpenDropdown = () => {
        typeof props?.onDropdownOpened === 'function' && props.onDropdownOpened()
    }

    const handleInitDropdown = () => {
        typeof props?.onDropdownInit === 'function' && props.onDropdownInit()
    }

    useEffect(() => {
        if (!visibility) {
            if (wrapperStatus.current.isInit)
                return handleInitDropdown()
            return handleCloseDropdown();
        }
        handleOpenDropdown();
        wrapperStatus.current.isInit = false;
        const handleClickOutside = (event) => {
            if (divRef.current && !divRef.current.contains(event.target) && visibility)
                dispatch({ type: 'close' });
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () =>
            document.removeEventListener('mousedown', handleClickOutside)
    }, [visibility])



    const ClearButton = () => {
        const handleClear = () => {
            dispatch({ type: 'clearSelected' });
            if (typeof props?.onClearSelected === "function")
                props.onClearSelected()
        };
        return <div onClick={handleClear} className={styles.ClearButton}><Close /></div>
    }

    const classNameOptions = {
        y: {
            top: styles.DropdownTop,
            bottom: styles.DropdownBottom,
        },
        x: {
            center: styles.DropdownCenter,
            left: styles.DropdownLeft,
            right: styles.DropdownRight
        },
        fullWidthParent: styles.DropdownFullWidth
    }

    const classNames = useMemo(() => {
        if (!props?.configs) return
        return [
            classNameOptions.y[props?.configs?.position?.y],
            classNameOptions.x[props?.configs?.position?.x],
            props?.configs?.fullWidthParent ? classNameOptions.fullWidthParent : null
        ].filter(Boolean).join(" ");
    }, [props?.configs])

    return (
        <div ref={divRef} className={`${styles.SimpleDropdownWrapper} 
        ${visibility ? styles.DropdownOpened : ''} ${classNames}`}>
            <Button {...props} />
            {selected && props?.clearable && (<ClearButton />)}
            {visibility && <List {...props} />}
        </div>
    )
}

export default memo(Wrapper)
