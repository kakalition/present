/* eslint-disable import/no-named-as-default */
import PropTypes from 'prop-types';
import CardWrapper from '../../../common-component/CardWrapper';
import FilterIcon from '../../../common-component/icons/FilterIcon';

type Props = {
  onClickCallback: () => void
};

export default function FilterButtonComponent({
  onClickCallback,
}: Props) {
  const component = (
    <button className="flex flex-row items-center py-2 px-4 bg-white" type="button" onClick={onClickCallback}>
      <div className="w-5 h-5 stroke-black stroke-[1.2px]"><FilterIcon /></div>
      <div className="w-2" />
      <p className="text-base text-black font-ibm-plex-sans">Filter</p>
    </button>
  );

  return CardWrapper.small(component);
}

FilterButtonComponent.propTypes = {
  onClickCallback: PropTypes.func.isRequired,
};
