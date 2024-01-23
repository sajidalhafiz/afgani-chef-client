import blogImg1 from '../../../assets/controlled_uncontrolled.png'
import blogImg2 from '../../../assets/react-propTypes.jpg'
import blogImg3 from '../../../assets/Node_Express.png'
import blogImg4 from '../../../assets/custom-hooks.png'

const Article = () => {

    return (
        <>
            <div className='w-3/4 mx-auto space-y-4 mt-10 bg-white p-4 rounded-lg'>
                <img className='w-full rounded-md' src={blogImg1} alt="" />
                <div className='p-4'>
                    <small className='text-base text-gray-400'>Sajid Abdullah | Dec 08, 2023 | 3 min read</small>
                    <h2 className='text-2xl font-semibold my-2'>1. The differences between uncontrolled and controlled components.</h2>
                    <p className='text-gray-500 text-lg text-justify py-2'>
                        Controlled Component: When the data of the component is controlled by the parent component
                        and not maintain by its own state so that we can easily validate and debug the data.
                    </p>
                    <p className='text-gray-500 text-lg text-justify py-2'>
                        - We can manage by using react state.<br />
                        - Here we have better control on the form data and values.
                    </p>
                    <p className='text-gray-500 text-lg text-justify py-2'>
                        Uncontrolled Component: The data of the component is controlled by the DOM and maintain its own
                        state that is why data validation and debugging is complex than Controlled Component.
                    </p>
                    <p className='text-gray-500 text-lg text-justify py-2'>
                        - It is managed by its own internal state.<br />
                        - Here we have very limited control over form data and values.
                    </p>
                </div>
            </div>
            <div className='w-3/4 mx-auto space-y-4 mt-10 bg-white p-4 rounded-lg'>
                <img className='w-full rounded-md' src={blogImg2} alt="" />
                <div className='p-4'>
                    <small className='text-base text-gray-400'>Sajid Abdullah | Dec 08, 2023 | 3 min read</small>
                    <h2 className='text-2xl font-semibold my-2'>2. How to validate React props using PropTypes.</h2>
                    <p className='text-gray-500 text-lg text-justify py-2'>
                        To validate the props of the component using PropTypes:
                    </p>
                    <p className='text-gray-500 text-lg text-justify py-2'>
                        1. At first we need to install the Package PropTypes as we are using react version v15+<br />
                        2. Then we will import the package in the component where the props need to be validated.<br />
                        3. Finally, we have to follow the syntax below for the props validation -<br />
                        <br />
                        ComponentName.propsTypes = {`{
                            propsName : PropTypes.type
                        }`}
                        <br /><br />
                        Here type could be anything like string, boolean, number etc.
                    </p>
                    <p className='text-gray-500 text-lg text-justify py-2'>
                        If the props type is not matched with the type we wanted, we certainly get an error in the browser
                        console.
                    </p>
                    <p className='text-gray-500 text-lg text-justify py-2'>
                        We can also define defaultProps if the props is not provided.
                        And we can also set required value for a props and get error instead of not having the value.
                    </p>
                </div>
            </div>
            <div className='w-3/4 mx-auto space-y-4 mt-10 bg-white p-4 rounded-lg'>
                <img className='w-full rounded-md' src={blogImg3} alt="" />
                <div className='p-4'>
                    <small className='text-base text-gray-400'>Sajid Abdullah | Dec 08, 2023 | 3 min read</small>
                    <h2 className='text-2xl font-semibold my-2'>3. What is the difference between nodejs and express js.</h2>
                    <p className='text-gray-500 text-lg text-justify py-2'>
                        NodeJS: <br />
                        is a javascript runtime built on the chrome V8 javascript engine for server-side
                        and scalable network application development.
                    </p>
                    <p className='text-gray-500 text-lg text-justify py-2'>
                        Commonly used for<br />
                        1. server-side application<br />
                        2. Real-time application <br />
                        3. APIs and<br />
                        4. Microservices
                    </p>
                    <p className='text-gray-500 text-lg text-justify py-2'>
                        ExpressJS: <br />
                        is a web application framework built on NodeJS to provide a minimalistic and flexible
                        approach to build web applications and APIs
                    </p>
                    <p className='text-gray-500 text-lg text-justify py-2'>
                        Commonly used for<br />
                        1. RESTFul APIs<br />
                        2. server-side web applications
                    </p>
                </div>
            </div>
            <div className='w-3/4 mx-auto space-y-4 mt-10 bg-white p-4 rounded-lg'>
                <img className='w-full rounded-md' src={blogImg4} alt="" />
                <div className='p-4'>
                    <small className='text-base text-gray-400'>Sajid Abdullah | Dec 08, 2023 | 3 min read</small>
                    <h2 className='text-2xl font-semibold my-2'>4. What is a custom hook, and why will you create a custom hook?</h2>
                    <p className='text-gray-500 text-lg text-justify py-2'>
                        Custom hook a javascript function that is built for a specific purpose to share
                        between components. When we need to share logic between components but there is no built-in hooks in react
                        for that specific work in the application, we can create custom hook.
                    </p>
                    <p className='text-gray-500 text-lg text-justify py-2'>
                        For example: I have two layout components for two different screen size. If i want to show a
                        message for different screen sizes, I have to share the logic
                        of getting current screen size into both components. To do that, I must create a custom hook
                        so that my code would be optimized and reused in multiple components for a single purpose.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Article;