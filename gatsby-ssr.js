const React = require("react")
const GlobalContextProvider = require("./src/context/GlobalContextProvider")
  .default

exports.wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>
}
