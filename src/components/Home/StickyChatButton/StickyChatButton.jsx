
import whatsupp from "../../../assets/Whatsupp.png"
export default function StickyChatButton() {
  return (
    <a
      href="https://wa.me/919999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50"
    >
      <div className="bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-600">
        <img src={whatsupp} className="w-10 h-10"/>
      </div>
    </a>
  );
}
