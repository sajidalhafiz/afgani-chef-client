import { Rating } from "@smastrom/react-rating"
import SectionHeader from "../../Shared/SectionHeader/SectionHeader"

const headingContent = {
    pashtoHeading: "دا څوک چې زموږ کارنان ویاړوئ",
    englishHeading: "What Our Users Say",
    description: "Explore the culinary journeys of our community through their heartfelt reviews. Our users share their delightful experiences, from savoring expertly crafted dishes to the seamless ordering process."
}

const posts = [
    {
        id: 1,
        description:
            'I absolutely love this platform! The variety of dishes and talented chefs make every meal a delightful experience. The user-friendly interface and seamless ordering process add to the overall convenience.',
        date: 'Mar 16, 2023',
        author: {
            name: 'Sarah M',
            imageUrl:
                'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        rating: 4.5
    },
    {
        id: 2,
        description:
            'A hidden gem for food enthusiasts! The chefs here are true artists, and the quality of the dishes is outstanding. The personalized recommendations and easy navigation make it my go-to for discovering unique culinary delights.',
        date: 'Apr 11, 2023',
        author: {
            name: 'Alex R',
            imageUrl:
                'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        rating: 4.2
    },
    {
        id: 3,
        description:
            "Fantastic service and incredible diversity in cuisines. The reviews and ratings help me make informed choices, and the delivery is always prompt. It's like having a world of flavors at my fingertips!",
        date: 'Jun 27, 2023',
        author: {
            name: 'Jessica L Foster',
            imageUrl:
                'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        rating: 3.9
    },
    {
        id: 4,
        description:
            "I appreciate the attention to detail in every dish. The chefs not only bring out the flavors but also infuse their passion into the presentation. It's more than just a meal; it's a culinary journey worth savoring.",
        date: 'Jan 20, 2023',
        author: {
            name: 'Michael C',
            imageUrl:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        rating: 3.4
    },
    {
        id: 5,
        description:
            "The customer support is exceptional! Any questions or concerns are addressed promptly, making the entire experience smooth and enjoyable. I highly recommend this platform for anyone who loves good food and great service.",
        date: 'Dec 15, 2023',
        author: {
            name: 'Emily S',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        rating: 4.6
    },
]

export default function Reviews() {
    return (
        <>
            <SectionHeader headingContent={headingContent} />
            <div className="py-24 sm:py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8  lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        <blockquote className=" text-xl italic font-semibold text-gray-900 dark:text-white">
                            <svg className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                            </svg>
                            <p className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-4xl font-bold mt-8">Good food is very often, even most often, simple food.</p>
                            <p className="text-slate-400 text-base font-normal mt-4">- Anthony Bourdain -</p>
                        </blockquote>

                        {posts.map((post) => (
                            <article key={post.id} className="flex max-w-xl flex-col items-center gap-2 shadow shadow-slate-950 rounded-xl bg-slate-800 p-4 hover:bg-slate-700">
                                <div className="relative flex flex-col items-center gap-2 text-center">
                                    <img src={post.author.imageUrl} alt="" className="h-16 w-16 rounded-full bg-gray-50" />
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-gray-200">
                                            <span className="absolute inset-0" />
                                            {post.author.name}
                                        </p>
                                        <p className="text-gray-400">{post.date}</p>
                                    </div>
                                </div>
                                <Rating
                                    style={{ maxWidth: 96 }}
                                    value={post.rating}
                                    readOnly
                                />
                                <div className="group relative">
                                    <p className="text-md text-center leading-6 text-gray-400 font-medium">"{post.description}"</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
