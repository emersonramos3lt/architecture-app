import { RevealWrapper } from "next-reveal"
import { ReactNode } from "react"

interface revealProps {
    children: ReactNode;
}

const ScrollWrapper = ({ children }: revealProps) => {
    return (
        <RevealWrapper duration={1200} mobile={false} desktop={true} origin='bottom'>
        {children}
        </RevealWrapper>
    );
};

export default ScrollWrapper;