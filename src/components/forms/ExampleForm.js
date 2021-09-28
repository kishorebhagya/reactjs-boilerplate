import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { schema } from "../../validations";
import { yupResolver } from "@hookform/resolvers/yup";

const ExampleForm = () => {
  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      text: "Dummy!!!",
    },
  });
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    trigger,
    formState,
  } = methods;
  const { errors, isValid } = formState;
  const isChecked = watch("checkbox", false);

  useEffect(() => {
    console.log(isChecked);
    trigger();
    return () => {};
  }, [isChecked]);

  const onSubmit = (data) => {
    console.log(data);
  };

  const onError = (errors) => {
    console.log(errors);
  };

  const onClickHandler = () => {
    const { text } = getValues();
    setValue("text", "Clicked");
  };

  return (
    <React.Fragment>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <input type="text" {...register("text")} />
          {errors.firstName && <span>{errors.firstName.message}</span>}
          <input type="radio" {...register("radio")} />
          <input type="checkbox" {...register("checkbox")} />
          <button type="button" onClick={onClickHandler}>
            Click Me!
          </button>
          <button type="submit" disabled={!isValid}>
            Submit
          </button>
        </form>
      </FormProvider>
    </React.Fragment>
  );
};

export default ExampleForm;
