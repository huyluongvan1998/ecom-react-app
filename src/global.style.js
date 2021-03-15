import styled from "styled-components"

const GlobalStyle = styled.div`
  body {
    font-family: "-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif";
    font-size: 1.5rem;
    color: #102a42;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  .m-0 {
    margin: 0;
  }

  .ml-5 {
    margin-left: 5px;
  }

  .ml-20 {
    margin-left: 20px;
  }

  .mb-20 {
    margin-bottom: 20px;
  }

  .mr-0 {
    margin-right: 0;
  }

  .mr-20 {
    margin-right: 20px;
  }

  /* End margin */
  .overflow-hidden {
    overflow: hidden;
  }

  .text-center {
    text-align: center;
  }

  .pointer {
    cursor: pointer;
  }

  .d-inline-block {
    display: inline-block;
  }

  .color-white {
    color: white;
  }

  .font-bold {
    font-weight: bold;
  }

  .d-flex {
    display: flex;
  }

  .justify-content-between {
    justify-content: space-between;
  }

  .w-100-per {
    width: 100%;
  }
`

export default GlobalStyle
