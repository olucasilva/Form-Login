import { Input, Text, Flex, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { MyButton } from "./MyButton";
import { login } from "../services/login";

interface IFormInput {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => login(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          alignContent="center"
          width="60vw"
          height="40vh"
          backgroundColor="#161221"
          borderRadius="10px"
          marginTop="10%"
        >
          <Stack spacing={2} width="90%">
            <Text fontSize="3xl" as="b" align="center" color="#7f28b5">
              Faça o login
            </Text>
            <Input placeholder="email" {...register("email")} />
            <Input placeholder="password" type="password" {...register("password")} />
            <MyButton />
          </Stack>
        </Flex>
      </form>
    </>
  );
};
