import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FirebaseContext from '../contexts/FirebaseContext';

// Components
import { LandingHeader } from '../components/Headers';
import { LandingFooter } from '../components/Footers';

const schema = yup.object({
    firstName: yup.string().required('FirstName Require'),
    email: yup.string().email('Invalid Email').required('Email Required !!'),
    password: yup
        .string()
        .required('Please Enter Your Password !!')
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
        ),
    passwordConfirmation: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const SignUpPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const { firebase } = useContext(FirebaseContext);
    const navigate = useNavigate();

    const handleSignUp = async (data) => {
        const { firstName, email, password } = data;

        try {
            const credential = await firebase
                .auth()
                .createUserWithEmailAndPassword(email, password);

            await credential.user.updateProfile({
                displayName: firstName,
                photoURL: Math.floor(Math.random() * 5) + 1,
            });

            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <LandingHeader>
                <div className="flex flex-col max-w-md rounded-md box-border m-auto pt-15 px-17 pb-10 mb-24 bg-form min-h-form">
                    <h1 className="text-white text-3xl font-bold mb-7">
                        Sign Up
                    </h1>
                    <form
                        className="flex flex-col max-w-md w-full"
                        onSubmit={handleSubmit(handleSignUp)}
                    >
                        {errors.firstName && (
                            <div className="bg-error rounded text-sm mb-4 text-white py-4 px-5">
                                {errors.firstName.message}
                            </div>
                        )}
                        <input
                            {...register('firstName')}
                            className="bg-form-input rounded border-none text-white h-12.5 leading-none px-5 py-1.26 mb-5 last-of-type:mb-7.5 box-content"
                            placeholder="First Name"
                        />
                        {errors.email && (
                            <div className="bg-error rounded text-sm mb-4 text-white py-4 px-5">
                                {errors.email.message}
                            </div>
                        )}
                        <input
                            {...register('email')}
                            className="bg-form-input rounded border-none text-white h-12.5 leading-none px-5 py-1.26 mb-5 last-of-type:mb-7.5 box-content"
                            placeholder="Email Address"
                        />
                        {errors.password && (
                            <div className="bg-error rounded text-sm mb-4 text-white py-4 px-5">
                                {errors.password.message}
                            </div>
                        )}
                        <input
                            {...register('password')}
                            className="bg-form-input rounded border-none text-white h-12.5 leading-none px-5 py-1.26 mb-5 last-of-type:mb-7.5 box-content"
                            placeholder="Password"
                            type="password"
                        />
                        {errors.passwordConfirmation && (
                            <div className="bg-error rounded text-sm mb-4 text-white py-4 px-5">
                                {errors.passwordConfirmation.message}
                            </div>
                        )}
                        <input
                            {...register('passwordConfirmation')}
                            className="bg-form-input rounded border-none text-white h-12.5 leading-none px-5 py-1.26 mb-5 last-of-type:mb-7.5 box-content"
                            placeholder="Re-Password"
                            type="password"
                        />
                        <button className="bg-form-submit rounded text-base border-none p-4 font-bold text-white cursor-pointer">
                            Sign Up
                        </button>
                    </form>

                    <div>
                        <p className="text-form-text font-medium text-base my-4">
                            Already a user?{' '}
                            <Link to="/login" className="text-white">
                                Sign In Now
                            </Link>
                        </p>
                        <p className="mt-2.5 leading-normal text-sm text-form-text-sm">
                            {`This page is protected by Google reCAPTCHA to ensure you're not a bot. `}
                            <Link to="#" className="text-form-link">
                                Learn more.
                            </Link>
                        </p>
                    </div>
                </div>
            </LandingHeader>
            <LandingFooter />
        </>
    );
};

export default SignUpPage;
