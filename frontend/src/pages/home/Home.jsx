import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden border-2 border-gray-600">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};
export default Home;
