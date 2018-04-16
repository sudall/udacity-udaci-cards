import {ComponentClass} from "react";

export function setExposedProps<TExposedProps, TAllProps extends TExposedProps>(componentClass: ComponentClass<TAllProps>): ComponentClass<TExposedProps> {
    return (componentClass as any) as ComponentClass<TExposedProps>;
}