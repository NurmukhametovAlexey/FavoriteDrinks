import React, {forwardRef} from 'react';
import classes from "./MyInput.module.css";

interface Props {
    [key: string]: any;
}

const MyInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
    return (
        <input {...props} className={classes.myInput} ref={ref}/>
    );
});

export default MyInput;