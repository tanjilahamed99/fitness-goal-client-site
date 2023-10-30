import PropTypes from 'prop-types';
import { FaArrowAltCircleRight } from "react-icons/fa";

const DisplayService = ({ service }) => {
    const { goal_name, quality, image_url, price, trainer } = service
    return (
        <div className="card bg-base-100 shadow-xl p-5">
            <img className='w-[400px] h-[300px] mx-auto rounded-lg' src={image_url} alt="" />
            <div className=" mt-3 space-y-2">
                <h2 className="text-xl font-bold ">{goal_name}</h2>
                <h4 className='font-semibold btn-outline btn'>{quality}</h4>
                <p className='font-bold text-lg'>Trainer: {trainer}</p>
                <div className="flex justify-between items-center">
                    <p className='font-semibold text-lg'>${price}/Month</p>
                    <button className="text-xl"><FaArrowAltCircleRight></FaArrowAltCircleRight></button>
                </div>
            </div>
        </div>
    );
};

DisplayService.propTypes = {
    service: PropTypes.object
};

export default DisplayService;