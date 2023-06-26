import { useState, ChangeEvent } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

import Layout from "../../components/Layout";

import {
  TextField,
  IconButton,
  Box,
  Button,
  TextareaAutosize,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

import { IPropPostValues } from "./Interfaces/InterfacesOpportunity";

const initialValues: IPropPostValues = {
  title: "",
  company: "",
  productionPersonnel: [],
  productionDescription: "",
};

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  company: Yup.string().required("Company Name is required"),
  productionPersonnel: Yup.array()
    .of(Yup.string().required("Production Personnel is required"))
    .required("At least one Production Personnel is required"),
  productionDescription: Yup.string().required("description is required"),
});

const PostingOpportunity = () => {
  const [showInput, setShowInput] = useState(false);
  const [showErrorProductionBtn, setShowErrorProductionBtn] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values: IPropPostValues) => {
      if (!showInput) {
        setShowErrorProductionBtn(true);
      } else {
        console.log(values);
      }
    },
  });

  const handleAddInput = () => {
    setShowInput(true);
    formik.setFieldValue("productionPersonnel", [
      ...formik.values.productionPersonnel,
      "",
    ]);
    setShowErrorProductionBtn(false);
  };

  const handleRemoveInput = (id: number) => {
    const updatedInputFields = formik.values.productionPersonnel.filter(
      (_, index) => index !== id
    );
    formik.setFieldValue("productionPersonnel", updatedInputFields);
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id: number
  ) => {
    const updatedInput = [...formik.values.productionPersonnel];
    updatedInput[id] = event.target.value;
    formik.setFieldValue("productionPersonnel", updatedInput);
  };

  const handleContinue = () => {
    if (!showInput) {
      setShowErrorProductionBtn(true);
    } else {
      return;
    }
  };

  return (
    <Layout>
      <form
        onSubmit={formik.handleSubmit}
        className="m-auto flex min-h-[77vh] w-full max-w-[600px] flex-col gap-8 px-16 py-8"
      >
        <h1 className="mt-14 flex justify-start text-4xl font-semibold text-[#6371e0]">
          Posting an Opportunity
        </h1>

        <div className="grid w-full">
          <TextField
            id="title"
            label="Title Of Production"
            placeholder="Robinhoud"
            multiline
            variant="standard"
            {...formik.getFieldProps("title")}
            error={formik.touched.title && Boolean(formik.errors.title)}
          />
          {formik.touched.title && formik.errors.title && (
            <div className="text-red-500">{formik.errors.title}</div>
          )}
        </div>

        <div className="grid w-full">
          <TextField
            id="company"
            label="Production Company"
            placeholder="Company Name"
            multiline
            variant="standard"
            {...formik.getFieldProps("company")}
            error={formik.touched.company && Boolean(formik.errors.company)}
          />
          {formik.touched.company && formik.errors.company && (
            <div className="text-red-500">{formik.errors.company}</div>
          )}
        </div>

        <div>
          {showInput &&
            formik.values.productionPersonnel.map((value, index) => (
              <Box key={index} display="flex" alignItems="center">
                <TextField
                  id={`productionPersonnel${index}`}
                  name={`productionPersonnel.${index}`}
                  multiline
                  value={value}
                  onChange={(event) => handleInputChange(event, index)}
                  placeholder="Production Personnel"
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    marginBottom: "0.5rem",
                  }}
                />
                <IconButton onClick={() => handleRemoveInput(index)}>
                  <CloseIcon />
                </IconButton>
              </Box>
            ))}
          {formik.touched.productionPersonnel &&
            formik.errors.productionPersonnel && (
              <div className="text-red-500">
                {formik.errors.productionPersonnel}
              </div>
            )}
          <Button
            onClick={handleAddInput}
            startIcon={<AddIcon />}
            style={{
              marginTop: "10px",
              borderRadius: "8px",
              border: "2px solid #6371e080",
              paddingLeft: "9px",
              paddingRight: "9px",
              paddingTop: "2px",
              paddingBottom: "2px",
              fontWeight: "600",
              color: "#6371e0",
              height: "40px",
              width: "auto",
            }}
          >
            Production Personnel
          </Button>
          {showErrorProductionBtn && (
            <div className="text-red-500">this a field required</div>
          )}
        </div>

        <div className="grid w-full">
          <TextareaAutosize
            id="productionDescription"
            name="productionDescription"
            value={formik.values.productionDescription}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Production Description"
            className="text-[rgb(38, 46, 59)] inline-flex cursor-text items-center rounded-[8px] px-4 py-4 text-lg leading-[1.4375em] outline-none placeholder:text-[#727070]"
            style={{
              width: "100%",
              height: "163px",
              resize: "none",
              border:
                formik.touched.productionDescription &&
                formik.errors.productionDescription
                  ? "1px solid rgb(239 68 68)"
                  : "1px solid #ccc",
            }}
          />
          {formik.touched.productionDescription &&
            formik.errors.productionDescription && (
              <div className="text-red-500">
                {formik.errors.productionDescription}
              </div>
            )}
        </div>

        <div className="flex items-center gap-8">
          <Button
            onClick={handleContinue}
            type="submit"
            variant="outlined"
            style={{
              color: "#6371e0",
              border: "2px solid rgba(99, 113, 224, 0.5)",
              fontSize: "1rem",
              borderRadius: "9px",
              fontWeight: "bold",
            }}
          >
            Save For Later
          </Button>
          <Button
            type="button"
            variant="contained"
            style={{
              backgroundColor: "rgb(99, 113, 224)",
              color: "white",
              fontSize: "1rem",
              borderRadius: "9px",
              fontWeight: "bold",
            }}
          >
            Continue
          </Button>
        </div>
      </form>
    </Layout>
  );
};

export default PostingOpportunity;
