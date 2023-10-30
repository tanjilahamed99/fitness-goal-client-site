import axios from "axios";
import { useEffect, useState } from "react";
import DisplayService from "./DisplayService";

const Service = () => {

    const [service, setService] = useState([])

    useEffect(() => {
        axios.get('service.json')
            .then(res => setService(res.data))
    }, [])

    return (
        <div className="my-10">
            <div className="flex items-center gap-2">
                <h2 className="text-lg font-medium">Service</h2>
                <hr className="border-2 w-20 border-black" />
            </div>
            <h3 className="text-2xl font-bold">Our top Services</h3>
            <p className="font-medium my-2">Discover a world of fitness possibilities! Our tailored <br /> programs,led by expert trainers, will guide you to success. Join us today!</p>

            <div className="grid grid-cols-3 items-center justify-center gap-10 mt-4">
                {
                    service.map((serviceData, idx) => <DisplayService key={idx} service={serviceData}></DisplayService>)
                }
            </div>

        </div>
    );
};

export default Service;