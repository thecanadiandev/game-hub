import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string[];
}
const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (children[1].length <= limit) {
    return <Text> {children} </Text>;
  }
  const summary = children[1].substring(0, limit);
  return (
    <>
      <Text>
        {expanded ? `${summary}...` : children}
        <Button
          fontWeight="bold"
          colorScheme="yellow"
          size="xs"
          onClick={() => setExpanded((v) => !v)}
        >
          {expanded ? "Read More" : "Show Less"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
