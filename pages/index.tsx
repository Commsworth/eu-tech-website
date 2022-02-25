import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
// import Prismic from "prismic-javascript";!
import * as Prismic from "@prismicio/client";
import {
  Client,
  PRISMIC_background,
  PRISMIC_image,
  PRISMIC_logo,
  PRISMIC_link,
  PRISMIC_link_text,
  PRISMIC_text,
  PRISMIC_heading,
  PRISMIC_button_text,
  PRISMIC_category,
  PRISMIC_icon,
  PRISMIC_image2,
  PRISMIC_image3,
  PRISMIC_heading2,
  PRISMIC_text2,
  PRISMIC_second_text,
  PRISMIC_footer_section_title,
} from "../prismic-configuration";
import { AboutUsDiv, Button, ContactDiv, ContactInput, ContactTextarea, DividingLine, HeaderDiv, Hero, Navbar, PartnerDiv, ServicesDiv, TextHeader1, TextHeader2, TextHeader3, TextHeader4, TextParagraphLarge, TextParagraphSmall } from "../components/Components";


type PrismicBody = {
  primary: any;
  items: any[];
};

interface LandingProps {
  navigation: PrismicBody;
  header: PrismicBody;
  about: PrismicBody;
  services: PrismicBody;
  partners: PrismicBody;
  footer: PrismicBody[];
}

const Home: NextPage<LandingProps> = ({
  navigation,
  header,
  about,
  services,
  partners,
  footer,
}) => {
  return (
    <div className={styles.container}>
      {console.log(footer)}
      <Head>
        <title>Eu Tech</title>
        <meta name="description" content="A next-gen tech solutions company" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <Navbar>
          <a href="#">
            <img src={PRISMIC_logo(navigation.primary)} height="60px" alt="" />
          </a>
          <section>
            {navigation.items.map((each,index) => (
              <a href="#" key={(Math.random()+index)}>{PRISMIC_link_text(each)}</a>
            ))}
          </section>
        </Navbar>



        <HeaderDiv background={PRISMIC_background(header.primary)}>
          <Hero gap="24px">
            <TextHeader1 center>{PRISMIC_heading(header.primary)}</TextHeader1>
            <TextParagraphLarge center>{PRISMIC_text(header.primary)}</TextParagraphLarge>
            <section>
              <Button color="#f7f7f7">
                <TextParagraphLarge>{PRISMIC_button_text(header.items[0])}</TextParagraphLarge>
              </Button>
              <Button color="#4784B0" background="#f5">
                <TextParagraphLarge>{PRISMIC_button_text(header.items[1])}</TextParagraphLarge>
              </Button>
            </section>
          </Hero>
        </HeaderDiv>



        <AboutUsDiv>
            {about.items.map((each,index) => (
          <Hero key={index+Math.random()} gap="15px">
            <TextParagraphSmall center>{PRISMIC_category(each)}</TextParagraphSmall>
            <TextHeader4 center>{PRISMIC_heading(each)}</TextHeader4>
            <TextParagraphSmall center>{PRISMIC_text(each)}</TextParagraphSmall>
          </Hero>
            ))}
        </AboutUsDiv>



        <ServicesDiv>
          <Hero gap="24px">
            <TextHeader2 center>{PRISMIC_heading(services.primary)}</TextHeader2>
            <TextParagraphSmall center>{PRISMIC_text(services.primary)}</TextParagraphSmall>
          </Hero>
          <section>
            {services.items.map((each,index) => (
              <Hero key={index+Math.random()} gap="20px">
                <i>
                  <img src={PRISMIC_icon(each)} alt={PRISMIC_heading(each)} />
                </i>
              <TextHeader4 center>{PRISMIC_heading(each)}</TextHeader4>
              <TextParagraphSmall center>{PRISMIC_text(each)}</TextParagraphSmall>
            </Hero>
              ))}
          </section>
        </ServicesDiv>
        <PartnerDiv>
          <div>
            <section>
              <div>
                <img src={PRISMIC_image(partners.items[0])} alt="" />
              </div>
              <div>
                <img src={PRISMIC_image2(partners.items[0])} alt="" />
                </div>
              <div>
                <img src={PRISMIC_image3(partners.items[0])} alt="" />
                </div>
            </section>
            <section>
              <div>
                <img src={PRISMIC_image(partners.items[1])} alt="" />
              </div>
              <div>
                <img src={PRISMIC_image2(partners.items[1])} alt="" />
                </div>
              <div>
                <img src={PRISMIC_image3(partners.items[1])} alt="" />
                </div>
            </section>
          </div>
          <TextHeader1>
            {PRISMIC_text(partners.primary)}
          </TextHeader1>
          <div>
          <section>
              <div>
                <img src={PRISMIC_image(partners.items[2])} alt="" />
              </div>
              <div>
                <img src={PRISMIC_image2(partners.items[2])} alt="" />
                </div>
              <div>
                <img src={PRISMIC_image3(partners.items[2])} alt="" />
                </div>
            </section>
            <section>
              <div>
                <img src={PRISMIC_image(partners.items[3])} alt="" />
              </div>
              <div>
                <img src={PRISMIC_image2(partners.items[3])} alt="" />
                </div>
              <div>
                <img src={PRISMIC_image3(partners.items[3])} alt="" />
                </div>
            </section>          </div>
          <DividingLine />
          <section>
            <TextHeader3>{PRISMIC_heading2(partners.primary)}</TextHeader3>
            <TextParagraphLarge>{PRISMIC_second_text(partners.primary)}</TextParagraphLarge>
          </section>
        </PartnerDiv>
      </main>

      <ContactDiv>
        <section>
          <TextHeader2>{PRISMIC_footer_section_title(footer[0].primary)}</TextHeader2>
        </section>
        <div>
          <div>
          {footer[0].items.map((each,index) => (
              <a key={index+Math.random()}>
                <TextParagraphLarge>{PRISMIC_link_text(each)}</TextParagraphLarge>
            </a>
              ))}
          </div>
          <div>
          {footer[1].items.map((each,index) => (
            <section key={index+Math.random()}  >
              <i>
                <img src={PRISMIC_icon(each)} />
              </i>
              <a key={index+Math.random()}>
                <TextParagraphLarge>{PRISMIC_link_text(each)}</TextParagraphLarge>
            </a>
              </section>
              ))}
          </div>
          <div>
            <section>
              <ContactInput placeholder="First Name"/>
              <ContactInput placeholder="Last Name"/>
            </section>
            <ContactInput placeholder="Email"/>
            <ContactTextarea rows={6} placeholder="Additional Message (optional)" />
            <Button color="#f7f7f7">
              <TextParagraphLarge>{PRISMIC_button_text(footer[0].primary)}</TextParagraphLarge>
            </Button>
          </div>  
        </div>
      </ContactDiv>
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const landing = await Client.getByType("landing");
  // console.log(landing.results[0].data.body[0].primary);

  return {
    props: {
      navigation: landing.results[0].data.body[0],
      header: landing.results[0].data.body[1],
      about: landing.results[0].data.body[2],
      services: landing.results[0].data.body[3],
      partners: landing.results[0].data.body[4],
      footer: landing.results[0].data.body.filter(
        (each: any) => each["slice_type"] === "footer_section"
      ),
    },
  };
}
