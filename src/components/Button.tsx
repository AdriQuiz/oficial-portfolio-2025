import { cva } from 'class-variance-authority';
import React, { AnchorHTMLAttributes } from 'react'

const classes = cva('border rounded-full h-12 px-6 font-medium flex items-center flex-nowrap', {
    variants: {
        variant: {
            primary: 'bg-gradient-to-r from-pink via-purple to-dark-blue text-neutral-950 border-none text-white',
            secondary: 'border-white text-white bg-transparent'
        },
        size: {
            sm: "h-10"
        }
    }
});

const Button = (
    props: { variant: 'primary' | 'secondary', size?: 'sm'} 
        & AnchorHTMLAttributes<HTMLAnchorElement>
) => {
    const { variant, size, className, ...otherProps } = props;
  return (
    <a
        className={classes({ variant, size, className })}
        {...otherProps}
    />
  )
}

export default Button