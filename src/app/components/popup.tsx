import React from "react";
import Image from "next/image";
import xmark from '../../../public/xmark.svg'

type PopupProps = {
  description: string;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
};

const Popup: React.FC<PopupProps> = ({
  description,
  isOpen, 
  onClose,
  onSubmit
}) => {
  const [email, setEmail] = React.useState<string>('');

  const handleUnsubscribe = () => {
    try {
      
    } catch (error) {
      
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        className={`bg-white p-6 rounded-2xl shadow-md max-w-md w-full mx-3`}
      >
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 float-right"
        >
          <Image src={xmark} alt="close" width={24} height={24} />
        </button>
        <p
          className={`bg-white text-gray-600 mb-4 preserve-whitespace`}
          style={{ whiteSpace: "pre-wrap" }}
        >
          {description}
        </p>

        <form className="flex flex-col">
          <input
            type="email"
            className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Enter your email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
            onClick={handleUnsubscribe}
          >
            Unsubscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
