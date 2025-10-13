import { PageMessageProps } from "@/types/ui";
import Typography from "../typography/typography";
import styles from "./page-message.module.css";
import { pageMessages } from "./page-messages";

const { pageMessage } = styles;

const PageMessage = ({ message }: PageMessageProps) => {
  return (
    <div className={pageMessage}>
      <Typography weight="bold" size="xl" as="h2">
        {pageMessages[message]}
      </Typography>
    </div>
  );
};

export default PageMessage;
