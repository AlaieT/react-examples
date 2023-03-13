import React, { useMemo } from "react";

import styles from "./styles/index.module.scss";

type ButtonProps = React.ComponentPropsWithoutRef<"button">;

const classList = (...classes: string[]): string => {
  return classes.filter((item) => item).join(" ");
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, type, ...rest }, ref) => {
    const finalClassName = useMemo(
      () => classList(styles.button, styles[type], className),
      [className, type]
    );

    return (
      <button ref={ref} className={finalClassName} type={type} {...rest}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export type { ButtonProps };
export default Button;
