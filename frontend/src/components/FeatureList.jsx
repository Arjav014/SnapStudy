import checkIcon from '../assets/icons/check-circle.svg';

const FeatureList = ({ features }) => {
  return (
    <ul className="space-y-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <img src={checkIcon} alt="Check" className="w-6 h-6 mr-3 text-green-500 flex-shrink-0" />
          <span className="text-gray-700">{feature}</span>
        </li>
      ))}
    </ul>
  );
};

export default FeatureList;