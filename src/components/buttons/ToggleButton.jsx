//DOC: ToggleButton.jsx
// Description:
// The ToggleButton component is a reusable React component that functions as a toggle button. It allows users to switch between two states, indicated by the `isChecked` prop, and can display different labels for each state.

// Props:
// isChecked: A boolean indicating the current toggle state.
// onToggle: A callback function to handle the toggle action, which receives the button's unique id.
// labels: An array of two strings, representing the labels for each state (e.g., ['Off', 'On']).
// id: A unique identifier for the toggle button.

// Usage Example:
// const [isToggled, setIsToggled] = useState(false);
// const handleToggle = (id) => {
//   setIsToggled(!isToggled);
//   console.log(id);
// };
// <ToggleButton
//   isChecked={isToggled}
//   onToggle={handleToggle}
//   labels={['Off', 'On']}
//   id="toggle-1"
// />

export const ToggleButton = ({ isChecked, onToggle, labels, id }) => {
  return (
    <button
      className={` mx-auto flex items-center p-1 w-12 h-7 rounded-full cursor-pointer  ${
        isChecked ? 'bg-green-600' : 'bg-[#B0BEC5]'
      }`}
      onClick={() => onToggle(id)}
    >
      <p
        className={`w-1/2 h-full flex items-center  justify-center bg-white  rounded-full transform transition-transform text-[10px] uppercase  font-bold  ${
          isChecked ? 'translate-x-5' : 'translate-x-0'
        }`}
      >
        {labels && <span className="m-1">{isChecked ? labels[1] : labels[0]}</span>}
      </p>
    </button>
  );
};
