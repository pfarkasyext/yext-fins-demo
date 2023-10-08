import {
  GetHeadConfig,
  GetPath,
  HeadConfig,
  Template,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import "../index.css";
import PageLayout from "../components/common/PageLayout";
import GuidedSearch from "../components/GuidedSearch";

export const getPath: GetPath<TemplateProps> = () => {
  return `guided-advisor-finder`;
};

export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps
> = (): HeadConfig => {
  return {
    title: "Guided Advisor Finder",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};
const GuidedDoctorFinder: Template<TemplateRenderProps> = ({ document }) => {
  return (
    <PageLayout _site={document._site}>
      <GuidedSearch></GuidedSearch>
    </PageLayout>
  );
};

export default GuidedDoctorFinder;
