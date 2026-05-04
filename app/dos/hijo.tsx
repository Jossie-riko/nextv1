import { ReactNode } from "react";

export default function hijo ( { children }: { children: ReactNode } ) {

    return (
        <div>
            este es mi hijo {children}
        </div>
    );
}