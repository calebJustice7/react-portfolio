import { Global, css } from "@emotion/react";

function GlobalCSS() {
  const spacingValues = ["4px", "10px", "18px", "30px"];

  return (
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;300;400;500;600;700;800&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap");

        * {
          font-family: "Montserrat", sans-serif;
          padding: 0;
          margin: 0;
          color: white;
          font-weight: 400;
        }

        .text-xl3 {
          font-size: 5em;
        }

        .text-xl {
          font-size: 2.5em;
        }

        .text-medium {
          font-size: 1.1em;
        }

        .text-center {
          text-align: center;
        }

        .text-bold {
          font-weight: 700;
          font-size: 1.05em;
        }

        .flex {
          display: flex;
        }

        .flex-center {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .flex-row {
          flex-direction: column;
        }

        .my-2 {
          margin-top: ${spacingValues[1]};
          margin-bottom: ${spacingValues[1]};
        }

        .mx-2 {
          margin-left: ${spacingValues[1]};
          margin-right: ${spacingValues[1]};
        }

        .mt-2 {
          margin-top: ${spacingValues[1]};
        }
      `}
    />
  );
}

export default GlobalCSS;
