import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Header } from '../components';
import { IoLocationSharp } from "react-icons/io5";
const Contacto = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
  
    const handleFormSubmit = (values) => {
      console.log(values);
    };
  
    return (
      <div className="bg-white dark:text-black-200 dark:bg-secondary-dark-bg">
        <Box m="20px" className="bg-white dark:text-black-200 dark:bg-secondary-dark-bg"  >
          <Header title="Contactanos!" subtitle="Contacta al team Nonna" />
    
          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={checkoutSchema}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box
                  display="grid"
                  gap="30px"
                  gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                  sx={{
                    "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                  }}
                >
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Nombre"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.firstName}
                    name="firstName"
                    error={!!touched.firstName && !!errors.firstName}
                    helperText={touched.firstName && errors.firstName}
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Apellido"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.lastName}
                    name="lastName"
                    error={!!touched.lastName && !!errors.lastName}
                    helperText={touched.lastName && errors.lastName}
                    sx={{ gridColumn: "span 2"}}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    error={!!touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Numero de contacto"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.contact}
                    name="contact"
                    error={!!touched.contact && !!errors.contact}
                    helperText={touched.contact && errors.contact}
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Mensaje"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.address1}
                    name="address1"
                    error={!!touched.address1 && !!errors.address1}
                    helperText={touched.address1 && errors.address1}
                    sx={{ gridColumn: "span 4" }}
                  />

                </Box>
                <Box display="flex" justifyContent="end" mt="20px">
                  <Button type="submit" color="secondary" variant="contained">
                    Enviar
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
          <div className="bg-white dark:text-black-200 dark:bg-secondary-dark-bg h-150 rounded-xl w-full lg:w-85 p-8 pt-10 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center flex justify-between ">
              <div>
                <h3>encuentranos en chile</h3>
              </div>
              <h3>nonna@gmail.cl </h3>
              <h3>+56984067989</h3>
          </div>
        

        </Box>
      </div>
    );
  };
  
  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
  
  const checkoutSchema = yup.object().shape({
    firstName: yup.string().required("Requerido"),
    lastName: yup.string().required("Requerido"),
    email: yup.string().email("email invalido").required("Requerido"),
    contact: yup
      .string()
      .matches(phoneRegExp, "numero invalido")
      .required("Requerido"),
    address1: yup.string().required("Requerido"),
    address2: yup.string().required("Requerido"),
  });
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
  };
  
export default Contacto;