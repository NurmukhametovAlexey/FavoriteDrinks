import React, {PropsWithChildren, ReactNode} from 'react';
import classes from "./MyButton.module.css";

interface Props {
    children: ReactNode;
    [key: string]: any;
}

const MyButton: React.FC<PropsWithChildren<Props>> = ({children, ...props}) => {

    return (
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    );
};

export default MyButton;