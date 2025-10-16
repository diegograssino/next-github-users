"use client";
import { SharedContext } from "@/features/shared/contexts/shared-context";
import Icon from "@/features/ui/icon/icon";
import { SearchInputProps } from "@/types";
import { useContext } from "react";
import styles from "./search-input.module.css";

const SearchInput = ({
  value,
  onChange = () => {},
  ...otherProps
}: SearchInputProps) => {
  // TODO Should be smaller on mobile
  // TODO The spinner is not centered
  // TODO make the search bar sticky on top when scrolling
  const { isLoading } = useContext(SharedContext);

  return (
    <div className={styles["search-input__container"]}>
      <input
        value={value}
        onChange={onChange}
        type="text"
        {...otherProps}
        className={styles["search-input"]}
        disabled={isLoading}
      />
      <div
        className={`${styles["search-input__icon"]} ${
          isLoading ? styles["search-input__spinner"] : ""
        }`}
      >
        {!isLoading ? (
          <Icon name="search" size="md" />
        ) : (
          <Icon name="spinner" size="md" />
        )}
      </div>
    </div>
  );
};

export default SearchInput;
