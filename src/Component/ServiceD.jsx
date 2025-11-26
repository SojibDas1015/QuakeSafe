import { FaCircleArrowRight } from "react-icons/fa6";
import { NavLink, useLoaderData } from "react-router"

export default function ServiceD() {
    const data = useLoaderData();
    return (
        <div className="w-11/12 mx-auto py-14">
            <div className="flex gap-8">
                <div className="w-[50vw]">
                    <h1 className="text-2xl font-bold">{data.title}</h1>
                    <p className="text-justify">{data.description}</p>
                    <div className="space-y-4 mt-4">
                        {data.features.map((data) => <p className="flex items-center gap-4"><FaCircleArrowRight />
                            {data}</p>)}
                    </div>
                    <p className="flex gap-4 mt-4"><FaCircleArrowRight />{data.callToAction}</p>
                    <NavLink to="/contact"><div className='mt-8'>
                        <button className='py-2 px-8 bg-gray-200 cursor-pointer'>Contact us</button></div></NavLink>
                </div>
                <div className="w-[50vw]">
                    <img className="rounded-xl w-full" src={data.image} alt="" />
                </div>
            </div>
        </div>
    )
}
