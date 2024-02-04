import React from "react";
import { useNetlifyForm } from "react-netlify-forms";
import { Box, Text, Button, Input } from "@chakra-ui/react";

function ContactForm() {
  const { handleSubmit, success, error } = useNetlifyForm({
    name: "contact",
    action: "/thanks",
    honeypotName: "bot-field",
  });

  if (success) {
    return <Text>Thanks for contacting us!</Text>;
  }

  return (
    <Box mt={10}>
      <Text
        fontSize="xl"
        fontWeight="bold"
        fontFamily="heading"
        color="gray.100"
        textAlign="center"
      >
        If you're interested in discussing my work or potential opportunities,
        please enter your email address below and I'll be in touch soon.
      </Text>
      <form onSubmit={handleSubmit}>
        <div style={{ textAlign: "center", width: "100%" }}>
          <label>
            Your email address:
            <Input type="email" name="email" required />
          </label>
        </div>
        {error && <Text color="red.500">Error submitting form</Text>}
        <Box display="flex" justifyContent="center" mt={4}>
          <Button type="submit" colorScheme="blue">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default ContactForm;
