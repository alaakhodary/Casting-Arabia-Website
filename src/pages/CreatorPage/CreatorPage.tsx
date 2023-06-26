import React from "react";
import Layout from "../../components/Layout";
import Opportunitie from "../HomePage/components/Opportunities";
import News from "../HomePage/components/News";
import LearningCenter from "../HomePage/components/LearningCenter";

const CreatorPage: React.FC = () => {
  return (
    <Layout>
      <Opportunitie />
      <News />
      <LearningCenter />
    </Layout>
  );
};

export default CreatorPage;
