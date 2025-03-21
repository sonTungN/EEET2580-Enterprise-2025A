import { Input } from "./ui/input";

type SearchBarProps = {
  // query: string;
  handleOnChange: (value: string) => void;
};

export default function SearchBar({ handleOnChange }: SearchBarProps) {
  return (
    <div className="md:w-1/2 w-[83%] mb-4">
      <Input
        placeholder="Find User by Name"
        onChange={(e) => handleOnChange(e.target.value)}
      />
    </div>
  );
}
