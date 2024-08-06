import { AnchorHTMLAttributes, ReactNode } from 'react';

type LinkTagProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
   children: ReactNode;
   isDisabled?: boolean;
};

export function LinkTag({
   children,
   isDisabled = false,
   ...rest
}: LinkTagProps) {
   if (isDisabled) {
      return children;
   }

   return <a {...rest}>{children}</a>;
}
