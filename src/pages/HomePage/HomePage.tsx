import Card from "../../components/Card";
import Layout from "../../components/Layout";
import LearningCenter from "./components/LearningCenter";
import RouteGuidance from "../../components/RouteGuidance";
import News from "./components/News";
import Opportunities from "./components/Opportunities";

const HomePage = () => {
  return (
    <Layout>
      <Card>
        <RouteGuidance
          text="Are you a Talent?"
          subText="Do you love to act, sing, dance, model, write, or other jobs in
          entertainment? If so, you’ve come to the right place. Watch this video
          and sign up to apply for opportunities."
          btnTitle="Join as TALENT"
          left={true}
        />
      </Card>
      <Card>
        <RouteGuidance
          text="Are you hiring for a project?"
          subText="Are you looking for talented actors, singers, dancers, writers, and camera crew for your next project? Casting Arabia can help you. Watch this video and click below to register and post your next opportunity."
          btnTitle="Join as SEEKER"
          left={false}
        />
      </Card>
      <Opportunities />
      <News />
      <LearningCenter />
    </Layout>
  );
};

export default HomePage;
