import React from "react";

const sizeClasses = {
  txtJosefinSansRomanBold20: "font-bold font-josefinsans",
  txtJosefinSansRomanBold32: "font-bold font-josefinsans",
  txtJosefinSansRomanBold32WhiteA700: "font-bold font-josefinsans",
  txtSairaRomanBold40: "font-bold font-saira",
  txtJosefinSansRomanBold24: "font-bold font-josefinsans",
  txtJosefinSansRomanBold48: "font-bold font-josefinsans",
  txtSairaRomanBold48: "font-bold font-saira",
  txtJosefinSansRomanBold40: "font-bold font-josefinsans",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
