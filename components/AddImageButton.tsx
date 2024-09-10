
interface AddImageButtonProps {
  addImage: () => void;
}

const AddImageButton: React.FC<AddImageButtonProps> = ({ addImage }) => {
  return (
    <button
      className="bg-gray-700 text-white py-2 px-6 rounded-full shadow-lg shadow-black hover:bg-gray-600 transition-colors"
      onClick={addImage}
    >
      + ADD IMAGE
      {/* <ImageCarousel/> */}
    </button>
  );
};

export default AddImageButton;
