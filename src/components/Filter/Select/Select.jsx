import { Label, SelectInput, SelectWrapper } from './Select.styled';

const Select = ({ textLabel, name, options, width, handleChange, value }) => {
  return (
    <SelectWrapper width={width}>
      <Label htmlFor={name}>{textLabel}</Label>
      <SelectInput
        id={name}
        options={options}
        // defaultValue={defaultValue}
        className="custom-select custom-select-menu"
        closeMenuOnSelect={false}
        onChange={handleChange}
        value={value}
        styles={{
          dropdownIndicator: (base, state) => ({
            ...base,
            transition: 'transform 0.5s',
            transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'none',
          }),
          control: (base, state) => ({
            ...base,
            backgroundColor: 'var(--input-bg-color)',
            borderRadius: '14px',
            border: 'none',
            output: 'none',
            height: '48px',
          }),
        }}
      />
    </SelectWrapper>
  );
};

export default Select;
