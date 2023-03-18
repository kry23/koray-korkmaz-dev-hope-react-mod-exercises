import React, { useEffect, useRef } from "react";

function CarDetails({ initialdata }) {
  const formRef = useRef();

  useEffect(() => {
    if (formRef.current) {
      formRef.current.reset();
    }
  }, [initialdata]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const carDetails = {
      model: formData.get("model"),
      year: formData.get("year"),
      color: formData.get("color"),
    };
    console.log(carDetails);
  };
  return (
    <form
      className="flex flex-col space-y-3"
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <label htmlFor="model">
        model:
        <br />
        <input
          type="text"
          id="model"
          name="model"
          defaultValue={initialdata.model}
        />
      </label>

      <label htmlFor="year">
        year:
        <br />
        <input
          type="number"
          id="year"
          model="year"
          name="year"
          defaultValue={initialdata.year}
        />
      </label>

      <label htmlFor="color">
        color:
        <br />
        <input
          type="text"
          id="color"
          name="color"
          defaultValue={initialdata.color}
        />
      </label>
      <button type="submit" className="inline-block w-10 border border-red-400">
        Send
      </button>
    </form>
  );
}

export default CarDetails;
