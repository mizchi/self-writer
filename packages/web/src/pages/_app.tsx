import { ChakraProvider } from "@chakra-ui/react";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          html,
          body,
          __next {
            margin: 0;
          }
        `}
      </style>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
export default MyApp;
