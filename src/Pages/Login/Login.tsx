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

import { useLoginMutation } from '../../features/authentication/authenticationApi'
import { ILogin } from '../../types'

interface Props {}
const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid E-mail').required('E-mail Required'),
  password: Yup.string()
    .min(8, 'Password min 8 character')
    .required('Password Required'),
})

const Login = (props: Props): ReactElement => {
  const [login, { isLoading, isError }] = useLoginMutation()
  const formik: FormikProps<ILogin> = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: LoginSchema,
    onSubmit: async (data: ILogin) => {
      try {
        await login(data).unwrap()
      } catch (error: any) {
        console.log(error)
      }
    },
  })
  return (
    <Flex align="center" justify="center" direction="column" minH="100vh">
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
          <Heading as="div">Login</Heading>
        </Flex>

        <Box mt="2">
          <form noValidate onSubmit={formik.handleSubmit}>
            <FormControl
              my="1"
              isInvalid={Boolean(formik.errors.email && formik.touched.email)}
              isRequired
            >
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
                formik.errors.password && formik.touched.password
              )}
              isRequired
            >
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                type="password"
                name="password"
                placehoder="Password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <FormHelperText>{formik.errors.password}</FormHelperText>
            </FormControl>
            <Button
              mt="1"
              type="submit"
              variant="solid"
              isLoading={formik.isSubmitting}
              colorScheme="purple"
              isFullWidth
            >
              Login
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
            to="/register"
          >
            Create Account
          </Button>
        </Box>
      </Box>
    </Flex>
  )
}

export default Login
