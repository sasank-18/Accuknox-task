import PropTypes from "prop-types";
import AddWidgetForm from "./AddWidgetForm";
import { useState } from "react";
import cancel from "../asset/icons/cancel.png";
import { useDispatch } from "react-redux";
import { removeWidgetData } from "../slice/dashboardSlice";

const Widget = ({ widgetData, category, id }) => {
  const [isActive, setisActive] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex max-md:justify-center max-md:items-center   gap-y-1 gap-x-3 w-full lg:flex-nowrap lg:overflow-x-auto max-lg:flex-wrap widget ">
        {widgetData.map((data) => (
          <>
            <div
              key={data.name + data.text}
              className="px-4 relative text-ellipsis overflow-auto text-wrap text-base py-2  min-w-[24rem]  rounded-md bg-white shadow-sm mb-2  h-48 "
            >
              <div className="bg-white flex items-center justify-between font-semibold">
                {data.name}
                <img
                  onClick={() => {
                    dispatch(
                      removeWidgetData({
                        dashboardId: id,
                        widgetName: data.name,
                      })
                    );
                  }}
                  className="bg-white size-5"
                  src={cancel}
                />
              </div>
              <p className="bg-white break-words h-auto mt-4  w-full font-normal py-2">
                {data.text}
              </p>
            </div>
          </>
        ))}
        <div className="px-4  py-2  min-w-[24rem] rounded-md bg-gray-50 font-semibold text-base  h-48  flex items-center justify-center">
          <button
            onClick={() => {
              setisActive((prev) => !prev);
            }}
            className="px-2 py-1 bg-white border rounded-md "
          >
            <span className="font-bold bg-white">+</span> Add Widget
          </button>
        </div>
        {isActive && (
          <AddWidgetForm
            id={id}
            category={category}
            isActiveFunc={() => {
              setisActive(false);
            }}
          />
        )}
      </div>
    </>
  );
};

export default Widget;

Widget.propTypes = {
  widgetData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
