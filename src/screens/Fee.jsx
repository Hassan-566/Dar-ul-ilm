import PackageContainer from "../layout/packageContainer/PackageContainer";
import PageName from "../layout/pageName/PageName";

const Fee = () => {
  return (
    <div>
      <PageName
      text="MONTHLY FEE"/>
      <PackageContainer
        heading="Select the plan that best suits your needs and take advantage of a free trial lesson to get started"
        subheading="You can choose from the available schedules or request a customized plan tailored to your preferences"
        headingStyles="text-lg md:text-xl lg:text-lg text-gray-700 font-semibold tracking-normal mt-8"
        subheadingStyles="text-sm md:text-md lg:text-lg text-gray-500 font-normal tracking-normal"
      />
    </div>
  );
};

export default Fee;
