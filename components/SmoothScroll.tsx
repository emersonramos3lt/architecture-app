import { ReactLenis } from 'lenis/react';
import { ReactNode } from 'react';

interface SmoothScrollProps {
    children: ReactNode;
}

const SmoothScroll = ({ children }: SmoothScrollProps) => {
    return (
        <ReactLenis root options={{ duration: 3 }}>
            {children}
        </ReactLenis>
    )
}

export default SmoothScroll;
