import { HeroImage } from "../components/assets";
import { AboutPic } from "../components/assets";
import { ContributePic } from "../components/assets";
import { NgoPic } from "../components/assets";
import { GovPic } from "../components/assets";
import { UserPic } from "../components/assets";

const Home = () => {
  return (
    <>
      <div className="heroContainer">
        <div className="heroBanner">
          <div className="heroText">
            <h1>
              Food For The People, <br /> By The People
            </h1>
            <p className="desc">
              lorem as asfsa saf fsafs afafaf asf asff f saf afs ffsa fsaa sfsa
              asaf sa ffssfsaf asf as fafsasfs saff
            </p>
            <div className="icons">
              <div className="iconBox box3">
                <img src={UserPic} alt="UserPic" />
              </div>
              <div className="iconBox box1">
                <img src={NgoPic} alt="NgoPic" />
              </div>
              <div className="iconBox box2">
                <img src={GovPic} alt="GovPic" />
              </div>
            </div>
          </div>
          <div className="heroImage">
            <img src={HeroImage} alt="HeroImage" />
          </div>
        </div>
      </div>

      <div className="aboutContainer">
        <div className="aboutSection">
          <div className="aboutImage">
            <img src={AboutPic} alt="AboutPic" />
          </div>
          <div className="aboutText">
            <h1>Our Mission</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
      </div>

      <div className="contributeContainer">
        <div className="contributeSection">
          <div className="contribute">
            <div className="contributeText">
              <h1>Why Should You Contribute?</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div className="contributeImage">
              <img src={ContributePic} alt="ContributePic" />
            </div>
          </div>
        </div>
        <div className="quote">
          <h2>
            "It's not about how much you do but how much love you put into what
            you do that counts"
          </h2>
          <h4>— Mother Teresa</h4>
        </div>
      </div>

      <div className="workContainer">
        <div className="workSection">
          <h1>How It Works?</h1>
          <div className="workGrid">
            <div className="gridItem item1">
              <div className="gridItemImage">
                <img src={UserPic} alt="UserPic" />
              </div>
              <p className="gridItemName">User</p>
              <div className="list">
                <div className="listItem">
                  <h2>1</h2>
                  <div>
                    <h3>Heading</h3>
                    <p>lorem as asfsa saf fsafs afafaf asf asff f saf afs</p>
                  </div>
                </div>
                <div className="listItem">
                  <h2>2</h2>
                  <div>
                    <h3>Heading</h3>
                    <p>lorem as asfsa saf fsafs afafaf asf asff f saf afs</p>
                  </div>
                </div>
                <div className="listItem">
                  <h2>3</h2>
                  <div>
                    <h3>Heading</h3>
                    <p>lorem as asfsa saf fsafs afafaf asf asff f saf afs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="gridItem item2">
              <div className="gridItemImage">
                <img src={NgoPic} alt="NgoPic" />
              </div>
              <p className="gridItemName">NGO</p>
              <div className="list">
                <div className="listItem">
                  <h2>1</h2>
                  <div>
                    <h3>Heading</h3>
                    <p>lorem as asfsa saf fsafs afafaf asf asff f saf afs</p>
                  </div>
                </div>
                <div className="listItem">
                  <h2>2</h2>
                  <div>
                    <h3>Heading</h3>
                    <p>lorem as asfsa saf fsafs afafaf asf asff f saf afs</p>
                  </div>
                </div>
                <div className="listItem">
                  <h2>3</h2>
                  <div>
                    <h3>Heading</h3>
                    <p>lorem as asfsa saf fsafs afafaf asf asff f saf afs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="gridItem item3">
              <div className="gridItemImage">
                <img src={GovPic} alt="GovPic" />
              </div>
              <p className="gridItemName">Government</p>
              <div className="list">
                <div className="listItem">
                  <h2>1</h2>
                  <div>
                    <h3>Heading</h3>
                    <p>lorem as asfsa saf fsafs afafaf asf asff f saf afs</p>
                  </div>
                </div>
                <div className="listItem">
                  <h2>2</h2>
                  <div>
                    <h3>Heading</h3>
                    <p>lorem as asfsa saf fsafs afafaf asf asff f saf afs</p>
                  </div>
                </div>
                <div className="listItem">
                  <h2>3</h2>
                  <div>
                    <h3>Heading</h3>
                    <p>lorem as asfsa saf fsafs afafaf asf asff f saf afs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
