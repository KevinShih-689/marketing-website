interface TextFieldProps {
    /**
     * Is this text field disabled?
     */
    isDisabled?: boolean;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * The placeholder in text field.
     */
    placeHolder?: string;
    /**
     * Change handler
     */
    onChange: () => void;
    /**
     * Change handler
     */
    value: string;
}

export const TextField = ({
    isDisabled = false,
    size ='medium',
    placeHolder = '',
    onChange,
    value,
    ...props
}: TextFieldProps) => {

    return (
        <input 
            type="text"
            placeholder={placeHolder}
            value={value}
            onChange={onChange}
            disabled={isDisabled}
        />
    )
}