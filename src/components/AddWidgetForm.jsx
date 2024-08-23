import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addWidgetData } from "../slice/dashboardSlice";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const widgetSchema = z.object({
  name: z.string().min(3),
  text: z.string().min(5, { message: "Must be 8 or more character" }),
});

const AddWidgetForm = ({ category, isActiveFunc, id }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(widgetSchema),
    defaultValues: {
      name: "",
      text: "",
    },
  });

  const dispatch = useDispatch();
  const submitForm = (value) => {
    dispatch(
      addWidgetData({
        id,
        widgetData: value,
      })
    );
    isActiveFunc();
  };

  return (
    <div
      onClick={() => {
        isActiveFunc();
      }}
      className={`fixed  z-20  font-normal text-base   top-0 left-0 h-full  w-full bg-zinc-500  backdrop-blur-[1.5px] bg-opacity-30  flex items-center justify-center`}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="  max-h-screen bg-white shadow-md px-10 py-8 rounded-lg w-full min-w-[360px]  max-w-[30%]"
      >
        <h3 className=" mb-5 bg-white font-bold text-center w-full text-lg">
          {category}
        </h3>
        <form
          onSubmit={handleSubmit(submitForm)}
          className="flex flex-col text-base bg-white gap-2"
        >
          <input
            {...register("name")}
            type="text"
            className="outline-none border-2 border-slate-300 px-3 py-2 text-sm rounded-lg"
            placeholder="Widget Name"
          />
         <span className="bg-white text-xs text-red-600 px-2 m-0"> {errors?.name && errors.name.message}</span>
          <textarea
            {...register("text")}
            type="text"
            className="outline-none border-2 px-3 py-2 text-sm border-slate-300 rounded-lg"
            placeholder="Widget Text"
          />
           <span className="bg-white text-xs text-red-600 px-2 m-0"> {errors?.text && errors.text.message}</span>

          <button
            type="submit"
            className="w-full bg-green-500 border-2  rounded-lg px-3 py-2 text-sm font-bold mt-2"
          >
            Add Widget
          </button>
        </form>
      </div>
    </div>
  );
};

// PropTypes validation
AddWidgetForm.propTypes = {
  isActiveFunc: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default AddWidgetForm;
