import PropTypes from 'prop-types';
const Container = ({ children }) => {
  return (
    <div className="px-[16px] w-full 2xl:w-[1320px] mx-auto">
      {children}
    </div>
  );
};

  Container.propTypes = {
    children: PropTypes.node,
  };

  export default Container;