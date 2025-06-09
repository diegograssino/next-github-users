import { SearchInputProps } from "@/types";
import styles from "./search-input.module.css";

const SearchInput = ({
  value,
  onChange = () => {},
  ...otherProps
}: SearchInputProps) => (
  <input
    value={value}
    onChange={onChange}
    type="text"
    {...otherProps}
    className={styles["search-input"]}
  />
);

export default SearchInput;
