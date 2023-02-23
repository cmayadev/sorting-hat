const Button = (props) => {

    const { children, disabled, onClick } = props;

    return ( 
        <button className="button" disabled={disabled} onClick={onClick}>
            <div>{children}</div>
        </button>
    );
}

export default Button