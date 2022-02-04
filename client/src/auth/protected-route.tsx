import React, { ComponentType } from 'react';
import { RouteProps } from "react-router-dom";
import { withAuthenticationRequired } from '@auth0/auth0-react';

interface ProtectedRouteProps extends RouteProps {
    component: ComponentType;
}
// con esto se protegen las rutas deseadas
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component, ...args }) => {
    const Cp = withAuthenticationRequired(component);
    return <Cp {...args} />
}

export default ProtectedRoute;