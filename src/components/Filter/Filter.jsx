export const Filter = ({ value, onChange }) => {
  return (
    <label>
      Filter Name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};
