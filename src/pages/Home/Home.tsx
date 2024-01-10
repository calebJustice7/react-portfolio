import Text from "../../components/Text";
import { css } from "@emotion/react";
import bgImage from "../../assets/nature.jpeg";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";

const homeCss = css`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${bgImage});
  background-size: cover;
  width: 100vw;
  height: 100vh;
`;

const wrapperCss = css`
  width: 55vw;
`;

const dividerCss = css`
  width: 55vw;
  margin-left: auto;
  margin-right: auto;
  height: 1px;
  background-color: white;
`;

const iconWrapperCss = css`
  img {
    width: 40px;
    height: 40px;
    filter: brightness(0) invert(1);
    cursor: pointer;
  }
`;

function Home() {
  const routeTo = (url: string) => {
    window.location.href = url;
  };

  return (
    <div css={homeCss} className="flex-center">
      <div css={wrapperCss} className="flex flex-row">
        <Text className="text-xl3 text-center">Caleb Justice</Text>
        <Text className="text-medium text-center my-2">
          I am a <Text className="text-bold">Fullstack Software Developer</Text>{" "}
          that loves to tackle tough problems. I have dabbled in many frameworks
          and languages, and like to dip my toes into the
          <Text className="text-bold"> Infrastructure</Text> world.
        </Text>
        <div className="my-2" css={dividerCss}></div>
        <div className="flex-center mt-2" css={iconWrapperCss}>
          <img className="mx-2" onClick={() => routeTo("")} src={github} />
          <img className="mx-2" onClick={() => routeTo("")} src={linkedin} />
        </div>
      </div>
    </div>
  );
}

export default Home;
