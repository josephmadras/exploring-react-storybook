import Input from "./Input";

export default {
  title: "Input",
  component: Input,
};

export const Small = () => <Input size="small" placeholder="Small" />;
export const Medium = () => <Input size="medium" placeholder="Medium" />;
export const Large = () => <Input size="large" placeholder="Large" />;
