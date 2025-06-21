export default interface InputProps {
    name?: string;
    className?: string;
    style?: "outline" | "full";
    type?: "text" | "password" | "email";
    placeholder?: string;
}