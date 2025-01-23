import { RevealWrapper } from "next-reveal"
import { ReactNode } from "react"

interface revealProps {
    children: ReactNode;
}

const ScrollWrapper = ({ children }: revealProps) => {
    return (
        <RevealWrapper duration={1500} mobile={true} desktop={true} origin='bottom'>
        {children}
        </RevealWrapper>
    );
};

export default ScrollWrapper;
