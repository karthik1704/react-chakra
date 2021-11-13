import { ReactElement } from 'react'

import { Link } from 'react-router-dom'

import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  IconButton,
  Text,
  Input,
} from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'

import { useFormik, FormikProps } from 'formik'
import * as Yup from 'yup'

import { useRegisterMutation } from '../../features/authentication/authenticationApi'
import { IRegister } from '../../types'

interface Props {}
const RegisterSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('First Name Required')
    .min(4, '4 latter above'),
  firstName: Yup.string(),
  email: Yup.string().email('Invalid E-mail').required('E-mail Required'),
  password1: Yup.string()
    .min(8, 'Password min 8 character')
    .required('Password Required'),
  password2: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .min(8, 'Password min 8 character')
    .required('Password Required'),
})

const Register = (props: Props): ReactElement => {
  const [register, { isLoading, isError }] = useRegisterMutation()
  const formik: FormikProps<IRegister> = useFormik({
    initialValues: {
      email: '',
      password1: '',
      firstName: '',
      lastName: '',
      password2: '',
    },
    validationSchema: RegisterSchema,
    onSubmit: async (data: IRegister) => {
      try {
        await register(data).unwrap()
      } catch (error: any) {
        console.log(error)
      }
    },
  })

  return (
    <Flex align="center" justify="center" direction="column" minH="600px">
      <Box bgColor="transparent" shadow="xl" m="2" p="8" rounded="md">
        <Flex>
          <IconButton
            icon={<ArrowBackIcon />}
            variant="ghost"
            aria-label="go back"
            mr="1"
            as={Link}
            to=".."
          />
          <Heading as="div">Register</Heading>
        </Flex>

        <Box mt="2">
          <form noValidate onSubmit={formik.handleSubmit}>
            <FormControl
              my="1"
              isInvalid={Boolean(
                formik.errors.firstName && formik.touched.firstName
              )}
              isRequired
            >
              <FormLabel htmlFor="firstName">First Name</FormLabel>

              <Input
                name="firstName"
                placeholder="First Name"
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
              <FormHelperText>{formik.errors.firstName}</FormHelperText>
            </FormControl>

            <FormControl
              my="1"
              isInvalid={Boolean(
                formik.errors.lastName && formik.touched.lastName
              )}
              isRequired
            >
              <FormLabel htmlFor="lastName">Last Name</FormLabel>

              <Input
                name="lastName"
                placeholder="First Name"
                onChange={formik.handleChange}
                value={formik.values.lastName}
              />
              <FormHelperText>{formik.errors.lastName}</FormHelperText>
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>

              <Input
                type="email"
                name="email"
                placeholder="E-mail address"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <FormHelperText>{formik.errors.email}</FormHelperText>
            </FormControl>
            <FormControl
              my="1"
              isInvalid={Boolean(
                formik.errors.password1 && formik.touched.password1
              )}
              isRequired
            >
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                type="password"
                name="password"
                placehoder="Password"
                onChange={formik.handleChange}
                value={formik.values.password1}
              />
              <FormHelperText>{formik.errors.password1}</FormHelperText>
            </FormControl>
            <FormControl
              my="1"
              isInvalid={Boolean(
                formik.errors.password2 && formik.touched.password2
              )}
              isRequired
            >
              <FormLabel htmlFor="password">Confrim Password</FormLabel>
              <Input
                type="password"
                name="password2"
                placehoder="Confrim Password"
                onChange={formik.handleChange}
                value={formik.values.password2}
              />
              <FormHelperText>{formik.errors.password2}</FormHelperText>
            </FormControl>
            <Button
              mt="1"
              type="submit"
              variant="solid"
              isLoading={formik.isSubmitting}
              colorScheme="purple"
              isFullWidth
            >
              Create Account
            </Button>
          </form>
        </Box>
        <Box my="2">
          <Divider orientation="horizontal" />
          <Button
            mt="2"
            variant="solid"
            isLoading={formik.isSubmitting}
            colorScheme="blue"
            isFullWidth
            as={Link}
            to="/login"
          >
            Login
          </Button>
        </Box>
      </Box>
    </Flex>
  )
}

export default Register
