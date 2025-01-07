function CloseButton({ styling, onClick }) {
  return (
    <svg
      className={`${styling} cursor-pointer`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      transform="scale(1.5)"
      onClick={onClick}
    >
      <path
        transform="scale(1, -1) translate(0, -25)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      ></path>
    </svg>
  );
}

export default CloseButton;
