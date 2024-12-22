type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    variant: string;
}

const Button = ({ type, title, variant}: ButtonProps) => {
    return(
        <button className={`${variant}`} type={type}>
            {title}
        </button>
    )
}

export default Button