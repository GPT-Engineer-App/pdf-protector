import React, { useState } from "react";
import { Container, VStack, Input, Button, Text, useToast, Box, IconButton } from "@chakra-ui/react";
import { FaFilePdf, FaLock } from "react-icons/fa";

const Index = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleFileChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEncrypt = () => {
    if (!pdfFile || !password) {
      toast({
        title: "Error",
        description: "Please upload a PDF file and enter a password.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    // Placeholder for actual PDF encryption logic
    toast({
      title: "Success",
      description: "PDF has been password protected (conceptually).",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Password Protect a PDF</Text>
        <Box width="100%">
          <Input type="file" accept="application/pdf" onChange={handleFileChange} />
        </Box>
        <Box width="100%">
          <Input type="password" placeholder="Enter password" value={password} onChange={handlePasswordChange} />
        </Box>
        <Button leftIcon={<FaLock />} colorScheme="teal" onClick={handleEncrypt}>
          Encrypt PDF
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
